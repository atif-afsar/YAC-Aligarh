import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaPhone, FaEnvelope } from "react-icons/fa";

export default function AdmissionsCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#DC3545] to-red-600 py-20 lg:py-28 overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* HEADER BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase px-4 py-2 rounded-full">
              ADMISSIONS OPEN 2024
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Kickstart Your Career in Commerce?
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-red-50 mb-10 max-w-2xl mx-auto"
          >
            Join the ranks of successful CAs and Finance professionals. Enroll
            in our upcoming batch and take the first step towards a prestigious
            career.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#DC3545] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Enroll Now
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FaDownload />
              Get Syllabus
            </motion.button>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 pt-8 border-t border-white/20"
          >
            <div className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <span className="font-medium">+91 1234567890</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <span className="font-medium">admissions@commerceinstitute.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

