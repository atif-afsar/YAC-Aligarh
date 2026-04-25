import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { LEAD_FACULTY } from "./facultyData";

const RED = "#DC3545";

export default function FacultyHero() {
  return (
    <section
      className="relative pt-28 pb-16 md:pb-24 px-6 sm:px-8 lg:px-10 overflow-hidden"
      style={{
        backgroundColor: "#f4f4f5",
        backgroundImage:
          "linear-gradient(to right, rgba(161, 161, 170, 0.2) 1px, transparent 1px)",
        backgroundSize: "2.5rem 100%",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-[1]">
        <div className="text-center max-w-3xl mx-auto">
          <Motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
            style={{ color: RED }}
          >
            World-class educators
          </Motion.p>
          <Motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight"
          >
            Meet Our Expert Faculty
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed"
          >
            Learn from mentors who combine deep subject mastery with a passion
            for teaching—guiding every learner from first principles to exam
            excellence at Academic Architect.
          </Motion.p>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] border border-gray-100/90 overflow-hidden"
        >
          <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-0">
            <div className="relative h-72 bg-gradient-to-b from-gray-100 to-gray-50 sm:h-80 md:h-96 lg:h-auto lg:min-h-[420px]">
              <img
                src={LEAD_FACULTY.image}
                alt={LEAD_FACULTY.name}
                className="h-full w-full object-contain object-top"
                loading="eager"
              />
            </div>
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-rose-50 text-[#DC3545] border border-rose-100"
                >
                  {LEAD_FACULTY.badge1}
                </span>
                <span className="inline-flex px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-gray-100 text-gray-800 border border-gray-200/80">
                  {LEAD_FACULTY.badge2}
                </span>
              </div>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {LEAD_FACULTY.name}
              </h2>
              <p
                className="mt-2 text-base sm:text-lg font-semibold"
                style={{ color: RED }}
              >
                {LEAD_FACULTY.role}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
                {LEAD_FACULTY.bio}
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center text-[#DC3545]">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <p className="text-sm text-gray-700 leading-snug font-medium">
                    {LEAD_FACULTY.accolades[0].line}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center text-[#DC3545]">
                    <FaAward className="text-lg" />
                  </div>
                  <p className="text-sm text-gray-700 leading-snug font-medium">
                    {LEAD_FACULTY.accolades[1].line}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
