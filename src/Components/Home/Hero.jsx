import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaPlay } from "react-icons/fa";
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

/** Showcase cards inspired by stacked gaming-card layout */
const FAN_IMAGES = [
  {
    src: "/hero/img1.jpeg",
    alt: "Commerce batch performance highlights",
    title: "Commerce Pro",
    subtitle: "Class 11-12",
    score: "4.8",
    className:
      "-rotate-[14deg] translate-y-6 sm:translate-y-7 md:translate-y-8 z-[1]",
  },
  {
    src: "/hero/img5.jpeg",
    alt: "Science learning group sessions",
    title: "Science Edge",
    subtitle: "XI-XII",
    score: "4.9",
    className:
      "-rotate-[7deg] translate-y-2 sm:translate-y-3 md:translate-y-4 z-[2]",
  },
  {
    src: "/hero/img3.jpeg",
    alt: "Top achievers and rankers",
    title: "Top Rankers",
    subtitle: "YAC Results",
    score: "5.0",
    className:
      "rotate-0 -translate-y-6 sm:-translate-y-8 md:-translate-y-10 z-[5]",
  },
  {
    src: "/hero/img4.jpeg",
    alt: "Students solving mock test papers",
    title: "Mock Master",
    subtitle: "Test Series",
    score: "4.7",
    className:
      "rotate-[7deg] translate-y-2 sm:translate-y-3 md:translate-y-4 z-[2]",
  },
  {
    src: "/hero/img2.jpeg",
    alt: "Mentorship and personal guidance at YAC",
    title: "Mentor Plus",
    subtitle: "Personal Care",
    score: "4.8",
    className:
      "rotate-[14deg] translate-y-6 sm:translate-y-7 md:translate-y-8 z-[1]",
  },
];

function HeroSquiggles() {
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
}

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
      hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease: contentEase },
      },
    },
    line: {
      hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.72, ease: contentEase },
      },
    },
    h1line: {
      hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.78, ease: contentEase },
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

export default function Hero() {
  const sectionRef = useRef(null);
  const squiggleLayerRef = useRef(null);
  const imageRowRef = useRef(null);
  const imageRowParallaxRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const reduced = usePrefersReducedMotion();
  const textVariants = buildTextVariants(reduced);

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;

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
              scrub: 1.1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

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

    const onMove = (e) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - left,
        y: e.clientY - top,
        active: true,
      };
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      xTo(x * 32);
      yTo(y * 24);
      if (xRow && yRow) {
        xRow(x * 10);
        yRow(y * 8);
      }
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
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      section.removeEventListener("touchmove", onTouch);
      section.removeEventListener("touchstart", onTouch);
      section.removeEventListener("touchend", onTouchEnd);
      section.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [reduced]);

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
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants.container}
        >
          <Motion.p
            variants={textVariants.item}
            className="font-serif-display text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.28em] text-red-700"
          >
            Yasir Ali Classes · YAC
          </Motion.p>

          <Motion.h1
            className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-bold text-gray-900 leading-[1.1] tracking-tight"
            variants={textVariants.headline}
          >
            <Motion.span
              className="block"
              variants={textVariants.h1line}
            >
              A name students across
            </Motion.span>
            <Motion.span
              className="block mt-1.5 sm:mt-2"
              variants={textVariants.h1line}
            >
              <span
                className="font-serif-display italic font-semibold"
                style={{ color: RED }}
              >
                India
              </span>
              <span className="text-gray-800">
                {" "}
                trust for Commerce & Science
              </span>
            </Motion.span>
          </Motion.h1>

          <Motion.p
            className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl font-serif-display italic text-gray-800 leading-snug max-w-2xl mx-auto"
            aria-label="YAC tagline"
            variants={textVariants.line}
          >
            We Debit Efforts, to Credit Your Success
          </Motion.p>

          <Motion.p
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            variants={textVariants.line}
          >
            From our roots in Aligarh to learners nationwide, YAC brings
            structured mentorship in Commerce and Science, updated material, and
            exam-focused teaching online and offline.
          </Motion.p>

          <Motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
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
              className="relative min-h-[210px] sm:min-h-[360px] md:min-h-[460px] will-change-transform"
            >
              <div className="relative z-[2] pt-14 sm:pt-14 md:pt-20">
                <div className="flex justify-center items-end gap-0 sm:gap-1.5 md:gap-2 min-h-[185px] sm:min-h-[330px] md:min-h-[420px]">
                  {FAN_IMAGES.map((item, i) => (
                    <Motion.div
                      key={`${item.src}-${i}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.25, margin: "-40px" }}
                      variants={fanStagger(i)}
                      className={`relative -mx-1.5 sm:-mx-3.5 md:-mx-5 w-[38%] min-w-[122px] sm:min-w-[210px] md:min-w-[270px] max-w-[160px] sm:max-w-[320px] ${i === 2 ? "scale-[1.03] md:scale-[1.08]" : ""} ${
                        i === 0 || i === 4 ? "hidden sm:block" : ""
                      } ${item.className}`}
                    >
                      <Motion.div
                        className="rounded-[1.35rem] overflow-hidden border border-white/40 bg-white shadow-[0_28px_60px_-26px_rgba(17,24,39,0.58)] ring-1 ring-slate-900/5 backdrop-blur-sm"
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
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-[148px] sm:h-[270px] md:h-[350px] object-cover block"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
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
