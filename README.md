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
