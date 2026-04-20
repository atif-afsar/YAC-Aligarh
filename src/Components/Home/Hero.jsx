import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const RED = "#DC3545";

/** Fanned row: outer frames sit lower; inner pair lifts for a subtle arc */
const FAN_IMAGES = [
  {
    src: "https://yasiraliclasses.in/assets/images/sliders/unnamed.webp",
    alt: "Students collaborating in a classroom",
    className:
      "-rotate-[13deg] translate-y-4 sm:translate-y-5 md:translate-y-6",
  },
  {
    src: "https://yasiraliclasses.in/assets/images/sliders/slider-2.webp",
    alt: "Focused study session with notes",
    className:
      "-rotate-[6deg] -translate-y-2 sm:-translate-y-3 md:-translate-y-4",
  },
  {
    src: "https://yasiraliclasses.in/assets/images/sliders/slider-4.webp",
    alt: "Graduation celebration",
    className:
      "rotate-[6deg] -translate-y-2 sm:-translate-y-3 md:-translate-y-4",
  },
  {
    src: "https://yasiraliclasses.in/assets/images/sliders/slider-3.webp",
    alt: "Group learning and discussion",
    className:
      "rotate-[13deg] translate-y-4 sm:translate-y-5 md:translate-y-6",
  },
];

function HeroSquiggles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute -left-[8%] -top-[5%] h-[min(55vh,420px)] w-[min(70vw,520px)] text-red-400/20"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M40 20 C120 80 80 180 160 220 S280 260 320 340"
          stroke="currentColor"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M20 120 C100 100 140 200 100 280"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
      <svg
        className="absolute -right-[12%] top-[18%] h-[min(50vh,380px)] w-[min(75vw,560px)] text-red-400/25"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M360 40 C280 120 340 200 260 260 S120 300 60 380"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M380 200 C300 220 240 320 180 360"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pb-24">
      <HeroSquiggles />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-serif-display text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.28em] text-gray-700">
            Commerce coaching
          </p>

          <h1 className="mt-5 sm:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.08] tracking-tight">
            Crack Your Exams with{" "}
            <span
              className="font-serif-display italic font-semibold"
              style={{ color: RED }}
            >
              Clarity
            </span>{" "}
            & Confidence
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Join 5,000+ learners who chose structured mentorship, updated
            material, and exam-focused coaching—online and offline in Aligarh.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/courses"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-9 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95"
                style={{ backgroundColor: RED }}
              >
                Enroll Now Today
                <FaArrowRight className="text-sm" />
              </Link>
            </Motion.div>
            <Motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/courses"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border-2 border-gray-900 bg-white px-9 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                <FaPlay className="text-sm text-gray-700" />
                Explore Courses
              </Link>
            </Motion.div>
          </div>
        </Motion.div>

        {/* Fanned image strip — arc via per-frame rotate + translateY */}
        <div className="relative mx-auto mt-14 md:mt-16 max-w-4xl px-2">
          <div className="flex justify-center items-end gap-2 sm:gap-3 md:gap-5 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
            {FAN_IMAGES.map((item, i) => (
              <Motion.div
                key={item.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="shrink-0 w-[28%] max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
              >
                <div
                  className={`rounded-2xl border-2 border-gray-900 overflow-hidden shadow-lg bg-white ${item.className}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full aspect-[3/4] object-cover block"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
