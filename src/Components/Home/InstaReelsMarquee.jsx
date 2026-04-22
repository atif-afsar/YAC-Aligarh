import { useMemo } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaPlay } from "react-icons/fa";

const RED = "#DC3545";

/** Replace `href` with your reel or profile URLs when ready */
const REELS = [
  {
    href: "https://www.instagram.com/",
    poster:
      "https://yasiraliclasses.in/assets/images/sliders/slider-2.webp",
    caption: "Classroom moments",
  },
  {
    href: "https://www.instagram.com/",
    poster:
      "https://yasiraliclasses.in/assets/images/sliders/slider-4.webp",
    caption: "Revision drills",
  },
  {
    href: "https://www.instagram.com/",
    poster:
      "https://yasiraliclasses.in/assets/images/sliders/slider-3.webp",
    caption: "Faculty bytes",
  },
  {
    href: "https://www.instagram.com/",
    poster:
      "https://yasiraliclasses.in/assets/images/sliders/unnamed.webp",
    caption: "Student wins",
  },
  {
    href: "https://www.instagram.com/",
    poster:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=480&h=854&fit=crop",
    caption: "Campus life",
  },
  {
    href: "https://www.instagram.com/",
    poster:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=480&h=854&fit=crop",
    caption: "Exam strategy",
  },
];

function ReelCard({ href, poster, caption }) {
  return (
    <Motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DC3545] focus-visible:ring-offset-[#FAFAFA]"
      style={{ contain: "layout paint" }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      {/* Phone-style frame: balanced size, soft depth */}
      <div
        className={[
          "relative w-[148px] sm:w-[162px] md:w-[172px] lg:w-[180px]",
          "rounded-[1.35rem] p-[5px]",
          "bg-gradient-to-b from-white to-gray-100/90",
          "shadow-[0_14px_36px_-14px_rgba(15,23,42,0.22),0_4px_12px_-4px_rgba(15,23,42,0.08)]",
          "ring-1 ring-gray-900/[0.06]",
          "transition-shadow duration-500",
          "group-hover:shadow-[0_22px_48px_-16px_rgba(15,23,42,0.28),0_8px_20px_-8px_rgba(15,23,42,0.12)]",
        ].join(" ")}
      >
        <div className="relative overflow-hidden rounded-[1.05rem] bg-gray-900">
          <div className="relative aspect-[9/16]">
            <img
              src={poster}
              alt=""
              width={360}
              height={640}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
            />
            {/* Vignette + readability */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.45)_100%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
              aria-hidden
            />

            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2.5 pt-2.5 pb-1">
              <span className="flex gap-1 rounded-full bg-black/25 px-2 py-1 backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-white/90" />
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span className="h-1 w-1 rounded-full bg-white/35" />
              </span>
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] text-white shadow-md backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, #f58529, #dd2a7b 45%, ${RED} 100%)`,
                }}
                aria-hidden
              >
                <FaInstagram />
              </span>
            </div>

            {/* Play hint — appears on hover */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg ring-4 ring-black/10">
                <FaPlay className="ml-0.5 text-sm" />
              </span>
            </div>

            {/* Caption */}
            <div className="absolute inset-x-2 bottom-2 sm:inset-x-2.5 sm:bottom-2.5">
              <p className="rounded-lg bg-black/40 px-2.5 py-1.5 text-center text-[11px] font-medium leading-snug text-white/95 backdrop-blur-md ring-1 ring-white/10 sm:text-xs">
                {caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Motion.a>
  );
}

export default function InstaReelsMarquee() {
  const reduceMotion = useReducedMotion();
  const loop = useMemo(() => [...REELS, ...REELS], []);

  return (
    <section
      className="relative overflow-hidden border-y border-gray-200/60 bg-[#FAFAFA] py-14 md:py-20"
      aria-labelledby="insta-reels-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,53,69,0.07),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <svg
          className="absolute -right-[8%] top-1/2 h-[min(380px,50vh)] w-[min(480px,75vw)] -translate-y-1/2 text-red-400/12"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M320 60 C240 140 300 220 220 280 S80 320 40 380"
            stroke="currentColor"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-9 flex flex-col gap-5 text-center sm:mb-11 sm:flex-row sm:items-end sm:justify-between sm:text-left"
        >
          <div className="max-w-2xl">
            <p className="font-serif-display text-sm font-medium uppercase tracking-[0.28em] text-gray-600">
              On Instagram
            </p>
            <h2
              id="insta-reels-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-[2.65rem] md:leading-tight"
            >
              Reels &amp;{" "}
              <span
                className="font-serif-display italic font-semibold"
                style={{ color: RED }}
              >
                highlights
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-gray-600 sm:text-[1.05rem] sm:leading-relaxed">
              Bite-sized clips from class and campus—tap a frame to watch on
              Instagram.
            </p>
          </div>
          <Motion.a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95 sm:self-auto"
            style={{ backgroundColor: RED }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaInstagram className="text-base" aria-hidden />
            Follow us
          </Motion.a>
        </Motion.div>
      </div>

      <div
        className="relative mx-auto max-w-[100vw] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ contain: "paint" }}
      >
        {reduceMotion ? (
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 sm:gap-7 sm:px-6 lg:px-8">
            {REELS.slice(0, 4).map((item, idx) => (
              <ReelCard key={`${item.caption}-${idx}`} {...item} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden py-3 md:py-4">
            <Motion.div
              className="flex w-max gap-6 sm:gap-7 md:gap-8 will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 52,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {loop.map((item, i) => (
                <ReelCard key={`${item.caption}-${i}`} {...item} />
              ))}
            </Motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
