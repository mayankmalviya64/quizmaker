# Quizmaker

Quizmaker is a responsive browser-based MCQ test app. It includes a built-in 30-question blockchain quiz and can import quiz data from JSON, TXT, or Markdown.

## Features

- One-question-at-a-time test interface
- 40-second per-question timer with pause/resume
- Timer locks after answering or revealing the solution
- Instant correct/incorrect feedback with explanations and elimination tips
- Collapsible upload and question-progress sidebars
- Correct, wrong, skipped, and marked-for-review states
- Direct question navigation and final score summary
- Retry only incorrectly answered questions
- Light/night mode
- Browser-local source Q&A for the built-in study material

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm ci
npm run build:pages
```

The static output is generated in `github-pages-dist/`.

## Deploy

The included `.github/workflows/pages.yml` workflow deploys automatically whenever code is pushed to the `main` branch. In the repository settings, set **Settings → Pages → Source** to **GitHub Actions**.

The GitHub Pages base path is configured as `/quizmaker/` in `vite.github.config.ts`. Change it if you use a different repository name.

## Quiz import format

```text
Q1. Question text
A) Option one
B) Option two
C) Option three
D) Option four
Answer: B
Explanation: Why B is correct
```
