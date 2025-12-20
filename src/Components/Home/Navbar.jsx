import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/images/Logo.png"
              alt="Commerce Institute Logo"
              className="h-12 w-auto"
            />
            <span className="hidden sm:block text-xl font-bold text-gray-900">
              Commerce Institute
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#DC3545] transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-[#DC3545] transition font-medium"
          >
            About Us
          </Link>
          <Link
            to="/faculty"
            className="text-gray-700 hover:text-[#DC3545] transition font-medium"
          >
            Faculty
          </Link>
          <Link
            to="/courses"
            className="text-gray-700 hover:text-[#DC3545] transition font-medium"
          >
            Courses
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-[#DC3545] transition font-medium">
            Login
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#DC3545] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-600 transition"
          >
            Enroll Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg border-t overflow-hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#DC3545] transition font-medium text-lg"
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#DC3545] transition font-medium text-lg"
              >
                Courses
              </Link>
              <Link
                to="/faculty"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#DC3545] transition font-medium text-lg"
              >
                Faculty
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#DC3545] transition font-medium text-lg"
              >
                About Us
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="w-full text-left text-gray-700 hover:text-[#DC3545] transition font-medium text-lg">
                  Login
                </button>
                <button className="w-full bg-[#DC3545] text-white py-3 rounded-full font-semibold hover:bg-red-600 transition">
                  Enroll Now
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
