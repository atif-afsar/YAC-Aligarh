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
  hidden: { opacity: 0, y: 36, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F9] py-20 lg:py-28">
      <Motion.div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-red-200/35 blur-3xl"
        aria-hidden
        animate={{ x: [-10, 16, -10], y: [0, -12, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl"
        aria-hidden
        animate={{ x: [10, -14, 10], y: [0, 14, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <Motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ letterSpacing: "-0.02em" }}
            whileInView={{ letterSpacing: "-0.01em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Architectural Advantage
          </Motion.h2>
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
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -8, rotateX: -1.2, rotateY: 1.8 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                <Motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(220,53,69,0.07) 0%, rgba(220,53,69,0) 45%)",
                  }}
                />
                <Motion.div
                  className="relative z-10 w-12 h-12 rounded-full bg-[#DC3545] flex items-center justify-center text-white shadow-md shadow-red-500/25 mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 360, damping: 20 }}
                >
                  <Motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon className="text-xl" />
                  </Motion.div>
                </Motion.div>
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
