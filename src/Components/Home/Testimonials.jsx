import { useLayoutEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    quote:
      "The faculty made CA Foundation feel achievable—weekly mocks and doubt labs were a game changer.",
    name: "Aarav Sharma",
    role: "CA Foundation",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&face",
  },
  {
    quote:
      "Personal attention even in a batch setting. I finally understood costing the way examiners want it.",
    name: "Priya Verma",
    role: "CA Intermediate",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&face",
  },
  {
    quote:
      "Class 12 boards plus early CA orientation—saved me a year of wandering online.",
    name: "Kabir Khan",
    role: "Class 12 Commerce",
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
    <section ref={rootRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Student Success Stories
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Voices from learners who committed to the process—and saw the shift.
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {STORIES.map((s) => (
            <Motion.article
              key={s.name}
              className="testimonial-card bg-[#F9F9F9] rounded-2xl p-8 border border-gray-100 shadow-sm"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <div className="flex gap-0.5 text-[#DC3545] mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed min-h-[5rem]">
                “{s.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={s.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
                />
                <div>
                  <p className="font-semibold text-gray-900">{s.name}</p>
                  <p className="text-sm text-gray-500">{s.role}</p>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
