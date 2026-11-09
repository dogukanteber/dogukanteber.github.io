# dogukanteber.github.io

Source code of my [personal website](https://dogukanteber.github.io/), built with [Astro](https://astro.build).

## Frequent commands

```bash
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run todos    # list placeholders that still need real content
```

## Where things live

- `src/site.ts`: bio, email, social links, and topic list
- `src/content/notes/<slug>/index.md`: posts (use `.mdx` for captioned figures via `Figure.astro`; set `math: true` for KaTeX)
- `src/content/builds/<slug>.md`: projects and graveyard postmortems (`status` decides the section, `hideStatus` leaves it out of the build page header, `date` the order, `featured` the "highlighted only" filter on /builds, `milestone` the ★ on /builds, optional `timeline` entries with `date`, `title`, and optional `note` and `lesson`, shown at the end of the build page; failed, killed, and abandoned builds go to `/graveyard/`)
- `src/content/marginalia/<slug>.md`: book notes on `/marginalia/` (`description` is the one-line TL;DR, `date` is when you finished it; see `example-book.md`)

## New post

```bash
mkdir -p src/content/notes/my-post && $EDITOR src/content/notes/my-post/index.md
```

```yaml
---
title: "My Post"
description: "The one-line hook shown in lists, RSS, and the OG image."
date: 2026-10-20
tags: [engineering]
---
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
