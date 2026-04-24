import { getSystemPrompt } from "../lib/institute-config.js";

const cors = (req, res) => {
  const allowed = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowed);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

/**
 * Vercel serverless: OpenAI-compatible chat completion (OpenAI, Groq, and similar).
 *
 * Groq: set GROQ_API_KEY (or AI_API_KEY) + AI_API_BASE_URL=https://api.groq.com/openai/v1
 *        + AI_MODEL e.g. llama-3.3-70b-versatile
 * OpenAI: set AI_API_KEY, optional AI_API_BASE_URL (default api.openai.com)
 */
function resolveLlmConfig() {
  const groq = process.env.GROQ_API_KEY;
  const generic = process.env.AI_API_KEY;
  const apiKey = groq || generic;
  if (!apiKey) {
    return { error: "Set GROQ_API_KEY or AI_API_KEY in the environment" };
  }
  const base = (
    process.env.AI_API_BASE_URL ||
    (groq ? "https://api.groq.com/openai/v1" : "https://api.openai.com/v1")
  ).replace(/\/$/, "");
  const isGroq = base.includes("groq.com");
  const model =
    process.env.AI_MODEL || (isGroq ? "llama-3.3-70b-versatile" : "gpt-4o-mini");
  return { apiKey, base, model };
}

export default async function handler(req, res) {
  cors(req, res);
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const llm = resolveLlmConfig();
  if (llm.error) {
    return res.status(500).json({ error: llm.error });
  }
  const { apiKey, base, model } = llm;

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const { message, messages } = body;
  if (!message && !Array.isArray(messages)) {
    return res.status(400).json({
      error: "Send { message: string } or { messages: OpenAI-style array }",
    });
  }

  const system = getSystemPrompt();
  const chatMessages = Array.isArray(messages)
    ? [{ role: "system", content: system }, ...messages]
    : [
        { role: "system", content: system },
        { role: "user", content: String(message) },
      ];

  const r = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages: chatMessages, temperature: 0.6 }),
  });

  if (!r.ok) {
    const errText = await r.text();
    return res.status(r.status).json({
      error: "Upstream API error",
      details: errText.slice(0, 2000),
    });
  }

  const data = await r.json();
  const text = data?.choices?.[0]?.message?.content ?? "";
  return res.status(200).json({
    reply: text,
    model: data?.model,
    usage: data?.usage,
  });
}
