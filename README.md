# MindCanvas v9 with OneNote Live Notes

GitHub update for the existing CODEFORSUCCESS deployment.

## Existing services unchanged
- Same Supabase project and `dsa_workspaces` JSON payload
- Same Supabase authentication and RLS
- Same Vercel project and Supabase environment variables

## New OneNote functionality
- Read-only Microsoft OneNote connection through delegated Microsoft Graph `Notes.Read`
- Browse 50 recently modified OneNote pages
- Select exact headings, paragraphs, list items, and table cells
- Connect selected OneNote blocks to a pattern or canonical question
- Several OneNote selections per entity
- The same OneNote page can supply different blocks to different questions
- Cached note text remains visible between refreshes
- Manual refresh retrieves current content
- Open the source page in OneNote
- Disconnecting does not modify OneNote

Follow `SETUP_ONENOTE.md`. A Microsoft Entra SPA registration is required; no client secret is used.
