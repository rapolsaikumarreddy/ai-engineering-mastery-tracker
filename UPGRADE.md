# Upgrade your existing GitHub Pages tracker (keep progress)

This package is based on the earlier cloud tracker and keeps the same week numbers (1–52), local storage key (`ai-engineering-mastery-v1`), Supabase tables (`tracker_weeks`, `tracker_settings`), row fields, and authentication/sync logic. No database migration is needed.

## Safest upgrade

1. Open your existing tracker and click **Export backup**. Save the JSON somewhere private.
2. On GitHub, download your current `config.js` or copy its contents privately. **Do not post your OAuth Client Secret or Supabase service-role key.**
3. Replace the repo files with the contents of this package **except `config.js`**. Keep your existing working `config.js`. Make sure the new `curriculum-details.js` is uploaded to the repo root.
4. Commit to `main`, and wait for the GitHub Pages deployment in **Actions** to succeed.
5. Hard refresh the website. Sign in with GitHub, verify a few existing hours/notes, then expand Week 1 to check the five learning sections.
6. Make a small test edit and wait for **Synced to cloud**. Verify on another device/browser before relying on it.

Do not press **Sync now** during this check: the existing button replaces cloud progress with local data. Export a backup before imports, resets, or manual full sync.

## For a new repository

Set up Supabase and GitHub OAuth following README.md, create `schema.sql` tables, and edit `config.js` with your project URL and publishable key. Never put OAuth client secrets or service-role keys in a public repo. Deploy root folder using GitHub Pages.

## Curriculum model

Every week allocates 4h Learn, 4h Practice, 6h Build, 3h Validate, 1h Reflect (18h total). The resource is a reference for selected topics, not a requirement to finish a long video/course. Completion requires independent code, tests/benchmarks, evidence, and a reflection. All 52 weeks have distinct exercises and objective validation criteria. The 36-week core is followed by a 16-week optional advanced specialization.

## Notes

Existing progress is keyed by week number. Week 1's title is corrected, but no weeks were reordered, preserving the meaning of previously recorded progress. There is no new database schema. Current sync conflict behavior is unchanged.
