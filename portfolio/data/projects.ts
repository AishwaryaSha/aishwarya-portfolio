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

    image: "/projects/capstone.jpeg",

    featured: true,

    status: "In Progress",

    category: "Capstone",
  },

  {
    title: "AI-Powered Windows System Diagnostics Platform",

    description:
      "Local AI diagnostic platform that continuously monitors Windows system health and provides explainable troubleshooting using RAG.",

    techStack: [
      "Python",
      "SQLite",
      "ChromaDB",
      "Ollama",
      "Plotly",
      "psutil",
    ],

    highlights: [
      "Continuous monitoring of CPU, memory, disk and security metrics.",
      "Historical trend analysis and bottleneck detection.",
      "Evidence-backed diagnostic assistant using local LLMs.",
    ],

    github: "#",

    year: "2026",

    image: "/projects/diagnostics.png",

    featured: true,

    status: "Completed",

    category: "Systems",
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

  {
    title: "Dynamic Content Streaming Pipeline",

    description:
      "Distributed Kafka-based streaming platform with admin-controlled topic governance and real-time messaging.",

    techStack: [
      "Apache Kafka",
      "Python",
      "Flask",
      "SQLite",
    ],

    highlights: [
      "Distributed producer-consumer architecture.",
      "Persistent metadata storage.",
      "Administrative topic lifecycle management.",
    ],

    github: "#",

    year: "2025",

    image: "/projects/placeholder.png",

    featured: false,

    status: "Completed",

    category: "Distributed Systems",
  },
];