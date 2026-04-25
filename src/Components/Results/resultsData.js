export const STATS = [
  { label: "Students Trained", value: "5000+" },
  { label: "Selections", value: "200+" },
  { label: "Daily Teaching", value: "50+" },
  { label: "Toppers Produced", value: "10+" },
];

export const RESULT_CATEGORIES = ["Bcom", "BALLb", "BA toppers", "MBA toppers"];

function publicUrl(relativePath) {
  const base = import.meta.env.BASE_URL ?? "/";
  const p = relativePath.replace(/^\//, "");
  const b = base.endsWith("/") ? base : `${base}/`;
  return `${b}${p}`;
}

/** Public URL paths — files live in public/results/... */
const bcom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
  name: `B.Com achiever ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "B.Com Final Year",
  year: "2025",
  image: publicUrl(`results/bcom/${n}.jpg`),
}));
const ballb = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  name: `B.A.LL.B achiever ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "B.A.LL.B Semester VIII",
  year: "2025",
  image: publicUrl(`results/ballb/${n}.jpg`),
}));
const ba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
  name: `BA achiever ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "BA Final Year",
  year: "2025",
  image: publicUrl(`results/ba/${n}.jpg`),
}));
const mba = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
  name: `MBA achiever ${n}`,
  rank: `Top ${n}`,
  score: "—",
  exam: "MBA Final Semester",
  year: "2025",
  image: publicUrl(`results/mba/${n}.jpg`),
}));

export const RANKERS_BY_CATEGORY = {
  Bcom: bcom,
  BALLb: ballb,
  "BA toppers": ba,
  "MBA toppers": mba,
};

export const HALL_OF_FAME = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&h=700&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=700&fit=crop",
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
