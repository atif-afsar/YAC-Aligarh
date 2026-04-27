import { Link } from "react-router-dom";

export default function BlogsCTA() {
  return (
    <section className="pb-16 md:pb-20 px-6 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto rounded-xl bg-[#DC3545] px-8 py-8 sm:px-10 sm:py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Start Your Journey?
          </h3>
          <p className="mt-2 text-white/90">
            Join the academy that shapes the leaders of tomorrow.
          </p>
        </div>
        <Link to="/Admissions">
        <button
          type="button"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-[#DC3545] hover:bg-gray-100 transition"
        >
          Enroll Now
        </button>
        </Link>
      </div>
    </section>
  );
}
