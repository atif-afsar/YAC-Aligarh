import { motion } from "framer-motion";
import {
  FaCalculator,
  FaBriefcase,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";

const programs = [
  {
    icon: FaCalculator,
    color: "text-blue-600",
    title: "CA Foundation",
    desc: "Expert coaching for CA Foundation with comprehensive study materials and mock tests.",
  },
  {
    icon: FaBriefcase,
    color: "text-red-600",
    title: "CS Executive",
    desc: "Specialized training for CS Executive with focus on company law and finance.",
  },
  {
    icon: FaGraduationCap,
    color: "text-green-600",
    title: "B.Com Coaching",
    desc: "Structured guidance for B.Com students to excel in university exams.",
  },
  {
    icon: FaBookOpen,
    color: "text-yellow-500",
    title: "11th & 12th Commerce",
    desc: "Comprehensive coaching for commerce subjects to ace board exams.",
  },
];

export default function Programs() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition cursor-pointer"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${item.color} text-4xl mb-5`}
                >
                  <Icon />
                </motion.div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="mt-6 h-[3px] w-0 bg-[#DC3545] rounded-full group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
