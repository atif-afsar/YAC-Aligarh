import { motion as Motion } from "framer-motion";

const VOICES = [
  {
    name: "Riya Malhotra",
    rank: "AIR 12, CA Inter",
    quote:
      "The mock analysis sessions changed how I attempted papers—every mistake became a checklist item before the final exam.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&face",
  },
  {
    name: "Devansh Agarwal",
    rank: "AIR 5, CS Executive",
    quote:
      "Structured notes and weekly tests meant I never had to guess what to revise. The faculty treated CS like a craft, not cramming.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&face",
  },
  {
    name: "Sneha Kapoor",
    rank: "98.2% Class 12 Boards",
    quote:
      "Commerce finally clicked—I could connect book concepts to real businesses. That confidence carried straight into CA Foundation.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&face",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CoursesVoices() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24 px-6 sm:px-8 lg:px-10 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight"
        >
          Voices of Success
        </Motion.h2>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 grid md:grid-cols-3 gap-8"
        >
          {VOICES.map((v) => (
            <Motion.article
              key={v.name}
              variants={card}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={v.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50"
                />
                <div>
                  <p className="font-bold text-gray-900">{v.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{v.rank}</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600 italic leading-relaxed text-sm sm:text-base">
                “{v.quote}”
              </p>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
