import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5k+", label: "Students Mentored" },
  { value: "95%", label: "Success Rate" },
  { value: "15+", label: "Expert Faculty" },
];

export default function AboutStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center bg-white rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-3xl font-bold text-red-600">{stat.value}</h3>
            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
