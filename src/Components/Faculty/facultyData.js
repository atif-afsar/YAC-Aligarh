/** @typedef {'all' | 'science' | 'commerce' | 'mathematics' | 'languages' | 'entrance'} FacultyDepartment */

/** @type {{ id: FacultyDepartment; label: string }[]} */
export const DEPARTMENTS = [
  { id: "all", label: "All Departments" },
  { id: "science", label: "Science" },
  { id: "commerce", label: "Commerce" },
  { id: "mathematics", label: "Mathematics" },
  { id: "languages", label: "Languages" },
  { id: "entrance", label: "Entrance Exams" },
];

export const LEAD_FACULTY = {
  name: "Dr. Sarah Henderson",
  role: "Lead Faculty, Advanced Physics & Mathematics",
  badge1: "Dean of Sciences",
  badge2: "15+ Years Experience",
  bio: "Dr. Henderson blends research-grade rigor with classroom clarity—mentoring thousands from fundamentals to national-level competitive exams with empathy and precision.",
  image:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&face",
  accolades: [
    {
      line: "PhD Astrophysics, Stanford University",
      icon: "grad",
    },
    {
      line: "Educator of the Year, Global Excellence Awards 2023",
      icon: "award",
    },
  ],
};

/** @type {Array<{
 *   id: string;
 *   name: string;
 *   subject: string;
 *   department: Exclude<FacultyDepartment, 'all'>;
 *   years: number;
 *   image: string;
 * }>} */
export const FACULTY_MEMBERS = [
  {
    id: "thorne",
    name: "Prof. Marcus Thorne",
    subject: "Mathematics",
    department: "mathematics",
    years: 12,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=720&fit=crop&face",
  },
  {
    id: "patel",
    name: "Dr. Ananya Patel",
    subject: "Commerce & Accounts",
    department: "commerce",
    years: 16,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=720&fit=crop&face",
  },
  {
    id: "singh",
    name: "Prof. Vikram Singh",
    subject: "Physics",
    department: "science",
    years: 14,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=720&fit=crop&face",
  },
  {
    id: "menon",
    name: "Ms. Neha Menon",
    subject: "English & Reasoning",
    department: "languages",
    years: 9,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=720&fit=crop&face",
  },
  {
    id: "reddy",
    name: "Dr. Kiran Reddy",
    subject: "Chemistry",
    department: "science",
    years: 11,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=720&fit=crop&face",
  },
  {
    id: "kapoor",
    name: "Prof. Riya Kapoor",
    subject: "Entrance Prep (VI / IX / XI)",
    department: "entrance",
    years: 10,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=720&fit=crop&face",
  },
];
