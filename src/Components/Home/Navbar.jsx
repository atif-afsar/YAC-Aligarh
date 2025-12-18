import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="YAC Aligarh Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {["Home", "Courses", "Results", "Faculty", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#DC3545] transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#DC3545] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition">
          Enroll Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-primary"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col gap-4 px-6 py-6 text-lg font-medium">
            {["Home", "Courses", "Results", "Faculty", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-[#DC3545] transition"
              >
                {item}
              </a>
            ))}

            <button className="mt-4 bg-[#DC3545] text-white py-3 rounded-full text-sm font-semibold hover:bg-red-600 transition">
              Enroll Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
