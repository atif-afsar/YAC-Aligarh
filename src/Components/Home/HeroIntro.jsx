import { motion } from "framer-motion";
import {
  FaTrophy,
  FaQuestionCircle,
  FaUsers,
  FaLaptopHouse,
} from "react-icons/fa";

export default function HeroIntro() {
  return (
    <section className="relative bg-[#f5f6f8] pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-[#2c3e50]">
            Aligarh's Trusted & Premier{" "}
            <span className="text-[#DC3545]">Commerce</span>{" "}
            <span className="block sm:inline">Coaching Platform</span>
          </h1>

          {/* SUB TEXT */}
          <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            Unleash your potential by enrolling with{" "}
            <span className="font-semibold text-[#DC3545]">
              Yasir Ali Classes
            </span>
            . The most reliable and affordable commerce learning solution in
            Aligarh.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 text-left max-w-xl mx-auto lg:mx-0">
            <Feature icon={<FaTrophy />} text="16+ Years of Legacy in Commerce Coaching" />
            <Feature icon={<FaQuestionCircle />} text="Doubt Solving with Quick Response" />
            <Feature icon={<FaUsers />} text="Regular Communication with Parents" />
            <Feature icon={<FaLaptopHouse />} text="Online & Offline Batches" />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#DC3545] text-white px-8 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:bg-red-700 transition">
              Get a Demo
            </button>

            <button className="border-2 border-[#DC3545] text-[#DC3545] px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-[#DC3545] hover:text-white transition">
              Call Now
            </button>
          </div>
        </motion.div>

        {/* RIGHT BRAND VISUAL (MOBILE FRIENDLY) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <motion.div
            className="
              relative 
              w-56 h-56 
              sm:w-64 sm:h-64 
              lg:w-72 lg:h-72 
              rounded-full bg-white shadow-xl 
              flex items-center justify-center
            "
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* GLOW RING */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#DC3545]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            {/* SOFT GLOW */}
            <div className="absolute -inset-3 rounded-full bg-[#DC3545]/10 blur-2xl" />

            {/* LOGO */}
            <motion.img
              src="/images/Logo.png"
              alt="Yasir Ali Classes Logo"
              className="relative w-32 h-32 sm:w-36 sm:h-36 object-contain"
              whileHover={{ scale: 1.06 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-[#DC3545] text-lg mt-1">{icon}</span>
      <p className="text-gray-700 font-medium leading-snug text-sm sm:text-base">
        {text}
      </p>
    </div>
  );
}
