import { useState } from "react";
import RepoInput from "./components/RepoInput";
import AnalysisDisplay from "./components/AnalysisDisplay";
import { fetchRepoData } from "./services/githubAPI";
import { calculateScore, generateSummary } from "./utils/scoring";
import { generateRoadmap } from "./utils/analyzer";
import "./styles/globals.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [analysisKey, setAnalysisKey] = useState(0); // re-trigger animation

  const analyzeRepo = async (url) => {
    if (!url.trim()) {
      setError("Please enter a valid GitHub repository URL.");
      return;
    }

    if (!url.startsWith("https://github.com/")) {
      setError("URL must be in the format: https://github.com/owner/repo");
      return;
    }

    try {
      setError("");
      setLoading(true);

      const data = await fetchRepoData(url);
      const score = calculateScore(data);
      const summary = generateSummary(score);
      const roadmap = generateRoadmap(data, score);

      setResult({ score, summary, roadmap });
      setAnalysisKey((prev) => prev + 1); // force animation replay
    } catch (err) {
      setError("Failed to analyze repository. Please check the URL or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header style={{ marginBottom: "25px" }}>
        <h1>RepoEvaluator</h1>
        <p style={{ color: "#4b5563", marginTop: "6px" }}>
          GitHub Project Evaluation & Improvement Tool
        </p>
      </header>

      <RepoInput onAnalyze={analyzeRepo} loading={loading} />

      {error && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#fee2e2",
            color: "#991b1b",
            borderRadius: "8px",
          }}
        >
          {error}
        </div>
      )}

      {/* key forces smooth re-animation on every analysis */}
      <AnalysisDisplay key={analysisKey} result={result} />
    </div>
  );
}

export default App;
