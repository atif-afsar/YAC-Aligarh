import { motion } from "framer-motion";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#DC3545] to-red-600 py-20 lg:py-28 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-red-50 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of successful students who have transformed their careers with Commerce Institute.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#DC3545] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Enquire Now
              <FaArrowRight />
            </motion.button>

            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Syllabus
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

