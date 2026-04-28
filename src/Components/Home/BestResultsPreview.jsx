import { motion as Motion } from "framer-motion";
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

export default function BestResultsPreview() {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="relative -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PREVIEW_RESULTS.map((result, index) => (
            <Motion.article
              key={`${result.name}-${result.image}`}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileTap={{ scale: 0.985 }}
              className="group relative w-[82vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-[1.35rem] border border-red-100/80 bg-white shadow-[0_16px_42px_-24px_rgba(17,24,39,0.55)]"
            >
              <div className="relative">
                <img
                  src={result.image}
                  alt={result.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-red-700 shadow">
                  {result.category}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full border border-white/80 bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur">
                  {result.highlight}
                </span>
              </div>

              <div className="space-y-1.5 px-4 pb-4 pt-3">
                <h3 className="line-clamp-1 text-[15px] font-semibold text-gray-900">
                  {result.name}
                </h3>
                <p className="text-xs font-medium text-gray-500">Top performer</p>
              </div>
            </Motion.article>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={`dot-${i}`}
              className={`h-1.5 rounded-full ${i === 0 ? "w-5 bg-[#DC3545]" : "w-1.5 bg-red-200"}`}
              aria-hidden
            />
          ))}
        </div>

        <div className="hidden grid-cols-1 gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_RESULTS.map((result, index) => (
            <Motion.article
              key={`${result.name}-${result.image}-desktop`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="group overflow-hidden rounded-2xl border border-red-100/80 bg-white shadow-[0_12px_35px_-24px_rgba(17,24,39,0.55)]"
            >
              <div className="relative">
                <img
                  src={result.image}
                  alt={result.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-red-700 shadow">
                  {result.category}
                </span>
              </div>

              <div className="space-y-1.5 px-4 pb-4 pt-3.5">
                <h3 className="line-clamp-1 text-base font-semibold text-gray-900">
                  {result.name}
                </h3>
                <p className="text-sm font-medium text-gray-600">{result.highlight}</p>
              </div>
            </Motion.article>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.45 }}
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
