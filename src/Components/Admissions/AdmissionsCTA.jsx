import { motion as Motion } from "framer-motion";

export default function AdmissionsCTA() {
  return (
    <section className="bg-white pb-16 md:pb-20 px-6 sm:px-8 lg:px-10">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[1.75rem] bg-[#212529] px-8 py-14 md:px-14 md:py-16 text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Limited Seats Available
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Don't wait for the next semester. Secure your future today by joining
          the top commerce community in Aligarh.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            className="rounded-lg bg-[#DC3545] px-7 py-3.5 font-semibold hover:bg-[#c82333] transition"
          >
            Enroll Now
          </button>
          <button
            type="button"
            className="rounded-lg border border-white/35 px-7 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            Contact Support
          </button>
        </div>
      </Motion.div>
    </section>
  );
}
