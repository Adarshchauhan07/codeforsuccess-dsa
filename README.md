# MindCanvas v10 Final: Connected Notes

GitHub-only upgrade. Keep the existing Supabase project, `dsa_workspaces` table, RLS, login, users, environment variables, and Vercel project.

## OneNote without Entra
Use OneNote's **Copy Link to Paragraph** or page link, then paste the link into a Connected Note. Add a concise snapshot and optional code snippet so revision content is visible inside MindCanvas. Clicking the link opens the OneNote source. This is intentionally snapshot-based; no Microsoft Graph or Entra permission is required.

## Connected Notes features
- Notes on patterns and canonical questions
- Exact OneNote paragraph/page URL
- Revision snapshot and code snippet
- One reusable note linked to several patterns/questions
- Edit links, link elsewhere, unlink one entity, or delete globally
- Searchable note library from the left toolbar
- Existing JSON payload migration adds `connectedNotes: []`

## Popup and safety behavior
- Every new popup has a visible × button
- Cancel buttons close forms
- Click outside the popup to close
- Escape closes any popup
- Deleting or disconnecting requires confirmation
- Deleting a connected note globally shows the number of affected links

## Deploy
1. Export the current JSON backup.
2. Replace the existing GitHub repository contents with this folder's contents.
3. Commit and push.
4. Do not change Supabase or Vercel settings.
5. Keep Vercel on Vite: `npm install`, `npm run build`, output `dist`.
6. Confirm the UI shows **MindCanvas v10** and the left toolbar shows **📘 Notes**.
