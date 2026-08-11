import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  GitBranch,
  Star,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { github } from "@/data/github";
import {
  getGitHubProfile,
  getRepositories,
} from "@/lib/github";

export default async function GitHub() {
  const profile = await getGitHubProfile(
    github.username
  );

  const repositories = await getRepositories(
    github.username
  );

  const totalStars = repositories.reduce(
    (total, repo) =>
      total + repo.stargazers_count,
    0
  );

  const languages = Array.from(
    new Set(
      repositories
        .map((repo) => repo.language)
        .filter(
          (language): language is string =>
            Boolean(language)
        )
    )
  );

  const latestRepository = [...repositories].sort(
    (a, b) =>
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
  )[0];

  const stats = [
    {
      title: "Repositories",
      value: profile.public_repos,
      icon: BookOpen,
    },
    {
      title: "Total Stars",
      value: totalStars,
      icon: Star,
    },
    {
      title: "Languages",
      value: languages.length,
      icon: Code2,
    },
    {
      title: "Latest Activity",
      value: latestRepository
        ? latestRepository.name
        : "—",
      icon: GitBranch,
    },
  ];

  const featuredRepositories =
    repositories.slice(0, 6);

  return (
    <section
      id="github"
      className="scroll-mt-20 border-t border-white/10 py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="GitHub"
          title="Open source & development activity."
          description="A snapshot of my development activity and selected repositories."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500"
              >
                <Icon
                  size={20}
                  className="mb-6 text-neutral-500"
                  aria-hidden="true"
                />

                <p className="truncate text-2xl font-bold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h3 className="text-2xl font-semibold">
              Featured Repositories
            </h3>

            <Link
              href={github.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white sm:inline-flex"
            >
              View profile
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredRepositories.map((repo) => (
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white/10 bg-neutral-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="truncate text-lg font-semibold">
                    {repo.name}
                  </h4>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-neutral-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>

                <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-6 text-neutral-400">
                  {repo.description ??
                    "No description available."}
                </p>

                <div className="mt-6 flex items-center gap-5 text-xs text-neutral-500">
                  {repo.language && (
                    <span>{repo.language}</span>
                  )}

                  <span className="inline-flex items-center gap-1">
                    <Star size={13} />
                    {repo.stargazers_count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href={github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm transition-colors hover:border-neutral-500 hover:bg-white/5"
          >
            Visit GitHub
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}