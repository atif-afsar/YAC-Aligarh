import { motion } from "framer-motion";
import { FaShieldAlt, FaStar, FaUserFriends } from "react-icons/fa";

const coreValues = [
  {
    icon: FaShieldAlt,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in our teaching, counseling, and guidance.",
  },
  {
    icon: FaStar,
    title: "Excellence",
    description: "Striving for perfection in every lecture, study material, and doubt-solving session we provide.",
  },
  {
    icon: FaUserFriends,
    title: "Student-Centric",
    description: "Every decision we make puts the student's learning outcomes, understanding, and career growth first.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function OurCoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#DC3545] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-[#DC3545]/10 p-4 rounded-xl">
                    <Icon className="text-[#DC3545] text-3xl" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

