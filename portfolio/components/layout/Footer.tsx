import Link from "next/link";
import { ArrowUp } from "lucide-react";

import Container from "./Container";

import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-base font-semibold">
              {profile.name}
            </h3>

            <p className="mt-1 text-xs text-neutral-500">
              Computer Science & Engineering Student
            </p>

            <p className="mt-3 text-xs text-neutral-600">
              © {new Date().getFullYear()}{" "}
              {profile.name}. All rights reserved.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-neutral-500 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 transition-colors hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 transition-colors hover:text-white"
            >
              LinkedIn
            </Link>

            <Link
              href="#"
              aria-label="Back to top"
              className="rounded-full border border-white/10 p-2 text-neutral-500 transition-colors hover:border-neutral-500 hover:bg-white/5 hover:text-white"
            >
              <ArrowUp size={15} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}