/**
 * Chat API (Groq via `ai-assistant-backend/api/chat.js`).
 * - Production: set `VITE_AI_ASSISTANT_API_URL` to the deployed `/api/chat` URL.
 * - Local: run `vercel dev` in `ai-assistant-backend` and use the Vite proxy (see `vite.config.js`) or the full `http://127.0.0.1:3000/api/chat` URL in `.env`.
 */
export function getAiChatApiUrl() {
  const fromEnv = import.meta.env.VITE_AI_ASSISTANT_API_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return "/api/chat";
}
