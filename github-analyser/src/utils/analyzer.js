export function generateRoadmap(data, score) {
  const roadmap = [];

  if (data.readmeLength < 300)
    roadmap.push("Improve README with setup and usage instructions");

  if (data.languages.length < 2)
    roadmap.push("Expand project with additional technologies");

  if (data.issues === 0)
    roadmap.push("Use GitHub issues for better tracking");

  if (score >= 85)
    roadmap.push("Add automated tests and consider open-source contribution");

  return roadmap;
}
