import { motion as Motion } from "framer-motion";
import {
  FaBookOpen,
  FaChartLine,
  FaDoorOpen,
  FaFlask,
  FaLayerGroup,
  FaThLarge,
} from "react-icons/fa";
import { CATEGORY_FILTER_OPTIONS } from "./courseData";

const ACCENT = "#DC3545";

const CATEGORY_ICONS = {
  all: FaThLarge,
  commerce: FaChartLine,
  science: FaFlask,
  entrance: FaDoorOpen,
  regular: FaBookOpen,
};

/**
 * @param {object} props
 * @param {'all' | 'commerce' | 'science' | 'entrance' | 'regular'} props.selectedCategory
 * @param { (v: 'all' | 'commerce' | 'science' | 'entrance' | 'regular') => void } props.onCategoryChange
 */
export default function CoursesFilterBar({ selectedCategory, onCategoryChange }) {
  const hasActiveFilter = selectedCategory !== "all";

  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div
        className={[
          "relative overflow-hidden rounded-3xl border border-rose-100/90",
          "bg-gradient-to-b from-white via-white to-rose-50/25",
          "p-1 shadow-[0_22px_50px_-28px_rgba(220,53,69,0.4),0_0_0_1px_rgba(255,255,255,0.65)_inset]",
          "backdrop-blur-sm",
        ].join(" ")}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/80 to-transparent"
          aria-hidden
        />
        <div className="relative rounded-[1.15rem] bg-white/85 px-4 py-5 sm:px-6 sm:py-6">
          <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
            <div className="flex min-w-0 gap-3.5 sm:gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ring-1 ring-rose-200/30 sm:h-12 sm:w-12"
                style={{
                  background: `linear-gradient(150deg, ${ACCENT} 0%, #a71d2a 100%)`,
                }}
              >
                <FaLayerGroup className="h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem]" aria-hidden />
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-rose-500/90">
                  Filter courses
                </p>
                <h2 className="mt-0.5 text-base font-bold tracking-tight text-gray-900 sm:text-lg">
                  Browse by category
                </h2>
                <p className="mt-1 max-w-xl text-pretty text-xs leading-relaxed text-gray-500 sm:text-sm">
                  Commerce, Science, Entrance, or Regular — pick one to narrow the list below.
                </p>
              </div>
            </div>

            <div className="shrink-0 sm:pt-1">
              <button
                type="button"
                onClick={() => onCategoryChange("all")}
                disabled={!hasActiveFilter}
                className={[
                  "inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-rose-100 bg-white/90 px-4 py-2.5",
                  "text-xs font-bold uppercase tracking-wide text-rose-600 shadow-sm",
                  "transition duration-200",
                  "hover:border-rose-200 hover:bg-rose-50/80 hover:shadow",
                  "disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none",
                ].join(" ")}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-current"
                  style={{ opacity: hasActiveFilter ? 1 : 0.35 }}
                  aria-hidden
                />
                Show all courses
              </button>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5"
            role="tablist"
            aria-label="Course categories"
          >
            {CATEGORY_FILTER_OPTIONS.map((opt) => {
              const isActive = opt.id === selectedCategory;
              const Icon = CATEGORY_ICONS[opt.id] ?? FaThLarge;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  title={opt.hint ?? opt.label}
                  onClick={() => onCategoryChange(opt.id)}
                  className={[
                    "group flex min-h-[46px] min-w-0 select-none items-center gap-2 rounded-2xl border px-3 py-2.5 text-left text-sm font-semibold transition duration-200 sm:min-h-[48px] sm:px-3.5",
                    isActive
                      ? "border-rose-200/80 bg-gradient-to-b from-rose-50 to-rose-100/30 text-rose-700 shadow-[0_4px_14px_-6px_rgba(220,53,69,0.45),0_0_0_1px_rgba(220,53,69,0.12)]"
                      : "border-gray-200/80 bg-white/90 text-gray-700 hover:border-rose-200/70 hover:bg-rose-50/40",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[0.85rem] transition-colors",
                      isActive
                        ? "bg-rose-100/90 text-rose-600"
                        : "bg-gray-100/80 text-gray-500 group-hover:bg-rose-100/50 group-hover:text-rose-600/90",
                    ].join(" ")}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 leading-snug [overflow-wrap:anywhere] sm:leading-tight">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
