function AnalysisDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="card">
      <div className="score">
        {result.score} / 100
      </div>

      <p className="summary">
        <b>Summary:</b> {result.summary}
      </p>

      <h3>Personalized Roadmap</h3>
      <ul className="roadmap">
        {result.roadmap.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnalysisDisplay;
