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
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-neutral-500">
            Project image coming soon
          </div>
        )}
      </div>

      {/* Project Details */}
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
          <Link
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            <Code2 size={18} />
            GitHub
          </Link>

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-2"
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