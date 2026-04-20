import { motion as Motion } from "framer-motion";

export default function ResultsCTA() {
  return (
    <section className="py-16 md:py-20 px-6 sm:px-8 lg:px-10 bg-white">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2rem] bg-[#DC3545] px-8 py-14 md:px-14 md:py-16 text-center text-white shadow-xl shadow-red-900/25"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Be the Next Success Story
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base sm:text-lg leading-relaxed">
          Join thousands of students who trusted their dreams to Academic
          Architect and achieved exceptional outcomes.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            className="rounded-full bg-white text-[#DC3545] px-8 py-3.5 font-semibold hover:bg-gray-100 transition"
          >
            Start My Journey
          </button>
          <button
            type="button"
            className="rounded-full border-2 border-white px-8 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            Download Brochure
          </button>
        </div>
      </Motion.div>
    </section>
  );
}
