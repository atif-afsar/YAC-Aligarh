import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaSearch, FaTrophy } from "react-icons/fa";
import {
  CATEGORY_LABELS,
  RESULT_CATEGORIES,
  RANKERS_BY_CATEGORY,
} from "./resultsData";

const FILTER_ALL = "all";

export default function ResultsRankers() {
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const rankerGroups = useMemo(
    () =>
      RESULT_CATEGORIES.map((category) => ({
        category,
        rankers: RANKERS_BY_CATEGORY[category] ?? [],
      })),
    []
  );

  const visibleGroups = useMemo(() => {
    if (activeFilter === FILTER_ALL) return rankerGroups;
    return rankerGroups.filter((g) => g.category === activeFilter);
  }, [activeFilter, rankerGroups]);

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-8 lg:px-10 overflow-hidden border-y border-rose-100/80 bg-gradient-to-b from-rose-50/50 via-white to-rose-50/20">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#DC3545]/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-16 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DC3545] shadow-sm">
            <FaTrophy className="text-xs opacity-90" />
            Our Achievers
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Ready to Explore Our
            <span className="text-[#DC3545]"> Top Results?</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Category-wise toppers with complete result sheets, beautifully
            organized and animated.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-full border border-rose-100 bg-white px-5 py-3 shadow-[0_14px_30px_-20px_rgba(220,53,69,0.35)]">
            <div className="flex items-center gap-3 text-gray-500">
              <FaSearch className="text-sm text-[#DC3545]" />
              <span className="text-sm sm:text-base">
                Search results, toppers, category and more
              </span>
            </div>
          </div>
        </Motion.div>

        <div
          className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Result categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === FILTER_ALL}
            onClick={() => setActiveFilter(FILTER_ALL)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC3545] focus-visible:ring-offset-2 ${
              activeFilter === FILTER_ALL
                ? "bg-[#111827] text-white shadow-md"
                : "border border-rose-100 bg-white text-gray-700 hover:border-rose-200"
            }`}
          >
            All
          </button>
          {RESULT_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC3545] focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#111827] text-white shadow-md"
                    : "border border-rose-100 bg-white text-gray-700 hover:border-rose-200"
                }`}
              >
                {CATEGORY_LABELS[category] ?? category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 space-y-10" key={activeFilter}>
          {visibleGroups.map((group, groupIndex) => (
            <Motion.section
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: groupIndex * 0.04 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  {CATEGORY_LABELS[group.category] ?? group.category}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-[#DC3545] bg-rose-50 border border-rose-100 rounded-full px-3 py-1">
                  {group.rankers.length} results
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0">
                {group.rankers.map((r, i) => (
                  <Motion.li
                    key={`${group.category}-${r.image}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.2) }}
                    className="group"
                  >
                    <article className="overflow-hidden rounded-[1.4rem] border border-rose-100/90 bg-white p-3 shadow-[0_18px_32px_-24px_rgba(220,53,69,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_44px_-24px_rgba(220,53,69,0.52)]">
                      <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-[1rem] border border-rose-100/90 bg-gradient-to-b from-rose-50 via-white to-rose-50/35 p-2">
                        <img
                          src={r.image}
                          alt={`Result — ${r.name}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.015]"
                        />
                      </div>

                      <div className="mt-3.5 px-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <p className="rounded-full border border-rose-100 bg-rose-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#DC3545]">
                            {r.rank}
                          </p>
                          <span className="text-xs font-medium text-gray-500">
                            {r.year}
                          </span>
                        </div>
                        <h4 className="mt-2 min-h-[2.75rem] text-base sm:text-lg font-bold leading-tight text-gray-900 line-clamp-2">
                          {r.name}
                        </h4>
                        <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-gray-500 line-clamp-1">
                          {r.exam}
                        </p>
                      </div>
                    </article>
                  </Motion.li>
                ))}
              </ul>
            </Motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
