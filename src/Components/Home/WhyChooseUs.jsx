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
      "Elite mentors bridging the gap between industry excellence and proven exam methodologies.",
  },
  {
    icon: FaChartLine,
    title: "Proven Results",
    description:
      "A legacy of consistent excellence where fundamental clarity meets exceptional student outcomes.",
  },
  {
    icon: FaUserFriends,
    title: "Personal Mentorship",
    description:
      "Bespoke one-on-one guidance within intimate batch sizes to ensure no concept remains unheard.",
  },
  {
    icon: FaClipboardList,
    title: "Test Architecture",
    description:
      "Rigorous mock series and analytical drills precisely calibrated to the evolving exam landscape.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-24 lg:py-32">
      {/* Premium Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion.div
          className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <Motion.div
          className="absolute -right-[5%] bottom-0 h-[400px] w-[400px] rounded-full bg-rose-100/30 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#DC3545] uppercase bg-red-50 rounded-full border border-red-100">
            Why Excellence Matters
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            The <span className="text-[#DC3545]">Architectural</span> Advantage
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-600 leading-relaxed">
            A deliberate framework—clarity first, then depth, then masterful exam execution.
          </p>
        </Motion.div>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <Motion.article
                key={idx}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Decorative Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-8 relative inline-flex">
                    <div className="absolute inset-0 rounded-2xl bg-red-500 blur-[12px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DC3545] to-[#b02a37] flex items-center justify-center text-white shadow-lg">
                      <Icon className="text-2xl group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#DC3545] transition-colors duration-300">
                    {adv.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-[0.95rem]">
                    {adv.description}
                  </p>
                </div>
              </Motion.article>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}