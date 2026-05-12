import { lazy, memo, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaPlay, FaStar } from "react-icons/fa";

// HeroParticles + GSAP are desktop-only. They're loaded asynchronously so they
// never block the mobile critical path / LCP frame.
const HeroParticles = lazy(() => import("./HeroParticles"));

const RED = "#DC3545";

const COURSES = [
  "Commerce",
  "Science",
  "Junior (5-10)",
  "CA Foundation",
  "CMA",
  "Class 11-12",
  "Entrance Exams",
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function detectMobile() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

/** Showcase cards inspired by stacked gaming-card layout */
const FAN_IMAGES = [
  {
    src: "/hero/img1.jpg",
    alt: "Commerce batch performance highlights",
    title: "Commerce Pro",
    subtitle: "Class 11-12",
    score: "4.8",
    className:
      "-rotate-[14deg] translate-y-6 sm:translate-y-7 md:translate-y-8 z-[1]",
  },
  {
    src: "/hero/img5.jpg",
    alt: "Science learning group sessions",
    title: "Science Edge",
    subtitle: "XI-XII",
    score: "4.9",
    className:
      "-rotate-[7deg] translate-y-2 sm:translate-y-3 md:translate-y-4 z-[2]",
  },
  {
    src: "/hero/img3.jpg",
    alt: "Top achievers and rankers",
    title: "Top Rankers",
    subtitle: "YAC Results",
    score: "5.0",
    className:
      "rotate-0 -translate-y-6 sm:-translate-y-8 md:-translate-y-10 z-[5]",
  },
  {
    src: "/hero/img4.png",
    alt: "Students solving mock test papers",
    title: "Mock Master",
    subtitle: "Test Series",
    score: "4.7",
    className:
      "rotate-[7deg] translate-y-2 sm:translate-y-3 md:translate-y-4 z-[2]",
  },
  {
    src: "/hero/img2.jpg",
    alt: "Mentorship and personal guidance at YAC",
    title: "Mentor Plus",
    subtitle: "Personal Care",
    score: "4.8",
    className:
      "rotate-[14deg] translate-y-6 sm:translate-y-7 md:translate-y-8 z-[1]",
  },
];

const HeroSquiggles = memo(function HeroSquiggles() {
  return (
    <>
      <svg
        className="absolute -left-[8%] -top-[5%] h-[min(55vh,420px)] w-[min(70vw,520px)] text-red-400/20 will-change-transform"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 20 C120 80 80 180 160 220 S280 260 320 340"
          stroke="currentColor"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M20 120 C100 100 140 200 100 280"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
      <svg
        className="absolute -right-[12%] top-[18%] h-[min(50vh,380px)] w-[min(75vw,560px)] text-red-400/25 will-change-transform"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <path
          d="M360 40 C280 120 340 200 260 260 S120 300 60 380"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M380 200 C300 220 240 320 180 360"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </>
  );
});

const contentEase = [0.22, 1, 0.36, 1];

function buildTextVariants(reduceMotion) {
  if (reduceMotion) {
    return {
      container: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      headline: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      list: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      item: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      line: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      h1line: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      pill: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
    };
  }
  return {
    container: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.04 },
      },
    },
    headline: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0 },
      },
    },
    list: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.045, delayChildren: 0.05 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.52, ease: contentEase },
      },
    },
    line: {
      hidden: { opacity: 0, y: 18 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: contentEase },
      },
    },
    h1line: {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.56, ease: contentEase },
      },
    },
    pill: {
      hidden: { opacity: 0, y: 8, scale: 0.92 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.42, ease: contentEase },
      },
    },
  };
}

const btnSpring = { type: "spring", stiffness: 380, damping: 22 };

const fanStagger = (i) => ({
  hidden: { opacity: 0, y: 36, scale: 0.94, rotate: i % 2 === 0 ? -2 : 2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
      delay: 0.2 + i * 0.09,
    },
  },
});

function Hero() {
  const sectionRef = useRef(null);
  const squiggleLayerRef = useRef(null);
  const imageRowRef = useRef(null);
  const imageRowParallaxRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const reduced = usePrefersReducedMotion();
  // Initialise from the actual viewport so the first render matches the device,
  // avoiding a re-render + layout shift on mount.
  const [isMobile, setIsMobile] = useState(() => detectMobile());
  const [isNarrow, setIsNarrow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 639px)").matches;
  });
  // On mobile we run a much simpler animation chain (or none at all) so the
  // hero composites in a single frame.
  const animReduced = reduced || isMobile;
  const textVariants = useMemo(
    () => buildTextVariants(animReduced),
    [animReduced]
  );

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqNarrow = window.matchMedia("(max-width: 639px)");
    const apply = () => {
      setIsMobile(detectMobile());
      setIsNarrow(mqNarrow.matches);
    };
    apply();
    mqMobile.addEventListener("change", apply);
    mqNarrow.addEventListener("change", apply);
    return () => {
      mqMobile.removeEventListener("change", apply);
      mqNarrow.removeEventListener("change", apply);
    };
  }, []);

  const visibleFanImages = useMemo(
    () =>
      FAN_IMAGES.filter((_, i) => {
        if (!isNarrow) return true;
        return i !== 0 && i !== 4;
      }),
    [isNarrow]
  );

  useLayoutEffect(() => {
    if (reduced || isMobile || !sectionRef.current) return undefined;

    let cancelled = false;
    let revert = null;
    (async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;
      const ctx = gsap.context(() => {
        const layer = squiggleLayerRef.current;
        if (!layer) return;

        const svgs = layer.querySelectorAll("svg");
        if (svgs[0]) {
          gsap.to(svgs[0], {
            y: 14,
            rotation: 1.2,
            transformOrigin: "50% 50%",
            duration: 6.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
        if (svgs[1]) {
          gsap.to(svgs[1], {
            y: -12,
            rotation: -1.4,
            transformOrigin: "50% 50%",
            duration: 7.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.4,
          });
        }
        // NOTE: the previous scrubbed parallax on the image row was removed
        // because scrub:true + Lenis interpolation runs ScrollTrigger every
        // single smooth-scroll frame and was the main cause of scroll jank.
      }, sectionRef);
      revert = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      if (revert) revert();
    };
  }, [reduced, isMobile]);

  useEffect(() => {
    if (reduced || isMobile || !sectionRef.current) return undefined;

    const section = sectionRef.current;
    const layer = squiggleLayerRef.current;
    const rowParallax = imageRowParallaxRef.current;
    if (!layer) return undefined;

    let cancelled = false;
    let teardown = null;

    (async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      const xTo = gsap.quickTo(layer, "x", { duration: 0.9, ease: "power3.out" });
      const yTo = gsap.quickTo(layer, "y", { duration: 0.9, ease: "power3.out" });
      const xRow = rowParallax
        ? gsap.quickTo(rowParallax, "x", { duration: 1, ease: "power3.out" })
        : null;
      const yRow = rowParallax
        ? gsap.quickTo(rowParallax, "y", { duration: 1, ease: "power3.out" })
        : null;

      let frameId = 0;
      let latestMoveEvent = null;
      const updateFromPointer = (clientX, clientY) => {
        const { left, top, width, height } = section.getBoundingClientRect();
        pointerRef.current = {
          x: clientX - left,
          y: clientY - top,
          active: true,
        };
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        xTo(x * 32);
        yTo(y * 24);
        if (xRow && yRow) {
          xRow(x * 10);
          yRow(y * 8);
        }
      };
      const onMove = (e) => {
        latestMoveEvent = e;
        if (frameId) return;
        frameId = window.requestAnimationFrame(() => {
          frameId = 0;
          if (!latestMoveEvent) return;
          updateFromPointer(latestMoveEvent.clientX, latestMoveEvent.clientY);
        });
      };
      const onLeave = () => {
        pointerRef.current = { x: 0, y: 0, active: false };
        xTo(0);
        yTo(0);
        if (xRow && yRow) {
          xRow(0);
          yRow(0);
        }
      };

      section.addEventListener("mousemove", onMove, { passive: true });
      section.addEventListener("mouseleave", onLeave, { passive: true });

      teardown = () => {
        if (frameId) window.cancelAnimationFrame(frameId);
        section.removeEventListener("mousemove", onMove);
        section.removeEventListener("mouseleave", onLeave);
      };
    })();

    return () => {
      cancelled = true;
      if (teardown) teardown();
    };
  }, [reduced, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 md:pt-40 md:pb-24"
    >
      {/* Decorative squiggles + particles — desktop only.
          On mobile they only contribute paint cost (Lighthouse mobile is the
          target profile here) and they're already mostly off-screen. */}
      {!isMobile && (
        <div
          ref={squiggleLayerRef}
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
          aria-hidden
        >
          <HeroSquiggles />
        </div>
      )}

      {!isMobile && (
        <Suspense fallback={null}>
          <HeroParticles
            sectionRef={sectionRef}
            pointerRef={pointerRef}
            reduced={reduced}
          />
        </Suspense>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="mx-auto max-w-4xl px-1 text-center sm:px-2"
          initial={false}
          animate="visible"
          variants={textVariants.container}
        >
          {/* Elegant brand wordmark — refined eyebrow above the H1 */}
          <Motion.div
            variants={textVariants.item}
            className="mx-auto mb-5 flex w-fit max-w-full items-center justify-center gap-2 sm:mb-6 sm:gap-3.5"
            aria-label="Yasir Ali Classes — YAC, Aligarh"
          >
            {/* Left hairline + accent dot (desktop only) */}
            <Motion.span
              aria-hidden
              className="hidden h-px w-10 origin-right bg-gradient-to-r from-transparent via-red-200 to-red-400 sm:block md:w-16"
              initial={animReduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: contentEase, delay: 0.1 }}
            />
            <Motion.span
              aria-hidden
              className="hidden h-1.5 w-1.5 rounded-full bg-[#DC3545] sm:block"
              initial={animReduced ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: contentEase, delay: 0.35 }}
            />

            {/* Wordmark plate with soft rose glow */}
            <span className="relative inline-flex items-center gap-1.5 sm:gap-2.5">
              <Motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 -z-10 rounded-full bg-gradient-to-r from-rose-100/0 via-rose-100/70 to-rose-100/0 blur-sm motion-reduce:hidden"
                initial={animReduced ? false : { opacity: 0, scaleX: 0.4 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.9, ease: contentEase, delay: 0.2 }}
              />
              <span className="font-serif-display text-[12px] font-semibold uppercase tracking-[0.24em] text-gray-800 sm:text-[14px] sm:tracking-[0.26em] md:text-[15px]">
                <span className="italic font-bold text-[#B91C1C]">
                  Yasir Ali
                </span>
                <span className="text-gray-700"> Classes</span>
              </span>
              <Motion.span
                className="inline-flex items-center rounded-md px-1.5 py-0.5 font-serif-display text-[8.5px] font-bold tracking-[0.16em] text-white shadow-[0_2px_8px_-2px_rgba(220,53,69,0.55)] sm:px-2 sm:text-[10px]"
                style={{
                  background:
                    "linear-gradient(135deg, #DC3545 0%, #B91C1C 100%)",
                }}
                initial={animReduced ? false : { opacity: 0, scale: 0.6, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: contentEase, delay: 0.4 }}
              >
                YAC
              </Motion.span>
            </span>

            {/* Right accent dot + hairline (desktop only) */}
            <Motion.span
              aria-hidden
              className="hidden h-1.5 w-1.5 rounded-full bg-[#DC3545] sm:block"
              initial={animReduced ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: contentEase, delay: 0.35 }}
            />
            <Motion.span
              aria-hidden
              className="hidden h-px w-10 origin-left bg-gradient-to-l from-transparent via-red-200 to-red-400 sm:block md:w-16"
              initial={animReduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: contentEase, delay: 0.1 }}
            />
          </Motion.div>

          {/* H1 with a soft decorative aurora behind it for premium depth */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(220,53,69,0.10),rgba(220,53,69,0.04)_45%,transparent_70%)] motion-reduce:hidden"
            />
            <Motion.h1
              className="text-[2rem] font-bold leading-[1.12] tracking-tight text-gray-900 sm:text-[2.4rem] sm:leading-[1.08] md:text-5xl lg:text-[3rem]"
              variants={textVariants.headline}
            >
              <Motion.span
                className="block"
                variants={textVariants.h1line}
              >
                Aligarh's Most Trusted
              </Motion.span>
              <Motion.span
                className="mt-1.5 block sm:mt-2"
                variants={textVariants.h1line}
              >
                <span
                  className="font-serif-display italic font-semibold"
                  style={{ color: RED }}
                >
                  Coaching
                </span>
                <span className="text-gray-800">
                  {" "}
                  for Commerce, Science &amp; CA
                </span>
              </Motion.span>
            </Motion.h1>
          </div>

          {/* Courses we offer — elegant red pill row */}
          <Motion.ul
            className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-1.5 px-2 sm:mt-7 sm:gap-2 sm:px-0 md:gap-2.5"
            aria-label="Courses offered at YAC Aligarh"
            variants={textVariants.list}
          >
            {COURSES.map((course) => (
              <Motion.li key={course} variants={textVariants.pill}>
                <span
                  className="group/pill inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-gradient-to-b from-red-50 to-rose-50/60 px-2 py-[3px] text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-[#B91C1C] shadow-[0_1px_0_rgba(220,53,69,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-rose-50 hover:text-[#DC3545] hover:shadow-[0_4px_10px_-4px_rgba(220,53,69,0.25)] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[0.65rem] sm:tracking-[0.12em]"
                  style={{ color: "#B91C1C" }}
                >
                  <span
                    aria-hidden
                    className="hidden h-1 w-1 rounded-full bg-red-300 transition-colors group-hover/pill:bg-[#DC3545] sm:inline-block"
                  />
                  {course}
                </span>
              </Motion.li>
            ))}
          </Motion.ul>

          {/* Visually-hidden SEO context for screen readers + crawlers */}
          <span className="sr-only">
            Yasir Ali Classes (YAC) is the best coaching in Aligarh for Commerce,
            Science, Junior (Classes 5-10), CA Foundation, CMA, B.Com, Class
            11-12 and Entrance exams (BBA, MBA, BA-LLB / CLAT). 16+ years of
            mentorship, 80,000+ students mentored and a 4.9★ Google rating.
            Online and offline batches available.
          </span>

          {/* Single subheading — italic brand tagline */}
          <Motion.p
            className="mx-auto mt-5 max-w-[20rem] text-[1.05rem] font-serif-display italic leading-[1.45] text-gray-700 sm:mt-6 sm:max-w-xl sm:text-[1.25rem] md:text-[1.4rem]"
            aria-label="YAC tagline"
            variants={textVariants.line}
          >
            We Debit Efforts,&nbsp;
            <span className="text-gray-900">to Credit Your Success.</span>
          </Motion.p>

          {/* CTAs */}
          <Motion.div
            className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
            variants={textVariants.item}
          >
            <Motion.div
              whileHover={animReduced ? undefined : { scale: 1.035 }}
              whileTap={animReduced ? undefined : { scale: 0.97 }}
              transition={btnSpring}
            >
              <Link
                to="/Admissions"
                className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 overflow-hidden rounded-full px-9 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(220,53,69,0.6)] transition hover:shadow-[0_18px_36px_-12px_rgba(220,53,69,0.8)]"
                style={{ backgroundColor: RED }}
              >
                {/* Subtle hover shine */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100 motion-reduce:hidden"
                />
                <span className="relative">Join YAC Now</span>
                <FaArrowRight className="relative text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Motion.div>
            <Motion.div
              whileHover={animReduced ? undefined : { scale: 1.03 }}
              whileTap={animReduced ? undefined : { scale: 0.98 }}
              transition={btnSpring}
            >
              <Link
                to="/courses"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border-2 border-gray-900/90 bg-white px-9 py-3.5 text-base font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-900"
              >
                <FaPlay className="text-[0.7rem] text-gray-700 transition-transform duration-300 group-hover:scale-110" />
                Explore Courses
              </Link>
            </Motion.div>
          </Motion.div>

          {/* Refined trust micro-line — sits below the CTAs as social proof */}
          <Motion.div
            variants={textVariants.item}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:mt-8 sm:text-[12px]"
            aria-label="YAC at a glance"
          >
            <span className="inline-flex items-center gap-1.5">
              <FaStar className="text-amber-500" aria-hidden />
              <span className="text-gray-700">4.9</span>
              <span className="text-gray-400">Google</span>
            </span>
            <span aria-hidden className="h-3 w-px bg-gray-300" />
            <span>
              <span className="text-gray-700">16+</span> Years in Aligarh
            </span>
            <span aria-hidden className="h-3 w-px bg-gray-300" />
            <span>
              <span className="text-gray-700">80,000+</span> Students Mentored
            </span>
          </Motion.div>
          {/* Quick portals — third CTA matching the row above */}
          <Motion.div
            variants={textVariants.item}
            className="mt-4 flex justify-center sm:mt-5"
          >
            <Motion.div
              whileHover={animReduced ? undefined : { scale: 1.035 }}
              whileTap={animReduced ? undefined : { scale: 0.97 }}
              transition={btnSpring}
            >
              <Link
                to="/student-portals"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-9 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(220,53,69,0.6)] transition hover:shadow-[0_18px_36px_-12px_rgba(220,53,69,0.8)] sm:w-auto"
                style={{ backgroundColor: RED }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100 motion-reduce:hidden"
                />
                <FaExternalLinkAlt className="relative text-xs" aria-hidden />
                <span className="relative">Student Portals</span>
                <span className="relative text-sm text-white/70">—</span>
                <span className="relative text-sm text-white/80">
                  AMU · JMI · BHU · CUET · CA &amp; more
                </span>
                <FaArrowRight className="relative text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Motion.div>
          </Motion.div>
        </Motion.div>

        {/* Cards-only layout (no dark panel/background) */}
        <div className="relative mx-auto mt-12 md:mt-14 max-w-7xl px-1 sm:px-2 pb-8 md:pb-12">
          <div ref={imageRowRef}>
            <div
              ref={imageRowParallaxRef}
              className="relative min-h-[210px] sm:min-h-[360px] md:min-h-[460px]"
            >
              <div className="relative z-[2] pt-14 sm:pt-14 md:pt-20">
                <div className="flex justify-center items-end gap-0 sm:gap-1.5 md:gap-2 min-h-[185px] sm:min-h-[330px] md:min-h-[420px]">
                  {visibleFanImages.map((item, i) => {
                    const Card = animReduced ? "div" : Motion.div;
                    const cardProps = animReduced
                      ? {}
                      : {
                          initial: "hidden",
                          animate: "visible",
                          variants: fanStagger(i),
                        };
                    return (
                    <Card
                      key={`${item.src}-${i}`}
                      {...cardProps}
                      className={`relative -mx-1.5 sm:-mx-3.5 md:-mx-5 w-[38%] min-w-[122px] sm:min-w-[210px] md:min-w-[270px] max-w-[160px] sm:max-w-[320px] ${
                        i === Math.floor(visibleFanImages.length / 2)
                          ? "scale-[1.03] md:scale-[1.08]"
                          : ""
                      } ${item.className}`}
                    >
                      <Motion.div
                        className="rounded-[1.35rem] overflow-hidden border border-white/40 bg-white shadow-[0_24px_44px_-24px_rgba(17,24,39,0.5)] ring-1 ring-slate-900/5"
                        whileHover={
                          animReduced
                            ? undefined
                            : {
                                y: -8,
                                transition: {
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 20,
                                },
                              }
                        }
                      >
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={item.src.replace(/\.(png|jpe?g)$/i, ".webp")}
                          />
                          <img
                            src={item.src}
                            sizes="(max-width: 640px) 38vw, (max-width: 1024px) 30vw, 270px"
                            alt={item.alt}
                            width={320}
                            height={420}
                            className="w-full h-[148px] sm:h-[270px] md:h-[350px] object-cover block"
                            decoding="async"
                            loading={
                              i === Math.floor(visibleFanImages.length / 2)
                                ? "eager"
                                : "lazy"
                            }
                            fetchPriority={
                              i === Math.floor(visibleFanImages.length / 2)
                                ? "high"
                                : "auto"
                            }
                          />
                        </picture>
                        {/* Footer metadata removed: image-only cards */}
                      </Motion.div>
                    </Card>
                  );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
