/**
 * Chat API (Groq via `ai-assistant-backend/api/chat.js`).
 * - Defaults to the deployed backend so `npm run dev` works without a local API.
 * - Local backend: set `VITE_AI_ASSISTANT_API_URL=/api/chat` and run `vercel dev`
 *   in `ai-assistant-backend` (see `vite.config.js` proxy).
 */
const DEFAULT_PRODUCTION_CHAT_URL =
  "https://yac-aligarh-backend.vercel.app/api/chat";

export function getAiChatApiUrl() {
  const fromEnv = import.meta.env.VITE_AI_ASSISTANT_API_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return DEFAULT_PRODUCTION_CHAT_URL;
}
