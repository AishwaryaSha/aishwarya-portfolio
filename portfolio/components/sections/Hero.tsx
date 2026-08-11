"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-current"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.69-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.1c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-current"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95V21H9V9Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 text-xl text-neutral-300">
            {profile.headline}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium !text-neutral-950 transition hover:bg-neutral-200"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-6 py-3 font-medium transition hover:border-white/30 hover:bg-white/5"
            >
              Resume
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 transition hover:scale-105 hover:text-white"
            >
              <GitHubIcon />
            </Link>

            <Link
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 transition hover:scale-105 hover:text-white"
            >
              <LinkedInIcon />
            </Link>

            <Link
              href={profile.socials.email}
              aria-label="Email"
              className="text-neutral-400 transition hover:scale-105 hover:text-white"
            >
              <Mail size={25} />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}