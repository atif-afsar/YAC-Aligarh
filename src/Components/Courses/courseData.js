/**
 * @typedef {'junior' | 'senior' | 'postK12'} ClassLevel
 * @typedef {'science' | 'commerce' | 'humanities'} Stream
 * @typedef {'school-prep' | 'entrance' | 'professional' | 'graduation'} CourseType
 */

/** @typedef {'all' | 'commerce' | 'science' | 'entrance' | 'regular'} CourseCategoryId */

/** @type {{ id: CourseCategoryId; label: string; hint?: string }[]} */
export const CATEGORY_FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "commerce", label: "Commerce", hint: "Commerce stream, CA, CMA, B.Com" },
  { id: "science", label: "Science", hint: "Science stream and STEM-focused prep" },
  { id: "entrance", label: "Entrance", hint: "School & UG / PG entrance tests" },
  { id: "regular", label: "Regular", hint: "Board & university (non-entrance) programmes" },
];

/**
 * @typedef {Object} CourseCard
 * @property {string} id
 * @property {string} badge
 * @property {'red' | 'blue' | 'orange'} badgeTone
 * @property {string} title
 * @property {string} description
 * @property {string[]} features
 * @property {ClassLevel[]} classLevels
 * @property {Stream[]} streams  — empty = not stream-specific (e.g. 5–10, or any stream)
 * @property {CourseType} courseType
 */

/**
 * YAC course catalogue (aligned to institute data: school prep, entrances, professional, graduation).
 * @type {CourseCard[]}
 */
export const COURSES = [
  /* —— School prep (Regular) —— */
  {
    id: "junior-5-10-regular",
    classLevels: ["junior"],
    streams: [],
    courseType: "school-prep",
    badge: "REGULAR",
    badgeTone: "blue",
    title: "Classes 5–10 (Regular)",
    description:
      "NCERT-minded foundation through Class 10—Maths, Science, English, and SST—with weekly checks, doubt support, and parent-friendly progress updates.",
    features: [
      "5–8 basics & 9–10 board focus in one track",
      "Worksheets, quizzes, and school rhythm alignment",
      "Doubt sessions and test feedback",
      "Habit-building in small, structured batches",
    ],
  },
  {
    id: "senior-11-12-commerce",
    classLevels: ["senior"],
    streams: ["commerce"],
    courseType: "school-prep",
    badge: "MOST POPULAR",
    badgeTone: "red",
    title: "Class 11 & 12 (Commerce—Regular)",
    description:
      "Accountancy, BST, Economics, and board exam readiness for Commerce stream—bridging to CA, CS, and B.Com with clear milestones.",
    features: [
      "Class 11 foundation + Class 12 board sprint",
      "Sample-paper and mock series",
      "CA / professional orientation without rushing concepts",
      "Small batches with parent progress updates",
    ],
  },
  {
    id: "senior-11-12-humanities",
    classLevels: ["senior"],
    streams: ["humanities"],
    courseType: "school-prep",
    badge: "REGULAR",
    badgeTone: "blue",
    title: "Class 11 & 12 (Humanities—Regular)",
    description:
      "Board-aligned support for Arts/Humanities—strong writing, source-based answers, and time discipline for long-format papers.",
    features: [
      "Subject planning aligned to board pattern",
      "Answer structure and presentation drills",
      "Map & optional subject support as per batch",
      "Regular tests with targeted feedback",
    ],
  },
  {
    id: "senior-11-12-science",
    classLevels: ["senior"],
    streams: ["science"],
    courseType: "school-prep",
    badge: "REGULAR",
    badgeTone: "blue",
    title: "Class 11 & 12 (Science—Regular)",
    description:
      "Board-aligned support for Science stream (PCM/PCB-style)—concepts, numerical practice, and exam series aligned to your board pattern.",
    features: [
      "Subject mix planning as per your electives",
      "Numerical drills and diagram-based questions",
      "Mock tests and error tracking",
      "Doubt support in smaller batches",
    ],
  },
  {
    id: "bcom-regular",
    classLevels: ["postK12"],
    streams: ["commerce"],
    courseType: "graduation",
    badge: "GRADUATION",
    badgeTone: "orange",
    title: "B.Com (Regular)",
    description:
      "University-synchronised B.Com (Regular) coaching—concepts, internals, and exam-facing practice for steady performance across semesters.",
    features: [
      "Semester-wise planning and question banks",
      "Practical & theory balance",
      "Internship and skill add-ons (where applicable)",
      "Soft skills and campus-placement readiness basics",
    ],
  },

  /* —— School-level entrance —— */
  {
    id: "entrance-6th",
    classLevels: ["junior"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "orange",
    title: "Class 6 Entrance",
    description:
      "Aptitude, language, and reasoning in age-suitable sets for 6th-standard entrance tests to reputed schools or institutes.",
    features: [
      "Topic-wise aptitude practice",
      "Reading & comprehension",
      "Full-length mock tests",
      "Basic interview / interaction readiness",
    ],
  },
  {
    id: "entrance-9th",
    classLevels: ["junior"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "blue",
    title: "Class 9 Entrance",
    description:
      "Structured prep for 9th entrance patterns—higher-order Maths/Science, speed drills, and past-paper style practice.",
    features: [
      "Past-paper and pattern-based sets",
      "Error log and revision slots",
      "Time & accuracy coaching",
      "One-on-one weak-topic support (as per batch)",
    ],
  },
  {
    id: "entrance-11th",
    classLevels: ["senior"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "red",
    title: "Class 11 Entrance",
    description:
      "Entrance focus before Class 11—aptitude, logical reasoning, and stream awareness for Commerce, Science, or school-specific tests.",
    features: [
      "Stream-aptitude and GK-style blocks",
      "Institute & scholarship pattern mocks",
      "Subject-choice orientation (overview)",
      "Timed tests with performance review",
    ],
  },

  /* —— UG & PG entrance (after school) —— */
  {
    id: "entrance-ba",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "blue",
    title: "BA Entrance",
    description:
      "UG entrance orientation for BA-oriented programmes—general awareness, language, and domain basics as per your target test.",
    features: [
      "Pattern-based mocks and previous-year style drills",
      "Language & reasoning modules",
      "Time-bound paper strategy",
      "Counselling: form filling & college shortlists (overview)",
    ],
  },
  {
    id: "entrance-bcom-ug",
    classLevels: ["postK12"],
    streams: ["commerce"],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "red",
    title: "B.Com Entrance",
    description:
      "Entrance test prep for B.Com and allied UG entries—quant, reasoning, and commerce awareness for university-level tests.",
    features: [
      "Aptitude & accounting awareness blocks",
      "Institute-specific test packs (where shared)",
      "Mock marathons and rank improvement loops",
      "Doubt labs before exam window",
    ],
  },
  {
    id: "entrance-bafl",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "orange",
    title: "BAFL Entrance",
    description:
      "BA Foundation / Fine Arts or allied “BAFL”-style UG entrance track—aptitude, creative/logical blocks, and portfolio basics as needed.",
    features: [
      "Aptitude + language preparation",
      "Stream-specific practice sets",
      "Mock tests in timed mode",
      "Form & eligibility checklist (general guidance)",
    ],
  },
  {
    id: "entrance-bba",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "blue",
    title: "BBA Entrance",
    description:
      "BBA and management-UG tests—quantitative, logical, English, and GK as per major exam patterns (IPM-style awareness where relevant).",
    features: [
      "Sectional tests: QA, DI, Verbal, LR",
      "Full-length proctored-style mocks",
      "GD & interview primer (as per batch design)",
      "Test strategy workshops",
    ],
  },
  {
    id: "entrance-ballb",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "red",
    title: "BA LLB / BALLB Entrance",
    description:
      "Law-UG entrance focus—legal reasoning, critical thinking, and general awareness for CLAT and similar law admissions.",
    features: [
      "Legal & logical reasoning blocks",
      "Current affairs capsule & drills",
      "Comprehension and argument analysis",
      "All-India level mock test series",
    ],
  },
  {
    id: "entrance-mba",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "PG ENTRANCE",
    badgeTone: "orange",
    title: "MBA Entrance",
    description:
      "Postgraduate management entrance support—pattern mastery for major tests, sectional improvement, and full-length analysis.",
    features: [
      "QA, VARC, DILR-style sectional rigour (pattern-based)",
      "Adaptive mock series with solutions",
      "PI / WAT overview (as per program)",
      "Score vs percentile tracking",
    ],
  },

  /* —— Professional —— */
  {
    id: "ca-foundation",
    classLevels: ["postK12"],
    streams: ["commerce"],
    courseType: "professional",
    badge: "CA",
    badgeTone: "red",
    title: "CA Foundation",
    description:
      "ICAI CA Foundation—Accounts, Law, Quant, and Economics with exam-style output from the first day.",
    features: [
      "Concept + MCQ and descriptive practice",
      "Test series and chapter checks",
      "Doubt labs and printed / digital kit (as per batch)",
      "Mentor-led revision before attempt",
    ],
  },
  {
    id: "cma",
    classLevels: ["postK12"],
    streams: ["commerce"],
    courseType: "professional",
    badge: "CMA",
    badgeTone: "blue",
    title: "CMA (ICMAI)",
    description:
      "Cost & Management Accountancy (ICMAI) foundation and intermediate path—concepts, MCQs, and case-style practice for each stage you enrol in.",
    features: [
      "Syllabus-wise module planning",
      "Workbook and mock integration",
      "Focus on CMA paper pattern and time splits",
      "Doubt support and pre-exam marathons",
    ],
  },
];

/**
 * @param {CourseCard} course
 * @param {CourseCategoryId} category
 */
export function courseMatchesCategory(course, category) {
  if (category === "all") return true;

  if (category === "entrance") {
    return course.courseType === "entrance";
  }

  if (category === "regular") {
    return course.courseType === "school-prep" || course.courseType === "graduation";
  }

  if (category === "commerce") {
    return course.streams.includes("commerce");
  }

  if (category === "science") {
    if (course.streams.includes("science")) return true;
    if (course.id === "junior-5-10-regular") return true;
    return false;
  }

  return true;
}

/**
 * @param {CourseCard[]} courses
 * @param {{ selectedCategory: CourseCategoryId }} filters
 * @returns {CourseCard[]}
 */
export function filterCourses(courses, filters) {
  return courses.filter((c) => courseMatchesCategory(c, filters.selectedCategory));
}

/** @type {Record<CourseCard['badgeTone'], string>} */
export const BADGE_CLASSES = {
  red: "bg-rose-100 text-rose-700 border border-rose-200/80",
  blue: "bg-sky-100 text-sky-700 border border-sky-200/80",
  orange: "bg-orange-100 text-orange-800 border border-orange-200/80",
};
