import { motion as Motion } from "framer-motion";
import { RANKERS } from "./resultsData";

export default function ResultsRankers() {
  return (
    <section className="py-14 md:py-20 px-6 sm:px-8 lg:px-10 bg-[#fafafa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Top Rankers 2025
            </h2>
            <p className="mt-2 text-gray-500">
              Meet the students who stood out with discipline and direction.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RANKERS.map((r, i) => (
            <Motion.article
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-52 object-cover object-top"
                />
                <span className="absolute top-3 left-3 bg-[#DC3545] text-white text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide">
                  {r.exam}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Rank {r.rank}
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-900">{r.name}</h3>
                <p className="mt-2 text-sm text-[#DC3545] font-semibold">
                  Score: {r.score}
                </p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
