import { motion as Motion } from "framer-motion";
import { FaFileAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import { STEPS } from "./admissionsData";

const icons = [FaFileAlt, FaPhoneAlt, FaShieldAlt];

export default function AdmissionsHero() {
  return (
    <section className="bg-white pt-28 pb-14 md:pb-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#DC3545]">
            Admissions Open 2024-25
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Start Your <span className="text-[#DC3545]">Journey</span> with Us
          </h1>
          <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
            Join Aligarh's leading commerce coaching institute. We bridge the
            gap between academic theory and professional excellence.
          </p>
        </Motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <article
                key={step.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 text-[#DC3545] flex items-center justify-center shrink-0">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
