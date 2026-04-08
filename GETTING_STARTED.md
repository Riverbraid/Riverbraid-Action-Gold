# Getting Started (5 minutes)

You don’t need to understand the internals to try Riverbraid.

## Step 1 — Verify the system
Run:
`npm run verify`

You should see:
`OK: Verified`

## Step 2 — Break it (on purpose)
Edit any file (for example README.md), then run:
`npm run verify`

Now you should see a failure. Riverbraid notices changes immediately.

## Step 3 — Restore integrity
Run:
`node run-vectors.cjs snapshot`
This updates the system’s “known good state”.
