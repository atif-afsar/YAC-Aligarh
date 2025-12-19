import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stats from "./Stats";

export default function Hero() {
  const images = [
    "https://www.yasiraliclasses.in/assets/images/sliders/slider2.jpg",
    "https://www.yasiraliclasses.in/assets/images/sliders/Banner2.5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8f8f8] pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full mb-4">
              COMMERCE COACHING
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0b1d3a]">
              Master Commerce{" "}
              <span className="block sm:inline">
                with <span className="text-[#DC3545]">Yasir Ali Classes</span>
              </span>
            </h1>

            <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
              Expert guidance for Class 11–12, B.Com, CA Foundation & CS.
              Personalized teaching that builds confidence and delivers results.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#DC3545] text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                Explore Courses
              </button>

              <button className="border border-[#DC3545] text-[#DC3545] px-7 py-3 rounded-lg font-semibold hover:bg-[#DC3545] hover:text-white transition">
                View Results
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">

            {/* SOFT GLOW (CONTROLLED) */}
            <div className="absolute w-64 h-64 bg-pink-200 blur-[80px] opacity-40 rounded-full" />

            <AnimatePresence mode="wait">
              <motion.img
                key={images[current]}
                src={images[current]}
                alt="Commerce Classroom"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="
                  relative
                  w-full
                  max-w-[320px]
                  sm:max-w-[420px]
                  lg:max-w-xl
                  rounded-3xl
                  object-contain
                  shadow-xl
                "
              />
            </AnimatePresence>

          </div>
        </div>

        {/* STATS */}
        <div className="mt-20">
          <Stats />
        </div>

      </div>
    </section>
  );
}
