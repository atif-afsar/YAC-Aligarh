import { useLayoutEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLightbulb, FaDumbbell, FaFlagCheckered } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: FaLightbulb,
    title: "Concept clarity",
    text: "Structured explanations and visual breakdowns so fundamentals stick.",
  },
  {
    icon: FaDumbbell,
    title: "Applied practice",
    text: "Question banks, worksheets, and in-class drills mapped to the exam.",
  },
  {
    icon: FaFlagCheckered,
    title: "Exam sprint",
    text: "Mocks, analysis, and time-management coaching in the final stretch.",
  },
];

export default function Methodology() {
  const lineRef = useRef(null);
  const mobileLineRef = useRef(null);
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      if (mobileLineRef.current) {
        gsap.fromTo(
          mobileLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.05,
            ease: "power2.inOut",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Motion.div
        className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-red-100/40 blur-3xl"
        aria-hidden
        animate={{ x: [-8, 10, -8], y: [0, -10, 0], opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-[#DC3545] text-sm font-bold uppercase tracking-wider">
            Your learning path
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            From first class to final paper
          </h2>
        </Motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-6">
          <div
            ref={mobileLineRef}
            className="md:hidden absolute left-8 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-[#DC3545]/10 via-[#DC3545] to-[#DC3545]/10 origin-top"
            aria-hidden
          />
          <div
            ref={lineRef}
            className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#DC3545]/20 via-[#DC3545] to-[#DC3545]/20 rounded-full origin-left"
            aria-hidden
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                className="relative rounded-2xl border border-red-100/70 bg-white/95 p-5 text-left shadow-sm sm:p-6 md:border-none md:bg-transparent md:p-2 md:text-center md:shadow-none"
              >
                <div className="inline-flex w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#DC3545]/10 text-[#DC3545] items-center justify-center mb-4 sm:mb-5 ring-4 ring-white ml-10 md:ml-0">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.text}
                </p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
