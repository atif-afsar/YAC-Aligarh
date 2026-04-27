import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { end: 80000, suffix: "+", label: "Students Mentored" },
  { end: 2000, suffix: "+", label: "Final Selections" },
  { end: 15, suffix: "+", label: "Years Experience" },
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
    <article
      ref={wrapRef}
      className="group relative overflow-hidden rounded-2xl border border-red-100/80 bg-white px-5 py-8 text-center shadow-[0_8px_26px_-16px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(220,53,69,0.32)] sm:px-6 sm:py-9"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-22px] top-[-24px] h-24 w-24 rounded-full bg-red-100/70 blur-2xl"
      />
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#DC3545] tabular-nums tracking-tight">
        <span ref={numRef}>0</span>
        <span>{suffix}</span>
      </p>
      <p className="mt-2 text-sm sm:text-base font-semibold uppercase tracking-[0.08em] text-[#b02a37]">
        {label}
      </p>
      <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#DC3545]/80 transition-all duration-300 group-hover:w-16" />
    </article>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red-50/35 to-white py-14 md:py-16">
      <div
        className="pointer-events-none absolute -left-24 top-8 h-52 w-52 rounded-full bg-red-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-6 h-44 w-44 rounded-full bg-rose-200/30 blur-3xl"
        aria-hidden
      />
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
