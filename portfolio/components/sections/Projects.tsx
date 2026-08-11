"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);

  const others = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="border-t border-white/10 py-24 scroll-mt-20"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Building products that solve real problems."
            description="A selection of projects spanning AI, distributed systems, developer tools and data engineering, with an emphasis on practical impact and thoughtful design."
        />

          <div className="space-y-32">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-32">
            <h3 className="mb-10 text-2xl font-semibold tracking-tight">
              Other Projects
            </h3>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {others.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6"
                >
                  <p className="text-sm text-neutral-500">
                    {project.year}
                  </p>

                  <h4 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h4>

                  <p className="mt-4 text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}