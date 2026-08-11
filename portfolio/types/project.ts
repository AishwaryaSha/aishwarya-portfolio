export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];

  github: string;
  live?: string;

  year: string;

  image: string;

  featured: boolean;

  status?: "Completed" | "In Progress";

  category?: string;
}