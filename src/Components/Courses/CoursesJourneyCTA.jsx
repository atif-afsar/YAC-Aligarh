import { motion as Motion } from "framer-motion";

export default function CoursesJourneyCTA() {
  return (
    <section className="py-16 md:py-20 px-6 sm:px-8 lg:px-10 bg-white">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.25rem] bg-[#DC3545] px-8 py-14 md:px-16 md:py-16 text-center shadow-xl shadow-red-900/25"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Start Your Journey Today
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Join thousands of successful professionals who built their foundation
          with AcademicArchitect.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[200px] rounded-full bg-white text-[#DC3545] px-8 py-3.5 font-semibold text-sm sm:text-base shadow-lg hover:bg-gray-50 transition-colors"
          >
            Get Started for Free
          </Motion.button>
          <Motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[200px] rounded-full border-2 border-white text-white bg-transparent px-8 py-3.5 font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors"
          >
            Talk to an Advisor
          </Motion.button>
        </div>
      </Motion.div>
    </section>
  );
}
