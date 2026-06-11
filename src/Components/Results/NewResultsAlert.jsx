import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaTimes, FaTrophy } from "react-icons/fa";

const STORAGE_KEY = "yac-new-results-alert-dismissed";
const RED = "#DC3545";

export default function NewResultsAlert() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <Motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, x: 16, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          className="fixed top-24 right-3 z-[70] sm:top-28 sm:right-6"
        >
          <Link
            to="/results/new"
            className="group relative flex max-w-[220px] items-start gap-3 overflow-hidden rounded-2xl border border-rose-200/90 bg-white/95 px-3.5 py-3 shadow-[0_18px_40px_-18px_rgba(220,53,69,0.55)] backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-16px_rgba(220,53,69,0.65)] sm:max-w-[260px] sm:px-4 sm:py-3.5"
          >
            {!reduced ? (
              <Motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ boxShadow: `0 0 0 2px ${RED}` }}
                initial={{ opacity: 0.45, scale: 1 }}
                animate={{ opacity: [0.45, 0, 0.45], scale: [1, 1.04, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : null}

            <span
              className="relative mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-inner"
              style={{ backgroundColor: RED }}
            >
              <FaTrophy className="text-sm" />
            </span>

            <span className="relative min-w-0 flex-1 pr-5">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#DC3545]">
                AMU Entrance
              </span>
              <span className="mt-0.5 block text-sm font-bold leading-snug text-gray-900 group-hover:text-[#DC3545] transition-colors">
                New Results Arrived!
              </span>
              <span className="mt-1 block text-[11px] leading-snug text-gray-500">
                Tap to view AMU entrance results
              </span>
            </span>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss new results alert"
              className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-rose-50 hover:text-gray-700"
            >
              <FaTimes className="text-[10px]" />
            </button>
          </Link>
        </Motion.div>
      ) : null}
    </AnimatePresence>
  );
}
