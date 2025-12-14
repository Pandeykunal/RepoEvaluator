# RepoEvaluator

RepoEvaluator is a simple web app that helps analyze public GitHub repositories.  
You paste a repository link, and it gives you a score, a short summary, and some suggestions on how the project can be improved.

I built this project to understand how real-world projects are evaluated and how basic engineering signals can be used to judge code quality.

---

## What does it do?

- Takes a **public GitHub repository URL**
- Analyzes basic repository details
- Shows:
  - Overall score
  - Short project summary
  - Improvement roadmap

The focus is on **clarity and usefulness**, not complex AI claims.

---

## How it works (simple explanation)

1. User enters a GitHub repo URL  
2. The app fetches repository data using GitHub’s public API  
3. It checks things like:
   - README length
   - Number of languages used
   - Repository size
   - Stars, forks, and issues
4. Based on these checks, a rule-based score is calculated
5. Results are shown in a clean UI

All logic is transparent and easy to understand.

---

## Tech Stack

- React (Create React App)
- JavaScript
- CSS (custom styling and small animations)
- GitHub Public REST API

---

## Example repositories to test

You can try the app with:

- https://github.com/facebook/react
- https://github.com/vercel/next.js
- https://github.com/axios/axios

---

## Limitations

- Only works for **public GitHub repositories**
- GitHub API rate limits apply
- Does not do deep code-level analysis

These limitations are acceptable for this demo and were kept intentionally to keep the project simple.

---

## Why no backend?

This version is frontend-only to keep the project lightweight and easy to understand.  
In a real production system, the GitHub API logic and authentication would be moved to a backend for better security and scalability.

---

## Future Improvements

- Add a backend to handle GitHub API requests
- Improve scoring logic
- Cache results to reduce API calls
- Add deeper file and commit analysis

---

## Author

Built by **[Your Name]**  
B.Tech Student  
GitGrade Hackathon Submission
