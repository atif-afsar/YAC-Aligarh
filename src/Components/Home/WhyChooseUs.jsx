import { motion as Motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaChartLine,
  FaUserFriends,
  FaClipboardList,
} from "react-icons/fa";

const ADVANTAGES = [
  {
    icon: FaChalkboardTeacher,
    title: "Expert Faculty",
    description:
      "Learn from mentors who combine industry experience with exam-tested teaching methods.",
  },
  {
    icon: FaChartLine,
    title: "Proven Results",
    description:
      "Consistent selections and strong fundamentals—our outcomes speak through our students.",
  },
  {
    icon: FaUserFriends,
    title: "Personal Mentorship",
    description:
      "Small batches and one-on-one guidance so no doubt stays unresolved.",
  },
  {
    icon: FaClipboardList,
    title: "Test Series",
    description:
      "Full-length mocks, analysis sessions, and pacing drills aligned with the latest pattern.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F9F9F9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            The Architectural Advantage
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            A deliberate framework—clarity first, then depth, then exam execution.
          </p>
        </Motion.div>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <Motion.article
                key={adv.title}
                variants={item}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#DC3545] flex items-center justify-center text-white shadow-md shadow-red-500/25 mb-6">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{adv.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {adv.description}
                </p>
              </Motion.article>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}
