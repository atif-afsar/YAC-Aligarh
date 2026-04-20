import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { BENEFITS } from "./admissionsData";

const COURSE_OPTIONS = ["CA", "CS", "B.Com", "11-12th"];

export default function AdmissionsFormSection() {
  return (
    <section className="py-14 md:py-20 px-6 sm:px-8 lg:px-10 bg-[#fafafa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-10 items-start">
        <article className="bg-white rounded-2xl border border-gray-100 p-7 md:p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Admission Inquiry
          </h2>
          <form className="mt-7 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Full Name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Phone Number</span>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email Address</span>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
              />
            </label>

            <div>
              <span className="text-sm font-semibold text-gray-700">Select Course</span>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {COURSE_OPTIONS.map((course) => (
                  <button
                    key={course}
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 hover:border-[#DC3545] hover:text-[#DC3545] transition"
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Message (Optional)</span>
              <textarea
                rows={4}
                placeholder="Any specific requirement?"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none resize-none focus:border-[#DC3545] focus:bg-white"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#DC3545] text-white py-3.5 font-semibold hover:bg-[#c82333] transition"
            >
              Submit Application
            </button>
          </form>
        </article>

        <article className="bg-white rounded-2xl border border-gray-100 p-7 md:p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why Join Us?</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            We don't just teach syllabus, we build career. Our holistic approach
            ensures you are prepared for both exams and industry.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-xl border border-gray-100 p-4">
                <div className="flex items-center gap-2 text-[#DC3545]">
                  <FaCheckCircle className="text-sm" />
                  <h3 className="font-semibold text-gray-900">{b.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&face"
                alt="Student"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">Rahul Sharma</p>
                <p className="text-xs text-gray-500">AIR 15, CA Inter</p>
                <p className="mt-2 text-sm text-gray-600 italic">
                  "The structured support and focused faculty at Academic Architect
                  transformed my exam preparation."
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:brightness-95 transition"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </button>
        </article>
      </div>
    </section>
  );
}
