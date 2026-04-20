import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Faculty", to: "/faculty" },
  { label: "Results", to: "/results" },
  { label: "Admissions", to: "/admissions" },
  { label: "Blog", to: "/blog" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left: brand */}
        <div className="shrink-0 flex justify-start">
          <Link to="/" onClick={handleNavClick}>
            <Motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer flex items-center gap-3"
            >
              <img
                src="/images/Logo.png"
                alt="YAC Aligarh"
                className="h-14 w-auto object-contain"
              />
              <span className="block text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900 leading-tight tracking-tight max-w-[170px] sm:max-w-[240px] lg:max-w-none">
                Yasir Ali Classes - Best Commerce Coaching in Aligarh
              </span>
            </Motion.div>
          </Link>
        </div>

        {/* Center: primary nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-5 lg:gap-8 px-4">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={handleNavClick}
              className="text-gray-600 hover:text-gray-900 transition font-medium text-sm lg:text-base whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: login + CTA */}
        <div className="shrink-0 flex justify-end items-center gap-4 sm:gap-6">
          <button
            type="button"
            className="hidden md:inline text-gray-600 hover:text-gray-900 transition font-medium text-sm lg:text-base"
          >
            Login
          </button>
          <Motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex bg-[#B91C1C] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#991B1B] transition shadow-sm"
          >
            Enroll Now
          </Motion.button>

          <button
            type="button"
            className="md:hidden text-2xl text-gray-700 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg border-t overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-[#B91C1C] transition font-medium text-lg py-2"
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 space-y-3">
                <button
                  type="button"
                  className="w-full text-left text-gray-700 hover:text-[#B91C1C] transition font-medium text-lg"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="w-full bg-[#B91C1C] text-white py-3 rounded-full font-semibold hover:bg-[#991B1B] transition"
                >
                  Enroll Now
                </button>
              </div>
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
