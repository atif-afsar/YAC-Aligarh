import { useMemo, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaUserClock } from "react-icons/fa";
import { DEPARTMENTS, FACULTY_MEMBERS } from "./facultyData";

const RED = "#DC3545";

export default function FacultyPanel() {
  const [dept, setDept] = useState("all");

  const visible = useMemo(() => {
    if (dept === "all") return FACULTY_MEMBERS;
    return FACULTY_MEMBERS.filter((m) => m.department === dept);
  }, [dept]);

  return (
    <section className="bg-white py-16 md:py-24 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Our Distinguished Panel
            </h2>
            <p className="mt-3 text-gray-500 text-base leading-relaxed">
              Specialists across boards, entrances, and professional programs—
              one team committed to your growth.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-500">
              <FaFilter className="text-sm" aria-hidden />
            </span>
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                aria-label="Filter by department"
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white pl-4 pr-10 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC3545]/25 focus:border-[#DC3545] cursor-pointer"
              >
                {DEPARTMENTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                ▼
              </span>
            </div>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            No faculty listed for this department yet.
          </p>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 list-none p-0 m-0">
            <AnimatePresence mode="popLayout">
              {visible.map((member, i) => (
                <Motion.li
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <article className="group h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                      <img
                        src={member.image}
                        alt=""
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <p
                        className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase"
                        style={{ color: RED }}
                      >
                        {member.subject}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <FaUserClock
                          className="text-gray-400 shrink-0"
                          aria-hidden
                        />
                        <span>{member.years} Years of Mentorship</span>
                      </p>
                    </div>
                  </article>
                </Motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </section>
  );
}
