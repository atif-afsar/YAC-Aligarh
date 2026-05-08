import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
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

/* ----------------------------------------------------------------- */
/* Card image header                                                  */
/* Uses the batch poster from /public/batch when available, else      */
/* falls back to a brand-matched gradient placeholder so every card   */
/* has the same visual rhythm.                                        */
/* ----------------------------------------------------------------- */
function CardImageHeader({ course }) {
  return (
    <div className="relative aspect-[1024/576] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100/60">
      {course.image ? (
        <img
          src={course.image}
          alt={course.imageAlt ?? `${course.title} batch poster`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #C41E1E 0%, #A71616 55%, #7F1212 100%)",
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
          <FaGraduationCap className="relative mb-2 text-3xl text-white/90" />
          <span
            className="relative text-base font-bold leading-tight tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {course.title}
          </span>
          <span className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Yasir Ali Classes
          </span>
        </div>
      )}
    </div>
  );
}

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
            <AnimatePresence mode="sync">
              {courses.map((course, index) => (
                <Motion.li
                  key={course.id}
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
                  <article className="group h-full flex flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-[0_8px_28px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-14px_rgba(0,0,0,0.16)]">
                    <CardImageHeader course={course} />

                    <div className="flex flex-1 flex-col p-6 md:p-7">
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
                      <h3 className="mt-4 text-xl font-bold text-gray-900 tracking-tight">
                        {course.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                        {course.description}
                      </p>
                      <ul className="mt-5 space-y-2.5 flex-1">
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
                      <Link
                        to="/admissions"
                        className="mt-6 inline-flex w-full items-center justify-center gap-1.5 py-3 rounded-xl border border-gray-200 text-[#DC3545] font-semibold text-sm hover:bg-rose-50 hover:border-[#DC3545]/40 transition-colors"
                      >
                        Enroll Now <span aria-hidden>→</span>
                      </Link>
                    </div>
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
