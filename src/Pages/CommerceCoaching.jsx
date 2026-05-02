import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd, SITE } from "../seo/seoConfig";

const RED = "#DC3545";

const PROGRAMS = [
  {
    id: "ca",
    title: "CA Coaching in Aligarh",
    description:
      "CA Foundation coaching (ICAI) with concept-first teaching, daily practice and exam-focused mock series.",
    bullets: ["Concept-first lectures", "Weekly mocks & analysis", "Mentor doubt support"],
  },
  {
    id: "cma",
    title: "CMA Coaching in Aligarh",
    description:
      "CMA (ICMAI) Foundation and Intermediate with syllabus-wise modules, paper-pattern mocks and pre-exam marathons.",
    bullets: ["Workbook integration", "Module-wise mocks", "Pre-exam marathons"],
  },
  {
    id: "bcom",
    title: "B.Com Coaching in Aligarh",
    description:
      "Subject-wise B.Com coaching aligned with Indian universities, plus a CA-foundation track for early starters.",
    bullets: ["University-aligned syllabus", "Practical accounting", "Career guidance"],
  },
  {
    id: "1112",
    title: "Class 11 & 12 Commerce Coaching",
    description:
      "Board-focused commerce coaching for Accounts, Business Studies, Economics and Maths - the most trusted prep in Aligarh.",
    bullets: ["Board + competitive ready", "Concept clarity", "Daily doubt sessions"],
  },
];

const FAQ = [
  {
    q: "Which is the best commerce coaching in Aligarh?",
    a: "Yasir Ali Classes (YAC) is recognised as the best commerce coaching in Aligarh, with 16+ years of legacy, expert faculty and a 4.9★ rating across 260+ reviews.",
  },
  {
    q: "What does YAC's commerce coaching cover?",
    a: "Our commerce coaching covers Class 11, Class 12, CA Foundation, CMA (ICMAI) and B.Com - including Accounts, Business Studies, Economics, Maths and Law.",
  },
  {
    q: "Does YAC also offer science and junior coaching?",
    a: "Yes. YAC also runs the best science coaching in Aligarh (Class 11 & 12 PCM / PCB) and the best junior coaching for Classes 5 to 10.",
  },
  {
    q: "Are online commerce coaching batches available?",
    a: "Yes. We offer live online classes, recorded lectures and premium bundles for commerce students across India through the YAC mobile app and YouTube.",
  },
  {
    q: "How are tests and progress tracked?",
    a: "Students get weekly tests, full-length mocks, individual performance reviews and parent-friendly progress communication.",
  },
];

export default function CommerceCoaching() {
  const cfg = seoConfig.commerceCoaching;

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Commerce Coaching", path: "/commerce-coaching" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Commerce Coaching Programs at YAC Aligarh",
        itemListElement: PROGRAMS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Course",
            name: p.title,
            description: p.description,
            provider: {
              "@type": "EducationalOrganization",
              name: SITE.name,
              "@id": `${SITE.url}/#organization`,
              url: SITE.url,
            },
          },
        })),
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={cfg.title}
        description={cfg.description}
        keywords={cfg.keywords}
        path={cfg.path}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-white pt-28 pb-16 md:pb-20">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:text-[#DC3545]">Home</Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-gray-700">Commerce Coaching</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Yasir Ali Classes · YAC · Aligarh
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Commerce Coaching in <span style={{ color: RED }}>Aligarh</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            <strong>Yasir Ali Classes</strong> offers the best{" "}
            <Link to="/best-coaching-in-aligarh" className="font-semibold text-[#DC3545] hover:underline">
              commerce coaching in Aligarh
            </Link>{" "}
            for Class 11, Class 12, CA Foundation, CS Executive and B.Com
            students. Our concept-first methodology, weekly tests and personal
            mentorship build genuine subject mastery and consistent results.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
              style={{ backgroundColor: RED }}
            >
              Start Admission
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href="tel:+919045417079"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              <FaPhoneAlt className="text-xs" />
              +91 90454 17079
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Our commerce coaching programs in Aligarh
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
            Pick the program that fits your class and exam goal. Each track
            comes with structured lectures, weekly tests and mentor support.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {PROGRAMS.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl border border-red-100/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
                  {p.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#DC3545]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/courses"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC3545] hover:gap-2 transition"
                >
                  Explore the program
                  <FaArrowRight className="text-xs" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-rose-50/35 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            FAQs - Commerce Coaching in Aligarh
          </h2>
          <div className="mt-6 space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm transition open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-900 marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
