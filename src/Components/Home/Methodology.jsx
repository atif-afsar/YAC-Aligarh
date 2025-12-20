import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaQuestionCircle,
  FaUserCheck,
  FaComments,
} from "react-icons/fa";

const methodologySteps = [
  {
    number: 1,
    title: "Conceptual Clarity",
    description:
      "Build strong foundational understanding with clear explanations of complex topics.",
  },
  {
    number: 2,
    title: "Practice & Application",
    description:
      "Apply concepts through practical exercises and real-world scenarios.",
  },
  {
    number: 3,
    title: "Doubt Resolution",
    description:
      "Get instant clarification on any doubts with dedicated doubt-solving sessions.",
  },
  {
    number: 4,
    title: "Mock Drills & Feedback",
    description:
      "Regular mock tests and personalized feedback to track your progress.",
  },
];

const learningFeatures = [
  {
    icon: FaGraduationCap,
    label: "Interactive Learning",
  },
  {
    icon: FaQuestionCircle,
    label: "Regular Testing",
  },
  {
    icon: FaUserCheck,
    label: "1-on-1 Mentorship",
  },
  {
    icon: FaComments,
    label: "24/7 Doubt Solving",
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Methodology() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#DC3545] text-sm font-bold uppercase mb-2">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            A Structured Path to Success
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT - METHODOLOGY STEPS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 items-start"
              >
                {/* NUMBER CIRCLE */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#DC3545] flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT - LEARNING FEATURES GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {learningFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-[#DC3545] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#DC3545]/10 p-4 rounded-xl">
                      <Icon className="text-[#DC3545] text-2xl" />
                    </div>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">
                    {feature.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

