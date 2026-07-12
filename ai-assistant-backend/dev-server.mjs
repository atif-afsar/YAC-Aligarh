/**
 * Local chat API for development (no Vercel CLI required).
 * Loads `.env` from this folder, listens on :3000, exposes POST/GET /api/chat.
 */
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import chatHandler from "./api/chat.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);

function loadDotEnv() {
  const envPath = resolve(__dirname, ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadDotEnv();

function createVercelResponse(nodeRes) {
  let statusCode = 200;
  const headers = {};

  const res = {
    status(code) {
      statusCode = code;
      return res;
    },
    setHeader(name, value) {
      headers[name] = value;
      return res;
    },
    json(payload) {
      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "application/json; charset=utf-8";
      }
      nodeRes.writeHead(statusCode, headers);
      nodeRes.end(JSON.stringify(payload));
    },
    end(body) {
      nodeRes.writeHead(statusCode, headers);
      nodeRes.end(body ?? "");
    },
  };

  return res;
}

const server = createServer(async (nodeReq, nodeRes) => {
  const url = new URL(nodeReq.url || "/", `http://127.0.0.1:${PORT}`);
  if (url.pathname !== "/api/chat") {
    nodeRes.writeHead(404, { "Content-Type": "application/json" });
    nodeRes.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  const chunks = [];
  for await (const chunk of nodeReq) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks).toString("utf8");

  const req = {
    method: nodeReq.method,
    headers: nodeReq.headers,
    body: rawBody || undefined,
  };

  try {
    await chatHandler(req, createVercelResponse(nodeRes));
  } catch (err) {
    console.error("[dev-server] handler error:", err);
    if (!nodeRes.headersSent) {
      nodeRes.writeHead(500, { "Content-Type": "application/json" });
      nodeRes.end(JSON.stringify({ error: "Internal server error" }));
    }
  }
});

server.listen(PORT, "127.0.0.1", () => {
  const hasKey = Boolean(process.env.GROQ_API_KEY || process.env.AI_API_KEY);
  console.log(`YAC AI dev server → http://127.0.0.1:${PORT}/api/chat`);
  if (!hasKey) {
    console.warn(
      "Warning: GROQ_API_KEY (or AI_API_KEY) is not set. Create ai-assistant-backend/.env — see .env.example"
    );
  }
});
