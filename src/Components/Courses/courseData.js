/** @typedef {'all' | 'ca' | 'cs' | 'bcom' | '1112' | '5to10' | 'entrance'} CourseCategory */

/** @type {{ id: CourseCategory; label: string }[]} */
export const COURSE_FILTERS = [
  { id: "all", label: "All" },
  { id: "5to10", label: "5 to 10th" },
  { id: "entrance", label: "Entrance" },
  { id: "ca", label: "CA" },
  { id: "cs", label: "CS" },
  { id: "bcom", label: "B.Com" },
  { id: "1112", label: "11-12" },
];

/**
 * @typedef {Object} CourseCard
 * @property {string} id
 * @property {Exclude<CourseCategory, 'all'>} category
 * @property {string} badge
 * @property {'red' | 'blue' | 'orange'} badgeTone
 * @property {string} title
 * @property {string} description
 * @property {string[]} features
 */

/** @type {CourseCard[]} */
export const COURSES = [
  {
    id: "grades-5-8",
    category: "5to10",
    badge: "FOUNDATION",
    badgeTone: "blue",
    title: "Classes 5–8 (Integrated)",
    description:
      "Strong basics in Maths, Science, English, and SST with habit-building, small groups, and regular assessments aligned with school rhythm.",
    features: [
      "NCERT-synced curriculum",
      "Weekly worksheets & quizzes",
      "Doubt circles every Saturday",
      "Parent connect on progress",
    ],
  },
  {
    id: "grades-9-10",
    category: "5to10",
    badge: "MOST POPULAR",
    badgeTone: "red",
    title: "Classes 9–10 (Boards + Skills)",
    description:
      "Board exam readiness with solved banks, time-management drills, and early exposure to logical reasoning for future entrance tracks.",
    features: [
      "Board pattern mocks",
      "Science & Maths depth labs",
      "Sample paper marathons",
      "Career awareness sessions",
    ],
  },
  {
    id: "entrance-6th",
    category: "entrance",
    badge: "NEW BATCH",
    badgeTone: "orange",
    title: "6th Standard Entrance",
    description:
      "Targeted prep for reputed school / institute 6th entrance tests—aptitude, language, and reasoning in age-appropriate modules.",
    features: [
      "Topic-wise aptitude sets",
      "Reading & comprehension boost",
      "Full-length mock tests",
      "Interview readiness basics",
    ],
  },
  {
    id: "entrance-9th",
    category: "entrance",
    badge: "IN DEMAND",
    badgeTone: "blue",
    title: "9th Standard Entrance",
    description:
      "Structured syllabus for 9th entrance exams with higher-order Maths, Science application papers, and speed-accuracy coaching.",
    features: [
      "Past-paper based drills",
      "Olimpiad-style problem sets",
      "Error log & revision plan",
      "One-on-one weak-topic slots",
    ],
  },
  {
    id: "entrance-11th",
    category: "entrance",
    badge: "MOST POPULAR",
    badgeTone: "red",
    title: "11th Standard Entrance",
    description:
      "Commerce / Science stream entrance focus—concept tests, GK & logical reasoning, and stream-specific orientation before Class 11.",
    features: [
      "Stream aptitude assessment",
      "Commerce & Science tracks",
      "Scholarship test practice",
      "Counselling for subject choice",
    ],
  },
  {
    id: "ca-foundation",
    category: "ca",
    badge: "MOST POPULAR",
    badgeTone: "red",
    title: "CA Foundation",
    description:
      "Build strong fundamentals across accounts, law, maths, and economics with structured modules and exam-style practice from day one.",
    features: [
      "6 Months Intensive",
      "Test Series Included",
      "Weekly Doubt Labs",
      "Printed Study Kit",
    ],
  },
  {
    id: "cs-exec",
    category: "cs",
    badge: "IN DEMAND",
    badgeTone: "blue",
    title: "CS Executive",
    description:
      "Company law, governance, and tax modules delivered with case-based teaching and answer-writing drills aligned with ICSI pattern.",
    features: [
      "Module-wise Mocks",
      "Answer Structure Workshops",
      "E-learning Support",
      "Mentor Check-ins",
    ],
  },
  {
    id: "c12",
    category: "1112",
    badge: "NEW BATCH",
    badgeTone: "orange",
    title: "Class 12 Commerce",
    description:
      "Board-focused syllabus coverage with early orientation for professional courses—balance marks and long-term career clarity.",
    features: [
      "Board + Competitive Bridge",
      "Sample Paper Series",
      "Small Batch Size",
      "Parent Progress Reports",
    ],
  },
  {
    id: "ca-inter",
    category: "ca",
    badge: "IN DEMAND",
    badgeTone: "blue",
    title: "CA Intermediate",
    description:
      "Group-wise strategy for all papers—costing, taxation, audit, and ITSM—with revision marathons before each attempt window.",
    features: [
      "Group 1 & 2 Tracks",
      "Past Paper Analysis",
      "Fast-track Revision",
      "Industry Guest Sessions",
    ],
  },
  {
    id: "bcom-hons",
    category: "bcom",
    badge: "MOST POPULAR",
    badgeTone: "red",
    title: "B.Com (Hons)",
    description:
      "University-aligned lectures, practical accounting labs, and placement-ready skills including Excel, GST basics, and reporting.",
    features: [
      "Semester Sync Plans",
      "Practical Workshops",
      "Internship Guidance",
      "Soft Skills Add-on",
    ],
  },
  {
    id: "c11",
    category: "1112",
    badge: "NEW BATCH",
    badgeTone: "orange",
    title: "Class 11 Commerce",
    description:
      "Solid base in accountancy, BST, and economics so Class 12 and CA Foundation feel natural—not rushed—in the years ahead.",
    features: [
      "Concept-first Teaching",
      "Monthly Assessments",
      "Foundation for CA/CS",
      "Study Habit Coaching",
    ],
  },
];

/** @type {Record<CourseCard['badgeTone'], string>} */
export const BADGE_CLASSES = {
  red: "bg-rose-100 text-rose-700 border border-rose-200/80",
  blue: "bg-sky-100 text-sky-700 border border-sky-200/80",
  orange: "bg-orange-100 text-orange-800 border border-orange-200/80",
};
