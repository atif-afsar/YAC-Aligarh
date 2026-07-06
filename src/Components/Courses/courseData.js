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
 * @property {string} [image]      — public-folder image path for the batch poster
 * @property {string} [imageAlt]   — accessible alt text for the poster
 */

/* Helper: paths in /public/batch contain spaces & parentheses; centralise so
 * data is easy to scan and the renderer doesn't need to worry about encoding. */
const BATCH_IMG = (file) => encodeURI(`/batch/${file}`);

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
    image: BATCH_IMG("WhatsApp Image 2026-05-05 at 5.01.26 PM (1).jpeg"),
    imageAlt: "ZENITH Batch poster — Class 10 Regular at Yasir Ali Classes",
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
    image: BATCH_IMG("WhatsApp Image 2026-05-05 at 5.01.26 PM.jpeg"),
    imageAlt: "CHAMPIONS Batch poster — Class 11 Commerce & Humanities Regular",
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
    image: BATCH_IMG("WhatsApp Image 2026-05-05 at 5.01.25 PM (1).jpeg"),
    imageAlt: "ACHIEVER'S Batch poster — Class 12 Commerce & Humanities Regular",
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
    image: BATCH_IMG("WhatsApp Image 2026-05-05 at 5.01.24 PM (1).jpeg"),
    imageAlt: "DREAMERS Batch poster — Class 11 Science / Diploma in Engineering",
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
    image: BATCH_IMG("WhatsApp Image 2026-05-05 at 5.01.24 PM.jpeg"),
    imageAlt: "JEET Batch poster — B.Com & BBA programmes at Yasir Ali Classes",
  },

  /* —— School-level entrance —— */
  {
    id: "entrance-6th",
    classLevels: ["junior"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "orange",
    title: "ILM-E-AGHAAZ Online Course",
    description:
      "Your first step towards AMU & JMI success — online preparation for 6th standard AMU and JMI entrance 2027-28. Special launch offer at ₹6,999 (limited seats).",
    features: [
      "Comprehensive study material",
      "Live & recorded classes",
      "Regular tests & assignments",
      "Previous year questions practice",
      "Performance analysis & mentorship",
      "Exam-oriented strategy sessions",
    ],
    image: BATCH_IMG("faa84af1-8b4a-418c-9e61-51e55ae87362.png"),
    imageAlt:
      "ILM-E-AGHAAZ Batch poster — 6th AMU & JMI Entrance 2027-28",
  },
  {
    id: "entrance-9th",
    classLevels: ["junior"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "blue",
    title: "UROOJ Online Course",
    description:
      "Rise. Learn. Succeed. — online preparation for 9th AMU & JMI entrance 2027-28. Complete coverage with interview prep at ₹7,999 (limited seats).",
    features: [
      "Comprehensive study material",
      "Live + recorded classes",
      "Regular tests & assignments",
      "Previous year questions practice",
      "Performance analysis & personal mentorship",
      "Exam-oriented strategy sessions",
      "Doubt solving & guidance support",
    ],
    image: BATCH_IMG("ChatGPT Image Jun 22, 2026 at 03_02_56 PM.png"),
    imageAlt: "UROOJ Batch poster — 9th AMU & JMI Entrance 2027-28",
  },
  {
    id: "entrance-11th",
    classLevels: ["senior"],
    streams: ["science"],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "red",
    title: "VIJAYI 4.0 Online Course",
    description:
      "Your victory starts here — XI Science & Diploma in Engineering entrance prep for AMU & JMI 2027-28. PCM, engineering aptitude & interview prep at ₹9,999.",
    features: [
      "PCM + engineering aptitude",
      "AMU & JMI entrance-focused",
      "Interview preparation",
      "Live + recorded classes",
      "Regular tests & assignments",
      "Previous year questions practice",
      "Performance analysis & mentorship",
      "Doubt solving & guidance support",
      "Exam-oriented strategy sessions",
    ],
    image: BATCH_IMG("ChatGPT Image Jun 22, 2026 at 03_11_17 PM.png"),
    imageAlt:
      "VIJAYI 4.0 Batch poster — XI Sci. & Dip. in Engg. AMU & JMI Entrance 2027-28",
  },

  /* —— UG & PG entrance (after school) —— */
  {
    id: "entrance-manzil",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "ADMISSION OPEN",
    badgeTone: "red",
    title: "MANZIL Batch",
    description:
      "Your journey towards success — BA & BA FL entrances for AMU & JMI 2027-28. Limited time offer: ₹14,999 (was ₹19,999). Limited seats — hurry up!",
    features: [
      "Complete syllabus coverage from basic to advanced",
      "Live interactive classes by expert faculties",
      "Special focus on AMU & JMI entrance pattern",
      "Daily practice questions & assignments",
      "5+ years PYQs discussion & analysis",
      "Weekly mock tests with performance review",
      "GK, GS, current affairs & English preparation",
      "Special classes for reasoning & aptitude",
      "PDF notes & recorded lectures available",
      "Personalized mentorship till final selection",
    ],
    image: BATCH_IMG("image1.png"),
    imageAlt: "MANZIL Batch poster — BA & BA FL Entrance for AMU & JMI at Yasir Ali Classes",
  },
  {
    id: "entrance-legacy",
    classLevels: ["postK12"],
    streams: ["commerce"],
    courseType: "entrance",
    badge: "BEST VALUE",
    badgeTone: "orange",
    title: "LEGACY Batch 2027-28",
    description:
      "B.Com & BBA entrances for AMU & JMI — highest selections, top ranks, trusted YAC guidance. Online course: ₹14,999 (was ₹19,999). Limited time offer!",
    features: [
      "Live interactive classes by expert faculties",
      "Complete syllabus coverage from basics to advanced",
      "Daily practice questions & assignments",
      "5+ years PYQs discussion & analysis",
      "Weekly mock tests & performance analysis",
      "Reasoning, GK, business awareness & English classes",
      "PDF notes & recorded lectures available",
      "Doubt solving on WhatsApp / Telegram",
      "Exam-oriented short tricks & concept clarity",
      "Online test series with real exam pattern",
      "Dedicated mentorship till final selection",
    ],
    image: BATCH_IMG("image3.png"),
    imageAlt: "LEGACY Batch poster — B.Com & BBA Entrance for AMU & JMI at Yasir Ali Classes",
  },
  {
    id: "entrance-verdict",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "ENTRANCE",
    badgeTone: "red",
    title: "VERDICT Batch",
    description:
      "AMU B.A.LL.B Entrance 2027-28 — target AMU top rank with complete law-entrance prep. Offer: ₹14,999 (was ₹19,999). Valid till AMU Entrance 2027-28. Live on App.",
    features: [
      "Complete syllabus coverage",
      "Topic-wise theory + MCQs",
      "Sectional & full-length tests",
      "Live & recorded classes",
      "Doubt solving support",
      "Batch validity till AMU Entrance 2027-28",
    ],
    image: BATCH_IMG("image.png"),
    imageAlt: "VERDICT Batch poster — AMU B.A.LL.B Entrance 2027-28 at Yasir Ali Classes",
  },
  {
    id: "entrance-mba",
    classLevels: ["postK12"],
    streams: [],
    courseType: "entrance",
    badge: "MISSION AMU MBA",
    badgeTone: "orange",
    title: "Management Masters Batch",
    description:
      "AMU MBA Entrance 2027-28 — master the concepts, crack the entrance, create your future. Limited offer: ₹14,999 (was ₹19,999).",
    features: [
      "Complete preparation for AMU MBA Entrance 2027-28",
      "Live interactive classes by expert faculties",
      "GK, GS, current affairs & business awareness",
      "Reasoning, aptitude & quantitative preparation",
      "5+ years PYQs discussion & detailed analysis",
      "Weekly mock tests with performance review",
      "PDF notes & recorded lectures available",
      "Shortcut tricks & smart exam techniques",
      "Interview guidance & personality development",
      "Dedicated guidance till final selection",
    ],
    image: BATCH_IMG("image2.png"),
    imageAlt: "Management Masters Batch poster — AMU MBA Entrance 2027-28 at Yasir Ali Classes",
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

/**
 * Parses `imageAlt` lines like "ZENITH Batch poster — Class 10 Regular at Yasir Ali Classes"
 * into a short heading that matches the poster wording.
 * @param {string|undefined} imageAlt
 * @returns {string|null}
 */
function parsePosterHeadingFromAlt(imageAlt) {
  if (!imageAlt || typeof imageAlt !== "string") return null;
  const trimmed = imageAlt
    .replace(/\s+at\s+Yasir\s+Ali\s+Classes\.?$/i, "")
    .trim();
  const m = trimmed.match(/^(.+?)\s+Batch\s+poster\s*[—–\-]\s*(.+)$/iu);
  if (!m) return null;
  const batchName = m[1].trim();
  const subtitle = m[2].trim();
  if (!batchName || !subtitle) return null;
  return `${batchName} — ${subtitle}`;
}

/**
 * Card headline: poster text from `imageAlt` when it follows the batch pattern, else `title`.
 * @param {CourseCard} course
 */
export function getCardDisplayHeading(course) {
  const fromAlt = parsePosterHeadingFromAlt(course.imageAlt);
  if (fromAlt) return fromAlt;
  return course.title;
}
