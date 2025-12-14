export function calculateScore(data) {
  let score = 0;

  if (data.readmeLength > 500) score += 20;
  if (data.languages.length >= 2) score += 15;
  if (data.size > 500) score += 15;
  if (data.stars > 5) score += 10;
  if (data.forks > 2) score += 10;
  if (data.issues >= 1) score += 10;

  score += 10; // base score
  return Math.min(score, 100);
}

export function generateSummary(score) {
  if (score >= 85)
    return "Excellent project depth and clean codebase.";
  if (score >= 65)
    return "Good project structure but needs some improvements.";
  if (score >= 40)
    return "Basic project with limited documentation and structure.";
  return "Project needs significant improvement.";
}
