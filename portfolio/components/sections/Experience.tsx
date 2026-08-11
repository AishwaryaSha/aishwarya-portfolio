"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { education, leadership } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-white/10 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="The syllabus never covered this part."
          description="College taught me the fundamentals. Projects taught me to apply them. Hackathons taught me to move fast. Working with people taught me that solving the problem is only half the job."
        />

        <p className="mb-16 max-w-3xl text-lg leading-8 text-neutral-400">
          These are the experiences that have shaped the person — and
          engineer — I’m becoming.
        </p>

        <div className="grid gap-20 lg:grid-cols-2 xl:gap-28">
          {/* EDUCATION */}

          <div>
            <h3 className="mb-12 text-2xl font-semibold">
              Education
            </h3>

            <div className="relative flex h-full flex-col pl-8 md:pl-10">
              <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

              {education.map((item, index) => (
                <motion.div
                  key={item.qualification}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className={`relative ${
                    index === education.length - 1 ? "" : "mb-8"
                  }`}
                >
                  <div
                    className={`absolute -left-[2.18rem] top-3 h-5 w-5 rounded-full border-4 border-neutral-950 ${
                      index === 0 ? "bg-emerald-400" : "bg-white"
                    }`}
                  />

                  <div
                    className={`min-h-[150px] rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500 ${
                      index === 0
                        ? "border-emerald-400/40 bg-emerald-500/5"
                        : "border-white/10 bg-neutral-900/40"
                    }`}
                  >
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-4xl font-bold tracking-tight text-white">
                          {item.score}
                        </p>

                        <p className="mt-4 text-xl font-semibold">
                          {item.qualification}
                        </p>

                        <p className="mt-3 text-neutral-400">
                          {item.institute}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm text-neutral-500">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* LEADERSHIP */}

          <div>
            <h3 className="mb-12 text-2xl font-semibold">
              Leadership
            </h3>

            <div className="relative pl-8 md:pl-10">
              <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-white via-neutral-500/40 to-transparent" />

              {leadership.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className={`relative ${
                    index === leadership.length - 1 ? "" : "mb-8"
                  }`}
                >
                  <div className="absolute -left-[2.18rem] top-3 h-5 w-5 rounded-full border-4 border-neutral-950 bg-neutral-200" />

                  <div className="min-h-[150px] rounded-3xl border border-white/10 bg-neutral-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <h4 className="text-xl font-semibold">
                          {item.role}
                        </h4>

                        <p className="mt-2 text-neutral-400">
                          {item.organization}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm text-neutral-500">
                        {item.duration}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 text-neutral-400">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />

                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}