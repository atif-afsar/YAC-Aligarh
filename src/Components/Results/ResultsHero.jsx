import { motion as Motion } from "framer-motion";
import { FaAward, FaQuoteRight } from "react-icons/fa";
import { STATS } from "./resultsData";

export default function ResultsHero() {
  return (
    <section className="pt-28 pb-14 md:pb-16 px-6 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#DC3545]">
            Academic Architect Legacy
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Our Results Speak for
            <span className="text-[#DC3545]"> Themselves</span>
          </h1>
          <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
            Producing top rankers and brilliant achievers year after year. Our
            commitment to excellence is reflected in every success story.
          </p>
        </Motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <article
              key={s.label}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-[#DC3545]">
                <FaAward className="text-sm" />
                <span className="text-xs uppercase tracking-wider font-semibold">
                  Metric
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-rose-50 px-5 py-2 text-[#DC3545] border border-rose-100">
            <FaQuoteRight className="text-xs" />
            <span className="text-sm font-semibold">
              "Excellence is a habit, not a one-time event."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
