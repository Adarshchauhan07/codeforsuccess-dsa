# OneNote Live Notes Setup

This release keeps the existing Supabase project, database, RLS, Supabase login, and Vercel variables unchanged. One additional Microsoft Entra app registration is required because private OneNote content cannot be read without Microsoft consent.

## 1. Deploy this GitHub update first

Replace the existing GitHub repository contents with this package and let the current Vercel project deploy it. Keep the existing Vite settings and Supabase environment variables.

After deployment, copy the exact production origin, for example:

`https://your-project.vercel.app`

Do not include a trailing path.

## 2. Register the Microsoft application

1. Open https://entra.microsoft.com/ and sign in with the Microsoft account/tenant that can register applications.
2. Open **Identity > Applications > App registrations**.
3. Select **New registration**.
4. Name: `CODEFORSUCCESS MindCanvas OneNote`.
5. Supported account types:
   - Choose **Accounts in any organizational directory and personal Microsoft accounts** if you may use Outlook.com/Hotmail and work/school accounts.
   - Choose the single-tenant option only if your organization requires it.
6. Select **Register**.
7. Copy the **Application (client) ID**. Do not create or paste a client secret into this browser application.

## 3. Add the SPA redirect URI

1. In the app registration, open **Authentication**.
2. Select **Add a platform > Single-page application**.
3. Add your exact Vercel origin, for example:
   `https://your-project.vercel.app`
4. For local testing, optionally add `http://localhost:5173`.
5. Save.

The URL must exactly match the origin displayed by MindCanvas in the OneNote setup popup.

## 4. Add Microsoft Graph delegated permissions

1. Open **API permissions > Add a permission**.
2. Choose **Microsoft Graph > Delegated permissions**.
3. Add:
   - `User.Read`
   - `Notes.Read`
4. Save.
5. If your work/school tenant blocks user consent, ask an administrator to select **Grant admin consent**. Personal Microsoft accounts can normally consent themselves.

Do not add `Notes.ReadWrite` unless you later want the application to modify OneNote. This build is read-only.

## 5. Connect inside MindCanvas

1. Open the deployed MindCanvas v9.
2. Select **📘 OneNote** in the left toolbar.
3. Paste the Application (client) ID.
4. Select **Connect Microsoft account**.
5. Sign in and accept `User.Read` and `Notes.Read`.

## 6. Connect exact OneNote areas

1. Select a pattern or question in the mind map.
2. Select **📘 Connect OneNote**.
3. Choose a recent OneNote page.
4. Select only the required paragraphs, list items, headings, or table cells.
5. Give the connection a label and save.

The selected areas are cached in the existing Supabase JSON payload. Select **Refresh** on the note card to retrieve the current OneNote text. **Open OneNote** opens the source page.

## Troubleshooting

- `AADSTS50011 redirect URI mismatch`: the Entra SPA redirect URI does not exactly match the MindCanvas origin.
- Consent blocked: your Microsoft 365 administrator must approve the delegated permissions.
- No pages: verify the signed-in Microsoft account owns or can access the notebook.
- Selected block disappears after heavy OneNote restructuring: reconnect the area. The cached last-successful text remains until replaced.
- Popup blocked: allow popups for the Vercel domain.
