import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ----------------------------------------------------------------- */
/* Faculty poster set (deduped — "- Copy" duplicates removed)         */
/* ----------------------------------------------------------------- */
const POSTERS = [
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.57 PM.jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.57 PM (1).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.57 PM (2) - Copy.jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.58 PM.jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.58 PM (1).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.58 PM (2).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.59 PM.jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.59 PM (1).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.59 PM (2).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.21.59 PM (3).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.22.00 PM (1).jpeg",
  "/faculty-posters/WhatsApp Image 2026-05-05 at 5.22.00 PM (2).jpeg",
];

const AUTO_ADVANCE_MS = 4000;
const DRAG_THRESHOLD = 60;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

/* ----------------------------------------------------------------- */
/* Faculty Posters Carousel                                           */
/* Auto-advancing brand carousel that headlines the Faculty page.     */
/* ----------------------------------------------------------------- */
export default function FacultyPostersCarousel() {
  const reduced = useReducedMotion();
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);

  const total = POSTERS.length;

  const goTo = useCallback(
    (target, dir) => {
      const next = ((target % total) + total) % total;
      setState([next, dir]);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  /* --------------------- Auto-advance ------------------------- */
  // Note: we intentionally ignore `useReducedMotion` for the timer itself
  // because the user explicitly wants the slides to auto-advance. We still
  // skip the spring/drag animations when reduced-motion is on; the slides
  // simply swap instantly instead of sliding.
  useEffect(() => {
    if (paused) return undefined;
    const id = window.setTimeout(next, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, next]);

  /* --------------------- Keyboard nav ------------------------- */
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const onKey = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [next, prev]);

  /* --------------------- Pause on hidden tabs ----------------- */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  /* --------------------- Preload neighbours ------------------- */
  useEffect(() => {
    const preload = (i) => {
      const img = new Image();
      img.src = POSTERS[((i % total) + total) % total];
    };
    preload(index + 1);
    preload(index - 1);
  }, [index, total]);

  return (
    <section
      ref={sectionRef}
      tabIndex={-1}
      aria-roledescription="carousel"
      aria-label="Yasir Ali Classes faculty spotlight"
      className="relative pt-24 pb-10 md:pb-14 px-4 sm:px-6 lg:px-10 overflow-hidden focus:outline-none"
      style={{
        backgroundColor: "#f4f4f5",
        backgroundImage:
          "linear-gradient(to right, rgba(161, 161, 170, 0.2) 1px, transparent 1px)",
        backgroundSize: "2.5rem 100%",
      }}
    >
      {/* Soft red glow for premium feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] max-w-4xl -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(220,53,69,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <Motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#DC3545]"
          >
            Faculty Spotlight
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Meet the educators behind every result
          </Motion.h2>
        </div>

        {/* Slider stage */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mt-7 sm:mt-9"
        >
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="relative w-full overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-rose-50 via-white to-rose-100/60 shadow-[0_24px_60px_-24px_rgba(220,53,69,0.45),0_8px_24px_-12px_rgba(0,0,0,0.18)] sm:rounded-3xl"
            style={{ aspectRatio: "1024 / 576" }}
          >
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <Motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: reduced
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 240, damping: 32 },
                  opacity: { duration: reduced ? 0 : 0.35 },
                }}
                drag={reduced ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -DRAG_THRESHOLD) next();
                  else if (info.offset.x > DRAG_THRESHOLD) prev();
                }}
                className="absolute inset-0 flex cursor-grab items-center justify-center active:cursor-grabbing"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${total}`}
              >
                <img
                  src={POSTERS[index]}
                  alt={`Faculty poster ${index + 1} — Yasir Ali Classes`}
                  draggable={false}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="pointer-events-none h-full w-full select-none object-contain"
                />
              </Motion.div>
            </AnimatePresence>

            {/* Prev / Next arrow buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous faculty poster"
              className="group absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-gray-800 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white hover:text-[#DC3545] focus:outline-none focus:ring-2 focus:ring-[#DC3545]/40 sm:left-5 sm:h-12 sm:w-12"
            >
              <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5 sm:text-base" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next faculty poster"
              className="group absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-gray-800 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white hover:text-[#DC3545] focus:outline-none focus:ring-2 focus:ring-[#DC3545]/40 sm:right-5 sm:h-12 sm:w-12"
            >
              <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5 sm:text-base" />
            </button>

            {/* Auto-advance progress bar */}
            {!reduced && (
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 z-10 h-[3px] overflow-hidden bg-black/10"
              >
                <Motion.div
                  key={`${index}-${paused ? "paused" : "running"}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0 : 1 }}
                  transition={{
                    duration: paused ? 0 : AUTO_ADVANCE_MS / 1000,
                    ease: "linear",
                  }}
                  className="h-full origin-left bg-[#DC3545]"
                />
              </div>
            )}
          </div>

          {/* Dot pagination */}
          <div className="mt-5 flex items-center justify-center gap-1.5 sm:mt-6 sm:gap-2">
            {POSTERS.map((_, i) => {
              const isActive = i === index;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#DC3545]/40 focus:ring-offset-1",
                    isActive
                      ? "w-8 bg-[#DC3545] shadow-[0_2px_8px_-2px_rgba(220,53,69,0.6)]"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
