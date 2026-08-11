export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "SQL",
      "C",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Apache Spark",
      "Hadoop",
      "Kafka",
      "Streamlit",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "MySQL",
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
      "Distributed Systems",
      "Machine Learning",
      "Big Data",
    ],
  },
];