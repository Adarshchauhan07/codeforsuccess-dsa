# CODEFORSUCCESS ClearMap v7

A deliberately simplified replacement UI. It keeps the same Supabase project, `dsa_workspaces` table, login, RLS, users, environment variables, and Vercel project.

## Only three screens
1. **My Mind Map**: the main learning surface. Pattern → subpattern → micro-pattern → question.
2. **Pattern Library**: 832 predefined editable reference nodes. Select whole families and add them to My Map. No manual hierarchy rebuilding.
3. **Questions**: one canonical record per question, linked to multiple patterns.

## Safety
Undo and redo always show a confirmation popup. History is limited to 20 current-session actions. Export a JSON backup before large changes.

## GitHub-only deployment
1. Export a backup from the current app.
2. Replace the contents of the existing GitHub repository with this folder's contents.
3. Commit and push.
4. Do not change Supabase, SQL, Auth, RLS, Vercel variables, or the Vercel project.
5. Keep Vercel on Vite: `npm install`, `npm run build`, output `dist`.
6. Confirm `ClearMap v7` appears after deployment.

## Persistent visual order
Move nodes into the exact visual arrangement you want. Node coordinates, zoom, and pan are stored inside the existing `dsa_workspaces.payload`, so the same mind map reopens in the same order after refresh and on other devices. **Save view** saves immediately; drag/zoom changes also autosave after 850 ms. **Auto arrange** deliberately recalculates and saves a new layout.

## Complete quick-revision notes
All predefined family, subpattern, and micro-pattern nodes now include generated revision notes: core idea, recognition signals, invariant, reusable steps, common pitfalls, complexity, and a 30-second recall line. Personal copies preserve these notes and can be edited without altering the library source.
