const GITHUB_API = "https://api.github.com";

export interface GitHubProfile {
  public_repos: number;
}

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export async function getGitHubProfile(
  username: string
): Promise<GitHubProfile> {
  const response = await fetch(
    `${GITHUB_API}/users/${username}`,
    {
      next: {
        revalidate: 3600,
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile.");
  }

  return (await response.json()) as GitHubProfile;
}

export async function getRepositories(
  username: string
): Promise<GitHubRepository[]> {
  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated`,
    {
      next: {
        revalidate: 3600,
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch repositories.");
  }

  const repositories =
    (await response.json()) as GitHubRepository[];

  return repositories
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.name.endsWith(".github.io")
    )
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return (
          b.stargazers_count -
          a.stargazers_count
        );
      }

      return (
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
      );
    });
}