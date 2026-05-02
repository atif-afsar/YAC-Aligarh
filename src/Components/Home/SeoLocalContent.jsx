import { Link } from "react-router-dom";

/**
 * Keyword-rich, internally-linked SEO content block on the home page.
 * Anchors the home for every "best X coaching in Aligarh" query and links
 * out to dedicated landing pages.
 */

const PROGRAMS = [
  {
    title: "Best Commerce Coaching in Aligarh",
    desc: "Class 11-12 Commerce, CA Foundation, CMA and B.Com - the strongest commerce track in Aligarh.",
    to: "/commerce-coaching",
    anchor: "Explore commerce coaching",
  },
  {
    title: "Best Science Coaching in Aligarh",
    desc: "Class 11-12 Science (PCM / PCB) with concept-first Physics, Chemistry, Maths and Biology.",
    to: "/best-science-coaching-in-aligarh",
    anchor: "Explore science coaching",
  },
  {
    title: "Best Junior Coaching in Aligarh (5-10)",
    desc: "NCERT-aligned Maths, Science, English and SST for Classes 5 to 10 with parent-friendly progress updates.",
    to: "/best-junior-coaching-in-aligarh",
    anchor: "Explore junior coaching",
  },
  {
    title: "Best CA Coaching in Aligarh",
    desc: "ICAI CA Foundation - Accounts, Law, Quant and Economics with mentor-led revision marathons.",
    to: "/best-ca-coaching-in-aligarh",
    anchor: "Explore CA coaching",
  },
  {
    title: "Best CMA Coaching in Aligarh",
    desc: "CMA (ICMAI) Foundation and Intermediate with syllabus-wise modules and paper-pattern mocks.",
    to: "/best-cma-coaching-in-aligarh",
    anchor: "Explore CMA coaching",
  },
  {
    title: "Best Entrance Coaching in Aligarh",
    desc: "BBA, MBA, BA-LLB / CLAT, BAFL, BA, B.Com UG and Class 6 / 9 / 11 entrance preparation.",
    to: "/best-entrance-coaching-in-aligarh",
    anchor: "Explore entrance coaching",
  },
];

export default function SeoLocalContent() {
  return (
    <section
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="seo-aligarh-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link to="/" className="hover:text-[#DC3545]">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link
                to="/best-coaching-in-aligarh"
                className="hover:text-[#DC3545]"
              >
                Best Coaching in Aligarh
              </Link>
            </li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Trusted in Aligarh since 2008
          </p>
          <h2
            id="seo-aligarh-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
          >
            The Best Coaching in Aligarh - Commerce, Science, Junior &amp; more
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            <strong>Yasir Ali Classes (YAC)</strong> is widely recognised as the{" "}
            <Link
              to="/best-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              best coaching in Aligarh
            </Link>
            . We run dedicated tracks for{" "}
            <Link
              to="/commerce-coaching"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              commerce coaching
            </Link>
            ,{" "}
            <Link
              to="/best-science-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              science coaching
            </Link>{" "}
            (PCM / PCB),{" "}
            <Link
              to="/best-junior-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              junior coaching
            </Link>{" "}
            (Classes 5-10),{" "}
            <Link
              to="/best-ca-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              CA
            </Link>
            ,{" "}
            <Link
              to="/best-cma-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              CMA
            </Link>
            , B.Com, Class 11-12 and{" "}
            <Link
              to="/best-entrance-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              entrance exams
            </Link>
            . With 16+ years of mentorship, a 4.9★ rating from 260+ reviews, and
            online + offline batches, YAC blends concept-first teaching with
            disciplined exam preparation.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-red-100/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
                {p.desc}
              </p>
              <Link
                to={p.to}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC3545] transition group-hover:gap-2"
              >
                {p.anchor}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border border-rose-100 bg-rose-50/40 p-6 sm:p-8 md:grid-cols-3">
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Why YAC is Aligarh's #1 coaching institute
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              80,000+ students mentored, 20,000+ final selections and 16+ years
              of academic excellence across Commerce, Science, Junior and
              Professional tracks in Aligarh.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Visit our coaching centre
            </h3>
            <address className="not-italic mt-2 text-sm leading-relaxed text-gray-600">
              Senco Jewellers, IT Plaza,
              <br /> Amir Nishan Road, Aligarh,
              <br /> Uttar Pradesh 202001, India
            </address>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Talk to our admissions team
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              <a
                href="tel:+919045417079"
                className="font-semibold text-[#DC3545] hover:underline"
              >
                +91 90454 17079
              </a>
              <br />
              <a
                href="mailto:info@yasiraliclasses.in"
                className="font-semibold text-[#DC3545] hover:underline"
              >
                info@yasiraliclasses.in
              </a>
            </p>
            <Link
              to="/admissions"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#DC3545] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:opacity-95"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
