import { useLayoutEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    quote:
      "I was preparing for the AMU B.Com entrance. YAC mock tests and analysis sessions improved my speed and helped me stay confident in the final paper.",
    name: "Aman Khan",
    role: "AMU Entrance · Aligarh",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&face",
  },
  {
    quote:
      "I got the concept clarity required for CA Foundation here. The faculty addressed every doubt and explained each topic from an exam-focused perspective.",
    name: "Sneha Agarwal",
    role: "CA Foundation · Kanpur",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&face",
  },
  {
    quote:
      "The Science batch followed a disciplined schedule. Regular tests and personal feedback kept my board preparation consistently on track.",
    name: "Harshita Singh",
    role: "Class 12 Science · Lucknow",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&face",
  },
  {
    quote:
      "As a parent, I received monthly progress updates. Attendance, test performance, and weak topics were clearly shared, and that transparency was very useful.",
    name: "Shahid Ali",
    role: "Parent Review · Delhi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&face",
  },
];

export default function Testimonials() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
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
      className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/35 to-white py-16 sm:py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-red-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-rose-200/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Real voices
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Student Success Stories
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Feedback from students and parents across India learning with YAC.
          </p>
        </Motion.div>

        <div className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
          {STORIES.map((s) => (
            <Motion.article
              key={s.name}
              className="testimonial-card snap-start min-w-[86%] sm:min-w-[62%] md:min-w-0 bg-white rounded-2xl p-6 sm:p-7 border border-red-100/80 shadow-sm hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5 text-[#DC3545]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-100 rounded-full px-2.5 py-1">
                  Verified
                </span>
              </div>
              <p className="text-gray-700 italic leading-relaxed min-h-[7rem] sm:min-h-[8rem] text-sm sm:text-base">
                “{s.quote}”
              </p>
              <div className="mt-7 flex items-center gap-3.5">
                <img
                  src={s.avatar}
                  alt={s.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white shadow"
                />
                <div>
                  <p className="font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{s.role}</p>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>

        <div className="mt-3 text-center md:hidden">
          <p className="text-xs text-gray-500">Swipe to see more reviews</p>
        </div>
      </div>
    </section>
  );
}
