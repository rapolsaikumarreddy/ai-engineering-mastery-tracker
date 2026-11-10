# AI Engineering Mastery Tracker — GitHub login + cloud progress

A static, GitHub Pages-compatible 52-week AI Engineering curriculum (36-week core + 16-week advanced), with progress, study hours, portfolio evidence, notes, and quality gates. **Supabase Auth (GitHub OAuth) + Postgres** stores progress per signed-in user, protected by Row Level Security (RLS). Browser localStorage remains a fallback and export/import JSON backups remain available. Signing out clears the visible local state on this device (not the cloud data).

## Deployment (about 20–40 minutes)

### 1. Create Supabase database

1. Create a project at https://supabase.com/dashboard.
2. Open **SQL Editor**, paste all of `schema.sql`, and run it. This creates `tracker_weeks`, `tracker_settings`, update timestamps, and per-user RLS policies.
3. In **Project Settings → API** (or **Connect** depending on UI), copy the **Project URL** and the **publishable/anon key**. **Never use a `service_role` or secret key in the website.**
4. Open `config.js` and replace the two placeholders with your project URL and publishable/anon key. These values are public; the database is protected by RLS, not by hiding the publishable key.

### 2. Configure GitHub OAuth

1. In Supabase **Authentication → Providers → GitHub**, enable GitHub. Supabase will display a callback URL such as `https://YOUR-PROJECT.supabase.co/auth/v1/callback`.
2. In GitHub **Settings → Developer settings → OAuth Apps → New OAuth App**, create an app. Set the **Homepage URL** to your deployed GitHub Pages URL and the **Authorization callback URL** to the Supabase callback URL (NOT your Pages URL).
3. Copy GitHub's **Client ID** and **Client Secret** into Supabase's GitHub provider configuration. Keep the secret in Supabase, never in `config.js` or GitHub Pages.
4. In Supabase **Authentication → URL Configuration**, set **Site URL** to your GitHub Pages URL and add your exact Pages URL (including trailing slash) to **Redirect URLs**. Example: `https://USERNAME.github.io/REPO/`.

### 3. Deploy on GitHub Pages

1. Create a new public GitHub repository, e.g. `ai-engineering-mastery-tracker`.
2. Upload the **contents** of this folder to the repository root (`index.html`, `app.js`, `sync.js`, `data.js`, `styles.css`, `config.js`, `schema.sql`, `README.md`).
3. Open **Settings → Pages → Build and deployment → Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Visit `https://USERNAME.github.io/REPO/`, select **Sign in with GitHub**, and authorize the app.
5. On first login, the app asks whether to upload existing local progress or load existing cloud progress. Choose carefully and export a backup before switching devices.

For local testing, use an HTTP server (not `file://`): `python3 -m http.server 8000`. Add `http://localhost:8000/` to Supabase Redirect URLs for local OAuth testing. The GitHub OAuth app callback stays the Supabase callback URL.

## How syncing works

- Editing a week (status, hours, evidence, notes, gate) automatically saves to browser localStorage and, when signed in, upserts **that week** to Postgres after a short debounce. Study-hour target is saved separately.
- The cloud is loaded at sign-in. If both local and cloud data exist and differ, a prompt lets you choose which complete dataset to keep. **Replacing cloud data is destructive**, so export backups first.
- **Sync now** pushes the current entire local snapshot to the cloud; this overwrites cloud state, including deletions. Use only when you want this device to be authoritative.
- Import and Reset also replace cloud data while signed in. The Reset button still requires two confirmations.
- If the network fails, local changes remain on the device. The status indicator reports a sync failure. Reconnect and use **Sync now** to retry.
- Different weeks edited on separate devices normally sync independently, but **simultaneous edits to the same week are last-write-wins**. This is not real-time collaborative editing. Reload/sign in on the second device before editing to get its latest cloud state.
- No GitHub repository write access is requested. GitHub is used only to sign in; your study data is stored in your Supabase database.

## Security and limitations

- `schema.sql` enables RLS and policies that require `auth.uid() = user_id` for reads and writes. Test with two different GitHub accounts before sharing the app.
- Only use the **publishable/anon key** in frontend code. Keep GitHub OAuth secret in Supabase.
- OAuth requires a correctly configured HTTPS Pages origin (or localhost for development).
- Supabase free-tier quotas, inactivity policies, and availability can change. This implementation has not been tested against a live Supabase project; complete the end-to-end login and cross-device checklist below.
- This site uses Supabase JS from jsDelivr CDN. Internet connectivity is required for authentication and cloud sync.
- Local browser data is not encrypted at rest. Avoid placing secrets or sensitive incident logs in notes.

## Acceptance checklist

- [ ] Login with GitHub returns to the deployed Pages URL.
- [ ] Complete Week 1, add 2.5 hours, evidence URL, notes, and save.
- [ ] Reload the page and confirm data persists.
- [ ] Sign in on a different browser/device and verify Week 1 and study-hour target are restored.
- [ ] Update Week 2 on the second device, reload the first device, and verify it appears.
- [ ] Sign in with a *different* GitHub account; confirm it cannot see the first account's records.
- [ ] Export a JSON backup and import it successfully.
- [ ] Disconnect from network, edit a week, reconnect, use **Sync now**, and verify on another device.

## Files

- `index.html`, `styles.css`: UI
- `data.js`: curriculum
- `app.js`: local tracker state, backup, progress UI
- `sync.js`: OAuth, Supabase read/write, sync status
- `config.js`: public Supabase connection settings
- `schema.sql`: database tables and RLS policies
