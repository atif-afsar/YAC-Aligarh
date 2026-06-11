import { motion as Motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTrophy } from "react-icons/fa";

const AMU_ENTRANCE_POSTER = encodeURI(
  "/NewResults/Screenshot 2026-06-11 125424.png"
);

const ease = [0.22, 1, 0.36, 1];

function buildVariants(reduce) {
  if (reduce) {
    return {
      header: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      poster: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
      },
    };
  }
  return {
    header: {
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    },
    poster: {
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease, delay: 0.08 },
      },
    },
  };
}

export default function BestResultsPreview() {
  const reduce = useReducedMotion();
  const v = buildVariants(reduce);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          variants={v.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            AMU Entrance 2026
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            All 1st Ranks in{" "}
            <span className="text-[#DC3545]">AMU Entrance</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            BBA, BA, BA Honours and B.Com — our students secured top ranks across
            AMU entrance exams. Proud moments from Yasir Ali Classes.
          </p>
        </Motion.div>

        <Motion.div
          variants={v.poster}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mx-auto w-full max-w-5xl"
        >
          <div
            className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(220,53,69,0.14),transparent_70%)] sm:-inset-4"
            aria-hidden
          />

          <div className="relative pt-4 sm:pt-5">
            <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#DC3545] shadow-sm sm:gap-2 sm:px-4 sm:py-1.5 sm:text-[11px]">
                <FaTrophy className="text-[10px] sm:text-xs" aria-hidden />
                Top Ranks
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-rose-100/90 bg-white p-2 shadow-[0_20px_50px_-28px_rgba(220,53,69,0.5)] sm:rounded-[1.75rem] sm:p-3 md:p-4">
            <Link
              to="/results/new"
              className="group block overflow-hidden rounded-xl bg-gradient-to-b from-rose-50/60 via-white to-white sm:rounded-[1.35rem]"
            >
              <picture>
                <img
                  src={AMU_ENTRANCE_POSTER}
                  alt="YAC students with all 1st ranks in AMU Entrance Exams 2026 — Gulberg BBA, Rimsha Jahan BA, Masroor Husain BA Honours, Anamta and Mohammad Rahim B.Com"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto w-full max-h-[min(72vh,680px)] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </picture>

              <span className="sr-only">
                View all AMU entrance result sheets
              </span>
            </Link>
            </div>
          </div>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 sm:mt-6 sm:gap-x-6 sm:text-xs">
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" aria-hidden />
              BBA Entrance
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" aria-hidden />
              BA Entrance
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" aria-hidden />
              BA Honours
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" aria-hidden />
              B.Com Entrance
            </li>
          </ul>
        </Motion.div>

        <Motion.div
          variants={v.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <Link
            to="/results/new"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DC3545] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(220,53,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#c52f3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            View AMU Entrance Results
            <FaArrowRight className="text-xs" />
          </Link>
          <Link
            to="/results"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-rose-300 hover:text-[#DC3545] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            All Results
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}
