import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaPhoneAlt, FaRobot, FaTimes, FaWhatsapp } from "react-icons/fa";

const RED = "#DC3545";

function LeftAction({ icon: Icon, label, tone = "red", href, delay = 0 }) {
  const isWhatsapp = tone === "whatsapp";
  const accent = isWhatsapp ? "#25D366" : RED;
  return (
    <Motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 14, scale: 0.95 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      aria-label={label}
      className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/95 text-gray-800 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.35)] backdrop-blur transition sm:h-14 sm:w-14"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${accent}40`,
          background: `radial-gradient(circle at 35% 35%, ${accent}1f, transparent 65%)`,
        }}
      />
      <span
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full"
        style={{ backgroundColor: `${accent}1a` }}
      >
        <Icon className="text-[1.2rem] sm:text-[1.25rem]" style={{ color: accent }} />
      </span>
      <span className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-[#161a1f] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white opacity-0 transition group-hover:opacity-100 sm:block">
        {label}
      </span>
    </Motion.a>
  );
}

export default function FloatingQuickActions() {
  const [openLeft, setOpenLeft] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] h-20 bg-gradient-to-t from-black/10 to-transparent" />

      <div className="fixed bottom-4 left-3 z-[100] flex flex-col gap-3 sm:bottom-5 sm:left-5 sm:gap-3.5">
        <AnimatePresence>
          {openLeft && (
            <>
              <LeftAction
                icon={FaPhoneAlt}
                label="Call"
                delay={0.03}
                tone="red"
                href="tel:+919045417079"
              />
              <LeftAction
                icon={FaWhatsapp}
                label="WhatsApp"
                delay={0.08}
                tone="whatsapp"
                href="https://wa.me/919045417079"
              />
            </>
          )}
        </AnimatePresence>

        <Motion.button
          type="button"
          onClick={() => setOpenLeft((prev) => !prev)}
          aria-label={openLeft ? "Close quick contact actions" : "Open quick contact actions"}
          aria-expanded={openLeft}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-red-300/45 bg-white/95 text-gray-900 shadow-[0_16px_34px_-14px_rgba(220,53,69,0.5)] backdrop-blur"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(220,53,69,0.18),transparent_65%)]" />
          <span
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: RED }}
          >
            {openLeft ? <FaTimes className="text-sm" /> : <FaPhoneAlt className="text-sm" />}
          </span>
        </Motion.button>
      </div>

      <Motion.button
        type="button"
        initial={{ opacity: 0, x: 20, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.48, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label="AI assistant"
        className="group fixed bottom-4 right-3 z-[100] inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-red-300/45 bg-white/95 text-gray-900 shadow-[0_16px_36px_-16px_rgba(220,53,69,0.55)] backdrop-blur sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:px-5 sm:py-2.5"
      >
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(220,53,69,0.1),transparent,rgba(220,53,69,0.16))] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative flex items-center justify-center gap-2.5">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: RED }}
          >
            <FaRobot className="text-sm" />
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.1em] sm:inline sm:text-[0.78rem]">
            AI Assistant
          </span>
        </span>
      </Motion.button>
    </>
  );
}
