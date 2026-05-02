/**
 * Centralised SEO config for Yasir Ali Classes (YAC).
 * Primary target keywords:
 *   - "Best coaching in Aligarh"
 *   - "Best commerce coaching in Aligarh"
 *   - "Best science coaching in Aligarh"
 *   - "Best junior coaching in Aligarh" (Classes 5-10)
 *   - "Best CA / CMA / B.Com coaching in Aligarh"
 *   - "Best entrance coaching in Aligarh" (BBA, MBA, BA-LLB / CLAT)
 *
 * Each entry powers <Seo /> for a route or a generic landing template.
 */

export const SITE = {
  url: "https://www.yasiraliclasses.in",
  name: "Yasir Ali Classes",
  shortName: "YAC",
  defaultImage: "https://www.yasiraliclasses.in/images/Logo.png",
  locale: "en_IN",
  twitter: "@yasiraliclasses",
  phone: "+91-9045417079",
  phoneDisplay: "+91 90454 17079",
  email: "info@yasiraliclasses.in",
  address: {
    street: "Senco Jewellers, IT Plaza, Amir Nishan Road",
    locality: "Aligarh",
    region: "Uttar Pradesh",
    postalCode: "202001",
    country: "IN",
  },
};

const k = {
  primary: "best coaching in Aligarh",
  commerce: "best commerce coaching in Aligarh",
  science: "best science coaching in Aligarh",
  junior: "best junior coaching in Aligarh",
  ca: "best CA coaching in Aligarh",
  cma: "best CMA coaching in Aligarh",
  bcom: "best B.Com coaching in Aligarh",
  entrance: "best entrance coaching in Aligarh",
  class11: "best class 11 coaching in Aligarh",
  class12: "best class 12 coaching in Aligarh",
};

const baseKeywords = [
  k.primary,
  k.commerce,
  k.science,
  k.junior,
  k.ca,
  k.cma,
  k.bcom,
  k.entrance,
  k.class11,
  k.class12,
  "Yasir Ali Classes",
  "YAC Aligarh",
  "top coaching institute Aligarh",
].join(", ");

/* ----------------------------------------------------------------- */
/* Per-route SEO meta (used by <Seo />)                              */
/* ----------------------------------------------------------------- */

export const seoConfig = {
  home: {
    title:
      "Best Coaching in Aligarh - Commerce, Science, Junior & CA | Yasir Ali Classes (YAC)",
    description:
      "Yasir Ali Classes (YAC) is the best coaching in Aligarh for Commerce, Science, Junior (5-10), CA, CMA, B.Com, Class 11-12 and Entrance exams. 16+ years, 80,000+ students mentored, 4.9★ rating. Online & offline batches.",
    keywords: baseKeywords,
    path: "/",
  },
  bestCoaching: {
    title: "Best Coaching in Aligarh | Commerce + Science + Junior | YAC 4.9★",
    description:
      "Yasir Ali Classes (YAC) is Aligarh's #1 coaching institute. Best commerce coaching, best science coaching, best junior coaching (Classes 5-10), CA, CMA, B.Com and Class 11-12. Online & offline batches.",
    keywords:
      "best coaching in Aligarh, best coaching institute in Aligarh, top coaching in Aligarh, " +
      baseKeywords,
    path: "/best-coaching-in-aligarh",
  },
  commerceCoaching: {
    title: "Best Commerce Coaching in Aligarh | CA, CMA, B.Com, 11-12 | YAC",
    description:
      "Best commerce coaching in Aligarh for Class 11, 12, CA Foundation, CMA and B.Com. Concept-first teaching, weekly tests, mentor support and proven board results at Yasir Ali Classes.",
    keywords:
      "best commerce coaching in Aligarh, commerce coaching in Aligarh, accounts coaching in Aligarh, " +
      baseKeywords,
    path: "/commerce-coaching",
  },
  scienceCoaching: {
    title: "Best Science Coaching in Aligarh | Class 11 & 12 PCM/PCB | YAC",
    description:
      "Best science coaching in Aligarh for Class 11 & 12 (PCM / PCB). Concept-first Physics, Chemistry, Maths and Biology with numerical drills, weekly tests and small-batch doubt support.",
    keywords:
      "best science coaching in Aligarh, science coaching in Aligarh, PCM coaching in Aligarh, PCB coaching in Aligarh, Class 11 science coaching Aligarh, Class 12 science coaching Aligarh, NEET foundation Aligarh, " +
      baseKeywords,
    path: "/best-science-coaching-in-aligarh",
  },
  juniorCoaching: {
    title: "Best Junior Coaching in Aligarh | Classes 5 to 10 | YAC",
    description:
      "Best junior coaching in Aligarh for Classes 5 to 10. NCERT-aligned Maths, Science, English & SST with weekly tests, doubt sessions and parent-friendly progress updates at Yasir Ali Classes.",
    keywords:
      "best junior coaching in Aligarh, junior coaching in Aligarh, class 5 coaching Aligarh, class 6 coaching Aligarh, class 7 coaching Aligarh, class 8 coaching Aligarh, class 9 coaching Aligarh, class 10 coaching Aligarh, NCERT tuition Aligarh, foundation coaching Aligarh, " +
      baseKeywords,
    path: "/best-junior-coaching-in-aligarh",
  },
  caCoaching: {
    title: "Best CA Coaching in Aligarh | CA Foundation by YAC",
    description:
      "Best CA coaching in Aligarh. ICAI CA Foundation - Accounts, Law, Quant and Economics with concept-first teaching, weekly tests and mentor-led revision marathons.",
    keywords:
      "best CA coaching in Aligarh, CA coaching in Aligarh, CA Foundation coaching in Aligarh, ICAI coaching Aligarh, " +
      baseKeywords,
    path: "/best-ca-coaching-in-aligarh",
  },
  cmaCoaching: {
    title: "Best CMA Coaching in Aligarh | CMA ICMAI by YAC",
    description:
      "Best CMA coaching in Aligarh. ICMAI CMA Foundation and Intermediate with syllabus-wise modules, paper-pattern mocks and pre-exam doubt marathons at Yasir Ali Classes.",
    keywords:
      "best CMA coaching in Aligarh, CMA coaching in Aligarh, ICMAI coaching Aligarh, CMA Foundation Aligarh, CMA Intermediate Aligarh, " +
      baseKeywords,
    path: "/best-cma-coaching-in-aligarh",
  },
  entranceCoaching: {
    title:
      "Best Entrance Coaching in Aligarh | BBA, MBA, BA-LLB, CLAT | YAC",
    description:
      "Best entrance coaching in Aligarh for BBA, MBA, BA-LLB / CLAT, BAFL, BA, B.Com UG and Class 6/9/11 entrance tests. Pattern-based mocks, sectional rigour and All-India test series.",
    keywords:
      "best entrance coaching in Aligarh, entrance coaching in Aligarh, BBA entrance coaching Aligarh, MBA entrance coaching Aligarh, BA LLB coaching Aligarh, CLAT coaching Aligarh, BAFL entrance Aligarh, " +
      baseKeywords,
    path: "/best-entrance-coaching-in-aligarh",
  },
  courses: {
    title: "Courses - Commerce, Science, Junior, CA, CMA & Entrance | YAC Aligarh",
    description:
      "Explore Commerce, Science, Junior (5-10), Entrance and Professional batches at Yasir Ali Classes Aligarh. Programs for CA Foundation, CMA, B.Com, Class 11-12 and major entrance exams.",
    keywords:
      "commerce courses in Aligarh, science courses in Aligarh, junior courses in Aligarh, " +
      baseKeywords,
    path: "/courses",
  },
  onlineCourses: {
    title: "Online Coaching from Aligarh | Live + Recorded | YAC",
    description:
      "Join YAC's online coaching from Aligarh. Live classes, recorded lectures and premium bundles for Commerce, Science, CA, CMA, B.Com, Class 11-12 and Entrance preparation.",
    keywords:
      "online commerce coaching in Aligarh, online science coaching in Aligarh, online CA coaching, online CMA coaching, " +
      baseKeywords,
    path: "/online-courses",
  },
  admissions: {
    title: "Admissions Open - Best Coaching in Aligarh | YAC",
    description:
      "Admissions open at Yasir Ali Classes - Aligarh's leading coaching institute. Apply for Commerce, Science, Junior, CA, CMA, B.Com, Class 11-12 and Entrance batches.",
    keywords: "admissions Aligarh, commerce admissions Aligarh, science admissions Aligarh, " + baseKeywords,
    path: "/admissions",
  },
  faculty: {
    title: "Expert Faculty - Best Teachers in Aligarh | YAC",
    description:
      "Meet YAC's expert faculty in Aligarh - mentors with deep subject mastery and proven track record across Commerce, Science, Junior, CA, CMA and Entrance exam preparation.",
    keywords: "best teachers in Aligarh, commerce faculty Aligarh, science faculty Aligarh, " + baseKeywords,
    path: "/faculty",
  },
  results: {
    title: "Results - Top Rankers from Best Coaching in Aligarh | YAC",
    description:
      "See top rankers and proven results from Yasir Ali Classes Aligarh. Year-on-year board toppers, CA & CMA qualifiers and 95%+ exam success rate across Commerce, Science and Entrance.",
    keywords: "best results coaching Aligarh, top rankers Aligarh, " + baseKeywords,
    path: "/results",
  },
  about: {
    title: "About YAC - Aligarh's Leading Coaching Institute",
    description:
      "About Yasir Ali Classes (YAC) - founded in 2008 in Aligarh. 16+ years of structured mentorship for Commerce, Science, Junior, CA, CMA, B.Com, Class 11-12 and Entrance students.",
    keywords: "about Yasir Ali Classes, YAC Aligarh, coaching institute Aligarh, " + baseKeywords,
    path: "/about",
  },
  blog: {
    title: "Blog - Study Tips, CA/CMA Updates & Career Advice | YAC Aligarh",
    description:
      "Read latest study tips, CA & CMA updates, board exam strategies, science prep tips and career guidance from Yasir Ali Classes - Aligarh's best coaching institute.",
    keywords: "commerce study tips, science study tips, CA updates, CMA updates, " + baseKeywords,
    path: "/blog",
  },
  mobileApp: {
    title: "YAC Mobile App - Learn Commerce & Science on the Go | Aligarh",
    description:
      "Download the Yasir Ali Classes mobile app for live classes, recorded lectures, mock tests and study material across Commerce, Science, CA, CMA and Entrance prep.",
    keywords: "YAC app, commerce app Aligarh, science app Aligarh, " + baseKeywords,
    path: "/mobile-app",
  },
  youtube: {
    title: "YAC YouTube + Mobile App | Free Commerce & Science Lessons",
    description:
      "Free Commerce, Science, CA and CMA lessons, strategy and revision marathons on Yasir Ali Classes YouTube. Plus the YAC mobile app for full study access.",
    keywords: "YAC YouTube, free commerce lessons, free science lessons, " + baseKeywords,
    path: "/youtube",
  },
};

/* ----------------------------------------------------------------- */
/* Reusable landing-page configs (consumed by KeywordLandingPage)    */
/* ----------------------------------------------------------------- */

const cmnFaqAdmission = {
  q: "How do I take admission at YAC Aligarh?",
  a: "You can apply through our admissions page, call +91 90454 17079, or message us on WhatsApp. Online and offline batches are available with rolling admissions.",
};
const cmnFaqOnline = {
  q: "Are online batches available for students outside Aligarh?",
  a: "Yes. Live classes, recorded lectures and mock tests are available across India through the YAC mobile app and YouTube channel.",
};
const cmnFaqLocation = {
  q: "Where is Yasir Ali Classes located in Aligarh?",
  a: "Our coaching centre is at Senco Jewellers, IT Plaza, Amir Nishan Road, Aligarh, Uttar Pradesh 202001.",
};

export const landingConfig = {
  /* ───────────────── SCIENCE ───────────────── */
  science: {
    seoKey: "scienceCoaching",
    eyebrow: "Yasir Ali Classes · YAC · Aligarh",
    h1Lead: "Best Science Coaching in",
    h1Highlight: "Aligarh",
    h1Tail: "· Class 11-12 PCM / PCB",
    intro: (
      "Looking for the best science coaching in Aligarh? Yasir Ali Classes (YAC) " +
      "delivers concept-first Physics, Chemistry, Maths and Biology for Class 11 " +
      "& 12 (PCM / PCB) - with numerical drills, mock tests, error tracking and " +
      "small-batch doubt support."
    ),
    breadcrumbName: "Best Science Coaching in Aligarh",
    highlights: [
      { title: "Concept-first Physics & Chemistry", desc: "Strong foundations before formula-pushing - the YAC science difference." },
      { title: "Numerical & diagram drills", desc: "Daily problem sets in Maths, Physics and Biology aligned to your board pattern." },
      { title: "Mock tests + error log", desc: "Weekly tests with personal error tracking so the same mistake never repeats." },
      { title: "Small batches, real doubts", desc: "Smaller group sizes mean every doubt actually gets solved - not skipped." },
    ],
    programs: [
      { title: "Class 11 Science (PCM / PCB)", desc: "Concept-first Physics, Chemistry, Maths and Biology aligned to NCERT and your board.", to: "/courses" },
      { title: "Class 12 Science (PCM / PCB)", desc: "Board sprint with chapter-wise mocks, sample papers and pre-board marathons.", to: "/courses" },
      { title: "NEET / JEE-style foundation", desc: "Pattern awareness alongside boards for science students aiming at competitive exams.", to: "/courses" },
      { title: "Online Live + Recorded", desc: "Join PCM / PCB online from anywhere in India through the YAC app and YouTube.", to: "/online-courses" },
    ],
    reasons: [
      "Concept-first teaching, not rote learning",
      "Numerical drills and diagram-based questions",
      "Weekly mock tests with personal error tracking",
      "Doubt support in smaller batches",
      "Subject mix planning as per your electives",
      "Aligned to your board pattern (CBSE / ICSE / UP Board)",
    ],
    faqs: [
      { q: "Which is the best science coaching in Aligarh for Class 11 & 12?", a: "Yasir Ali Classes (YAC) is among the most trusted science coaching institutes in Aligarh for Class 11 & 12 (PCM / PCB), with concept-first teaching, numerical drills and weekly mocks." },
      { q: "Do you cover both PCM and PCB streams?", a: "Yes. We run dedicated Class 11 & 12 Science batches for both PCM (Physics, Chemistry, Maths) and PCB (Physics, Chemistry, Biology) aligned to CBSE / ICSE / UP Board patterns." },
      { q: "Do you prepare science students for NEET / JEE patterns?", a: "Our Class 11 & 12 Science track builds strong board readiness alongside foundational pattern-awareness for NEET / JEE-style competitive exams." },
      cmnFaqOnline,
      cmnFaqLocation,
      cmnFaqAdmission,
    ],
  },

  /* ───────────────── JUNIOR (5-10) ───────────────── */
  junior: {
    seoKey: "juniorCoaching",
    eyebrow: "Yasir Ali Classes · YAC · Aligarh",
    h1Lead: "Best Junior Coaching in",
    h1Highlight: "Aligarh",
    h1Tail: "· Classes 5 to 10",
    intro: (
      "YAC's junior coaching is built for Classes 5 to 10 - NCERT-aligned " +
      "Maths, Science, English and SST with weekly checks, doubt support and " +
      "parent-friendly progress updates. The strongest foundation a student can " +
      "have in Aligarh."
    ),
    breadcrumbName: "Best Junior Coaching in Aligarh",
    highlights: [
      { title: "Foundation done right", desc: "5-8 basics + 9-10 board focus in one structured track." },
      { title: "Weekly checks", desc: "Worksheets, quizzes and tests aligned to school rhythm." },
      { title: "Parent updates", desc: "Regular progress communication so parents stay informed." },
      { title: "Habit-building", desc: "Small, structured batches that build real study habits early." },
    ],
    programs: [
      { title: "Classes 5-8 Foundation", desc: "NCERT-minded foundation in Maths, Science, English and SST.", to: "/courses" },
      { title: "Classes 9-10 (Board Focus)", desc: "Board-ready preparation with sample-paper drills and revision plans.", to: "/courses" },
      { title: "Class 6 Entrance", desc: "Aptitude, language and reasoning for 6th-standard entrance tests.", to: "/courses" },
      { title: "Class 9 Entrance", desc: "Higher-order Maths/Science with speed drills and past-paper practice.", to: "/courses" },
    ],
    reasons: [
      "5-8 basics & 9-10 board focus in one track",
      "Worksheets, quizzes and school rhythm alignment",
      "Doubt sessions and test feedback",
      "Habit-building in small, structured batches",
      "Parent-friendly progress communication",
      "Personalised support for weak topics",
    ],
    faqs: [
      { q: "Which is the best junior coaching in Aligarh for Classes 5 to 10?", a: "Yasir Ali Classes (YAC) is widely considered the best junior coaching in Aligarh for Classes 5 to 10. We focus on NCERT-aligned foundations, weekly checks, doubt sessions and parent-friendly progress updates." },
      { q: "Which subjects do you cover for junior students?", a: "Our junior batches cover Maths, Science, English and Social Studies (SST) for Classes 5 to 10, plus dedicated Class 6 and Class 9 entrance preparation." },
      { q: "Do you prepare students for school entrance tests?", a: "Yes. We run dedicated Class 6 and Class 9 entrance batches with topic-wise aptitude practice, past-paper sets and full-length mock tests." },
      cmnFaqOnline,
      cmnFaqLocation,
      cmnFaqAdmission,
    ],
  },

  /* ───────────────── CA ───────────────── */
  ca: {
    seoKey: "caCoaching",
    eyebrow: "Yasir Ali Classes · YAC · Aligarh",
    h1Lead: "Best CA Coaching in",
    h1Highlight: "Aligarh",
    h1Tail: "· ICAI CA Foundation",
    intro: (
      "ICAI CA Foundation - Accounts, Law, Quant and Economics - taught with " +
      "concept clarity from day one. YAC's CA Foundation track in Aligarh blends " +
      "exam-style output, doubt labs and mentor-led revision marathons before " +
      "every attempt."
    ),
    breadcrumbName: "Best CA Coaching in Aligarh",
    highlights: [
      { title: "Concept + MCQ practice", desc: "Both objective and descriptive practice from the very first chapter." },
      { title: "Test series & checks", desc: "Chapter-wise tests and full-length mocks before each attempt window." },
      { title: "Doubt labs", desc: "Mentor-led doubt clearing with printed / digital kit (per batch)." },
      { title: "Revision marathons", desc: "Pre-exam marathons that consolidate the entire syllabus." },
    ],
    programs: [
      { title: "CA Foundation - Accounts", desc: "Foundation accountancy with chapter-wise problem-solving and revision drills.", to: "/courses" },
      { title: "CA Foundation - Business Law", desc: "Concept-first law coverage with case-style practice for exam-pattern answers.", to: "/courses" },
      { title: "CA Foundation - Quant", desc: "Quantitative aptitude with shortcuts, MCQ banks and timed sectionals.", to: "/courses" },
      { title: "CA Foundation - Economics", desc: "Conceptual economics with chart-based revision and full mock series.", to: "/courses" },
    ],
    reasons: [
      "ICAI-aligned syllabus and pattern",
      "Concept + MCQ + descriptive practice from day one",
      "Chapter checks and full-length test series",
      "Printed / digital study kit (as per batch)",
      "Mentor-led pre-exam revision marathons",
      "Doubt labs and small-batch attention",
    ],
    faqs: [
      { q: "Which is the best CA coaching in Aligarh?", a: "Yasir Ali Classes (YAC) is among the most trusted institutes for CA Foundation coaching in Aligarh, with concept-first teaching, ICAI-aligned test series and mentor-led revision marathons." },
      { q: "What subjects are covered in CA Foundation at YAC?", a: "We cover the four CA Foundation papers: Accounts, Business Law, Quantitative Aptitude and Business Economics." },
      { q: "Do you offer CMA coaching as well?", a: "Yes. Alongside CA Foundation, YAC offers CMA (ICMAI) Foundation and Intermediate coaching with syllabus-wise modules and paper-pattern mocks." },
      cmnFaqOnline,
      cmnFaqLocation,
      cmnFaqAdmission,
    ],
  },

  /* ───────────────── CMA ───────────────── */
  cma: {
    seoKey: "cmaCoaching",
    eyebrow: "Yasir Ali Classes · YAC · Aligarh",
    h1Lead: "Best CMA Coaching in",
    h1Highlight: "Aligarh",
    h1Tail: "· ICMAI Foundation & Intermediate",
    intro: (
      "Cost & Management Accountancy (ICMAI) at YAC - Foundation and Intermediate " +
      "coaching with syllabus-wise modules, workbook integration and paper-pattern " +
      "mocks. The most structured CMA coaching in Aligarh."
    ),
    breadcrumbName: "Best CMA Coaching in Aligarh",
    highlights: [
      { title: "Syllabus-wise planning", desc: "Module-by-module schedule mapped to ICMAI pattern." },
      { title: "Workbook integration", desc: "Concept lectures backed by workbooks and mocks." },
      { title: "Paper-pattern mocks", desc: "Time-split practice based on the actual CMA exam pattern." },
      { title: "Pre-exam marathons", desc: "Doubt support and final-stretch marathons before the attempt." },
    ],
    programs: [
      { title: "CMA Foundation", desc: "Foundation-level CMA with concept lectures, MCQs and full mocks.", to: "/courses" },
      { title: "CMA Intermediate", desc: "Intermediate CMA modules with case-style practice and pattern timing.", to: "/courses" },
      { title: "Online CMA Coaching", desc: "Live and recorded CMA classes for students across India.", to: "/online-courses" },
      { title: "CA + CMA Combo Path", desc: "Plan CA Foundation alongside CMA for double professional readiness.", to: "/courses" },
    ],
    reasons: [
      "Syllabus-wise module planning",
      "Workbook and mock integration",
      "Focus on CMA paper pattern and time splits",
      "Doubt support and pre-exam marathons",
      "Mentor-led concept clarity",
      "Online + offline modes",
    ],
    faqs: [
      { q: "Which is the best CMA coaching in Aligarh?", a: "Yasir Ali Classes (YAC) offers the most structured CMA (ICMAI) coaching in Aligarh, covering Foundation and Intermediate with syllabus-wise modules, paper-pattern mocks and pre-exam marathons." },
      { q: "Do you cover both CMA Foundation and Intermediate?", a: "Yes. YAC runs both CMA Foundation and CMA Intermediate batches with workbook-backed concept lectures and full-length mock series." },
      { q: "Can I prepare for CA and CMA together?", a: "Yes. Many students plan CA Foundation alongside CMA - our mentors help you sequence your study plan to keep both tracks moving without burnout." },
      cmnFaqOnline,
      cmnFaqLocation,
      cmnFaqAdmission,
    ],
  },

  /* ───────────────── ENTRANCE ───────────────── */
  entrance: {
    seoKey: "entranceCoaching",
    eyebrow: "Yasir Ali Classes · YAC · Aligarh",
    h1Lead: "Best Entrance Coaching in",
    h1Highlight: "Aligarh",
    h1Tail: "· BBA, MBA, BA-LLB, CLAT & more",
    intro: (
      "YAC runs Aligarh's most comprehensive entrance coaching - BBA, MBA, BA-LLB " +
      "(CLAT), BAFL, BA, B.Com UG and Class 6 / 9 / 11 entrance tests - with " +
      "pattern-based mocks, sectional rigour and All-India test series."
    ),
    breadcrumbName: "Best Entrance Coaching in Aligarh",
    highlights: [
      { title: "Pattern-based mocks", desc: "Sectional and full-length mocks built around the actual exam pattern." },
      { title: "Sectional rigour", desc: "QA, VARC, DILR, LR and Legal Reasoning - drilled section by section." },
      { title: "All-India test series", desc: "Score vs percentile tracking against a national pool." },
      { title: "Strategy mentorship", desc: "Test strategy workshops and PI / WAT / GD primer where applicable." },
    ],
    programs: [
      { title: "BBA Entrance", desc: "QA, DI, Verbal, LR, GK and full proctored-style mock series.", to: "/courses" },
      { title: "MBA Entrance", desc: "QA, VARC, DILR sectional drills with adaptive mocks and analysis.", to: "/courses" },
      { title: "BA-LLB / CLAT", desc: "Legal & logical reasoning, current affairs and All-India mocks.", to: "/courses" },
      { title: "BBA / B.Com / BAFL UG", desc: "Aptitude, language, GK and stream-specific UG entrance prep.", to: "/courses" },
    ],
    reasons: [
      "Sectional tests: QA, DI, Verbal, LR (and Legal where applicable)",
      "Full-length proctored-style mocks",
      "Adaptive mock series with detailed solutions",
      "Score vs percentile tracking",
      "GD / PI / WAT primer (per program)",
      "Test strategy workshops",
    ],
    faqs: [
      { q: "Which is the best entrance coaching in Aligarh?", a: "Yasir Ali Classes (YAC) offers the most comprehensive entrance coaching in Aligarh - BBA, MBA, BA-LLB / CLAT, BAFL, BA and B.Com UG entrance tests, plus Class 6 / 9 / 11 school entrance batches." },
      { q: "Do you offer CLAT / law entrance preparation?", a: "Yes. Our BA-LLB / CLAT track covers legal reasoning, critical thinking, current affairs and All-India level mock series." },
      { q: "Do you cover BBA and MBA entrance patterns?", a: "Yes. We run dedicated BBA and MBA entrance batches with sectional rigour (QA, VARC, DILR / LR), adaptive mocks and PI / WAT primers." },
      cmnFaqOnline,
      cmnFaqLocation,
      cmnFaqAdmission,
    ],
  },
};

/* ----------------------------------------------------------------- */
/* Helpers                                                            */
/* ----------------------------------------------------------------- */

/**
 * Build a Breadcrumb JSON-LD object for any list of crumbs.
 * @param {Array<{name:string, path:string}>} crumbs
 */
export function buildBreadcrumbJsonLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

/**
 * Build an FAQ JSON-LD block from a list of {q, a}.
 */
export function buildFaqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Build an ItemList JSON-LD of Courses for a landing page.
 */
export function buildCourseListJsonLd(name, programs) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: p.title,
        description: p.desc,
        provider: {
          "@type": "EducationalOrganization",
          name: SITE.name,
          "@id": `${SITE.url}/#organization`,
          url: SITE.url,
        },
      },
    })),
  };
}
