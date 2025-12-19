import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function StatCard({ value, label, delay }) {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, numericValue, {
      duration: 1.8,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [numericValue, delay, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition"
    >
      {/* NUMBER */}
      <motion.h3 className="text-3xl md:text-4xl font-extrabold text-[#DC3545] tracking-tight">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.h3>

      {/* LABEL */}
      <p className="text-sm md:text-base text-gray-600 mt-3 font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6"
    >
      {[
        ["10+", "Years Experience"],
        ["5000+", "Happy Students"],
        ["100%", "Pass Rate"],
        ["1", "Top City Ranks"],
      ].map(([value, label], index) => (
        <StatCard
          key={label}
          value={value}
          label={label}
          delay={index * 0.15}
        />
      ))}
    </motion.div>
  );
}
