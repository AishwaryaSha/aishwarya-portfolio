export interface EducationItem {
  qualification: string;
  institute: string;
  score: string;
  year: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  duration: string;
  achievements: string[];
}

export const education: EducationItem[] = [
  {
    qualification: "B.Tech in Computer Science & Engineering",
    institute: "PES University, Bengaluru",
    score: "8.84 CGPA",
    year: "2023 – 2027",
  },
  {
    qualification: "Senior Secondary (CBSE)",
    institute: "Mayoor School, Ajmer",
    score: "93.8%",
    year: "2023",
  },
  {
    qualification: "Secondary (CBSE)",
    institute: "Mayoor School, Ajmer",
    score: "96.6%",
    year: "2021",
  },
];

export const leadership: LeadershipItem[] = [
  {
    role: "Operations Team Member",
    organization: "ACM, PES University",
    duration: "2024 – Present",
    achievements: [
      "Organized two 18-hour hackathons.",
      "Managed end-to-end operations for over 250 participants.",
    ],
  },
  {
    role: "CCA Captain",
    organization: "Mayoor School, Ajmer",
    duration: "2022 – 2023",
    achievements: [
      "Led planning and execution of 10+ inter-school and intra-school events.",
      "Coordinated activities involving more than 200 participants.",
    ],
  },
  {
    role: "Student Editor",
    organization: "Editorial Board, Mayoor School",
    duration: "2021 – 2023",
    achievements: [
      "Led a 10-member editorial team.",
      "Published eight editions of the school magazine.",
    ],
  },
];