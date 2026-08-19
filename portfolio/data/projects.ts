import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Multi-Agent RAG-Based Research Assistant with Source Verification",

    description:
      "A multi-agent research assistant that combines planning, retrieval, verification, summarization and report generation using a Retrieval-Augmented Generation (RAG) pipeline.",

    techStack: [
      "Python",
      "LangGraph",
      "ChromaDB",
      "SentenceTransformers",
      "SQLite",
      "Ollama",
      "Docker",
    ],

    highlights: [
      "Built a LangGraph-based multi-agent workflow for research queries.",
      "Implemented a RAG pipeline supporting PDF, DOCX and TXT documents.",
      "Developed source verification with confidence scoring and citation-backed reports.",
    ],

    github: "https://github.com/AishwaryaSha/sourcelens-ai",

    year: "2026",

    image: "/projects/sourcelens-placeholder.png",

    featured: true,

    status: "Completed",

    category: "AI • RAG",
  },

  {
    title: "Behavioral Analytics for Adaptive Financial Decision Making",

    description:
      "An AI-powered robo-advisor that combines investor profiling, financial forecasting, portfolio allocation and explainable recommendations for personalized investment guidance.",

    techStack: [
      "Python",
      "Machine Learning",
      "NLP",
      "Streamlit",
      "SQLite",
      "LLM",
    ],

    highlights: [
      "Investor risk assessment using structured questionnaires.",
      "Forecasting expected asset returns for portfolio recommendations.",
      "Explainable chatbot with sentiment and panic detection.",
    ],

    github: "#",

    year: "2026",

    image: "/projects/capstone-placeholder.png",

    featured: true,

    status: "In Progress",

    category: "Capstone",
  },

  {
  title: "Dynamic Content Streaming Pipeline",

  description:
    "A distributed real-time streaming system built with Apache Kafka, featuring admin-controlled topic lifecycle governance and persistent metadata management.",

  techStack: [
    "Apache Kafka",
    "Python",
    "Flask",
    "SQLite",
  ],

  highlights: [
    "Built a distributed producer-consumer architecture for real-time content streaming.",
    "Implemented admin-driven topic creation, configuration and lifecycle management.",
    "Developed a Flask-based control plane with persistent metadata storage for topic governance.",
  ],

  github: "#",

  year: "2025",

  image: "/projects/kafka-placeholder.png",

  featured: true,

  status: "Completed",

  category: "Distributed Systems",
},
  {
    title: "Placement Mail Tracker",

    description:
      "AI assistant that automatically extracts, merges and organizes placement opportunities from Gmail into a structured dashboard.",

    techStack: [
      "Python",
      "Streamlit",
      "SQLite",
      "Ollama",
      "Gmail API",
    ],

    highlights: [
      "Automatic email parsing.",
      "Duplicate opportunity merging.",
      "Dashboard for placements and hackathons.",
    ],

    github: "#",

    year: "2026",

    image: "/projects/placeholder.png",

    featured: false,

    status: "Completed",

    category: "Automation",
  },

  {
    title: "AI Data Copilot for Automated Data Cleaning & Analysis",

    description:
      "AI-powered assistant for cleaning datasets, performing statistical analysis and generating explainable insights.",

    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
    ],

    highlights: [
      "Advanced data cleaning.",
      "Interactive analysis dashboard.",
      "LLM-assisted dataset exploration.",
    ],

    github: "#",

    year: "2025",

    image: "/projects/placeholder.png",

    featured: false,

    status: "Completed",

    category: "Data Science",
  },

  
];