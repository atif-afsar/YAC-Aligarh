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
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
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
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#DC3545] text-sm font-bold uppercase tracking-wider">
            Your learning path
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            From first class to final paper
          </h2>
        </Motion.div>

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-[#DC3545]/10 text-[#DC3545] items-center justify-center mb-5 ring-4 ring-white">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
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
