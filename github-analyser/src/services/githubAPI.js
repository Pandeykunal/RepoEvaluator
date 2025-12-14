export async function fetchRepoData(repoUrl) {
  const parts = repoUrl.replace("https://github.com/", "").split("/");
  const owner = parts[0];
  const repo = parts[1];

  const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!repoRes.ok) throw new Error("Repo not found");
  const repoData = await repoRes.json();

  const langRes = await fetch(repoData.languages_url);
  const languages = await langRes.json();

  let readmeLength = 0;
  try {
    const readmeRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers: { Accept: "application/vnd.github.v3.raw" } }
    );
    const readmeText = await readmeRes.text();
    readmeLength = readmeText.length;
  } catch {}

  return {
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    issues: repoData.open_issues_count,
    size: repoData.size,
    languages: Object.keys(languages),
    readmeLength,
    description: repoData.description,
  };
}
