/**
 * Chat API (Groq via `ai-assistant-backend/api/chat.js`).
 *
 * Local dev:
 *   1. Copy `ai-assistant-backend/.env.example` → `ai-assistant-backend/.env` and set GROQ_API_KEY
 *   2. Run `npm run dev:api` (backend on :3000) and `npm run dev` (Vite proxies /api/chat)
 *
 * Production:
 *   Deploy `ai-assistant-backend` to Vercel with GROQ_API_KEY, then set
 *   VITE_AI_ASSISTANT_API_URL to that deployment URL before `npm run build`.
 */
const DEFAULT_PRODUCTION_CHAT_URL =
  "https://yac-aligarh-backend.vercel.app/api/chat";

export function getAiChatApiUrl() {
  const fromEnv = import.meta.env.VITE_AI_ASSISTANT_API_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (import.meta.env.DEV) return "/api/chat";
  return DEFAULT_PRODUCTION_CHAT_URL;
}
