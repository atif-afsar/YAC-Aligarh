import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FacultyCTA() {
  return (
    <section className="py-16 md:py-20 px-6 sm:px-8 lg:px-10 bg-white">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto rounded-[2rem] bg-[#f4f4f5] border border-gray-200/80 px-8 py-14 md:px-16 md:py-16 text-center shadow-sm"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Learn from the Best Mentors
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Start your journey with Academic Architect today—structured batches,
          expert faculty, and a roadmap built around your goals.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center min-w-[200px] rounded-full bg-[#DC3545] text-white px-8 py-3.5 font-semibold text-sm sm:text-base shadow-lg shadow-red-500/20 hover:bg-[#c82333] transition-colors"
            >
              Enroll Now
            </Link>
          </Motion.div>
          <Motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center min-w-[200px] rounded-full bg-white border-2 border-gray-300 text-gray-900 px-8 py-3.5 font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors"
            >
              View Schedule
            </Link>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
}
