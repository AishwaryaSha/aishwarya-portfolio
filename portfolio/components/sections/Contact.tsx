import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/10 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful together."
          description="Whether it's an internship, research opportunity, collaboration, or simply a conversation about technology, I'd be happy to connect."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-white/10 bg-neutral-900/30 px-8 py-12 sm:px-14 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <h3 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              Open to Software Engineering & AI Opportunities
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              I'm currently seeking internship and full-time
              opportunities where I can contribute, learn, and
              grow while building impactful software.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={profile.socials.email}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium !text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                <Mail size={18} />
                Email Me
              </Link>

              <Link
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium transition-colors hover:border-neutral-500 hover:bg-white/5"
              >
                Resume
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-7 text-sm text-neutral-500">
              <Link
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                GitHub
              </Link>

              <Link
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </Link>

              <Link
                href={profile.socials.email}
                className="transition-colors hover:text-white"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
