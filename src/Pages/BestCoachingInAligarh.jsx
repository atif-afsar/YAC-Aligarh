import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import Seo from "../Components/common/Seo";
import {
  seoConfig,
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildLocalBusinessJsonLd,
  SITE,
} from "../seo/seoConfig";

const RED = "#DC3545";

const HIGHLIGHTS = [
  {
    title: "16+ Years in Aligarh",
    desc: "A proven legacy of structured commerce mentorship since 2008.",
  },
  {
    title: "80,000+ Students Mentored",
    desc: "From CA Foundation aspirants to Class 11-12 toppers.",
  },
  {
    title: "4.9★ Google Rating",
    desc: "260+ verified reviews from students and parents in Aligarh.",
  },
  {
    title: "Online + Offline",
    desc: "Attend live in our IT Plaza centre or join online from anywhere in India.",
  },
];

const REASONS = [
  "Concept-first teaching, not rote learning",
  "Daily doubt support and personal mentorship",
  "Weekly tests with individual performance reviews",
  "Updated study material aligned with the latest syllabus",
  "Dedicated mock-test architecture for exam-readiness",
  "Small batches with one-on-one mentor access",
];

const FAQ = [
  {
    q: "Which is the best coaching in Aligarh?",
    a: "Yasir Ali Classes (YAC) is widely regarded as the best coaching in Aligarh - across Commerce, Science (PCM/PCB), Junior (Classes 5-10), CA, CMA, B.Com, Class 11-12 and Entrance exams - with a 4.9★ Google rating, 80,000+ students mentored and 16+ years of academic excellence.",
  },
  {
    q: "Does YAC offer science coaching as well as commerce?",
    a: "Yes. Alongside commerce, YAC runs dedicated science coaching for Class 11 & 12 (PCM / PCB) with concept-first Physics, Chemistry, Maths and Biology, numerical drills and small-batch doubt support.",
  },
  {
    q: "Is there junior coaching at YAC for Classes 5 to 10?",
    a: "Yes. Our Junior track covers Classes 5-10 with NCERT-aligned Maths, Science, English and SST, weekly tests, doubt sessions and parent-friendly progress updates - widely considered the best junior coaching in Aligarh.",
  },
  {
    q: "Where is Yasir Ali Classes located in Aligarh?",
    a: "Our coaching centre is at Senco Jewellers, IT Plaza, Amir Nishan Road, Aligarh, Uttar Pradesh 202001. We also run online batches for students across India.",
  },
  {
    q: "What courses does YAC offer?",
    a: "YAC offers structured coaching for CA Foundation, CMA (ICMAI), B.Com, Class 11 & 12 (Commerce / Science / Humanities), Junior (5-10), and Entrance preparation for BBA, MBA, BA-LLB / CLAT, BAFL, BA and B.Com UG.",
  },
  {
    q: "How can I take admission in YAC Aligarh?",
    a: "You can apply through our admissions page, call +91 90454 17079, or message us on WhatsApp. Online and offline batches are available with rolling admissions throughout the year.",
  },
  {
    q: "Does YAC offer online classes for students outside Aligarh?",
    a: "Yes. Our online programs include live classes, recorded lectures, premium bundles and mock tests, available to students across India through the YAC mobile app and YouTube.",
  },
];

export default function BestCoachingInAligarh() {
  const cfg = seoConfig.bestCoaching;

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Best Coaching in Aligarh", path: "/best-coaching-in-aligarh" },
      ]),
      buildOrganizationJsonLd(),
      buildLocalBusinessJsonLd(),
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
        "@type": "WebPage",
        name: cfg.title,
        description: cfg.description,
        url: `${SITE.url}${cfg.path}`,
        about: {
          "@type": "EducationalOrganization",
          "@id": `${SITE.url}/#organization`,
        },
      },
    ],
    [cfg.description, cfg.path, cfg.title]
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
        <div
          className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-red-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-200/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:text-[#DC3545]">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-gray-700">Best Coaching in Aligarh</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Yasir Ali Classes · YAC · Aligarh
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Best Coaching in <span style={{ color: RED }}>Aligarh</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Looking for the <strong>best coaching in Aligarh</strong>? Yasir Ali
            Classes (YAC) is Aligarh's #1 institute for{" "}
            <Link to="/commerce-coaching-aligarh" className="font-semibold text-[#DC3545] hover:underline">
              commerce coaching
            </Link>
            ,{" "}
            <Link to="/best-science-coaching-in-aligarh" className="font-semibold text-[#DC3545] hover:underline">
              science coaching
            </Link>{" "}
            (PCM / PCB),{" "}
            <Link to="/junior-wing-coaching" className="font-semibold text-[#DC3545] hover:underline">
              junior coaching
            </Link>{" "}
            (Classes 5-10), CA Foundation, CMA, B.Com and Class 11-12. With 16+
            years of academic excellence, expert faculty and a 4.9★ rating from
            260+ reviews, YAC blends concept-first teaching with disciplined
            exam preparation - both online and offline.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
              style={{ backgroundColor: RED }}
            >
              Apply for Admission
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href="tel:+919045417079"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              <FaPhoneAlt className="text-xs" />
              Call +91 90454 17079
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <FaStar className="text-amber-500" />
              4.9 / 5 · 260+ Google reviews
            </span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#DC3545]" />
              IT Plaza, Amir Nishan Road, Aligarh
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Why YAC is the best coaching institute in Aligarh
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
            We blend deep subject expertise with a structured exam-readiness
            framework to consistently produce top rankers from Aligarh and
            beyond.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <article
                key={h.title}
                className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm"
              >
                <p className="text-base font-bold text-gray-900">{h.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {h.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                What makes YAC different
              </h3>
              <ul className="mt-4 space-y-2.5">
                {REASONS.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-gray-700 sm:text-[0.95rem]"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#DC3545]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Programs at the best coaching in Aligarh
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <Link to="/commerce-coaching-aligarh" className="font-semibold text-[#DC3545] hover:underline">
                    Best Commerce Coaching in Aligarh
                  </Link>{" "}
                  - Class 11-12 Commerce, B.Com, CA Foundation, CMA
                </li>
                <li>
                  <Link to="/best-science-coaching-in-aligarh" className="font-semibold text-[#DC3545] hover:underline">
                    Best Science Coaching in Aligarh
                  </Link>{" "}
                  - Class 11 & 12 Science (PCM / PCB)
                </li>
                <li>
                  <Link to="/junior-wing-coaching" className="font-semibold text-[#DC3545] hover:underline">
                    Best Junior Coaching in Aligarh
                  </Link>{" "}
                  - Classes 5 to 10 (NCERT-aligned)
                </li>
                <li>
                  <Link to="/ca-foundation-coaching" className="font-semibold text-[#DC3545] hover:underline">
                    Best CA Coaching in Aligarh
                  </Link>{" "}
                  - ICAI CA Foundation
                </li>
                <li>
                  <Link to="/best-cma-coaching-in-aligarh" className="font-semibold text-[#DC3545] hover:underline">
                    Best CMA Coaching in Aligarh
                  </Link>{" "}
                  - ICMAI Foundation & Intermediate
                </li>
                <li>
                  <Link to="/entrance-exam-coaching" className="font-semibold text-[#DC3545] hover:underline">
                    Best Entrance Coaching in Aligarh
                  </Link>{" "}
                  - BBA, MBA, BA-LLB / CLAT, BAFL, BA, B.Com UG
                </li>
                <li>
                  <Link to="/online-courses" className="font-semibold text-[#DC3545] hover:underline">
                    Online live + recorded courses
                  </Link>{" "}
                  - learn from Aligarh, anywhere in India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-rose-50/35 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            FAQs - Best Coaching in Aligarh
          </h2>
          <div className="mt-6 space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm transition open:shadow-md"
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

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Ready to join Aligarh's best coaching?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Speak to our admissions team or visit our IT Plaza centre in
            Aligarh.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DC3545] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            >
              Apply Now
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
