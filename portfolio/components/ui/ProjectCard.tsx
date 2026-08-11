"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
        {project.image &&
        project.image !== "/projects/placeholder.png" ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-2xl border border-white/10 bg-neutral-800" />
            </div>
          </div>
        )}
      </div>

      {/* Project Information */}
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="text-sm text-neutral-500">
            {project.year}
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
            {project.category}
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
            {project.status}
          </span>
        </div>

        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-5 leading-8 text-neutral-400">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3 text-neutral-300">
          {project.highlights.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5">
          {project.github !== "#" && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-neutral-300"
            >
              <Code2 size={18} />
              GitHub
            </Link>
          )}

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-neutral-300"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}