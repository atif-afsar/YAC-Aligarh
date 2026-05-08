import { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PREVIEW_RESULTS = [
  {
    name: "Syed Kazim",
    category: "BA Toppers",
    highlight: "Rank 1",
    image: "/results/ba/1.jpg",
  },
  {
    name: "Aamra Najam",
    category: "BALLB",
    highlight: "14* CE",
    image: "/results/ballb/2.jpg",
  },
  {
    name: "Ilsa Israil",
    category: "MBA Toppers",
    highlight: "64th Gen · 3* Cat",
    image: "/results/mba/3.jpg",
  },
  {
    name: "Rehan Ahmad",
    category: "B.Com",
    highlight: "Achiever",
    image: "/results/bcom/1.jpg",
  },
  {
    name: "Raj Shahin",
    category: "B.Com",
    highlight: "Achiever",
    image: "/results/bcom/2.jpg",
  },
  {
    name: "Aman Sharma",
    category: "MBA Toppers",
    highlight: "18th Gen · 2* Cat",
    image: "/results/mba/2.jpg",
  },
  {
    name: "Aliya Shakeel",
    category: "BALLB",
    highlight: "Rank 114",
    image: "/results/ballb/3.jpg",
  },
  {
    name: "Sayyada Faiza Saleem",
    category: "BA Toppers",
    highlight: "Rank 53",
    image: "/results/ba/7.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 639px)").matches
      : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

function buildVariants(reduce) {
  if (reduce) {
    return {
      header: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      grid: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      card: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
    };
  }
  return {
    header: {
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    },
    grid: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.06, delayChildren: 0.05 },
      },
    },
    card: {
      hidden: { opacity: 0, y: 18, scale: 0.97 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease },
      },
    },
  };
}

export default function BestResultsPreview() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const reduce = useReducedMotion();
  const v = buildVariants(reduce);

  // Cache the per-item span so we don't call getComputedStyle on every scroll
  const itemSpanRef = useRef(0);
  const rafIdRef = useRef(0);

  useEffect(() => {
    if (!isMobile) return;
    const slider = sliderRef.current;
    if (!slider) return;

    const compute = () => {
      const firstCard = slider.firstElementChild;
      if (!firstCard) return;
      const cs = window.getComputedStyle(slider);
      const gapRaw = cs.columnGap || cs.gap || "16px";
      const gap = Number.parseFloat(gapRaw) || 16;
      itemSpanRef.current = firstCard.getBoundingClientRect().width + gap;
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(slider);
    Array.from(slider.children).forEach((child) => ro.observe(child));

    window.addEventListener("resize", compute, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [isMobile]);

  const onSliderScroll = () => {
    if (rafIdRef.current) return;
    rafIdRef.current = window.requestAnimationFrame(() => {
      rafIdRef.current = 0;
      const slider = sliderRef.current;
      const itemSpan = itemSpanRef.current;
      if (!slider || !itemSpan) return;
      const next = Math.round(slider.scrollLeft / itemSpan);
      const safe = Math.max(
        0,
        Math.min(PREVIEW_RESULTS.length - 1, next)
      );
      setActiveIndex((prev) => (prev === safe ? prev : safe));
    });
  };

  useEffect(
    () => () => {
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    },
    []
  );

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const itemSpan = itemSpanRef.current;
    if (!itemSpan) return;
    slider.scrollTo({ left: index * itemSpan, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative blurs — kept as static halos with no `will-change` so we
          don't keep a separate GPU layer alive during scroll. The visuals are
          identical to the previous version. */}
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
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Best Results
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Our Top Achievers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A quick preview of outstanding YAC results across B.Com, BA, BALLB
            and MBA categories.
          </p>
        </Motion.div>

        {isMobile ? (
          <>
            <Motion.div
              ref={sliderRef}
              onScroll={onSliderScroll}
              variants={v.grid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative -mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-x pinch-zoom",
                overscrollBehaviorX: "contain",
              }}
            >
              {PREVIEW_RESULTS.map((result) => (
                <Motion.article
                  key={`${result.name}-${result.image}`}
                  variants={v.card}
                  className="group relative w-[82vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-[1.35rem] border border-red-100/80 bg-white shadow-[0_16px_42px_-24px_rgba(17,24,39,0.55)] transition-transform duration-200 active:scale-[0.985]"
                >
                  <div className="relative">
                    <img
                      src={result.image}
                      alt={`${result.name} - ${result.category} achiever at Yasir Ali Classes Aligarh`}
                      width={320}
                      height={288}
                      loading="lazy"
                      decoding="async"
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-red-700 shadow">
                      {result.category}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full border border-white/80 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                      {result.highlight}
                    </span>
                  </div>

                  <div className="space-y-1.5 px-4 pb-4 pt-3">
                    <h3 className="line-clamp-1 text-[15px] font-semibold text-gray-900">
                      {result.name}
                    </h3>
                    <p className="text-xs font-medium text-gray-500">
                      Top performer
                    </p>
                  </div>
                </Motion.article>
              ))}
            </Motion.div>

            <div className="mt-4 flex items-center justify-center gap-1.5">
              {PREVIEW_RESULTS.map((_, i) => (
                <button
                  type="button"
                  key={`dot-${i}`}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-5 bg-[#DC3545]"
                      : "w-1.5 bg-red-200"
                  }`}
                  aria-label={`Go to result ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <Motion.div
            variants={v.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PREVIEW_RESULTS.map((result) => (
              <Motion.article
                key={`${result.name}-${result.image}-desktop`}
                variants={v.card}
                className="group overflow-hidden rounded-2xl border border-red-100/80 bg-white shadow-[0_12px_35px_-24px_rgba(17,24,39,0.55)]"
                style={{ contain: "layout paint" }}
              >
                <div className="relative">
                  <img
                    src={result.image}
                    alt={`${result.name} - ${result.category} achiever at Yasir Ali Classes Aligarh`}
                    width={400}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-red-700 shadow">
                    {result.category}
                  </span>
                </div>

                <div className="space-y-1.5 px-4 pb-4 pt-3.5">
                  <h3 className="line-clamp-1 text-base font-semibold text-gray-900">
                    {result.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {result.highlight}
                  </p>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        )}

        <Motion.div
          variants={v.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/results"
            className="inline-flex items-center gap-2 rounded-full bg-[#DC3545] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(220,53,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#c52f3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            See More Results
            <FaArrowRight className="text-xs" />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}
