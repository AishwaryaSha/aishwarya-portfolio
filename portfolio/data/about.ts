export interface AboutHighlight {
  title: string;
  value: string;
}

export const about = {
  title: "About",
  description: [
    "I’m Aishwarya, a Computer Science & Engineering student who enjoys turning ideas, messy problems and too many browser tabs into things that actually work. My interests sit at the intersection of software engineering, AI, data and distributed systems, but what really keeps me hooked is the process of building something from scratch and seeing it come alive.",
    "I’m naturally curious and slightly obsessed with asking “but why?” — whether I’m designing a system, debugging code, exploring a new technology or working on a project that doesn’t have a straightforward answer.",
    "This website is my walking resume — a little more human than a PDF, and hopefully a little more interesting too. Explore around to see what I’ve built, what I’ve learned, and where I’m headed next.",
  ],
  highlights: [
    {
      title: "Education",
      value: "B.Tech in Computer Science & Engineering",
    },
    {
      title: "What Drives Me",
      value: "Curiosity, problem-solving & building things from scratch",
    },
    {
      title: "Areas I Explore",
      value: "AI • Software Engineering • Data • Distributed Systems",
    },
  ] as AboutHighlight[],
};