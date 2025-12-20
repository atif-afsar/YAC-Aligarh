import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

export default function OurPurpose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Purpose
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Driven by a commitment to academic excellence and professional ethics, we strive to shape the minds that will shape the economy.
          </p>
        </motion.div>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#DC3545]/10 p-3 rounded-xl flex-shrink-0">
                <FaBullseye className="text-[#DC3545] text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To promote accessible, high-quality commerce education that bridges the gap between academic theory and professional practice, preparing students for real-world challenges.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-[#DC3545]/10 p-3 rounded-xl flex-shrink-0">
                <FaLightbulb className="text-[#DC3545] text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the national benchmark for CA, CPA, and commerce coaching through innovation, student success, and an unwavering commitment to integrity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

