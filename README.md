# CODEFORSUCCESS v5 GitHub-only update

This release keeps the existing Supabase project, `dsa_workspaces` table, authentication, RLS policies, users, Vercel project, and environment variables.

## What changed
- New visual shell with clearly separated LEARN, MY MAP, and TOOLS sections.
- Full editable pattern library with family, subpattern, and micro-pattern nodes.
- Revision cheat sheets on every pattern node.
- Canonical questions with visible `Q-00001` IDs and multiple pattern links.
- Exact-title duplicate prevention and legacy duplicate consolidation.
- Link an existing question by Q-ID without creating another record.
- Best Tree view with direct count, unique branch count, solved count, and mastery.
- Cytoscape Mind Map with pan, zoom, selection, search/focus, multiple layouts, fullscreen, and PNG export.
- Question inspector showing all connected patterns.
- Confirmed undo/redo. Data is changed only after the user approves the popup.
- Pattern review, revision queue, duplicate review, recycle bin, and UI Studio.
- Five themes and three density modes.

## Deploy
1. Export a JSON backup from the current site.
2. Extract this ZIP and replace the contents of the existing GitHub repository with these files.
3. Commit and push.
4. Vercel must use Framework `Vite`, Build Command `npm run build`, Output Directory `dist`, Install Command `npm install`.
5. Keep the existing `SUPABASE_URL` and `SUPABASE_ANON_KEY` values.
6. Do not run any SQL and do not modify Supabase.
7. Redeploy without cache if necessary.
8. Confirm `CODEFORSUCCESS v5` appears in the sidebar.

## Verification
Run locally with `npm install`, `npm test`, and `npm run build`.

## Workspace separation
Master Library nodes use `workspace: "library"`. Personal nodes use `workspace: "my"`. Use **Copy branch to My Map** to create an independent editable personal copy while preserving the Master Library. Canonical questions remain shared and can link to nodes in either workspace.

## Safe legacy migration
Legacy patterns and questions remain readable from the same JSON payload. Missing/duplicate question numbers are repaired, pattern links are deduplicated, and suspected duplicate titles are shown in Duplicate Review. Records are merged only after explicit confirmation.
