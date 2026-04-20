import { motion as Motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaChartLine,
  FaCompass,
  FaUserFriends,
} from "react-icons/fa";

const RED = "#DC3545";

const LIST = [
  {
    icon: FaChalkboardTeacher,
    title: "Experienced Mentors",
    description:
      "Decades of combined teaching across boards and competitive exams—with structured pedagogy and real-time doubt resolution.",
  },
  {
    icon: FaChartLine,
    title: "Proven Results",
    description:
      "Outcomes driven by data: tracked mocks, performance analytics, and personalised feedback loops every term.",
  },
];

export default function FacultyWhy() {
  return (
    <section className="bg-[#f8f8f9] py-16 md:py-24 px-6 sm:px-8 lg:px-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Why Our Faculty Leads the Industry
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full" style={{ background: RED }} />
            <ul className="mt-10 space-y-10">
              {LIST.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-[#DC3545] border border-rose-100/80">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-[#DC3545] mb-4">
                <FaUserFriends className="text-lg" />
              </div>
              <h3 className="font-bold text-gray-900">Personal Guidance</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Small groups and mentor hours so no student is left behind.
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-[#DC3545] mb-4">
                <FaBookOpen className="text-lg" />
              </div>
              <h3 className="font-bold text-gray-900">Academic Rigor</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Syllabus depth aligned with the latest exam blueprints.
              </p>
            </div>
            <div
              className="col-span-2 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-center"
              style={{ background: RED }}
            >
              <div className="absolute top-6 right-6 opacity-25 text-7xl">
                <FaCompass className="rotate-12" />
              </div>
              <h3 className="text-2xl font-bold relative z-[1]">Join the Elite</h3>
              <p className="mt-3 text-white/90 text-sm sm:text-base max-w-md relative z-[1] leading-relaxed">
                Train under the same mentors who shape toppers—discipline,
                depth, and execution in every class.
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
