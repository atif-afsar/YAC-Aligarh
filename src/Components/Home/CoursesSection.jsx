import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const RED = "#DC3545";
const RED_DARK = "#b02a37";

/** Four institute streams—unified red theme to match YAC brand. */
const STREAMS = [
  {
    id: "commerce",
    title: "Commerce",
    intro: "From boards to professional papers",
    blurb:
      "CA, CS, B.Com and 11th-12th Commerce tracks with concept-first classes and exam-ready test rhythm.",
    img: "/courses/commerce.jpeg",
    points: ["CA / CS Guidance", "Accounts Mastery", "Board + Pro Prep"],
    stats: [
      { value: "50K+", label: "Commerce Learners" },
      { value: "25+", label: "Commerce Batches" },
      { value: "98%", label: "Board Results" },
    ],
  },
  {
    id: "science",
    title: "Science",
    intro: "Clear concepts for every chapter",
    blurb:
      "Physics, Chemistry, Biology and Maths streams with strong concept coverage and structured revision support.",
    img: "/courses/science.jpeg",
    points: ["Numerical Practice", "Board Drills", "Weekly Tests"],
    stats: [
      { value: "35K+", label: "Science Learners" },
      { value: "40+", label: "Active Batches" },
      { value: "95%", label: "Exam Success" },
    ],
  },
  {
    id: "entrance",
    title: "Entrance",
    intro: "Strategy for competitive lanes",
    blurb:
      "CUET, law, management and other exam programs with strategy sessions, timed mocks and feedback cycles.",
    img: "/courses/entrance.jpeg",
    points: ["Pattern Analysis", "Timed Mocks", "Mentor Reviews"],
    stats: [
      { value: "45K+", label: "Aspirants Trained" },
      { value: "30+", label: "Exam Tracks" },
      { value: "92%", label: "Selection Rate" },
    ],
  },
  {
    id: "regular",
    title: "Regular",
    intro: "Steady batches, strong foundations",
    blurb:
      "Year-round batches for 5th-10th with disciplined pace, regular assessments and close doubt support.",
    img: "/courses/regular.jpeg",
    points: ["Foundation Building", "Parent Updates", "Doubt Sessions"],
    stats: [
      { value: "80K+", label: "School Learners" },
      { value: "50+", label: "Foundation Batches" },
      { value: "96%", label: "Academic Growth" },
    ],
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
            <p
              className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-800"
              aria-label="What we teach"
            >
              What we teach
            </p>
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

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-7">
          {STREAMS.map((s) => {
            const isCommerce = s.id === "commerce";
            return (
              <Motion.article
                key={s.id}
                className={`course-card group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-5 sm:p-6 transition-shadow duration-300 ${
                  isCommerce
                    ? "border-red-200/90 shadow-[0_14px_36px_-14px_rgba(220,53,69,0.34)]"
                    : "border-red-100/80 shadow-[0_6px_26px_-16px_rgba(17,24,39,0.18)] hover:shadow-[0_18px_40px_-20px_rgba(220,53,69,0.2)]"
                }`}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 380, damping: 26 },
                }}
              >
                {isCommerce ? (
                  <div
                    className="pointer-events-none absolute right-[-40px] top-16 h-44 w-44 rounded-full blur-3xl"
                    style={{ backgroundColor: "rgba(220, 53, 69, 0.28)" }}
                    aria-hidden
                  />
                ) : null}

                <div className="relative z-[1]">
                  <div className="h-44 w-full overflow-hidden rounded-2xl border border-red-100 bg-red-50 sm:h-48 md:h-52">
                    <img
                      src={s.img}
                      alt={`${s.title} stream`}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p
                    className="mt-2.5 text-xs font-semibold uppercase tracking-[0.08em]"
                    style={{ color: RED_DARK }}
                  >
                    {s.intro}
                  </p>
                </div>

                <div className="relative z-[1] mt-4 flex flex-1 flex-col">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {s.blurb}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-red-100/80 pt-4 text-sm text-gray-700">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-red-100/80 pt-4">
                    {s.stats.map((stat) => (
                      <div key={`${s.id}-${stat.label}`}>
                        <p className="text-base font-bold" style={{ color: RED }}>
                          {stat.value}
                        </p>
                        <p className="text-[11px] text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

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
