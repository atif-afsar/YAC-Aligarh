import { motion } from "framer-motion";
import { FaHistory, FaAward, FaUsers } from "react-icons/fa";

const milestones = [
  {
    icon: FaHistory,
    year: "2015",
    title: "Foundation",
    description: "Commerce Institute was founded with a vision to provide quality commerce education to students in Aligarh.",
  },
  {
    icon: FaUsers,
    year: "2018",
    title: "Expansion",
    description: "Expanded our faculty and introduced specialized courses for CA, CS, and CPA programs.",
  },
  {
    icon: FaAward,
    year: "2024",
    title: "Recognition",
    description: "Achieved recognition as one of the leading commerce coaching institutes with 5k+ successful students.",
  },
];

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted name in commerce education, our journey is a testament to our commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0"
              >
                {/* Icon and Year */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                  <div className="bg-[#DC3545]/10 p-4 rounded-xl mb-3">
                    <Icon className="text-[#DC3545] text-2xl" />
                  </div>
                  <span className="text-2xl font-bold text-[#DC3545]">
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-20 w-0.5 h-full bg-gray-200"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

