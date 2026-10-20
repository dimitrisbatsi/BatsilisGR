# CLAUDE.md

Working notes for Claude Code sessions on batsilis.gr.

## Stack

- Astro 6 (static), Tailwind v4, content collections in `src/content/<collection>/{el,en}/`.
- Greek is the default locale (`/`, `/arthra/<slug>/`); English lives under `/en/` (`/en/blog/<slug>/`).
- Translations pair by identical filename in `el/` and `en/`.
- German (`/de/`) is a home page only, for clients in Germany, Austria and Switzerland: `src/i18n/ui.ts` plus `experience/de/` and `projects/de/`. The author works in Greek and English only, so German pages say so and link to the English articles; there is no `posts/de/`. Keep German copy in step when the home page or those collections change.
- Canonical host: `https://www.batsilis.gr`.
- Before pushing: `npm run check` and `npm run build`.

## Articles

- Every article ships in both `el` and `en`, with `seoTitle` when `title` exceeds 60 characters.
- Diagrams go in `public/images/articles/<name>-{el,en}.svg`. Keep them narrow (~480px wide) so they stay readable on mobile.
- Write reader-first: open with the reader's problem, use the author's experience as proof, close with a self-check and a call to action.
- To refresh an existing article, rewrite it in place (keep the slug and `pubDate`) and set `updatedDate`; it then sorts as recent and emits `dateModified`.
- Open a PR for the author's review; merge only when asked.

## Content rules

- Never invent numbers, clients or results. Use only figures the author supplied.
- Work done for an employer or client is described generically: no company or client names, no internal tool or product names, no unpublished plans.
- Site contact address: `hello@chilistudio.gr`.
- Legal notice and privacy policy live in `src/content/legal/{el,en,de}/notice.md` (`/nomika/`, `/en/legal/`, `/de/impressum/`). The author is the responsible person, not yet registered as self-employed: no street address or VAT ID until registration, then add both to all three files and bump `updatedDate`. Update the privacy section whenever the site adds a third-party service, cookie or form.

## Plain language

- Sales copy (Instagram, LinkedIn hooks, article openings, self-checks and calls to action) uses everyday words a non-technical business owner understands: time, money, mistakes, customers. Describe the effect, not the tool.
- Technical terms (ETL, API, headless, data warehouse) appear only in the body of an article, each explained in a few plain words the first time.

## Content workflow

Every article runs through the same pipeline, in this order:

1. **Article** (el + en) on the site, via PR.
2. **LinkedIn: 2-3 posts** from the article.
3. **Instagram: up to 2 post variations** where the material allows.
4. **Canva graphics** for each Instagram post (one design per post), built on the author's existing Instagram template.

Tone per channel:

- **LinkedIn stays neutral.** The author's employer and colleagues follow it: share lessons, credit the team, no selling, no links to service offers, nothing that reads as competing with or exposing the employer.
- **Instagram is the sales channel.** Symptom-led hooks, plain language, a clear call to action (e.g. a DM keyword).

## Social content

- Instagram is the sales channel: symptom-led carousels (1080×1350), DM calls to action.
- LinkedIn is the reputation channel: knowledge-sharing tone, team credit, no sales calls to action, no links to service offers.
- Social visuals use **Inter** (the site's typeface; full Greek and Latin coverage, available in Canva). Never Poppins, Montserrat or Plus Jakarta Sans: they lack Greek, so Canva swaps Greek text to Arial.
- The author has Canva Pro connected through the Canva MCP connector. Use it for social visuals the author may want to edit (carousels, covers, post images).
