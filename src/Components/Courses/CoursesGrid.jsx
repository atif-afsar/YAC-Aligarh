import { useMemo } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { BADGE_CLASSES, COURSES } from "./courseData";

export default function CoursesGrid({ filter }) {
  const visible = useMemo(() => {
    if (filter === "all") return COURSES;
    return COURSES.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <section
      className="relative py-14 md:py-20 px-6 sm:px-8 lg:px-10 overflow-hidden"
      style={{
        backgroundColor: "#f4f4f5",
        backgroundImage:
          "linear-gradient(to right, rgba(161, 161, 170, 0.22) 1px, transparent 1px)",
        backgroundSize: "2.5rem 100%",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-[1]">
        {visible.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            No courses in this category yet.
          </p>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 list-none p-0 m-0">
            <AnimatePresence mode="popLayout">
              {visible.map((course, index) => (
                <Motion.li
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full"
                >
                  <article className="h-full flex flex-col bg-white rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-gray-100/80 p-7 md:p-8 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                    <span
                      className={`inline-flex self-start px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold tracking-wide uppercase ${BADGE_CLASSES[course.badgeTone]}`}
                    >
                      {course.badge}
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-gray-900 tracking-tight">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {course.description}
                    </p>
                    <ul className="mt-6 space-y-3 flex-1">
                      {course.features.map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center">
                            <FaCheck className="text-[10px] text-[#DC3545]" />
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="mt-8 w-full py-3 rounded-xl border border-gray-200 text-[#DC3545] font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                      Enroll Now
                    </button>
                  </article>
                </Motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </section>
  );
}
