# CLAUDE.md

Working notes for Claude Code sessions on batsilis.gr.

## Stack

- Astro 6 (static), Tailwind v4, content collections in `src/content/<collection>/{el,en}/`.
- Greek is the default locale (`/`, `/arthra/<slug>/`); English lives under `/en/` (`/en/blog/<slug>/`).
- Translations pair by identical filename in `el/` and `en/`.
- Canonical host: `https://www.batsilis.gr`.
- Before pushing: `npm run check` and `npm run build`.

## Articles

- Every article ships in both `el` and `en`, with `seoTitle` when `title` exceeds 60 characters.
- Diagrams go in `public/images/articles/<name>-{el,en}.svg`. Keep them narrow (~480px wide) so they stay readable on mobile.
- Write reader-first: open with the reader's problem, use the author's experience as proof, close with a self-check and a call to action.
- Open a PR for the author's review; merge only when asked.

## Content rules

- Never invent numbers, clients or results. Use only figures the author supplied.
- Work done for an employer or client is described generically: no company or client names, no internal tool or product names, no unpublished plans.
- Site contact address: `hello@chilistudio.gr`.

## Social content

- Instagram is the sales channel: symptom-led carousels (1080×1350), DM calls to action.
- LinkedIn is the reputation channel: knowledge-sharing tone, team credit, no sales calls to action, no links to service offers.
- The author has Canva Pro connected through the Canva MCP connector. Use it for social visuals the author may want to edit (carousels, covers, post images).
