/**
 * Authoritative facts for the YAC assistant. Edit this file when website content changes.
 * The model is instructed to rely on this text and not invent fees, dates, or addresses.
 */
export const instituteKnowledge = {
  brand: {
    fullName: "Yasir Ali Classes",
    shortName: "YAC",
    tagline: "We Debit Efforts, to Credit Your Success",
    positioning:
      "Structured mentoring for Commerce, Science, Entrance, and Regular school batches—online and offline. Built for students across India.",
  },

  location: {
    city: "Aligarh",
    state: "Uttar Pradesh",
    country: "India",
    display: "Aligarh, Uttar Pradesh, India",
    fullAddress:
      "Senco Jewellers, IT Plaza, Amir Nishan Rd, Amir Nishan, Aligarh, Uttar Pradesh 202001",
  },

  contact: {
    phone: "+91 90454 17079",
    phoneTel: "+919045417079",
    email: "info@yasiraliclasses.in",
  },

  /** Public links (same as site footer / social) */
  links: {
    youtube: "https://www.youtube.com/channel/UCUlHYg9DL5LACF_fHQI7I_g",
    instagram: "https://instagram.com/yasiraliclasses",
    facebook: "https://facebook.com/",
  },

  programStreams: [
    "Commerce Programs",
    "Science Programs",
    "Entrance Preparation",
    "Regular School Batches",
  ],

  /**
   * Course catalogue — keep in sync with `src/Components/Courses/courseData.js` when possible.
   */
  courses: [
    {
      id: "junior-5-10-regular",
      title: "Classes 5–10 (Regular)",
      category: "School prep (Regular)",
      summary:
        "NCERT-minded foundation for Classes 5–10—core subjects, worksheets, tests, and doubt support in structured batches.",
      features: [
        "5–10 in one school-prep track",
        "Doubt and test feedback",
        "Parent-friendly progress",
      ],
    },
    {
      id: "senior-11-12-commerce",
      title: "Class 11 & 12 (Commerce—Regular)",
      category: "School prep (11–12 Commerce)",
      summary: "Accountancy, BST, Economics; board focus with path toward CA, CS, and B.Com.",
      features: ["C11 + C12 coverage", "Mocks & sample papers", "Small batches"],
    },
    {
      id: "senior-11-12-humanities",
      title: "Class 11 & 12 (Humanities—Regular)",
      category: "School prep (11–12 Arts)",
      summary: "Arts / Humanities board prep—writing, long answers, and exam strategy.",
      features: ["Board-aligned plans", "Answer presentation", "Regular tests"],
    },
    {
      id: "bcom-regular",
      title: "B.Com (Regular)",
      category: "Graduation",
      summary: "University B.Com (Regular) support—semester sync, practice, and skills.",
      features: ["Semester plans", "Practical + theory", "Career / placement basics"],
    },
    {
      id: "entrance-6th",
      title: "Class 6 Entrance",
      category: "Entrance (school level)",
      summary: "Aptitude, language, reasoning for 6th entrance tests; mocks and basic interview readiness.",
      features: ["Aptitude sets", "Comprehension", "Full mocks"],
    },
    {
      id: "entrance-9th",
      title: "Class 9 Entrance",
      category: "Entrance (school level)",
      summary: "9th entrance—past papers, speed-accuracy, weak-topic help.",
      features: ["Pattern drills", "Error log", "Timed practice"],
    },
    {
      id: "entrance-11th",
      title: "Class 11 Entrance",
      category: "Entrance (school level)",
      summary: "Pre–Class 11 entrance—aptitude, reasoning, stream awareness; scholarship-style tests.",
      features: ["GK & aptitude blocks", "Institute pattern mocks", "Counselling overview"],
    },
    {
      id: "entrance-ba",
      title: "BA Entrance",
      category: "Entrance (UG)",
      summary: "UG entrance for BA-style programmes—language, awareness, and pattern mocks.",
      features: ["PYQ-style practice", "Time strategy", "Form / college guidance (overview)"],
    },
    {
      id: "entrance-bcom-ug",
      title: "B.Com Entrance",
      category: "Entrance (UG)",
      summary: "B.Com and allied UG test prep—aptitude, commerce awareness, mocks.",
      features: ["Aptitude + accounts awareness", "Mock series", "Doubt labs"],
    },
    {
      id: "entrance-bafl",
      title: "BAFL Entrance",
      category: "Entrance (UG)",
      summary: "BA / Fine Arts or BAFL-style UG entrance—aptitude, language, and stream sets.",
      features: ["Stream practice sets", "Timed mocks", "Eligibility overview"],
    },
    {
      id: "entrance-bba",
      title: "BBA Entrance",
      category: "Entrance (UG)",
      summary: "BBA and management-UG tests—QA, English, LR, GK as per major patterns.",
      features: ["Sectional tests", "Full mocks", "Strategy workshops"],
    },
    {
      id: "entrance-ballb",
      title: "BA LLB / BALLB Entrance",
      category: "Entrance (UG Law)",
      summary: "Law UG (CLAT-style) — legal reasoning, GA, comprehension.",
      features: ["Legal + LR", "Current affairs", "All-India mocks"],
    },
    {
      id: "entrance-mba",
      title: "MBA Entrance",
      category: "Entrance (PG)",
      summary: "MBA entrance—sectional and full-length management test prep.",
      features: ["VARC / DILR / QA patterns", "Adaptive mocks", "PI–WAT overview"],
    },
    {
      id: "ca-foundation",
      title: "CA Foundation",
      category: "Professional (ICAI)",
      summary: "ICAI CA Foundation—Papers, test series, doubt labs, revision.",
      features: ["Exam-style from day one", "Test series", "Mentor support"],
    },
    {
      id: "cma",
      title: "CMA (ICMAI)",
      category: "Professional (ICMAI)",
      summary: "CMA (Cost & Management Accountancy) foundation/intermediate as per stage enrolled.",
      features: ["Module plan", "Mocks", "CMA pattern focus"],
    },
  ],

  storyMilestones: [
    {
      year: "2015",
      title: "Foundation",
      detail:
        "Commerce-focused institute started to bring quality commerce education to Aligarh students.",
    },
    {
      year: "2018",
      title: "Expansion",
      detail: "Faculty growth and specialized courses for CA, CS, and CPA programs.",
    },
    {
      year: "2024",
      title: "Recognition",
      detail:
        "Recognised as a leading commerce coaching institute; 5k+ successful students (as stated on the website).",
    },
  ],

  /**
   * Matches homepage FAQ copy so answers stay consistent.
   */
  faqs: [
    {
      q: "Which courses are available at Yasir Ali Classes?",
      a: "YAC offers structured coaching for Commerce, Science, Entrance preparation, and Regular school batches, in both online and offline formats.",
    },
    {
      q: "Do you provide coaching for both boards and competitive exams?",
      a: "Yes—board-focused prep with concept classes, test series, and revision plans, plus entrance-oriented practice and mock exam programs.",
    },
    {
      q: "How are doubts and student progress tracked?",
      a: "Regular doubt support, periodic tests, performance reviews, and parent updates via progress communication and score analysis.",
    },
    {
      q: "Can students from outside Aligarh join YAC?",
      a: "Yes—students across India can learn online with recorded support and digital assessments; local students can attend offline batches in Aligarh.",
    },
    {
      q: "How can I enroll in a YAC batch?",
      a: "Enroll via the admissions page, contact the team directly, or explore the mobile app and YouTube to choose a track before registration.",
    },
  ],

  /**
   * What is NOT in this file — assistant must not invent it.
   */
  notInKnowledgeBase: [
    "Exact fee amounts and payment plans",
    "Exact batch timings, start dates, and seat availability",
    "Street address or map pin (only city/region is listed)",
    "Individual faculty names unless you add them here later",
  ],
};

function courseBlock(c) {
  const lines = c.features.map((f) => `    - ${f}`).join("\n");
  return `- **${c.title}** (${c.category}): ${c.summary}\n  Highlights:\n${lines}`;
}

/**
 * Long text block embedded in the system prompt (Groq / any LLM).
 */
export function getKnowledgeText() {
  const { brand, location, contact, links, programStreams, courses, storyMilestones, faqs, notInKnowledgeBase } =
    instituteKnowledge;

  const faqBlock = faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");
  const storyBlock = storyMilestones
    .map((s) => `- ${s.year} — ${s.title}: ${s.detail}`)
    .join("\n");
  const courseBlocks = courses.map(courseBlock).join("\n\n");

  return `### KNOWLEDGE BASE (use only this for factual claims)
**Institute:** ${brand.fullName} (${brand.shortName})
**Tagline:** ${brand.tagline}
**About:** ${brand.positioning}

**Location:** ${location.display}
**Address (for visits / directions):** ${location.fullAddress}
**Phone:** ${contact.phone}
**Email:** ${contact.email}
**YouTube:** ${links.youtube}
**Instagram:** ${links.instagram}

**Program streams we offer:** ${programStreams.join(", ")}.

**Our story (short):**
${storyBlock}

**Courses & programs (summary):**
${courseBlocks}

**Frequently asked questions (official wording):**
${faqBlock}

**If users ask for details we do not have above:**
These topics are NOT in the knowledge base—do not make them up. Say the team can confirm: ${notInKnowledgeBase.join("; ")}. Direct them to call ${contact.phone} or email ${contact.email} or use the website admissions page.
`;
}
