import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { end: 5000, suffix: "+", label: "Students Mentored" },
  { end: 200, suffix: "+", label: "Final Selections" },
  { end: 10, suffix: "+", label: "Years Experience" },
];

function StatItem({ end, suffix, label, index }) {
  const numRef = useRef(null);
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const el = numRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;

    const obj = { val: 0 };
    const tween = gsap.fromTo(
      obj,
      { val: 0 },
      {
        val: end,
        duration: 2.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          const v = Math.round(obj.val);
          el.textContent =
            end >= 1000 ? v.toLocaleString("en-IN") : String(v);
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end]);

  return (
    <div
      ref={wrapRef}
      className="text-center px-4"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tabular-nums tracking-tight">
        <span ref={numRef}>0</span>
        <span>{suffix}</span>
      </p>
      <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#F9F9F9] border-y border-gray-100/80 py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y divide-gray-200/80 md:divide-y-0 md:divide-x">
          {STATS.map((s, i) => (
            <StatItem
              key={s.label}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
