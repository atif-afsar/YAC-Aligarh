import { motion as Motion } from "framer-motion";
import { COURSE_FILTERS } from "./courseData";

export default function CoursesHero({ active, onChange }) {
  return (
    <section className="bg-white pt-28 pb-12 md:pb-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <Motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Explore Our{" "}
          <span className="text-[#DC3545]">Courses</span>
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Choose the right path for your success with our curated professional
          curriculum and world-class faculty.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Course categories"
        >
          {COURSE_FILTERS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(id)}
                className={[
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-[#DC3545] text-white shadow-md shadow-red-500/25"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}
