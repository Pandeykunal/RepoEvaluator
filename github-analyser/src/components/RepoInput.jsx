import { useState } from "react";

function RepoInput({ onAnalyze, loading }) {
  const [url, setUrl] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Paste GitHub repository URL (e.g. https://github.com/facebook/react)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={() => onAnalyze(url)} disabled={loading}>
        {loading ? "Analyzing repository..." : "Analyze Repository"}
      </button>
    </div>
  );
}

export default RepoInput;
