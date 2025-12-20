import { motion } from "framer-motion";
import { FaCheck, FaArrowRight, FaPlay, FaCalendar } from "react-icons/fa";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* RANKED BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 border-2 border-[#DC3545] rounded-full px-4 py-2 mb-6"
            >
              <FaCheck className="text-[#DC3545] text-sm" />
              <span className="text-sm font-semibold text-[#DC3545]">
                Ranked #1 Commerce Coaching
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6"
            >
              Empowering the{" "}
              <span className="text-[#DC3545]">Next Generation</span> of
              Commerce Leaders
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Comprehensive coaching for CA, CS, and CMA. Learn from industry
              experts with proven track records and secure your financial future
              today.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#DC3545] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
              >
                Explore Courses
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-gray-300 flex items-center justify-center gap-2 hover:border-gray-400 transition"
              >
                <FaPlay className="text-gray-900" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* FEATURE HIGHLIGHTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {["Expert Faculty", "Updated Syllabus"].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <FaCheck className="text-[#DC3545] text-sm" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - IMAGE WITH OVERLAY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* MAIN IMAGE */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="Students learning together"
                className="w-full h-auto object-cover"
              />
              
              {/* OVERLAY CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#DC3545] text-xs font-bold uppercase mb-1">
                      UPCOMING BATCH
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      CA Foundation 2024
                    </h3>
                  </div>
                  <div className="bg-[#DC3545]/10 p-3 rounded-xl">
                    <FaCalendar className="text-[#DC3545] text-xl" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-20 lg:mt-32">
          <Stats />
        </div>
      </div>
    </section>
  );
}
