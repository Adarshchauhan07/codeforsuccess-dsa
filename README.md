# DSA Sheet Studio v20

GitHub-only replacement. It keeps the existing Supabase project, `dsa_workspaces` table, Supabase login, RLS, environment variables and Vercel project.

## Reference Bank
- Fixed user-supplied order
- Family IDs `F-01...`
- Pattern IDs `P-001...`
- Canonical question IDs `Q-0001...`
- Search, difficulty filter, expand/collapse, Copy ID and Add to Sheet
- Same question is one canonical bank record even when linked to several patterns

## Custom Sheet Studio
- Several named sheets
- Add family/pattern/question by ID
- Add custom family, sub-pattern or question
- Edit, reparent and cascade-delete with confirmation
- Drag nodes freely while unlocked
- Permanent node positions, zoom and pan
- Parent-specific color palettes
- Sticky, Cards, Outline and Glass saved style setting
- Duplicate, rename and delete sheets
- Confirmed Undo and Redo
- PNG export
- Every popup has ×, Cancel, outside-click and Escape close

## Important dataset scope
This build intentionally includes only the consistent content supplied in the conversation: 16 families, 98 named patterns and the 209 canonical questions that had explicit mappings. Missing/contradictory tail rows were not invented.

## Deploy
Replace the existing GitHub repository contents with this folder, commit and push. Keep Vercel as Vite (`npm install`, `npm run build`, output `dist`). Do not change Supabase.
