import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaBullseye,
  FaCalendarCheck,
  FaChartLine,
  FaFlask,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const RED = "#DC3545";
const RED_DARK = "#b02a37";
const RED_SOFT = "rgba(220, 53, 69, 0.09)";

/** Four institute streams—unified red theme to match YAC brand. */
const STREAMS = [
  {
    id: "commerce",
    pill: "Commerce",
    title: "Commerce",
    intro: "From boards to professional papers",
    blurb:
      "CA, CS, B.Com & 11th–12th Commerce with concept-first classes, industry-aligned notes, and test series that match the real paper.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    Icon: FaChartLine,
  },
  {
    id: "science",
    pill: "Science",
    title: "Science",
    intro: "Clear concepts for every chapter",
    blurb:
      "Physics, Chemistry, Biology & Maths tracks with lab-style problem solving, board-focused drills, and revision that turns doubt into speed.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc3b0d68e?w=800&h=500&fit=crop",
    Icon: FaFlask,
  },
  {
    id: "entrance",
    pill: "Entrance",
    title: "Entrance",
    intro: "Strategy for competitive lanes",
    blurb:
      "CUET, law, management & other entrance programs—pattern analysis, timed mocks, and mentor feedback so you own exam day, not the other way around.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    Icon: FaBullseye,
  },
  {
    id: "regular",
    pill: "Regular",
    title: "Regular",
    intro: "Steady batches, strong foundations",
    blurb:
      "Year-round school-style batches for 5th–10th and bridge programs—disciplined pace, regular assessments, and doubt support that keeps families in the loop.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    Icon: FaCalendarCheck,
  },
];

export default function CoursesSection() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-card", {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-rose-50/30 py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-red-200/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-rose-300/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-800">
              What we teach
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Commerce · Science ·{" "}
              <span
                className="font-serif-display italic"
                style={{ color: RED }}
              >
                Entrance
              </span>{" "}
              · Regular
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Four clear streams so you can pick a rhythm that matches your class,
              your exam, and your ambition—without the noise.
            </p>
          </div>
          <Link
            to="/courses"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-900/20 transition hover:opacity-[0.96] lg:self-auto"
            style={{ backgroundColor: RED }}
          >
            Browse full catalogue
            <FaArrowRight className="text-xs transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {STREAMS.map((s) => {
            const Icon = s.Icon;
            return (
              <Motion.article
                key={s.id}
                className="course-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-red-100/90 bg-white shadow-[0_2px_24px_rgba(180,30,50,0.06)] transition-shadow duration-300 hover:border-red-200 hover:shadow-[0_20px_44px_-14px_rgba(180,40,50,0.18)] border-l-[3px] border-l-[#DC3545]"
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 380, damping: 26 },
                }}
                style={{
                  background: `linear-gradient(180deg, #ffffff 0%, ${RED_SOFT} 100%)`,
                }}
              >
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <img
                    src={s.img}
                    alt=""
                    className="h-full w-full object-cover transition duration-600 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-red-950/75 via-red-950/15 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute left-3 top-3">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-sm sm:text-xs"
                      style={{ backgroundColor: `${RED}ee` }}
                    >
                      <Icon className="text-[0.7rem] sm:text-xs" />
                      {s.pill}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {s.title}
                  </h3>
                  <p
                    className="mt-1 text-xs font-semibold sm:text-sm"
                    style={{ color: RED_DARK }}
                  >
                    {s.intro}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {s.blurb}
                  </p>
                  <Link
                    to="/courses"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:opacity-90"
                    style={{ color: RED }}
                  >
                    Explore stream
                    <FaArrowRight className="text-xs opacity-90 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
