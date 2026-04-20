import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMedal } from "react-icons/fa";

export default function CoursesWhyArchitect() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Why Choose The Architect Way
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#DC3545]" aria-hidden />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-gray-100 bg-white p-8 md:p-10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Structured Learning Path
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every program is designed as a progression—from core concepts to
              exam execution—so you always know what to study next and why it
              matters for your attempt.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-rose-50 border border-rose-100/80 px-4 py-6 text-center flex items-center justify-center">
                <p className="text-[11px] sm:text-xs font-bold text-gray-900 tracking-wide uppercase leading-snug">
                  95% Success Rate
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50 border border-rose-100/80 px-4 py-6 text-center flex items-center justify-center">
                <p className="text-[11px] sm:text-xs font-bold text-gray-900 tracking-wide uppercase leading-snug">
                  20k+ Students
                </p>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#DC3545] p-8 md:p-10 text-white shadow-xl shadow-red-900/20 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                <FaMedal className="text-2xl text-white" />
              </div>
              <h3 className="mt-8 text-xl md:text-2xl font-bold">
                Top Ranks Every Year
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed text-sm md:text-base">
                Our students consistently secure All India Ranks across CA &
                CS—driven by discipline, mocks, and faculty who push you to your
                best.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all group"
            >
              View All Achievers
              <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
