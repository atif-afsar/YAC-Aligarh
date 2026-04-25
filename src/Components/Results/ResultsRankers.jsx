import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaHeart, FaSearch, FaTrophy } from "react-icons/fa";
import { RESULT_CATEGORIES, RANKERS_BY_CATEGORY } from "./resultsData";

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
                {category}
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
                  {group.category}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-[#DC3545] bg-rose-50 border border-rose-100 rounded-full px-3 py-1">
                  {group.rankers.length} results
                </span>
              </div>

              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0">
                {group.rankers.map((r, i) => (
                  <Motion.li
                    key={`${group.category}-${r.image}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.2) }}
                    className="group"
                  >
                    <article className="relative overflow-hidden rounded-[1.6rem] border border-rose-100/80 bg-gradient-to-b from-rose-100/60 via-rose-50/45 to-white p-2 sm:p-2.5 shadow-[0_22px_35px_-28px_rgba(220,53,69,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_45px_-28px_rgba(220,53,69,0.55)]">
                      <button
                        type="button"
                        className="absolute right-4 top-4 z-10 h-8 w-8 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm"
                        aria-label="favorite"
                      >
                        <FaHeart className="text-[13px]" />
                      </button>

                      {/* object-contain (not cover) + max-height so full result sheets stay visible */}
                      <div className="relative flex min-h-[10rem] w-full items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-rose-100/55 via-rose-50/45 to-white p-1.5 sm:p-2">
                        <img
                          src={r.image}
                          alt={`Result — ${r.name}`}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-full max-h-[13rem] sm:max-h-[15rem] lg:max-h-[14rem] object-contain object-top"
                        />
                      </div>

                      <div className="mt-2.5 rounded-xl bg-[#1f2430]/80 text-white px-2.5 py-2 backdrop-blur-sm">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/70">
                          {r.exam}
                        </p>
                        <h4 className="mt-1 text-sm sm:text-base font-semibold leading-tight line-clamp-1">
                          {r.name}
                        </h4>
                        <div className="mt-1.5 flex items-center justify-between text-[11px] sm:text-xs">
                          <span className="text-amber-300 font-semibold">
                            {r.rank}
                          </span>
                          <span className="text-white/80">{r.year}</span>
                        </div>
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
