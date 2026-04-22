import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaMobileAlt,
} from "react-icons/fa";
import joinYacAppPoster from "../../assets/join-yac-app.png";

const RED = "#DC3545";
const YAC_APP_PLAY_URL =
  "https://play.google.com/store/apps/details?id=co.classplus.yasir&hl=en";

const perks = [
  "Lecture replays, notes, and practice sets in one place—so Science & Commerce both stay on track",
  "Push notifications for new drops, test reminders, and class schedule changes you cannot miss",
  "Pick up on mobile where you left off; built for long study sessions and quick revision sprints",
];

export default function MobileAppSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-rose-50/50 py-16 md:py-24"
      aria-labelledby="mobile-app-title"
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-800 shadow-sm backdrop-blur">
            <FaMobileAlt className="text-base" style={{ color: RED }} />
            YAC mobile app
          </div>

          <h1
            id="mobile-app-title"
            className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Your class, in your{" "}
            <span className="font-serif-display italic" style={{ color: RED }}>
              pocket
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Carry Yasir Ali Classes with you: the same YAC clarity students trust
            on YouTube and in the classroom—now in an app that keeps
            classes, materials, and doubts organised.
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
              href={YAC_APP_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:opacity-95 sm:text-base"
              style={{ backgroundColor: RED }}
            >
              <FaGooglePlay className="text-lg" />
              Get it on Google Play
              <FaExternalLinkAlt className="text-xs opacity-80" />
            </a>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900/90 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:text-base"
            >
              <FaMobileAlt className="text-sm" style={{ color: RED }} />
              See courses
              <FaArrowRight className="text-xs opacity-80" />
            </Link>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 w-full"
        >
          <div
            className="relative mx-auto w-full max-w-[400px] rounded-[1.25rem] border border-gray-200/80 bg-gradient-to-b from-slate-100/90 to-white p-2.5 sm:p-3"
            style={{
              boxShadow:
                "0 20px 50px -18px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center justify-between gap-2 rounded-t-[0.9rem] bg-gradient-to-r from-slate-900 to-slate-800 px-3 py-2.5 sm:px-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${RED}ee` }}
                >
                  <FaGooglePlay className="text-base text-white" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    Yasir Ali Classes
                  </p>
                  <p className="text-xs text-white/60">YAC app · Android</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-b-[0.85rem] bg-gradient-to-b from-gray-900 to-black p-1.5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black">
                <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/95" />
                <img
                  src={joinYacAppPoster}
                  alt="YAC mobile app preview on a phone"
                  className="h-[min(560px,70vh)] w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/25 bg-white/10 p-3.5 shadow-lg backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/95">
                    Learn without friction
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-white/95">
                    Classes, materials, and tests—one login, your pace, zero clutter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
