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
  name: "Yasir Ali",
  role: "Founder & Teacher",
  badge1: "YAC Founder",
  badge2: "Lead Mentor",
  bio: "Founder of YAC and an active classroom teacher, guiding students with practical concepts, disciplined practice, and exam-focused mentoring.",
  image: "/faculty/1.jpg",
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
    image: "/faculty/2.jpg",
  },
  {
    id: "patel",
    name: "Dr. Ananya Patel",
    subject: "Commerce & Accounts",
    department: "commerce",
    years: 16,
    image: "/faculty/3.jpg",
  },
  {
    id: "singh",
    name: "Prof. Vikram Singh",
    subject: "Physics",
    department: "science",
    years: 14,
    image: "/faculty/4.jpg",
  },
  {
    id: "menon",
    name: "Ms. Neha Menon",
    subject: "English & Reasoning",
    department: "languages",
    years: 9,
    image: "/faculty/5.jpg",
  },
  {
    id: "reddy",
    name: "Dr. Kiran Reddy",
    subject: "Chemistry",
    department: "science",
    years: 11,
    image: "/faculty/6.jpg",
  },
  {
    id: "kapoor",
    name: "Prof. Riya Kapoor",
    subject: "Entrance Prep (VI / IX / XI)",
    department: "entrance",
    years: 10,
    image: "/faculty/7.jpg",
  },
  {
    id: "sharma",
    name: "Prof. Aman Sharma",
    subject: "Commerce & Business Studies",
    department: "commerce",
    years: 8,
    image: "/faculty/8.jpg",
  },
];
