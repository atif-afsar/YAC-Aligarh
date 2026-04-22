import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaGooglePlay, FaMobileAlt } from "react-icons/fa";
import joinYacAppPoster from "../../assets/join-yac-app.png";

const RED = "#DC3545";

export default function MobileAppSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC3545]">
            Mobile App
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Join YAC on the{" "}
            <span className="font-serif-display italic" style={{ color: RED }}>
              app
            </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Get daily practice sets, class updates, recorded lectures, and
            instant doubt support in one place. Learn anytime with the YAC app.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 sm:text-base"
              style={{ backgroundColor: RED }}
            >
              <FaGooglePlay />
              Download App
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 sm:text-base"
            >
              <FaMobileAlt />
              Explore Features
            </a>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[360px] lg:ml-auto"
        >
          <div className="relative rounded-[2.2rem] border border-gray-900/10 bg-gradient-to-b from-gray-900 to-black p-2.5 shadow-[0_22px_55px_-20px_rgba(0,0,0,0.65)]">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black">
              <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/95" />
              <img
                src={joinYacAppPoster}
                alt="YAC mobile app preview"
                className="h-[560px] w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/20 bg-white/12 p-3 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  Yasir Ali Classes
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  Live classes, notes, tests and analytics.
                </p>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
