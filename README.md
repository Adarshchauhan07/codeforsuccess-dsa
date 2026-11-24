# DSA OS · Milestone 1

A complete GitHub-ready Vite project focused on one reliable learning loop:

`Raw question → UCPBBPOT → forced Yes/No tree → pattern → data structure → invariant → saved attempt`

## Included
- Responsive dashboard for desktop, tablet, and phone
- Five raw sample questions with no pattern tags
- Mandatory UCPBBPOT workspace
- Forced 113-node Yes/No decision tree with 54 validated leaves
- One-step backtracking
- Full reasoning-trail history
- Leaf result with family, pattern, supporting data structure, why-to-choose, and invariant
- User-entered safe operation, complexity, and tests
- LocalStorage persistence
- Attempt history and detail drawer
- JSON backup import/export
- GitHub and Vercel configuration
- Automated structural tests

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

## Test and build

```bash
npm test
npm run build
```

## Replace an existing GitHub repository

1. Back up the current repository.
2. Copy this project's contents into the repository root.
3. Run `npm install`, `npm test`, and `npm run build`.
4. Commit and push.

```bash
git add .
git commit -m "Deploy DSA OS Milestone 1"
git push origin main
```

## Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

No environment variables are required for Milestone 1.

## Storage
All user data is stored in browser LocalStorage under `dsa-os-m1`. Export a JSON backup before clearing browser storage or switching devices.

## Intentional scope
This milestone does not include the full 209-question bank, course pattern library, Supabase, login, spaced revision, or deep analytics. It provides the functioning core learning engine those modules will later use.
