import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const images = [
    "https://www.yasiraliclasses.in/assets/images/sliders/slider2.jpg",
    "https://www.yasiraliclasses.in/assets/images/sliders/Banner2.5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f9fafb] pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full mb-5">
              COMMERCE COACHING
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#0b1d3a]">
              Master Commerce <br />
              with <span className="text-[#DC3545]">Yasir Ali Classes</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Expert guidance for Class 11–12, B.Com, CA Foundation & CS.
              Personalized teaching that builds confidence and delivers results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#DC3545] text-white px-7 py-3 rounded-md font-semibold hover:bg-red-600 transition">
                Explore Courses
              </button>

              <button className="border border-gray-300 text-gray-800 px-7 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                View Results
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE AREA (NEW LAYOUT) */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Glow background */}
            <div className="absolute -inset-10 bg-pink-200 blur-[90px] opacity-40 rounded-full"></div>

            {/* Floating Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={images[current]}
                src={images[current]}
                alt="Commerce Classroom"
                initial={{ opacity: 0, x: 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.96 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="
                  relative
                  w-full 
                  max-w-xl
                  rounded-3xl
                  object-contain
                  shadow-xl
                "
              />
            </AnimatePresence>

          </div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            ["10+", "Years Experience"],
            ["5000+", "Happy Students"],
            ["100%", "Pass Rate"],
            ["Top", "City Ranks"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#0b1d3a]">{value}</h3>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
