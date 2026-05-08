import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { useSmoothScroll } from "./SmoothScrollProvider";

/* ------------------------------------------------------------------ */
/* Configuration                                                       */
/* ------------------------------------------------------------------ */
// Bumping the version invalidates any previously-shown flag so the
// popup will reappear once after a deploy.
const STORAGE_KEY = "yac_lead_popup_shown_v2";
const SHOW_AFTER_MS = 10_000;
const SCROLL_TRIGGER_RATIO = 0.4;
const ALLOWED_PATHS = ["/"];

const COURSE_OPTIONS = [
  "Commerce",
  "CA Foundation",
  "Junior Wing",
  "Class 11-12",
  "Entrance Exams",
];

const TRUST_POINTS = [
  "80,000+ Students",
  "16+ Years",
  "4.9★ Rated",
  "Free Counseling",
];

/* ------------------------------------------------------------------ */
/* Storage helpers (safe across SSR / privacy modes)                   */
/* ------------------------------------------------------------------ */
function hasBeenShown() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markAsShown() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

/* ------------------------------------------------------------------ */
/* Lead Capture Popup — minimal, premium, brand-matched.               */
/* Triggers once per session via 10s timer OR 40% scroll.              */
/* ------------------------------------------------------------------ */
export default function LeadCapturePopup() {
  const { pathname } = useLocation();
  const lenis = useSmoothScroll();
  const reduced = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: COURSE_OPTIONS[0],
  });

  const firstFieldRef = useRef(null);
  const triggeredRef = useRef(false);

  /* ------------------------------------------------------------ */
  /* Trigger: 10s timer OR 40% scroll, only on allowed paths,    */
  /* and only once per browser session.                           */
  /* ------------------------------------------------------------ */
  useEffect(() => {
    if (!ALLOWED_PATHS.includes(pathname)) return undefined;
    if (hasBeenShown()) return undefined;

    const open = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      markAsShown();
      setIsOpen(true);
    };

    const timerId = window.setTimeout(open, SHOW_AFTER_MS);

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio >= SCROLL_TRIGGER_RATIO) open();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  /* ------------------------------------------------------------ */
  /* While open: lock body scroll, pause Lenis, listen for ESC,  */
  /* focus the first field after the entrance animation.          */
  /* ------------------------------------------------------------ */
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "contain";
    lenis?.stop();

    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 240);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
      lenis?.start();
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, lenis]);

  /* ------------------------------------------------------------ */
  /* Handlers                                                     */
  /* ------------------------------------------------------------ */
  const handleClose = () => {
    setIsOpen(false);
    window.setTimeout(() => {
      setSuccess(false);
      setErrorText("");
    }, 280);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    const name = form.name.trim();
    const phone = form.phone.trim();

    if (name.length < 2) {
      setErrorText("Please enter your full name.");
      return;
    }
    if (!/^\+?\d[\d\s-]{7,15}$/.test(phone)) {
      setErrorText("Please enter a valid mobile number.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorText("Form is misconfigured. Please reach us on WhatsApp instead.");
      return;
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
    });
    const sourceUrl =
      typeof window !== "undefined" ? window.location.href : "yasiraliclasses.in";

    const formattedBody = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Course: ${form.course}`,
      `Time: ${timestamp}`,
      `Source Website: ${sourceUrl}`,
    ].join("\n");

    const payload = new FormData();
    payload.append("access_key", accessKey);
    payload.append("subject", "🚀 New Student Lead - Yasir Ali Classes");
    payload.append("from_name", "YAC Aligarh Website");
    payload.append("name", name);
    payload.append("phone", phone);
    payload.append("course", form.course);
    payload.append("timestamp", timestamp);
    payload.append("source_website", sourceUrl);
    payload.append("source", "Homepage lead capture popup");
    payload.append("message", formattedBody);
    payload.append("botcheck", "");

    try {
      setSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await response.json();

      if (result?.success) {
        setSuccess(true);
        setForm({ name: "", phone: "", course: COURSE_OPTIONS[0] });
        window.setTimeout(() => handleClose(), 3200);
        return;
      }
      setErrorText(result?.message || "Submission failed. Please try again.");
    } catch {
      setErrorText("Network error. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ------------------------------------------------------------ */
  /* Render                                                       */
  /* ------------------------------------------------------------ */
  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          key="lead-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          data-lenis-prevent
          className="fixed inset-0 z-[220] flex items-end justify-center overflow-y-auto overscroll-contain bg-black/55 px-3 py-4 backdrop-blur-md [-webkit-overflow-scrolling:touch] sm:items-center sm:px-4"
          onClick={handleClose}
        >
          <Motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-headline"
            aria-describedby="lead-popup-sub"
            data-lenis-prevent
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[360px] overflow-hidden rounded-2xl border border-red-100 bg-white shadow-[0_20px_60px_-20px_rgba(220,53,69,0.5),0_6px_18px_-10px_rgba(0,0,0,0.3)] [transform:translateZ(0)] [will-change:transform,opacity]"
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              onClick={handleClose}
              className="absolute right-2.5 top-2.5 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <FaTimes className="text-[11px]" />
            </button>

            {success ? (
              <SuccessPanel reduced={reduced} onClose={handleClose} />
            ) : (
              <>
                {/* ====== Compact brand header ====== */}
                <div
                  className="relative overflow-hidden px-5 pt-5 pb-4 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #C41E1E 0%, #A71616 60%, #991B1B 100%)",
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-white/75">
                      Free Demo · Limited Seats
                    </p>
                    <h2
                      id="lead-popup-headline"
                      className="mt-1.5 pr-8 text-[1.05rem] font-bold leading-[1.2] tracking-tight sm:text-[1.15rem]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Get FREE Demo + Admission Guidance
                    </h2>
                    <p
                      id="lead-popup-sub"
                      className="mt-1 text-[11.5px] leading-snug text-white/80"
                    >
                      Aligarh's trusted commerce coaching for CA &amp; Entrance.
                    </p>
                  </div>
                </div>

                {/* ====== Compact trust strip (single row) ====== */}
                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 border-b border-gray-100 bg-rose-50/40 px-4 py-2">
                  {TRUST_POINTS.map((point, idx) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-1 text-[10.5px] font-medium text-gray-700"
                    >
                      {idx > 0 && (
                        <span className="mr-1.5 inline-block h-0.5 w-0.5 rounded-full bg-gray-400" />
                      )}
                      <span className="text-[#DC3545]">✓</span>
                      <span>{point}</span>
                    </span>
                  ))}
                </div>

                {/* ====== Form ====== */}
                <form
                  onSubmit={handleSubmit}
                  className="px-5 pb-5 pt-4"
                  noValidate
                >
                  <div className="space-y-2.5">
                    <label className="block">
                      <span className="text-[11.5px] font-semibold text-gray-700">
                        Full Name
                      </span>
                      <input
                        ref={firstFieldRef}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] text-gray-900 outline-none transition focus:border-[#DC3545] focus:bg-white focus:ring-2 focus:ring-[#DC3545]/15"
                      />
                    </label>

                    <label className="block">
                      <span className="text-[11.5px] font-semibold text-gray-700">
                        Mobile Number
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[13px] text-gray-900 outline-none transition focus:border-[#DC3545] focus:bg-white focus:ring-2 focus:ring-[#DC3545]/15"
                      />
                    </label>

                    <label className="block">
                      <span className="text-[11.5px] font-semibold text-gray-700">
                        Interested Course
                      </span>
                      <div className="relative mt-1">
                        <select
                          name="course"
                          value={form.course}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 pr-9 text-[13px] text-gray-900 outline-none transition focus:border-[#DC3545] focus:bg-white focus:ring-2 focus:ring-[#DC3545]/15"
                        >
                          {COURSE_OPTIONS.map((course) => (
                            <option key={course} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                        <span
                          aria-hidden
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#DC3545]"
                        >
                          ▼
                        </span>
                      </div>
                    </label>

                    {/* Honeypot */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    {errorText ? (
                      <p
                        role="alert"
                        className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-[11px] font-medium text-red-700"
                      >
                        {errorText}
                      </p>
                    ) : null}

                    {/* CTA */}
                    <div className="relative pt-0.5">
                      {!reduced && (
                        <Motion.span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-lg"
                          style={{ boxShadow: "0 0 0 2px #DC3545" }}
                          initial={{ opacity: 0.45, scale: 1 }}
                          animate={{
                            opacity: [0.4, 0, 0.4],
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <Motion.button
                        type="submit"
                        disabled={submitting}
                        whileHover={reduced ? undefined : { scale: 1.015 }}
                        whileTap={reduced ? undefined : { scale: 0.985 }}
                        className="relative inline-flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-[#DC3545] px-4 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-[0_10px_22px_-10px_rgba(220,53,69,0.65)] transition hover:bg-[#c92f3f] focus:outline-none focus:ring-2 focus:ring-[#DC3545]/40 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-75"
                      >
                        {!reduced && !submitting && (
                          <span
                            aria-hidden
                            className="pointer-events-none absolute top-0 h-full w-1/3 -skew-x-12"
                            style={{
                              background:
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                              animation: "shine 2.6s ease-in-out infinite",
                            }}
                          />
                        )}
                        <span className="relative z-10">
                          {submitting ? "Submitting…" : "Book Free Demo"}
                        </span>
                        {!submitting && (
                          <span aria-hidden className="relative z-10">
                            →
                          </span>
                        )}
                      </Motion.button>
                    </div>

                    <p className="pt-0.5 text-center text-[10.5px] leading-snug text-gray-500">
                      We'll contact you shortly for free guidance.
                    </p>
                  </div>
                </form>
              </>
            )}
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Compact success state                                               */
/* ------------------------------------------------------------------ */
function SuccessPanel({ reduced, onClose }) {
  return (
    <Motion.div
      key="lead-success"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
      className="px-5 py-7 text-center"
    >
      <Motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={
          reduced
            ? { duration: 0.2 }
            : { type: "spring", stiffness: 280, damping: 18, delay: 0.05 }
        }
        className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 shadow-[0_12px_26px_-12px_rgba(34,197,94,0.45)]"
      >
        <FaCheckCircle className="text-2xl" />
      </Motion.div>

      <Motion.h3
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.1 }}
        className="mt-3.5 text-base font-bold tracking-tight text-gray-900"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        🎉 Request Submitted!
      </Motion.h3>

      <Motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.16 }}
        className="mt-1.5 text-[12.5px] leading-snug text-gray-600"
      >
        Our team will contact you shortly.
      </Motion.p>

      <Motion.button
        type="button"
        onClick={onClose}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.22 }}
        whileHover={reduced ? undefined : { scale: 1.02 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        className="mt-4 inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-1.5 text-[12px] font-semibold text-gray-700 transition hover:border-[#DC3545] hover:text-[#DC3545]"
      >
        Close
      </Motion.button>
    </Motion.div>
  );
}
