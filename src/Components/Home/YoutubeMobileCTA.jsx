import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaMobileAlt, FaYoutube } from "react-icons/fa";

const RED = "#DC3545";
const YAC_YOUTUBE_URL = "https://www.youtube.com/channel/UCUlHYg9DL5LACF_fHQI7I_g";
const YAC_APP_URL =
  "https://play.google.com/store/apps/details?id=co.classplus.yasir&hl=en";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 22, scale: 0.97, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const ACTIONS = [
  {
    title: "Watch on YouTube",
    description:
      "Revision capsules, concept explainers, and exam strategy videos from YAC faculty.",
    href: YAC_YOUTUBE_URL,
    external: true,
    icon: FaYoutube,
    accent: "#FF0000",
    cta: "Open YouTube",
    stat: "105K+ subscribers",
  },
  {
    title: "Join on Mobile App",
    description:
      "Access classes, tests, notes, and performance tracking from your phone anytime.",
    href: YAC_APP_URL,
    external: true,
    icon: FaMobileAlt,
    accent: RED,
    cta: "Open on Play Store",
    stat: "10K+ downloads",
  },
];

function ActionCard({ item, index }) {
  const Icon = item.icon;
  const wrapperClass =
    "group relative block overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition hover:shadow-[0_22px_52px_-20px_rgba(0,0,0,0.26)]";

  const content = (
    <>
      <Motion.div
        className="pointer-events-none absolute -inset-x-12 -top-24 h-40 rotate-12 opacity-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
        }}
        whileHover={{ x: ["-35%", "140%"], opacity: [0, 0.65, 0] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <span
        className="absolute right-4 top-4 rounded-full border border-red-100 bg-red-50/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-red-700"
      >
        {item.stat}
      </span>

      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm shadow-red-500/25"
        style={{ backgroundColor: item.accent }}
      >
        <Motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <Icon className="text-lg" />
        </Motion.span>
      </span>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
        {item.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#DC3545] transition group-hover:gap-2.5">
        {item.cta}
        <Motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex"
        >
          <FaArrowRight className="text-xs" />
        </Motion.span>
      </span>
    </>
  );

  if (item.external) {
    return (
      <Motion.a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
        variants={itemVariants(index)}
        whileHover={{ y: -8, rotateX: -1.2, rotateY: index % 2 === 0 ? 2 : -2 }}
        transition={{ type: "spring", stiffness: 340, damping: 22 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {content}
      </Motion.a>
    );
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={item.href} className={wrapperClass}>
        {content}
      </Link>
    </Motion.div>
  );
}

const itemVariants = () => cardItem;

export default function YoutubeMobileCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(220,53,69,0.14) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <Motion.div
        className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-red-200/35 blur-3xl"
        aria-hidden
        animate={{ x: [-8, 14, -8], y: [0, -12, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl"
        aria-hidden
        animate={{ x: [8, -12, 8], y: [0, 12, 0], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
        >
          <p className="font-serif-display text-sm font-medium uppercase tracking-[0.26em] text-gray-600">
            Learn Everywhere
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Stay connected with YAC on{" "}
            <span className="font-serif-display italic" style={{ color: RED }}>
              YouTube
            </span>{" "}
            & App
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Pick your preferred platform and continue your preparation with the
            same YAC guidance.
          </p>
        </Motion.div>

        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          className="grid gap-5 sm:grid-cols-2 lg:gap-7"
        >
          {ACTIONS.map((item, index) => (
            <ActionCard key={item.title} item={item} index={index} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
