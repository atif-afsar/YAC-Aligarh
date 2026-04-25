import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Faculty", to: "/faculty" },
  { label: "Results", to: "/results" },
  { label: "Admissions", to: "/admissions" },
  { label: "Mobile App", to: "/mobile-app" },
  { label: "YouTube", to: "/youtube" },
  { label: "Blog", to: "/blog" },
];
const courseOptions = ["Science", "Commerce", "Regular Batch", "Entrance Batch"];
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.045 },
  },
  exit: { opacity: 0, y: -10, scale: 0.985, transition: { duration: 0.2 } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.24, ease: "easeOut" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Science");

  const closeMenu = () => setOpen(false);

  const handleOpenInquiry = () => {
    setOpen(false);
    setShowInquiryForm(true);
  };

  useEffect(() => {
    if (!showInquiryForm) return;

    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowInquiryForm(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showInquiryForm]);

  useEffect(() => {
    if (!open) return undefined;
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@400;500;600&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
        }
        .nav-brand-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.82);
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s ease;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: rgba(255,255,255,0.9);
          transition: width 0.25s ease;
          border-radius: 1px;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active {
          color: #ffffff;
        }
        .enroll-btn {
          background: #ffffff;
          color: #B91C1C;
          border: none;
          padding: 7px 20px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          white-space: nowrap;
        }
        .enroll-btn:hover {
          background: #fff1f1;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
        }
        .mobile-menu-bg {
          background: linear-gradient(160deg, #C41E1E 0%, #991B1B 100%);
        }
        .mobile-nav-link {
          color: rgba(255,255,255,0.85);
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.03em;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: color 0.2s;
          display: block;
        }
        .mobile-nav-link:hover {
          color: #ffffff;
        }
        .divider-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          display: inline-block;
          margin: 0 2px;
          vertical-align: middle;
        }
      `}</style>

      <header
        className="nav-root w-full fixed top-0 z-50"
        style={{
          background: "linear-gradient(135deg, #C41E1E 0%, #A71616 60%, #991B1B 100%)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(153,27,27,0.35)",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
            pointerEvents: "none",
          }}
        />

        <div className="relative w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between" style={{ height: 60 }}>

          {/* Left: Brand */}
          <Link to="/" onClick={closeMenu}>
            <Motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 8,
                  padding: "4px",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <img
                  src="/images/Logo.png"
                  alt="YAC Aligarh"
                  style={{ height: 34, width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
              <div>
                <span
                  className="nav-brand-title block text-white"
                  style={{ fontSize: "1rem", lineHeight: 1.12 }}
                >
                  Yasir Ali Classes
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: 1,
                  }}
                >
                  Best Commerce Coaching · Aligarh
                </span>
              </div>
            </Motion.div>
          </Link>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map(({ label, to }, i) => (
              <Motion.div
                key={label}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
              >
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                >
                  {label}
                </NavLink>
              </Motion.div>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Subtle separator */}
            <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.2)", marginRight: 4 }} />
            <Motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="enroll-btn"
              onClick={handleOpenInquiry}
            >
              Enroll Now →
            </Motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-5 rounded bg-white transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-5 rounded bg-white transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-5 rounded bg-white transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <>
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[58] bg-black/35 backdrop-blur-[1px] md:hidden"
                onClick={() => setOpen(false)}
              />
              <Motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed left-3 right-3 top-[68px] z-[60] max-h-[calc(100dvh-84px)] overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(165deg,rgba(196,30,30,0.98),rgba(153,27,27,0.98))] shadow-[0_22px_46px_-20px_rgba(0,0,0,0.65)] md:hidden"
              >
                <nav className="max-h-[calc(100dvh-84px)] overflow-y-auto px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3">
                  <Motion.div
                    variants={mobileItemVariants}
                    className="mb-2 px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65"
                  >
                    Navigation
                  </Motion.div>
                  <ul className="space-y-1.5">
                    {navLinks.map(({ label, to }) => (
                      <Motion.li key={label} variants={mobileItemVariants}>
                        <NavLink
                          to={to}
                          end={to === "/"}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            [
                              "flex items-center justify-between rounded-xl border px-3.5 py-3 text-sm font-semibold transition",
                              isActive
                                ? "border-white/30 bg-white/16 text-white"
                                : "border-transparent bg-white/6 text-white/90 hover:bg-white/12",
                            ].join(" ")
                          }
                        >
                          <span>{label}</span>
                          <span className="text-xs text-white/70">→</span>
                        </NavLink>
                      </Motion.li>
                    ))}
                  </ul>
                  <Motion.div variants={mobileItemVariants} className="mt-3.5 pb-2 pt-2">
                    <button
                      type="button"
                      className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#B91C1C] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.55)] transition hover:bg-rose-50"
                      onClick={handleOpenInquiry}
                    >
                      Enroll Now →
                    </button>
                  </Motion.div>
                </nav>
              </Motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInquiryForm && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/60 px-3 py-4 sm:items-center sm:px-4 sm:py-6"
              onClick={() => setShowInquiryForm(false)}
            >
              <Motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="relative my-2 w-full max-w-2xl rounded-2xl border border-red-100 bg-white p-4 shadow-2xl max-h-[calc(100dvh-1rem)] overflow-y-auto sm:my-0 sm:max-h-[85vh] sm:p-7"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="Close inquiry form"
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-red-200 hover:text-[#DC3545] sm:right-4 sm:top-4"
                  onClick={() => setShowInquiryForm(false)}
                >
                  ✕
                </button>

                <p className="pr-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DC3545] sm:text-xs sm:tracking-[0.18em]">
                  Admission Inquiry
                </p>
                <h3 className="mt-2 pr-8 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Enroll for coaching
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                  Share your details and our team will contact you shortly.
                </p>

                <form className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-gray-700">Full Name</span>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-gray-700">Phone Number</span>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-gray-700">Email Address</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                    />
                  </label>

                  <div>
                    <span className="text-sm font-semibold text-gray-700">Select Course</span>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {courseOptions.map((course) => (
                        <button
                          key={course}
                          type="button"
                          onClick={() => setSelectedCourse(course)}
                          className={`rounded-lg border py-2 text-xs font-semibold transition sm:text-sm ${
                            selectedCourse === course
                              ? "border-[#DC3545] bg-red-50 text-[#DC3545]"
                              : "border-gray-200 bg-white text-gray-700 hover:border-[#DC3545] hover:text-[#DC3545]"
                          }`}
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-gray-700">Message (Optional)</span>
                    <textarea
                      rows={3}
                      placeholder="Tell us your preferred batch/timing"
                      className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                    />
                  </label>

                  <div className="sticky bottom-0 -mx-4 mt-2 flex flex-col gap-2 border-t border-gray-100 bg-white/95 px-4 pt-3 pb-1 backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:pt-1 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                      onClick={() => setShowInquiryForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-[#DC3545] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c92f3f]"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}