import { motion as Motion } from "framer-motion";
import { FaBell, FaCheck, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const RED = "#DC3545";
const YAC_YOUTUBE_SUBSCRIBE =
  "https://www.youtube.com/channel/UCUlHYg9DL5LACF_fHQI7I_g?sub_confirmation=1";
/** Replace with a current featured or welcome video from your channel */
const YAC_FEATURED_VIDEO_ID = "6qmszAKUUtg";

const perks = [
  "1080p+ concept explainers, revision marathons, and exam strategy for Science & Commerce",
  "LIVE and recorded sessions you can follow from anywhere in India",
  "Doubt-busting and updates dropped regularly—turn on the bell to never miss a class",
];

export default function YoutubeChannelSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-rose-50/80 via-white to-white pt-28 pb-16 md:pb-24"
      aria-labelledby="youtube-page-title"
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-800 shadow-sm backdrop-blur">
            <FaYoutube className="text-base text-red-600" />
            Official channel
          </div>

          <h1
            id="youtube-page-title"
            className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Learn with us on{" "}
            <span className="font-serif-display italic" style={{ color: RED }}>
              YouTube
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Join 105,000+ subscribers who watch YAC for honest teaching, clear
            concepts, and exam-ready routines—whether you are a Science or
            Commerce student.
          </p>

          <ul className="mt-7 space-y-3.5">
            {perks.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm text-gray-700 sm:text-base"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${RED}18`, color: RED }}
                >
                  <FaCheck className="text-xs" />
                </span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={YAC_YOUTUBE_SUBSCRIBE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:opacity-95 sm:text-base"
              style={{ backgroundColor: "#CC0000" }}
            >
              <FaYoutube className="text-lg" />
              Subscribe on YouTube
              <FaExternalLinkAlt className="text-xs opacity-80" />
            </a>
            <a
              href={`https://www.youtube.com/watch?v=${YAC_FEATURED_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900/90 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:text-base"
            >
              <FaBell className="text-sm text-red-600" />
              Watch in new tab
            </a>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 w-full"
        >
          <div
            className="relative mx-auto w-full max-w-2xl rounded-[1.25rem] border border-gray-200/80 bg-gradient-to-b from-gray-100 to-white p-2 sm:p-2.5 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.28)]"
            style={{ boxShadow: "0 20px 50px -18px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-center justify-between gap-2 rounded-t-[0.9rem] bg-gradient-to-r from-gray-900 to-gray-800 px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600">
                  <FaYoutube className="text-base text-white" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    Yasir Ali Classes
                  </p>
                  <p className="text-xs text-white/60">Featured on YouTube</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-b-[0.85rem] bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YAC_FEATURED_VIDEO_ID}?rel=0`}
                title="Yasir Ali Classes — featured video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
