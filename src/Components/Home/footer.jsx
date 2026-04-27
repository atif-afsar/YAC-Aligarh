import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const RED = "#DC3545";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Faculty", to: "/faculty" },
  { label: "Results", to: "/results" },
  { label: "Admissions", to: "/admissions" },
  { label: "YouTube", to: "/youtube" },
];

const STREAMS = [
  "Commerce Programs",
  "Science Programs",
  "Entrance Preparation",
  "Regular School Batches",
];

const SOCIALS = [
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCUlHYg9DL5LACF_fHQI7I_g",
    label: "YouTube",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yasiraliclasses",
    label: "Instagram",
  },
  { icon: FaFacebookF, href: "https://www.facebook.com/yasiraliclasses/", label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#121417] pt-12 text-white sm:pt-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/5">
              <img
                src="/images/Logo.png"
                alt="Yasir Ali Classes logo"
                className="h-9 w-auto object-contain sm:h-10"
                loading="lazy"
              />
            </span>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Yasir Ali Classes
              <span className="ml-2 font-serif-display italic" style={{ color: RED }}>
                YAC
              </span>
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Structured mentoring for Commerce, Science, Entrance, and Regular
            batches with exam-ready systems online and offline.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-red-300">
            We Debit Efforts, to Credit Your Success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.04, ease: "easeOut" }}
        >
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {FOOTER_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="transition hover:text-red-300"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
        >
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">
            Programs
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {STREAMS.map((stream) => (
              <li key={stream}>{stream}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        >
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-gray-200">
            Contact
          </h4>

          <div className="space-y-2.5 text-sm text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-red-400" />
              Aligarh, Uttar Pradesh, India
            </p>
            <a
              href="tel:+919045417079"
              className="flex items-center gap-3 transition hover:text-red-300"
            >
              <FaPhoneAlt className="shrink-0 text-red-400" />
              +91 90454 17079
            </a>
            <a
              href="mailto:info@yasiraliclasses.in"
              className="flex items-center gap-3 transition hover:text-red-300"
            >
              <FaEnvelope className="shrink-0 text-red-400" />
              info@yasiraliclasses.in
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-200 transition hover:border-red-400 hover:text-red-300"
                >
                  <Icon size={14} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-gray-400 sm:px-6 sm:text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-center md:text-left">
            © {year} Yasir Ali Classes. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Built for students across India - Online & Offline Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
