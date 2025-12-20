import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          About <span className="text-red-600">Commerce Institute</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Empowering future commerce leaders with expert guidance, practical
          learning, and result-oriented education.
        </motion.p>

      </div>
    </section>
  );
}
