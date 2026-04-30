export const STATS = [
  { label: "Students Trained", value: "80000+" },
  { label: "Selections", value: "20000+" },
  { label: "Years Experience", value: "15+" },
  { label: "Toppers Produced", value: "1000+" },
];

export const RESULT_CATEGORIES = ["BCOM", "BALLB", "BA", "MBA"];

export const CATEGORY_LABELS = {
  BCOM: "B.Com",
  BALLB: "BA LL.B",
  BA: "BA Toppers",
  MBA: "MBA Toppers",
};

const STUDENT_NAMES = {
  BCOM: [
    "REHAN AHMAD",
    "RAJ SHAHIN",
    "NIZAMUDDIN",
    "NARGIS",
    "NAHID RIZWAN",
    "MOHD SAMEER AKRAM",
    "MOHD AARISH",
    "MOHAMMAD ZAYAN",
    "MAJID PRAVEZ",
    "MAHESAMA KHAN",
  ],
  BALLB: [
    "ARMAN NASIR",
    "AAMRA NAJAM",
    "ALIYA SHAKEEL",
    "ANABIYA",
    "FAZLUR REHMAN",
    "FAIZA AHTASHAM",
    "AZAN KHAN",
  ],
  BA: [
    "SYED KAZIM",
    "MOHMMAD ZAYAN",
    "AHMAD SAAD",
    "MD YASIR",
    "NASIR",
    "SHARAFAT SHABIR",
    "SAYYADA FAIZA SALEEM",
    "UMRA TABASSUIM",
    "SANA",
    "ABDULLAH AYAZ",
  ],
  MBA: [
    "ASNA",
    "AMAN SHARMA",
    "ILSA ISRAIL",
    "MD FAHAD",
    "ALIYA ALAM",
    "RIFAH MUZAMMIL",
    "ZUBAIR NAEEM",
    "AKSHIT BANSAL",
    "JATIN PRATAP",
  ],
};

function publicUrl(relativePath) {
  const base = import.meta.env.BASE_URL ?? "/";
  const p = relativePath.replace(/^\//, "");
  const b = base.endsWith("/") ? base : `${base}/`;
  return `${b}${p}`;
}

/** Public URL paths — files live in public/results/... */
const bcom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
  name: STUDENT_NAMES.BCOM[n - 1] ?? `Student ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "B.Com Final Year",
  year: "2025",
  image: publicUrl(`results/bcom/${n}.jpg`),
}));
const ballb = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  name: STUDENT_NAMES.BALLB[n - 1] ?? `Student ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "BA LL.B Semester VIII",
  year: "2025",
  image: publicUrl(`results/ballb/${n}.jpg`),
}));
const ba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
  name: STUDENT_NAMES.BA[n - 1] ?? `Student ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "BA Final Year",
  year: "2025",
  image: publicUrl(`results/ba/${n}.jpg`),
}));
const mba = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
  name: STUDENT_NAMES.MBA[n - 1] ?? `Student ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "MBA Final Semester",
  year: "2025",
  image: publicUrl(`results/mba/${n}.jpg`),
}));

export const RANKERS_BY_CATEGORY = {
  BCOM: bcom,
  BALLB: ballb,
  BA: ba,
  MBA: mba,
};

export const HALL_OF_FAME = [
  {
    category: CATEGORY_LABELS.BCOM,
    image: publicUrl("results/bcom/1.jpg"),
    name: STUDENT_NAMES.BCOM[0],
  },
  {
    category: CATEGORY_LABELS.BALLB,
    image: publicUrl("results/ballb/1.jpg"),
    name: STUDENT_NAMES.BALLB[0],
  },
  {
    category: CATEGORY_LABELS.BA,
    image: publicUrl("results/ba/1.jpg"),
    name: STUDENT_NAMES.BA[0],
  },
  {
    category: CATEGORY_LABELS.MBA,
    image: publicUrl("results/mba/1.jpg"),
    name: STUDENT_NAMES.MBA[0],
  },
];

export const STORIES = [
  {
    name: "Aanya Roy",
    course: "CA Foundation",
    quote:
      "Mentorship and weekly mocks made my preparation predictable and stress-free.",
  },
  {
    name: "Akash Patel",
    course: "CS Executive",
    quote:
      "The answer-writing framework at Academic Architect improved my scores dramatically.",
  },
  {
    name: "Sameera Khan",
    course: "Class 12 Commerce",
    quote:
      "I developed consistency and confidence, and my board results reflected both.",
  },
];

export const VIDEOS = [
  {
    title: "How I Ranked in Top 20",
    duration: "7:10",
    thumb:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=540&fit=crop",
  },
  {
    title: "My Learning Journey",
    duration: "5:45",
    thumb:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=540&fit=crop",
  },
  {
    title: "Consistency That Worked",
    duration: "6:20",
    thumb:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&h=540&fit=crop",
  },
];
