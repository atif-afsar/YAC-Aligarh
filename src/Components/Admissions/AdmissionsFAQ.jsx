import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FAQS } from "./admissionsData";

export default function AdmissionsFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-14 md:py-20 px-6 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-9 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <article
                key={faq.question}
                className="rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <FaChevronDown
                    className={`text-xs text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
