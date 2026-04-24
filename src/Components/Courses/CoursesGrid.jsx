import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { BADGE_CLASSES } from "./courseData";

const TYPE_LABEL = {
  "school-prep": "School Prep",
  entrance: "Entrance",
  professional: "Professional",
  graduation: "Graduation",
};

const CLASS_LABEL = {
  junior: "Junior (5–10)",
  senior: "Senior (11–12)",
  postK12: "Post-12",
};

const STREAM_LABEL = {
  science: "Science",
  commerce: "Commerce",
  humanities: "Humanities",
};

/**
 * @param {object} props
 * @param {import('./courseData').CourseCard[]} props.courses
 */
export default function CoursesGrid({ courses }) {
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
        {courses.length === 0 ? (
          <Motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-md rounded-2xl border border-gray-200/80 bg-white px-8 py-14 text-center shadow-sm"
            role="status"
            aria-live="polite"
          >
            <p className="text-lg font-semibold text-gray-900">No courses found</p>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Try a different class, stream, or course type, or set filters to
              &quot;All&quot; to see every programme.
            </p>
          </Motion.div>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 list-none p-0 m-0">
            <AnimatePresence mode="popLayout">
              {courses.map((course, index) => (
                <Motion.li
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full"
                >
                  <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white p-7 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-14px_rgba(0,0,0,0.16)] md:p-8">
                    <span
                      className={`inline-flex self-start px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold tracking-wide uppercase ${BADGE_CLASSES[course.badgeTone]}`}
                    >
                      {course.badge}
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-[#DC3545]">
                        {TYPE_LABEL[course.courseType]}
                      </span>
                      {course.classLevels.map((level) => (
                        <span
                          key={level}
                          className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700"
                        >
                          {CLASS_LABEL[level]}
                        </span>
                      ))}
                      {course.streams.map((stream) => (
                        <span
                          key={stream}
                          className="inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700"
                        >
                          {STREAM_LABEL[stream]}
                        </span>
                      ))}
                    </div>
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
