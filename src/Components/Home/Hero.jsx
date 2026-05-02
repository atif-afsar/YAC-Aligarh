import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaPlay, FaStar } from "react-icons/fa";
import HeroParticles from "./HeroParticles";

const RED = "#DC3545";

gsap.registerPlugin(ScrollTrigger);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Stream pills shown under the hero H1 - defines YAC's full coaching scope. */
const STREAM_PILLS = [
  "Commerce",
  "Science",
  "Junior 5-10",
  "CA",
  "CMA",
  "B.Com",
  "Class 11-12",
  "Entrance",
];

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
  const [isMobile, setIsMobile] = useState(false);
  const textVariants = useMemo(() => buildTextVariants(reduced), [reduced]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const visibleFanImages = useMemo(
    () =>
      FAN_IMAGES.filter((_, i) => {
        if (!isMobile) return true;
        return i !== 0 && i !== 4;
      }),
    [isMobile]
  );

  useLayoutEffect(() => {
    if (reduced || isMobile || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const layer = squiggleLayerRef.current;
      const row = imageRowRef.current;
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

      if (row && sectionRef.current) {
        gsap.fromTo(
          row,
          { y: 0 },
          {
            y: -56,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              // 1:1 with scroll position — avoids double-smoothing vs Lenis (scrub lag reads as jitter)
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  useEffect(() => {
    if (reduced || isMobile || !sectionRef.current) return;

    const section = sectionRef.current;
    const layer = squiggleLayerRef.current;
    const rowParallax = imageRowParallaxRef.current;
    if (!layer) return;

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

    const onTouch = (e) => {
      if (e.touches.length === 0) return;
      const t = e.touches[0];
      const r = section.getBoundingClientRect();
      pointerRef.current = {
        x: t.clientX - r.left,
        y: t.clientY - r.top,
        active: true,
      };
    };
    const onTouchEnd = () => {
      pointerRef.current = { x: 0, y: 0, active: false };
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    section.addEventListener("touchmove", onTouch, { passive: true });
    section.addEventListener("touchstart", onTouch, { passive: true });
    section.addEventListener("touchend", onTouchEnd);
    section.addEventListener("touchcancel", onTouchEnd);
    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      section.removeEventListener("touchmove", onTouch);
      section.removeEventListener("touchstart", onTouch);
      section.removeEventListener("touchend", onTouchEnd);
      section.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [reduced, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-28 pb-16 md:pb-24"
    >
      <div
        ref={squiggleLayerRef}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden will-change-transform"
        aria-hidden
      >
        <HeroSquiggles />
      </div>

      <HeroParticles
        sectionRef={sectionRef}
        pointerRef={pointerRef}
        reduced={reduced}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="mx-auto max-w-4xl px-1 text-center sm:px-2"
          initial={false}
          animate="visible"
          variants={textVariants.container}
        >
          <Motion.p
            variants={textVariants.item}
            className="font-serif-display text-[11px] font-medium uppercase tracking-[0.22em] text-red-700 sm:text-sm sm:tracking-[0.26em] md:text-lg"
          >
            Yasir Ali Classes · YAC · Aligarh
          </Motion.p>

          <Motion.h1
            className="mt-4 text-[1.95rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:mt-5 sm:text-4xl sm:leading-[1.1] md:mt-6 md:text-5xl lg:text-[2.95rem]"
            variants={textVariants.headline}
          >
            <Motion.span
              className="block"
              variants={textVariants.h1line}
            >
              Aligarh's Most Trusted
            </Motion.span>
            <Motion.span
              className="mt-2 block sm:mt-2.5"
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

          {/* Trust strip - social proof right under the H1 */}
          <Motion.div
            variants={textVariants.item}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 sm:mt-6 sm:text-[12px]"
            aria-label="YAC at a glance"
          >
            <span className="inline-flex items-center gap-1.5 text-amber-600">
              <FaStar className="text-amber-500" aria-hidden />
              4.9★ Google
            </span>
            <span aria-hidden className="text-gray-300">·</span>
            <span>16+ Years in Aligarh</span>
            <span aria-hidden className="text-gray-300">·</span>
            <span>80,000+ Students Mentored</span>
          </Motion.div>

          {/* Stream pills - defines the full scope of YAC coaching */}
          <Motion.div
            variants={textVariants.item}
            className="mt-3.5 flex flex-wrap items-center justify-center gap-1.5 sm:mt-4 sm:gap-2"
            aria-label="Programs at Yasir Ali Classes"
          >
            {STREAM_PILLS.map((label) => (
              <span
                key={label}
                className="inline-flex rounded-full border border-red-100 bg-rose-50/70 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-red-700 sm:px-3 sm:text-xs"
              >
                {label}
              </span>
            ))}
          </Motion.div>

          {/* Visually-hidden SEO context for screen readers + crawlers */}
          <span className="sr-only">
            Yasir Ali Classes (YAC) is the best coaching in Aligarh for Commerce,
            Science, Junior (Classes 5-10), CA Foundation, CMA, B.Com, Class
            11-12 and Entrance exams (BBA, MBA, BA-LLB / CLAT). 16+ years of
            mentorship, 80,000+ students mentored and a 4.9★ Google rating.
            Online and offline batches available.
          </span>

          <Motion.p
            className="mx-auto mt-5 max-w-[21.5rem] text-[1.1rem] font-serif-display italic leading-[1.45] text-gray-800 sm:mt-6 sm:max-w-2xl sm:text-xl md:text-2xl"
            aria-label="YAC tagline"
            variants={textVariants.line}
          >
            We Debit Efforts, to Credit Your Success
          </Motion.p>

          <Motion.p
            className="mx-auto mt-5 max-w-[22rem] text-[15px] leading-[1.8] text-gray-600 sm:mt-6 sm:max-w-2xl sm:text-lg"
            variants={textVariants.line}
          >
            From our roots in Aligarh to learners nationwide, YAC brings
            structured mentorship in Commerce and Science, updated material, and
            exam-focused teaching online and offline.
          </Motion.p>

          <Motion.div
            className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            variants={textVariants.item}
          >
            <Motion.div
              whileHover={reduced ? undefined : { scale: 1.04 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              transition={btnSpring}
            >
              <Link
                to="/Admissions"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-9 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95"
                style={{ backgroundColor: RED }}
              >
                Join YAC Now
                <FaArrowRight className="text-sm" />
              </Link>
            </Motion.div>
            <Motion.div
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              transition={btnSpring}
            >
              <Link
                to="/courses"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border-2 border-gray-900 bg-white px-9 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                <Motion.span
                  animate={
                    reduced
                      ? undefined
                      : { x: [0, 2, 0] }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center"
                >
                  <FaPlay className="text-sm text-gray-700" />
                </Motion.span>
                Explore Courses
              </Link>
            </Motion.div>
          </Motion.div>
        </Motion.div>

        {/* Cards-only layout (no dark panel/background) */}
        <div className="relative mx-auto mt-12 md:mt-14 max-w-7xl px-1 sm:px-2 pb-8 md:pb-12">
          <div ref={imageRowRef} className="will-change-transform">
            <div
              ref={imageRowParallaxRef}
              className="relative min-h-[210px] sm:min-h-[360px] md:min-h-[460px]"
            >
              <div className="relative z-[2] pt-14 sm:pt-14 md:pt-20">
                <div className="flex justify-center items-end gap-0 sm:gap-1.5 md:gap-2 min-h-[185px] sm:min-h-[330px] md:min-h-[420px]">
                  {visibleFanImages.map((item, i) => (
                    <Motion.div
                      key={`${item.src}-${i}`}
                      initial="hidden"
                      animate="visible"
                      variants={fanStagger(i)}
                      className={`relative -mx-1.5 sm:-mx-3.5 md:-mx-5 w-[38%] min-w-[122px] sm:min-w-[210px] md:min-w-[270px] max-w-[160px] sm:max-w-[320px] ${
                        i === Math.floor(visibleFanImages.length / 2)
                          ? "scale-[1.03] md:scale-[1.08]"
                          : ""
                      } ${item.className}`}
                    >
                      <Motion.div
                        className="rounded-[1.35rem] overflow-hidden border border-white/40 bg-white shadow-[0_24px_44px_-24px_rgba(17,24,39,0.5)] ring-1 ring-slate-900/5"
                        whileHover={
                          reduced
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
                            srcSet={`${item.src} 1x`}
                            sizes="(max-width: 640px) 38vw, (max-width: 1024px) 30vw, 270px"
                            alt={item.alt}
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
                    </Motion.div>
                  ))}
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
