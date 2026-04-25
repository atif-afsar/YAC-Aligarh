import { motion as Motion } from "framer-motion";
import { FaUserClock } from "react-icons/fa";
import { FACULTY_MEMBERS } from "./facultyData";

const RED = "#DC3545";

export default function FacultyPanel() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 overflow-hidden rounded-2xl border border-rose-100/80 bg-gradient-to-b from-white to-rose-50/30 p-4 shadow-[0_14px_34px_-22px_rgba(220,53,69,0.35)] sm:p-5 md:mb-12"
        >
          <Motion.span
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-rose-200/35 blur-2xl"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <Motion.span
            className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-rose-100/40 blur-2xl"
            animate={{ scale: [1.08, 1, 1.08] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              Our Distinguished Panel
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-3 sm:text-base">
              Specialists across boards, entrances, and professional programs—
              one team committed to your growth.
            </p>
          </div>
        </Motion.div>

        <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {FACULTY_MEMBERS.map((member, i) => (
            <Motion.li
              key={member.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-24px_rgba(0,0,0,0.35)]">
                <div className="flex h-52 items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 sm:h-56 md:h-60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs"
                    style={{ color: RED }}
                  >
                    {member.subject}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold text-gray-900 sm:mt-2 sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-2.5 flex items-center gap-2 text-xs text-gray-500 sm:mt-3 sm:text-sm">
                    <FaUserClock className="shrink-0 text-gray-400" aria-hidden />
                    <span>{member.years} Years of Mentorship</span>
                  </p>
                </div>
              </article>
            </Motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
