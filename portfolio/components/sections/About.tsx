"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { about } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/10 py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="grid gap-16 lg:grid-cols-[2fr_1fr]"
        >
          <div>
            <SectionHeading
              eyebrow={about.title}
              title="Curious by default. Builder by choice."
              description="I like understanding how things work — and then figuring out how to make them work better."
            />

            <div className="space-y-7">
              {about.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-neutral-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {about.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6"
              >
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  {item.title}
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}