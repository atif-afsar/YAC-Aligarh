import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaBookOpen,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";

const features = [
  {
    icon: FaClipboardCheck,
    title: "Experienced Faculty",
    description:
      "Learn from industry veterans with years of practical experience and proven teaching methodologies.",
  },
  {
    icon: FaBookOpen,
    title: "Comprehensive Material",
    description:
      "Well-structured study materials, updated syllabus, and comprehensive resources for every course.",
  },
  {
    icon: FaUsers,
    title: "Personalized Attention",
    description:
      "Small batch sizes ensure individual attention and personalized guidance for every student's growth.",
  },
  {
    icon: FaBullseye,
    title: "Exam-Oriented Strategy",
    description:
      "Focused approach on exam patterns, mock tests, and strategic preparation for guaranteed success.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us for Your Career?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            We bridge the gap between academic theory and professional
            application, ensuring you are exam-ready and industry-prepared.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#DC3545]/10 p-4 rounded-xl">
                    <Icon className="text-[#DC3545] text-3xl" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

