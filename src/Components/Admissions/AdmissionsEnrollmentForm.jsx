import { useState } from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BENEFITS } from "./admissionsData";

const COURSE_OPTIONS = ["Science", "Commerce", "Regular Batch", "Entrance Batch"];

export default function AdmissionsFormSection() {
  const [selectedCourse, setSelectedCourse] = useState(COURSE_OPTIONS[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("course", selectedCourse);
    formData.append("source", "Admissions page form");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitMessage({
        type: "error",
        text: "Web3Forms key missing. Add VITE_WEB3FORMS_ACCESS_KEY in your .env file.",
      });
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Admission Inquiry");
    formData.append("from_name", "YAC Aligarh Website");

    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          type: "success",
          text: "Inquiry submitted successfully. We will contact you soon.",
        });
        form.reset();
        setSelectedCourse(COURSE_OPTIONS[0]);
        return;
      }

      setSubmitMessage({
        type: "error",
        text: result.message || "Submission failed. Please try again.",
      });
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-20 px-6 sm:px-8 lg:px-10 bg-[#fafafa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-10 items-start">
        <article className="bg-white rounded-2xl border border-gray-100 p-7 md:p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Admission Inquiry
          </h2>
          <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Full Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Phone Number</span>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email Address</span>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none focus:border-[#DC3545] focus:bg-white"
              />
            </label>

            <div>
              <span className="text-sm font-semibold text-gray-700">Select Course</span>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {COURSE_OPTIONS.map((course) => (
                  <button
                    key={course}
                    type="button"
                    onClick={() => setSelectedCourse(course)}
                    className={`rounded-lg border py-2.5 text-sm font-semibold transition ${
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
                name="message"
                rows={4}
                placeholder="Any specific requirement?"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-900 outline-none resize-none focus:border-[#DC3545] focus:bg-white"
              />
            </label>

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            {submitMessage.text ? (
              <p
                className={`text-sm font-medium ${
                  submitMessage.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {submitMessage.text}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#DC3545] text-white py-3.5 font-semibold hover:bg-[#c82333] transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
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

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:+919045417079"
              className="inline-flex items-center gap-2 rounded-full bg-[#DC3545] text-white px-5 py-2.5 text-sm font-semibold hover:brightness-95 transition"
            >
              <FaPhoneAlt className="text-xs" />
              +91 90454 17079
            </a>
            <a
              href="tel:+919412617279"
              className="inline-flex items-center gap-2 rounded-full bg-[#DC3545] text-white px-5 py-2.5 text-sm font-semibold hover:brightness-95 transition"
            >
              <FaPhoneAlt className="text-xs" />
              +91 94126 17279
            </a>
            <a
              href="https://wa.me/919045417079"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:brightness-95 transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
