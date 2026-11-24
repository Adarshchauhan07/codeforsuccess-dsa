# DSA Learning OS - Final Integrated Project

GitHub/Vercel-ready Vite app implementing Milestones 1-5.

## Included
- UCPBBPOT forced 113-node Yes/No decision tree with 54 validated leaves
- Canonical course Question Bank and Pattern Library imported from the previous sheet
- Many-to-many Pattern ↔ Question linking by stable IDs
- Recognition-record history and mastery scoring across recognition, derivation, implementation, and transfer
- Today dashboard with pattern coverage and due reviews
- Local-first persistence, JSON import/export
- Optional Supabase email auth and cloud sync using one JSON workspace row
- Spaced revision intervals: 1, 3, 7, 14, or 30 days based on self-rating
- Transfer Training with random blind questions
- Analytics for question coverage, pattern coverage, family mastery, and frequently failed decision gates
- Editable pattern choose/reject/invariant/data-structure fields
- Notes and external note link on each question
- Responsive desktop, tablet and phone UI

## Local setup
```bash
npm install
npm test
npm run dev
```

## Local-only mode
No configuration is required. Data is stored under browser key `dsa-os-final`.

## Supabase cloud mode
1. Create or reuse a Supabase project.
2. Run `supabase.sql` in the SQL Editor. If `dsa_workspaces` already exists with `user_id`, `payload`, and `updated_at`, do not recreate it; ensure equivalent own-row RLS policies exist.
3. Copy `.env.example` to `.env` and enter the project URL and anon key.
4. Enable Email authentication in Supabase Authentication.
5. Restart Vite or redeploy Vercel.

Cloud environment variables:
```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

## Vercel
- Framework: Vite
- Install: `npm install`
- Build: `npm run build`
- Output: `dist`
- Add both Supabase environment variables if cloud mode is required

## Replace an existing GitHub repository
Back up the repository and export application data first. Copy the contents of this folder into the repository root, then:
```bash
npm install
npm test
npm run build
git add .
git commit -m "Deploy integrated DSA Learning OS"
git push origin main
```

## Data model
One workspace payload stores families, patterns, canonical questions, recognition attempts, revision records, transfer sessions, settings, and cloud metadata. Stable IDs preserve history when course placement changes.
