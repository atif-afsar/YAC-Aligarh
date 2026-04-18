import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function AdmissionsCTA() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.25rem] bg-[#2d2d2f] px-8 py-14 md:px-16 md:py-16 text-center shadow-2xl shadow-black/20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Start Your Journey Today
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Book a counselling slot or walk in—we will map the right batch, pace,
          and study plan for you.
        </p>
        <Motion.div
          className="mt-10 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#DC3545] text-white px-10 py-4 font-semibold text-lg shadow-lg shadow-red-900/30 hover:bg-red-600 transition-colors"
          >
            Enroll Now
            <FaArrowRight />
          </Link>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
