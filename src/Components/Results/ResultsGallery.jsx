import { motion as Motion } from "framer-motion";
import { HALL_OF_FAME, STORIES } from "./resultsData";

const INSTAGRAM_REELS = [
  {
    id: "DW80uKnhcRN",
    title: "Student Success Reel 1",
  },
  {
    id: "DW8oFEoEZ7D",
    title: "Student Success Reel 2",
  },
];

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
          {HALL_OF_FAME.map((item, i) => (
            <Motion.div
              key={item.image}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={`${item.name} - ${item.category}`}
                className="w-full h-56 sm:h-64 object-contain bg-gray-50"
              />
              <div className="px-4 py-3 border-t border-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DC3545]">
                  {item.category}
                </p>
                <p className="mt-1 text-sm font-bold text-gray-900 line-clamp-1">
                  {item.name}
                </p>
              </div>
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
            <a
              href="https://www.instagram.com/yasiraliclasses/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#DC3545] hover:underline"
            >
              View Instagram
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {INSTAGRAM_REELS.map((reel) => (
              <article
                key={reel.id}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3 sm:p-4"
              >
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed`}
                    title={reel.title}
                    className="w-full h-[620px]"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
