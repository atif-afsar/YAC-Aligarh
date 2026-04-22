import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";

const RED = "#DC3545";

const FAQS = [
  {
    q: "Which courses are available at Yasir Ali Classes?",
    a: "YAC offers structured coaching for Commerce, Science, Entrance preparation, and Regular school batches. Programs are available in both online and offline formats.",
  },
  {
    q: "Do you provide coaching for both boards and competitive exams?",
    a: "Yes. We run board-focused preparation with concept classes, test series, and revision plans, along with entrance-oriented practice and mock exam programs.",
  },
  {
    q: "How are doubts and student progress tracked?",
    a: "Students get regular doubt-solving support, periodic tests, and performance reviews. Parents can also stay updated through progress communication and score analysis.",
  },
  {
    q: "Can students from outside Aligarh join YAC?",
    a: "Absolutely. Students across India can learn through online classes, recorded support material, and digital assessments, while local students can attend offline batches in Aligarh.",
  },
  {
    q: "How can I enroll in a YAC batch?",
    a: "You can enroll through the admissions page, contact our team directly, or start from the mobile app and YouTube channels to choose the right track before registration.",
  },
];

export default function FaqsSection() {
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const scriptId = "home-faq-schema";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/35 to-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-faq-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-red-100/45 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            FAQ
          </p>
          <h2
            id="home-faq-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Clear answers about courses, admissions, and learning support at
            Yasir Ali Classes.
          </p>
        </Motion.div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.42,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-gray-200/90 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-sm font-semibold leading-relaxed text-gray-900 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${RED}14`, color: RED }}
                  >
                    {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      id={`faq-panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:pb-5 sm:text-[0.98rem]">
                        {item.a}
                      </p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
