import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { FaGraduationCap, FaUsers, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: FaGraduationCap,
    value: 500,
    suffix: "+",
    label: "Students Placed",
  },
  {
    icon: FaUsers,
    value: 25,
    suffix: "+",
    label: "Expert Tutors",
  },
  {
    icon: FaChartLine,
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
];

function StatCard({ icon: Icon, value, suffix, label, delay }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, delay, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* ICON */}
      <div className="flex justify-center mb-4">
        <div className="bg-[#DC3545]/10 p-4 rounded-xl">
          <Icon className="text-[#DC3545] text-3xl" />
        </div>
      </div>

      {/* NUMBER */}
      <motion.h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.h3>

      {/* LABEL */}
      <p className="text-gray-600 text-base font-medium">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          icon={stat.icon}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          delay={index * 0.15}
        />
      ))}
    </motion.div>
  );
}
