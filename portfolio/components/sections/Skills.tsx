"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 py-28 scroll-mt-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & Expertise"
          description="Building software across artificial intelligence, data engineering, distributed systems, and modern software development."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-neutral-900/30 backdrop-blur-sm"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`px-8 py-10 sm:px-12 ${
                index !== skillCategories.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <div className="lg:w-72 lg:flex-shrink-0">
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-neutral-950/60 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}