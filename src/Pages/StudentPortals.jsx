import { useMemo } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { FaExternalLinkAlt, FaUniversity, FaGavel, FaCalculator, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Seo from "../Components/common/Seo";

const easeOut = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: easeOut },
  }),
};

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const cardItemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const PORTALS = [
  {
    category: "AMU",
    icon: FaUniversity,
    color: "#1E5631",
    bg: "from-emerald-50 to-emerald-100/40",
    border: "border-emerald-200/80",
    ring: "ring-emerald-100/60",
    links: [
      { name: "Official Website", href: "https://www.amu.ac.in/", desc: "Aligarh Muslim University main site" },
      { name: "Controller of Examinations", href: "https://www.amucontrollerexams.com/", desc: "Date sheets, results & exam notices" },
      { name: "Online Admission Portal", href: "https://oaps.amuonline.ac.in/", desc: "Apply online for AMU admissions" },
    ],
  },
  {
    category: "JMI",
    icon: FaUniversity,
    color: "#1B4D3E",
    bg: "from-teal-50 to-teal-100/40",
    border: "border-teal-200/80",
    ring: "ring-teal-100/60",
    links: [
      { name: "Official Website", href: "https://jmi.ac.in/", desc: "Jamia Millia Islamia main site" },
      { name: "Admission Portal", href: "https://admission.jmi.ac.in/", desc: "JMI online admissions" },
    ],
  },
  {
    category: "BHU",
    icon: FaUniversity,
    color: "#92400E",
    bg: "from-amber-50 to-amber-100/40",
    border: "border-amber-200/80",
    ring: "ring-amber-100/60",
    links: [
      { name: "Admission Portal", href: "https://admission.bhu.ac.in/en", desc: "Banaras Hindu University admissions" },
      { name: "BHU CUET Portal", href: "https://bhucuet.samarth.edu.in/", desc: "CUET-based UG admissions" },
      { name: "MBA Admissions", href: "https://bhumbaadm.samarth.edu.in/", desc: "BHU MBA programme admissions" },
    ],
  },
  {
    category: "CUET",
    icon: FaGraduationCap,
    color: "#1a56db",
    bg: "from-blue-50 to-blue-100/40",
    border: "border-blue-200/80",
    ring: "ring-blue-100/60",
    links: [
      { name: "CUET UG Portal", href: "https://cuet.nta.nic.in/", desc: "Common University Entrance Test — UG" },
      { name: "CUET PG Portal", href: "https://exams.nta.nic.in/cuet-pg/", desc: "Common University Entrance Test — PG" },
      { name: "NTA Official Site", href: "https://www.nta.ac.in/", desc: "National Testing Agency" },
    ],
  },
  {
    category: "CLAT",
    icon: FaGavel,
    color: "#6B21A8",
    bg: "from-purple-50 to-purple-100/40",
    border: "border-purple-200/80",
    ring: "ring-purple-100/60",
    links: [
      { name: "Consortium of NLUs", href: "https://consortiumofnlus.ac.in/", desc: "CLAT registration, results & NLU admissions" },
    ],
  },
  {
    category: "CA / CS / CMA",
    icon: FaCalculator,
    color: "#B91C1C",
    bg: "from-rose-50 to-rose-100/40",
    border: "border-rose-200/80",
    ring: "ring-rose-100/60",
    links: [
      { name: "ICAI — Chartered Accountancy", href: "https://www.icai.org/", desc: "Institute of Chartered Accountants of India" },
      { name: "ICSI — Company Secretary", href: "https://www.icsi.edu/", desc: "Institute of Company Secretaries of India" },
      { name: "ICMAI — Cost & Mgmt Accountancy", href: "https://www.icmai.in/", desc: "Institute of Cost Accountants of India" },
    ],
  },
  {
    category: "CAT (MBA)",
    icon: FaBriefcase,
    color: "#0E7490",
    bg: "from-cyan-50 to-cyan-100/40",
    border: "border-cyan-200/80",
    ring: "ring-cyan-100/60",
    links: [
      { name: "IIM CAT Portal", href: "https://iimcat.ac.in/", desc: "Common Admission Test for IIMs" },
    ],
  },
];

export default function StudentPortals() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? cardItemReduced : cardItem;

  const seoTitle = "Student Portals — Quick Links | Yasir Ali Classes";
  const seoDesc =
    "Quick access to AMU, JMI, BHU, CUET, CLAT, CA, CS, CMA & CAT official portals. Curated for YAC students to save time.";

  return (
    <main className="min-h-screen bg-[#faf8f5]" aria-labelledby="portals-heading">
      <Seo title={seoTitle} description={seoDesc} path="/student-portals" />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-2 sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,58,95,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,95,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-gradient-to-r from-white to-rose-50/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DC3545] shadow-sm shadow-rose-100/40 sm:text-[11px]"
          >
            <FaExternalLinkAlt className="text-[9px] opacity-60" aria-hidden />
            Student Portals
          </Motion.p>
          <Motion.h1
            id="portals-heading"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Quick access to{" "}
            <span className="bg-gradient-to-r from-[#DC3545] to-rose-600 bg-clip-text text-transparent">
              official portals
            </span>
          </Motion.h1>
          <Motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            All the university, entrance exam and professional body websites you
            need — in one place. Curated by YAC for our students.
          </Motion.p>
        </div>
      </section>

      {/* Portal cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px", amount: 0.1 }}
          variants={cardStagger}
        >
          {PORTALS.map((portal) => {
            const Icon = portal.icon;
            return (
              <Motion.div
                key={portal.category}
                variants={variants}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border ${portal.border} bg-gradient-to-br ${portal.bg} p-6 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.12)] ring-1 ${portal.ring} transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.16)]`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200/60"
                    style={{ color: portal.color }}
                  >
                    <Icon className="text-lg" aria-hidden />
                  </span>
                  <h2
                    className="text-lg font-bold tracking-tight"
                    style={{ color: portal.color }}
                  >
                    {portal.category}
                  </h2>
                </div>

                <div className="mt-4 flex flex-1 flex-col gap-2.5">
                  {portal.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-start gap-3 rounded-xl bg-white/80 px-4 py-3 ring-1 ring-gray-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-gray-300/80"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-900 transition-colors group-hover/link:text-gray-950">
                          {link.name}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                          {link.desc}
                        </p>
                      </div>
                      <FaExternalLinkAlt className="mt-1 shrink-0 text-[10px] text-gray-400 transition-all duration-200 group-hover/link:text-gray-600" aria-hidden />
                    </a>
                  ))}
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>
      </section>
    </main>
  );
}
