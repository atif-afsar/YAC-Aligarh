import { useCallback, useEffect, useMemo, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes,
  FaTrophy,
} from "react-icons/fa";
import {
  AMU_ENTRANCE_LABEL,
  NEW_CATEGORY_LABELS,
  NEW_CATEGORY_ORDER,
  NEW_RESULT_CATEGORIES,
  NEW_RESULTS,
} from "./newResultsData";

const RED = "#DC3545";

function ResultCard({ item, index, onOpen }) {
  return (
    <Motion.li
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38, delay: Math.min(index * 0.04, 0.28) }}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="group w-full text-left"
      >
        <article className="overflow-hidden rounded-[1.4rem] border border-rose-100/90 bg-white p-3 shadow-[0_18px_32px_-24px_rgba(220,53,69,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_44px_-24px_rgba(220,53,69,0.52)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC3545] focus-visible:ring-offset-2">
          <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-[1rem] border border-rose-100/90 bg-gradient-to-b from-rose-50 via-white to-rose-50/35 p-2 sm:p-3">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="pointer-events-none absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#DC3545] opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
              <FaExpand className="text-xs" />
            </span>
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#DC3545] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
              2026
            </span>
          </div>

          <div className="mt-3.5 px-0.5">
            <div className="flex items-center justify-between gap-2">
              <p className="rounded-full border border-rose-100 bg-rose-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#DC3545]">
                {item.highlight}
              </p>
              <span className="text-xs font-medium text-gray-500">
                {item.year}
              </span>
            </div>
            <h3 className="mt-2 text-base sm:text-lg font-bold leading-tight text-gray-900 line-clamp-2">
              {NEW_CATEGORY_LABELS[item.category]}
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-gray-500 line-clamp-1">
              {item.exam}
            </p>
          </div>
        </article>
      </button>
    </Motion.li>
  );
}

function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  return (
    <Motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-gray-950/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <Motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-2 right-0 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-right-12 sm:top-0"
        >
          <FaTimes />
        </button>

        {hasPrev ? (
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous result"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:-translate-x-14"
          >
            <FaChevronLeft />
          </button>
        ) : null}

        {hasNext ? (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next result"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:translate-x-14"
          >
            <FaChevronRight />
          </button>
        ) : null}

        <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-2xl">
          <div className="flex items-center justify-center bg-gradient-to-b from-rose-50 to-white p-3 sm:p-6">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-[min(78vh,820px)] w-full object-contain"
            />
          </div>
          <div className="border-t border-rose-100 px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DC3545]">
              {NEW_CATEGORY_LABELS[item.category]}
            </p>
            <h3 className="mt-1 text-xl font-bold text-gray-900">{item.exam}</h3>
            <p className="mt-2 inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-[#DC3545]">
              {item.highlight} · {item.year}
            </p>
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
}

export default function NewResultsGallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "ALL") return NEW_RESULTS;
    return NEW_RESULTS.filter((r) => r.category === activeFilter);
  }, [activeFilter]);

  const groupedSections = useMemo(() => {
    if (activeFilter !== "ALL") {
      return [{ category: activeFilter, items: filtered }];
    }
    return NEW_CATEGORY_ORDER.map((category) => ({
      category,
      items: NEW_RESULTS.filter((r) => r.category === category),
    })).filter((g) => g.items.length > 0);
  }, [activeFilter, filtered]);

  const indexById = useMemo(() => {
    const map = new Map();
    filtered.forEach((item, i) => map.set(item.id, i));
    return map;
  }, [filtered]);

  const lightboxItem =
    lightboxIndex !== null ? filtered[lightboxIndex] ?? null : null;

  const openLightbox = useCallback(
    (id) => {
      const idx = indexById.get(id);
      if (idx !== undefined) setLightboxIndex(idx);
    },
    [indexById]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null && i < filtered.length - 1 ? i + 1 : i
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(filtered.length ? filtered.length - 1 : null);
    }
  }, [filtered.length, lightboxIndex]);

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-8 lg:px-10 overflow-hidden border-t border-rose-100/80 bg-gradient-to-b from-rose-50/40 via-white to-white">
      <div
        className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#DC3545]/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DC3545] shadow-sm">
            <FaTrophy className="text-xs opacity-90" />
            {AMU_ENTRANCE_LABEL}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            AMU Entrance <span className="text-[#DC3545]">Result Sheets</span>
          </h2>
          <p className="mt-3 text-gray-600">
            B.Com, BBA, BA, BA FL and BA Hons — AMU entrance selections for 2026.
            Tap any sheet to view it full size.
          </p>
        </Motion.div>

        <div
          className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2.5"
          role="tablist"
          aria-label="New result categories"
        >
          {NEW_RESULT_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            const count =
              cat === "ALL"
                ? NEW_RESULTS.length
                : NEW_RESULTS.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat)}
                className={`w-full sm:w-auto px-3 py-2.5 sm:px-5 rounded-full text-xs sm:text-sm font-semibold text-center transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC3545] focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#111827] text-white shadow-md"
                    : "border border-rose-100 bg-white text-gray-700 hover:border-rose-200"
                }`}
              >
                <span className="leading-tight">{NEW_CATEGORY_LABELS[cat]}</span>
                <span
                  className={`ml-1 text-[11px] sm:text-xs ${isActive ? "text-white/70" : "text-gray-400"}`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        <div key={activeFilter} className="mt-12 space-y-14">
          {groupedSections.map((group, groupIndex) => (
            <Motion.section
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: groupIndex * 0.04 }}
            >
              <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC3545]">
                    AMU Entrance
                  </p>
                  <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    {NEW_CATEGORY_LABELS[group.category]}
                  </h3>
                </div>
                <span className="rounded-full border border-rose-100 bg-rose-50 px-4 py-1.5 text-xs font-semibold text-[#DC3545]">
                  {group.items.length} sheets
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none p-0 m-0">
                {group.items.map((item, i) => (
                  <ResultCard
                    key={item.id}
                    item={item}
                    index={i}
                    onOpen={() => openLightbox(item.id)}
                  />
                ))}
              </ul>
            </Motion.section>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-5">
            Want to explore our complete hall of fame?
          </p>
          <Link
            to="/results"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(220,53,69,0.6)] transition hover:shadow-[0_18px_36px_-12px_rgba(220,53,69,0.8)]"
            style={{ backgroundColor: RED }}
          >
            View All Results
          </Link>
        </Motion.div>
      </div>

      <AnimatePresence>
        {lightboxItem ? (
          <Lightbox
            item={lightboxItem}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < filtered.length - 1}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
