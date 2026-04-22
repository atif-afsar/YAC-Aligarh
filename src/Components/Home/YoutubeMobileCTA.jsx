import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaMobileAlt, FaYoutube } from "react-icons/fa";

const RED = "#DC3545";

const ACTIONS = [
  {
    title: "Watch on YouTube",
    description:
      "Revision capsules, concept explainers, and exam strategy videos from YAC faculty.",
    href: "https://www.youtube.com/",
    external: true,
    icon: FaYoutube,
    accent: "#FF0000",
    cta: "Open YouTube",
  },
  {
    title: "Join on Mobile App",
    description:
      "Access classes, tests, notes, and performance tracking from your phone anytime.",
    href: "/mobile-app",
    external: false,
    icon: FaMobileAlt,
    accent: RED,
    cta: "Open App Page",
  },
];

function ActionCard({ item, index }) {
  const Icon = item.icon;
  const wrapperClass =
    "group relative block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg";

  const content = (
    <>
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
        style={{ backgroundColor: item.accent }}
      >
        <Icon className="text-lg" />
      </span>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
        {item.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#DC3545] transition group-hover:gap-2.5">
        {item.cta}
        <FaArrowRight className="text-xs" />
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
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
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

export default function YoutubeMobileCTA() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-7">
          {ACTIONS.map((item, index) => (
            <ActionCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
