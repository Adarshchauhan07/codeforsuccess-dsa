# GitHub-only deployment

1. Export a JSON backup from the current app.
2. In the existing GitHub repository, replace the repository contents with the contents of this folder.
3. Do not change Supabase, SQL, Auth, RLS, environment variables, or the Vercel project.
4. Commit: `Deploy CODEFORSUCCESS v5`.
5. Vercel redeploys automatically.
6. Confirm the sidebar shows `CODEFORSUCCESS v5`, `MASTER LIBRARY`, `MY LEARNING MAP`, and `TOOLS`.
7. If it does not, redeploy the latest commit without build cache and hard-refresh the browser.

The existing `dsa_workspaces.payload` is migrated in memory. Duplicate records are not silently deleted; they appear in Duplicate Review.
