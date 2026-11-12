# CODEFORSUCCESS Final DSA Knowledge Graph

## Included
- 692 editable nodes across 32 DSA pattern families, subpatterns, and micro-patterns
- Zero preloaded questions; add your own and link each to multiple patterns
- Email/password Supabase login for the same account on phone, PC, and tablet
- Add/edit/move/archive/restore patterns and questions
- Undo/redo, recycle bin, JSON import/export
- Pattern, question, topic, level, revision, search, progress, and recall views
- Supabase RLS-protected per-user workspace
- Vercel-ready static site and serverless config endpoint

## Setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in SQL Editor.
3. Authentication > Providers > Email: enable Email provider and signups.
4. Authentication > URL Configuration: set Site URL to your Vercel URL and add `https://YOUR-PROJECT.vercel.app/**` as Redirect URL.
5. Push this folder's contents to a GitHub repository.
6. Import that repository into Vercel using Framework Preset `Other`. Leave build/output commands empty.
7. Add Vercel environment variables `SUPABASE_URL` and `SUPABASE_ANON_KEY` for Production, Preview, and Development.
8. Deploy or redeploy.
9. Create an account, confirm the email, and sign in on every device with the same credentials.

Never expose the Supabase service-role key.


## Graph and JSON hierarchy views
- Graph View renders live Pattern Family → Subpattern → Micro-pattern → Question branches.
- Linked questions appear directly below every pattern node and open the same editable recall card.
- Search, depth controls, expand/collapse, and editing are supported.
- JSON Tree creates a live nested export with `children` and `questions` arrays.
- A question linked to multiple patterns appears beneath every linked pattern while remaining one canonical question record.

## Incremental update in this release
This package is an in-place update of the previous Final Graph release. It keeps the same Supabase table, authentication, environment variables, and JSON workspace schema. No new SQL migration is required.

### New pattern revision features
- Every pattern, subpattern, and micro-pattern can store: core idea, recognition signals, reusable steps, invariant, pitfalls, typical complexity, and revision status.
- Pattern Review view supports search, status filters, random revision, pass/fail recall, and automatic next-review dates.
- Failed recall schedules tomorrow; passed recall schedules seven days later and advances the status toward mastered.

### Aggregate counts
- `direct` means questions linked directly to that exact node.
- `total` means unique questions linked anywhere in that node's complete descendant branch.
- A question linked to two micro-patterns under the same parent is counted only once in the parent's total.
- Solved counts and mastery percentages are also calculated uniquely.

### Existing GitHub deployment update
Replace only `app.js`, `style.css`, and `README.md` in the existing GitHub repository. Do not overwrite `seed.js`, do not rerun `supabase/schema.sql`, and do not change the Vercel environment variables. Commit the three changed files; Vercel will deploy the update while the existing Supabase payload remains intact.
