import { motion as Motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { HALL_OF_FAME, STORIES, VIDEOS } from "./resultsData";

export default function ResultsGallery() {
  return (
    <section className="py-14 md:py-20 px-6 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Hall of Fame
          </h2>
          <p className="mt-2 text-gray-500">
            Moments of achievement and the stories behind them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {HALL_OF_FAME.map((img, i) => (
            <Motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-gray-100"
            >
              <img
                src={img}
                alt="Student achievement moment"
                className="w-full h-44 sm:h-52 object-cover"
              />
            </Motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Stories of Triumph
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {STORIES.map((s) => (
              <article
                key={s.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <p className="text-xs uppercase tracking-wide text-[#DC3545] font-semibold">
                  {s.course}
                </p>
                <h4 className="mt-2 font-bold text-gray-900">{s.name}</h4>
                <p className="mt-3 text-sm text-gray-600 italic leading-relaxed">
                  "{s.quote}"
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Video Success Stories
            </h3>
            <button
              type="button"
              className="text-sm font-semibold text-[#DC3545] hover:underline"
            >
              View All Videos
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VIDEOS.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
              >
                <div className="relative">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    className="w-full h-44 object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/90 text-[#DC3545] flex items-center justify-center shadow">
                      <FaPlay className="ml-0.5" />
                    </span>
                  </span>
                  <span className="absolute right-3 bottom-3 text-xs text-white bg-black/70 px-2 py-1 rounded">
                    {v.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{v.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
