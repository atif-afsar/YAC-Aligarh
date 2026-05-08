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
    email: "yasirali83637@gmail.com",
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
   * Faculty roster — sourced directly from the official faculty posters
   * (see /public/faculty-posters). Keep names, qualifications, subjects and
   * experience accurate. The assistant uses this when users ask about
   * teachers, mentors, faculty, "who teaches X", subject-wise faculty, etc.
   */
  faculty: {
    founder: {
      name: "Yasir Ali",
      role: "Founder & Director",
      organization: "YAC Edtech Pvt. Ltd.",
      qualifications: ["B.Com", "CS (Professional)", "CA (Inter)"],
      expertise: ["Mind Trainer", "Motivational Speaker"],
      otherRoles: [
        "Founder of Play Place International School",
        "Co-Founder of Brandsway (PR & Marketing Agency)",
        "Secretary of Hopewise Foundation",
      ],
    },
    members: [
      {
        name: "Dr. Mohd Azmi Khan",
        role: "Research Associate, Ex-Faculty FMSR-AMU & SMBS-Jamia Hamdard",
        subjects: [
          "Reasoning",
          "Data Sufficiency",
          "Data Interpretation",
          "Research",
          "Management",
          "Commerce",
        ],
        qualifications: [
          "PhD (AMU)",
          "MBA (FMSR-AMU)",
          "M.Com (AMU)",
          "SRF/JRF Management",
          "NET-Commerce",
        ],
        experience: "13+ years",
      },
      {
        name: "Advocate Mohd Nasar Kazim",
        role: "Educator (Teaching since 2015) & Registered Advocate (Delhi)",
        subjects: [
          "Polity (BA)",
          "Constitution (BALLB & LLM)",
          "Political Science (Class 9, 10, 11, 12)",
        ],
        qualifications: [
          "BALLB (AMU)",
          "LLM in Criminal Law — Gold Medalist",
          "Qualified AIBE Exam",
          "AMU Alumni",
        ],
        experience: "Teaching since 2015 · 12 years of advocacy",
      },
      {
        name: "Fardeen Khan",
        role: "Faculty of Law",
        subjects: [
          "Constitutional Law",
          "LL.B & LL.M Guidance",
          "UGC NET-JRF (Law) Mentorship",
        ],
        qualifications: [
          "LLM in Constitutional Law (AMU)",
          "BALLB (AMU)",
          "UGC NET-JRF Qualified (Law)",
        ],
      },
      {
        name: "Zaid Uddin Farooqui",
        role: "Faculty (Indo-Islamic & Social Sciences)",
        subjects: [
          "General Awareness",
          "Current Affairs",
          "Indo-Islamic Studies",
          "Indian Polity",
          "Indian Geography (Physical, Political & Economic)",
          "Economics and Indian Economy",
        ],
        qualifications: [
          "B.Com",
          "MBA",
          "Company Secretary (Pursuing)",
        ],
        focus: "Current Affairs & Concept-Based Learning",
      },
      {
        name: "Salman Saleem",
        role: "Educator · Author · Expert",
        subjects: [
          "Social Sciences (Geography & History)",
          "GK / GS",
          "Aligarh Movement",
          "Geopolitics",
        ],
        qualifications: ["B.A", "M.A", "B.Ed"],
        experience: "8+ years",
      },
      {
        name: "Mazharuddin",
        role: "Faculty of Chemistry",
        subjects: ["Chemistry"],
        qualifications: [
          "M.Sc. (AMU)",
          "B.Sc. Hons (AMU)",
        ],
        experience: "8+ years",
      },
      {
        name: "Nida Ara (Miss Nida)",
        role: "English Educator",
        subjects: ["English"],
        qualifications: [
          "B.Sc. in Zoology",
          "B.Ed.",
          "Advanced English Certification (British Council)",
        ],
        experience: "8+ years",
      },
      {
        name: "Shivam Chauhan",
        role: "Educator & Mentor — Entrance Exams",
        subjects: [
          "AMU Entrance",
          "JMI Entrance",
          "BHU Entrance",
          "Sainik School Entrance",
          "Graduate-Level Entrance Exams",
        ],
        qualifications: ["B.Tech (AMU Alumnus)"],
        experience: "6+ years",
      },
      {
        name: "Al Aqsa",
        role: "Faculty of Biology",
        subjects: ["Biology", "Botany"],
        qualifications: [
          "PhD Plant Biotechnology (Pursuing)",
          "M.Sc. Botany — Gold Medalist (AMU)",
          "B.Sc. Hons — Gold Medalist (AMU)",
          "CSIR-NET (AIR 84)",
          "DST-INSPIRE Fellow",
        ],
        experience: "6+ years",
      },
      {
        name: "Abdul Mabood Khan",
        role: "Mathematics Mentor",
        subjects: ["Mathematics"],
        qualifications: ["M.Tech (AMU)", "B.Tech (AMU)"],
        experience: "9+ years",
      },
      {
        name: "Anam Tabassum",
        role: "Subject Matter Expert (Commerce)",
        subjects: ["Business Studies", "Statistics"],
        qualifications: [
          "B.Com",
          "M.Com",
          "CS (Intermediate)",
        ],
        experience: "9+ years",
      },
    ],
  },

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
    "Faculty personal contact details (phone / email)",
    "Faculty members not listed in the roster above",
  ],
};

function courseBlock(c) {
  const lines = c.features.map((f) => `    - ${f}`).join("\n");
  return `- **${c.title}** (${c.category}): ${c.summary}\n  Highlights:\n${lines}`;
}

function facultyBlock(f) {
  const parts = [];
  if (f.role) parts.push(`Role: ${f.role}`);
  if (f.subjects?.length)
    parts.push(`Subjects/Domains: ${f.subjects.join(", ")}`);
  if (f.qualifications?.length)
    parts.push(`Qualifications: ${f.qualifications.join(", ")}`);
  if (f.experience) parts.push(`Experience: ${f.experience}`);
  if (f.focus) parts.push(`Focus: ${f.focus}`);
  return `- **${f.name}**\n    ${parts.join("\n    ")}`;
}

function buildSubjectIndex(faculty) {
  // Reverse lookup: subject → faculty members who teach it.
  // Helps the LLM answer "Who teaches Mathematics?" or "Faculty for Law?"
  const map = new Map();
  for (const m of faculty.members) {
    if (!m.subjects) continue;
    for (const s of m.subjects) {
      const key = s.trim();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(m.name);
    }
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([subject, names]) => `- ${subject}: ${names.join(", ")}`)
    .join("\n");
}

/**
 * Long text block embedded in the system prompt (Groq / any LLM).
 */
export function getKnowledgeText() {
  const {
    brand,
    location,
    contact,
    links,
    programStreams,
    courses,
    faculty,
    storyMilestones,
    faqs,
    notInKnowledgeBase,
  } = instituteKnowledge;

  const faqBlock = faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");
  const storyBlock = storyMilestones
    .map((s) => `- ${s.year} — ${s.title}: ${s.detail}`)
    .join("\n");
  const courseBlocks = courses.map(courseBlock).join("\n\n");

  const founderBlock = `- **${faculty.founder.name}** — ${faculty.founder.role}, ${faculty.founder.organization}
    Qualifications: ${faculty.founder.qualifications.join(", ")}
    Expertise: ${faculty.founder.expertise.join(", ")}
    Other roles: ${faculty.founder.otherRoles.join("; ")}`;

  const facultyBlocks = faculty.members.map(facultyBlock).join("\n\n");
  const subjectIndex = buildSubjectIndex(faculty);

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

**Faculty — Founder:**
${founderBlock}

**Faculty — Educators & Mentors (always mention each teacher's subjects when asked about faculty):**
${facultyBlocks}

**Quick subject → faculty index (use this to answer "who teaches X?"):**
${subjectIndex}

**Frequently asked questions (official wording):**
${faqBlock}

**Faculty answer guidelines:**
- When a user asks about faculty / teachers / mentors, list the relevant faculty along with the SUBJECT(S) they teach. Always include subjects, and where relevant, qualifications and years of experience.
- If asked who teaches a specific subject (e.g. "who teaches Mathematics?"), use the subject index above and reply with the matching faculty name(s).
- If a subject is not listed in the roster, say the website does not currently publish that information and offer the contact options.
- Never invent faculty names, qualifications, or subjects beyond what is in the roster.

**If users ask for details we do not have above:**
These topics are NOT in the knowledge base—do not make them up. Say the team can confirm: ${notInKnowledgeBase.join("; ")}. Direct them to call ${contact.phone} or email ${contact.email} or use the website admissions page.
`;
}
