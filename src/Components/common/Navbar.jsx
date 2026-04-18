import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Courses", to: "/courses" },
  { label: "Faculty", to: "/faculty" },
  { label: "Results", to: "/about" },
  { label: "Admissions", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4 flex items-center">
        {/* Left: brand */}
        <div className="flex-1 flex justify-start min-w-0">
          <Link to="/" onClick={() => setOpen(false)}>
            <Motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                Academic Architect
              </span>
            </Motion.div>
          </Link>
        </div>

        {/* Center: primary nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-600 hover:text-gray-900 transition font-medium text-sm lg:text-base whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: login + CTA */}
        <div className="flex-1 flex justify-end items-center gap-4 sm:gap-6 min-w-0">
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
                  onClick={() => setOpen(false)}
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
