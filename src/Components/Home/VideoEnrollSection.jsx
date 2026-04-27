import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function VideoEnrollSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return undefined;

    let observer;
    const tryPlay = () => {
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    tryPlay();

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            videoEl.pause();
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(videoEl);
    }

    return () => {
      if (observer) observer.disconnect();
      videoEl.pause();
    };
  }, []);

  return (
    <section className="px-3 sm:px-6 py-12 sm:py-14 md:py-20">
      <Motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl mx-auto overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.4rem] shadow-[0_25px_70px_-20px_rgba(17,24,39,0.5)]"
      >
        <video
          ref={videoRef}
          src="/video/vidssave.com 🎯Admissions open Join Yasir Ali Classes – where serious students get serious result 480P.mp4"
          className="h-[420px] sm:h-[460px] md:h-[540px] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="YAC premium learning experience preview"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-tr from-black/85 via-black/45 to-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,53,69,0.25),transparent_46%)]" />

        <div className="absolute inset-0 z-10 flex items-end md:items-center">
          <div className="w-full px-4 pb-6 sm:px-8 sm:pb-9 md:max-w-2xl md:px-12 md:pb-0">
            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-[11px] sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.24em] text-red-200 text-center md:text-left"
            >
              Your Future Starts Here
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-2.5 sm:mt-3 text-[1.65rem] leading-[1.15] sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center md:text-left"
            >
              Learn with a premium classroom feel, online and offline.
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-3 sm:mt-4 text-[13px] sm:text-base md:text-lg text-gray-200 max-w-xl leading-relaxed text-center md:text-left"
            >
              Enroll in focused Commerce and Science batches guided by mentors
              who stay with you from basics to results.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-6 sm:mt-8 flex justify-center md:justify-start"
            >
              <Link
                to="/courses"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#DC3545] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-red-900/40 transition-all hover:bg-red-600 hover:translate-y-[-1px]"
              >
                Enroll Now
                <FaArrowRight className="text-sm" />
              </Link>
            </Motion.div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
