import { motion as Motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      
      {/* subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* small label */}
        <Motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-4 px-4 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-full"
        >
          About Us
        </Motion.span>

        {/* main heading */}
        <Motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212529] leading-tight"
        >
          Empowering Future <br />
          <span className="text-red-600">Commerce Leaders</span>
        </Motion.h1>

        {/* description */}
        <Motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          We are committed to shaping confident, skilled, and result-driven
          commerce students through expert mentorship, practical learning,
          and a deeply structured academic approach.
        </Motion.p>

        {/* optional divider */}
        <Motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 h-[2px] w-24 mx-auto bg-red-600 origin-left"
        />

      </div>
    </section>
  );
}
