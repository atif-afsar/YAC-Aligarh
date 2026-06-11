import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaStar, FaTrophy } from "react-icons/fa";
import { AMU_ENTRANCE_LABEL, NEW_RESULTS } from "./newResultsData";

export default function NewResultsHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pb-20 px-6 sm:px-8 lg:px-10 bg-white">
      <div
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#DC3545]/[0.09] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-rose-300/25 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <Link
          to="/results"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#DC3545]"
        >
          <FaArrowLeft className="text-xs" />
          All Results
        </Link>

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-rose-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC3545] shadow-sm">
            <FaStar className="text-xs" />
            {AMU_ENTRANCE_LABEL}
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            AMU Entrance
            <span className="text-[#DC3545]"> Results</span>
          </h1>

          <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
            Fresh AMU entrance result sheets for 2026 — B.Com, BBA, BA, BA
            Foreign Language and BA Honours. Proud moments from our students at
            Aligarh Muslim University.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-rose-100 bg-white px-5 py-3 shadow-[0_14px_30px_-20px_rgba(220,53,69,0.4)]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DC3545] text-white shadow-inner">
              <FaTrophy className="text-sm" />
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#DC3545]">
                AMU Entrance
              </p>
              <p className="text-sm font-bold text-gray-900">
                {NEW_RESULTS.length} result sheets published
              </p>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
