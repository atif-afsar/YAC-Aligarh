import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaPaperPlane, FaRobot, FaTimes, FaWhatsapp } from "react-icons/fa";
import { getAiChatApiUrl } from "../../lib/aiChatConfig";

const RED = "#DC3545";
const SUGGESTIONS = [
  "What courses do you offer for Class 11–12 Commerce?",
  "How can I contact YAC for admissions?",
  "Do you prepare students for CA Foundation?",
];

const TYPING_CHAR_MS = 16;
const TYPING_CHUNK = 2;

/**
 * Renders `text` with a type-in animation; `onComplete` runs once at the end.
 */
function TypewriterText({ text, onComplete, onProgress }) {
  const chars = Array.from(text);
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  useEffect(() => {
    setCount(0);
    doneRef.current = false;
  }, [text]);

  useEffect(() => {
    if (count >= chars.length) {
      if (chars.length === 0) {
        if (!doneRef.current) {
          doneRef.current = true;
          onCompleteRef.current?.();
        }
        return;
      }
      if (!doneRef.current) {
        doneRef.current = true;
        onCompleteRef.current?.();
      }
      return;
    }
    const t = window.setTimeout(() => {
      setCount((c) => Math.min(c + TYPING_CHUNK, chars.length));
      onProgressRef.current?.();
    }, TYPING_CHAR_MS);
    return () => window.clearTimeout(t);
  }, [count, chars.length]);

  const slice = chars.slice(0, count).join("");

  return (
    <span
      className="block min-w-0 w-full [overflow-wrap:anywhere] break-words [word-break:break-word] whitespace-pre-wrap"
      aria-live="polite"
    >
      {slice}
      {count < chars.length && (
        <span
          className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse rounded-sm bg-rose-400 align-middle"
          aria-hidden
        />
      )}
    </span>
  );
}

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 */
export default function AiAssistantPanel({ open, onClose }) {
  const panelId = useId();
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  /** Index of the assistant message currently showing a type-in; `null` when none. */
  const [typingIndex, setTypingIndex] = useState(null);

  const scrollToEnd = useCallback((behavior = "smooth") => {
    const el = listRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior });
    }
  }, []);

  useEffect(() => {
    if (!open) {
      setTypingIndex(null);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    scrollToEnd();
    const t = window.setTimeout(() => inputRef.current?.focus(), 300);
    return () => window.clearTimeout(t);
  }, [open, messages, loading, scrollToEnd, typingIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const send = useCallback(
    async (rawText) => {
      const text = (rawText ?? input).trim();
      if (!text || loading) return;

      setTypingIndex(null);
      setInput("");
      const next = [...messages, { role: "user", content: text }];
      setMessages(next);
      setLoading(true);

      const url = getAiChatApiUrl();
      const body = {
        messages: next.map((m) => ({ role: m.role, content: m.content })),
      };

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          const msg =
            typeof data?.error === "string"
              ? data.error
              : data?.error?.message || data?.details || res.statusText;
          throw new Error(msg || "Request failed");
        }
        const reply = String(data?.reply ?? "").trim() || "No reply from assistant.";
        setMessages((prev) => {
          const next = [...prev, { role: "assistant", content: reply }];
          setTypingIndex(next.length - 1);
          return next;
        });
      } catch (e) {
        const errMsg = e instanceof Error ? e.message : "Could not reach the assistant.";
        setMessages((prev) => {
          if (prev.length && prev[prev.length - 1].role === "user") {
            const next = [
              ...prev,
              {
                role: "assistant",
                content: `Sorry — I could not get a response. ${errMsg} If you need help right away, call or WhatsApp us from the home screen.`,
              },
            ];
            setTypingIndex(next.length - 1);
            return next;
          }
          return prev;
        });
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages]
  );

  return (
    <AnimatePresence>
      {open && (
        <Motion.div
          key="yac-ai-overlay"
          className="fixed inset-0 z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            role="presentation"
            onClick={onClose}
            className="absolute inset-0 z-0 cursor-pointer bg-zinc-900/45 backdrop-blur-[3px] sm:bg-zinc-900/35 sm:backdrop-blur-sm"
            aria-hidden
          />
          <Motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${panelId}-title`}
            id={`${panelId}-panel`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 32, stiffness: 360 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 z-[1] mx-auto flex h-[min(92dvh,640px)] w-full min-w-0 max-w-lg flex-col overflow-hidden rounded-t-3xl border border-rose-100/90 bg-gradient-to-b from-white via-white to-rose-50/40 text-left shadow-[0_28px_60px_-24px_rgba(220,53,69,0.45),0_0_0_1px_rgba(0,0,0,0.04)] sm:inset-x-auto sm:bottom-24 sm:right-5 sm:top-auto sm:mx-0 sm:h-[min(580px,82vh)] sm:max-w-md sm:rounded-2xl"
          >
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-rose-100/80 bg-white/80 px-4 py-3.5 pr-2 backdrop-blur sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                  style={{ background: `linear-gradient(145deg, ${RED}, #b02a3a)` }}
                >
                  <FaRobot className="text-base" />
                </span>
                <div className="min-w-0 pr-1">
                  <h2
                    id={`${panelId}-title`}
                    className="text-sm font-bold tracking-tight text-gray-900"
                  >
                    YAC Assistant
                  </h2>
                  <p className="text-xs leading-snug text-gray-500 [overflow-wrap:anywhere] break-words">
                    Courses, admissions & study help for YAC
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-rose-50 hover:text-gray-800"
                aria-label="Close assistant"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            <div
              ref={listRef}
              className="min-h-0 min-w-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden px-4 py-3 sm:px-5"
            >
              {messages.length === 0 && !loading && (
                <div className="min-w-0 space-y-3">
                  <p className="text-sm leading-relaxed text-gray-600 [overflow-wrap:anywhere] break-words">
                    Hi — I am YAC&rsquo;s virtual assistant. Ask about our programmes, how to
                    join, or study tips. Answers follow our official institute information.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Try asking
                  </p>
                  <ul className="space-y-2">
                    {SUGGESTIONS.map((q) => (
                      <li key={q}>
                        <button
                          type="button"
                          onClick={() => {
                            setInput(q);
                            send(q);
                          }}
                          disabled={loading}
                          className="w-full min-w-0 rounded-xl border border-rose-100/80 bg-white/90 px-3 py-2.5 text-left text-sm text-gray-700 shadow-sm transition hover:border-rose-200 hover:bg-rose-50/50 [overflow-wrap:anywhere] break-words disabled:opacity-50"
                        >
                          {q}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex w-full min-w-0 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={[
                      "min-w-0 max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed [overflow-wrap:anywhere] break-words [word-break:break-word] whitespace-pre-wrap sm:max-w-[85%]",
                      m.role === "user"
                        ? "bg-[#DC3545] text-white shadow-sm"
                        : "border border-rose-100/80 bg-white/95 text-gray-800 shadow-sm",
                    ].join(" ")}
                  >
                    {m.role === "assistant" && i === typingIndex ? (
                      <TypewriterText
                        key={`tw-${i}-${m.content.length}`}
                        text={m.content}
                        onComplete={() => setTypingIndex(null)}
                        onProgress={() => scrollToEnd("auto")}
                      />
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex w-full min-w-0 justify-start">
                  <div className="inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-2xl border border-rose-100/80 bg-white/95 px-3.5 py-2.5 text-sm text-gray-500 shadow-sm [overflow-wrap:anywhere] break-words">
                    <span className="inline-flex gap-0.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-rose-400 [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-rose-400 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-rose-400 [animation-delay:300ms]" />
                    </span>
                    <span>Thinking&hellip;</span>
                  </div>
                </div>
              )}
            </div>

            <form
              className="min-w-0 shrink-0 border-t border-rose-100/80 bg-white/90 p-3 backdrop-blur sm:p-4"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <div className="flex min-w-0 gap-2">
                <label htmlFor={`${panelId}-input`} className="sr-only">
                  Your message
                </label>
                <textarea
                  id={`${panelId}-input`}
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder="Type your question…"
                  disabled={loading}
                  className="min-h-11 w-full min-w-0 flex-1 resize-y rounded-xl border border-gray-200/90 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-inner placeholder:text-gray-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200/80 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ backgroundColor: RED }}
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
              <p className="mt-2 flex min-w-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[0.7rem] text-gray-500">
                <span className="min-w-0 [overflow-wrap:anywhere]">Prefer a human?</span>
                <a
                  href="tel:+919045417079"
                  className="shrink-0 font-semibold text-[#DC3545] hover:underline"
                >
                  Call
                </a>
                <span className="shrink-0 text-gray-300" aria-hidden>
                  |
                </span>
                <a
                  href="https://wa.me/919045417079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 max-w-full items-center gap-1 font-semibold text-[#25D366] hover:underline [overflow-wrap:anywhere] break-words"
                >
                  <FaWhatsapp className="shrink-0 text-sm" />
                  WhatsApp
                </a>
              </p>
            </form>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
