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
      line: "Accounts (Director) ",
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
    id: "Atif",
    name: "Mohd Atif Khan",
    subject: "Economics",
    department: "commerce",
    years: 10,
    image: "/faculty/2.jpg",
  },
  {
    id: "Ara",
    name: "Nida Ara",
    subject: "English",
    department: "languages",
    years: 8,
    image: "/faculty/3.jpg",
  },
  {
    id: "Nasar",
    name: "Advt Mohammad Nasar",
    subject: "Constitutional Law",
    department: "Commerce",
    years: 12,
    image: "/faculty/4.jpg",
  },
  {
    id: "Mabood",
    name: "Abdul Mabood",
    subject: "Mathematics",
    department: "Commerce",
    years: 9,
    image: "/faculty/5.jpg",
  },
  {
    id: "Zaid",
    name: "Zaid Farooqui",
    subject: "Indo Islamic",
    department: "Languages",
    years: 11,
    image: "/faculty/6.jpg",
  },
  {
    id: "Saleem",
    name: "Salman Saleem",
    subject: "Social Science",
    department: "entrance",
    years: 10,
    image: "/faculty/7.jpg",
  },
  {
    id: "Anam",
    name: "Anam Tabassum",
    subject: "Business Studies",
    department: "commerce",
    years: 8,
    image: "/faculty/8.jpg",
  },
];
