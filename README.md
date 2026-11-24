# DSA OS - Direct GitHub Project

Complete standalone Vite project. Upload the **contents** of this folder to the repository root.

## Features
- Course Sheet: 16 families, 98 patterns/subpatterns, representative canonical questions
- Questions appear under every linked pattern with one stable ID and all linked pattern names
- Minimal Choose/Reject rules for every seeded pattern
- Manual Decision Tree with full map, Focus Game, mandatory evidence, editable/add/delete nodes
- Browser true full-screen mode for the tree
- UCPBBPOT reference tab
- Fully editable questions and patterns with colors, notes and future-details fields
- Custom colored personal DSA sheet
- LocalStorage by default
- Optional existing Supabase `dsa_workspaces.payload` cloud persistence, no schema update required when it already exists
- JSON export/import
- Vite/Vercel ready

## Run
```bash
npm install
npm test
npm run dev
npm run build
```

## GitHub replacement
Copy all files into the existing repository root, then:
```bash
git add -A
git commit -m "Replace app with complete DSA OS"
git push origin main
```

## Vercel
Framework: Vite; build `npm run build`; output `dist`.
For cloud sync, preserve `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel.
