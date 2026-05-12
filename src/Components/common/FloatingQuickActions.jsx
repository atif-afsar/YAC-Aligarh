import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { FaPhoneAlt, FaRobot, FaTimes, FaWhatsapp } from "react-icons/fa";

// Heavy chat panel only loads when the user actually opens it.
const AiAssistantPanel = lazy(() => import("./AiAssistantPanel"));

const RED = "#DC3545";

function detectCoarsePointer() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 768px)").matches
  );
}

/* ------------------------------------------------------------------ */
/* Sub-action: a circular button + a label pill that slides in        */
/* alongside it. Both are visible by default (not hover-only) so      */
/* mobile users immediately know what each button does.               */
/* ------------------------------------------------------------------ */
function LeftAction({ icon: SvgIcon, label, tone = "red", href, index = 0 }) {
  const reduced = useReducedMotion();
  const isWhatsapp = tone === "whatsapp";
  const accent = isWhatsapp ? "#25D366" : RED;

  // Springy stagger entrance — each sub-action lifts in from below the FAB.
  const containerVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduced
        ? { duration: 0.18 }
        : { type: "spring", stiffness: 360, damping: 22, delay: 0.04 + index * 0.06 },
    },
    exit: {
      opacity: 0,
      y: 14,
      scale: 0.9,
      transition: { duration: 0.16, ease: "easeOut" },
    },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.28, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, x: -8, transition: { duration: 0.14 } },
  };

  return (
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex items-center gap-2.5 sm:gap-3"
    >
      <Motion.a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={label}
        whileHover={reduced ? undefined : { y: -4, scale: 1.06 }}
        whileTap={reduced ? undefined : { scale: 0.94 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white text-gray-800 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)] sm:h-16 sm:w-16"
        style={{ outline: `1px solid ${accent}1a` }}
      >
        {/* Soft inner halo on hover */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 0 1.5px ${accent}55`,
            background: `radial-gradient(circle at 35% 35%, ${accent}26, transparent 65%)`,
          }}
        />
        {/* Tinted icon plate */}
        <span
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
          style={{ backgroundColor: `${accent}1f` }}
        >
          <SvgIcon
            className="text-[1.25rem] sm:text-[1.4rem]"
            style={{ color: accent }}
          />
        </span>
      </Motion.a>

      {/* Label pill — always visible (not hover-only) so it works on mobile */}
      <Motion.span
        variants={labelVariants}
        className="rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_18px_-10px_rgba(0,0,0,0.5)] sm:px-3.5 sm:py-2 sm:text-[12px]"
        style={{
          backgroundColor: "#161a1f",
          borderColor: `${accent}40`,
        }}
      >
        {label}
      </Motion.span>
    </Motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main floating quick-actions cluster (left side)                    */
/* ------------------------------------------------------------------ */
export default function FloatingQuickActions() {
  const [openLeft, setOpenLeft] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiMounted, setAiMounted] = useState(false);
  const reduced = useReducedMotion();
  const [isCoarse, setIsCoarse] = useState(() => detectCoarsePointer());

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse), (max-width: 768px)");
    const apply = () => setIsCoarse(detectCoarsePointer());
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Only enable the infinite pulse rings on desktop with motion enabled —
  // they run forever and are otherwise pure compositor work on phones.
  const allowPulse = !reduced && !isCoarse;

  // Lazy-mount the AI assistant module the first time the user opens it.
  const handleToggleAi = () => {
    setAiOpen((v) => {
      const next = !v;
      if (next) setAiMounted(true);
      return next;
    });
  };

  return (
    <>
      {/* Soft bottom shade so floating buttons read against light backgrounds */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] h-20 bg-gradient-to-t from-black/10 to-transparent"
        aria-hidden
      />

      {/* LEFT cluster: phone FAB + sub-actions */}
      <div className="fixed bottom-4 left-3 z-[100] flex flex-col items-start gap-3 sm:bottom-6 sm:left-5 sm:gap-3.5">
        <AnimatePresence>
          {openLeft && (
            <>
              <LeftAction
                key="call"
                icon={FaPhoneAlt}
                label="Call"
                index={0}
                tone="red"
                href="tel:+919045417079"
              />
              <LeftAction
                key="call2"
                icon={FaPhoneAlt}
                label="Call 2"
                index={1}
                tone="red"
                href="tel:+919412617279"
              />
              <LeftAction
                key="whatsapp"
                icon={FaWhatsapp}
                label="WhatsApp"
                index={2}
                tone="whatsapp"
                href="https://wa.me/919045417079"
              />
            </>
          )}
        </AnimatePresence>

        {/* MAIN FAB */}
        <Motion.button
          type="button"
          onClick={() => setOpenLeft((prev) => !prev)}
          aria-label={openLeft ? "Close quick contact actions" : "Open quick contact actions"}
          aria-expanded={openLeft}
          whileHover={reduced ? undefined : { y: -4, scale: 1.05 }}
          whileTap={reduced ? undefined : { scale: 0.94 }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-red-300/50 bg-white text-gray-900 shadow-[0_18px_36px_-14px_rgba(220,53,69,0.55)] sm:h-16 sm:w-16"
        >
          {/* Idle pulse ring — desktop + motion enabled only. */}
          {!openLeft && allowPulse && (
            <>
              <Motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: `0 0 0 2px ${RED}` }}
                initial={{ opacity: 0.55, scale: 1 }}
                animate={{ opacity: [0.55, 0, 0.55], scale: [1, 1.35, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <Motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: `0 0 0 2px ${RED}` }}
                initial={{ opacity: 0.4, scale: 1 }}
                animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.55, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
            </>
          )}

          {/* Soft red glow */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(220,53,69,0.22),transparent_65%)]" />

          {/* Inner icon plate */}
          <Motion.span
            key={openLeft ? "close" : "open"}
            initial={{ rotate: openLeft ? -90 : 0, opacity: 0.6, scale: 0.85 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-inner sm:h-11 sm:w-11"
            style={{ backgroundColor: RED }}
          >
            {openLeft ? (
              <FaTimes className="text-base sm:text-lg" />
            ) : (
              <FaPhoneAlt className="text-base sm:text-lg" />
            )}
          </Motion.span>
        </Motion.button>
      </div>

      {/* RIGHT: AI Assistant FAB */}
      <Motion.button
        type="button"
        onClick={handleToggleAi}
        initial={{ opacity: 0, x: 24, scale: 0.94 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduced ? undefined : { y: -4, scale: 1.04 }}
        whileTap={reduced ? undefined : { scale: 0.95 }}
        aria-label={aiOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={aiOpen}
        className={[
          "group fixed bottom-4 right-3 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-red-300/50 bg-white text-gray-900 shadow-[0_18px_38px_-14px_rgba(220,53,69,0.6)] backdrop-blur transition-opacity duration-200",
          "sm:bottom-6 sm:right-5 sm:h-auto sm:w-auto sm:px-5 sm:py-3 sm:rounded-full",
          aiOpen
            ? "z-[80] pointer-events-none opacity-0 sm:z-[210] sm:pointer-events-auto sm:opacity-100"
            : "z-[100] opacity-100",
        ].join(" ")}
      >
        {/* Idle pulse on the AI button — desktop + motion enabled only. */}
        {!aiOpen && allowPulse && (
          <Motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full sm:rounded-full"
            style={{ boxShadow: `0 0 0 2px ${RED}` }}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.25, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        )}

        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(220,53,69,0.12),transparent,rgba(220,53,69,0.18))] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="relative flex items-center justify-center gap-2.5">
          <Motion.span
            key={aiOpen ? "ai-close" : "ai-open"}
            initial={{ rotate: aiOpen ? 90 : 0, opacity: 0.6, scale: 0.85 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white shadow-inner sm:h-10 sm:w-10"
            style={{ backgroundColor: RED }}
          >
            {aiOpen ? (
              <FaTimes className="text-sm sm:text-base" />
            ) : (
              <FaRobot className="text-sm sm:text-base" />
            )}
          </Motion.span>
          <span className="hidden text-xs font-bold uppercase tracking-[0.14em] sm:inline sm:text-[0.82rem]">
            {aiOpen ? "Close" : "AI Assistant"}
          </span>
        </span>
      </Motion.button>

      {aiMounted ? (
        <Suspense fallback={null}>
          <AiAssistantPanel open={aiOpen} onClose={() => setAiOpen(false)} />
        </Suspense>
      ) : null}
    </>
  );
}
