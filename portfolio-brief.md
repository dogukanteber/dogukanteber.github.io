# Portfolio Site Brief: dogukanteber.github.io (custom rebuild)

Hand this whole file to the coding agent. It describes what to build, why, and where the references are.

## 1. Goal

Replace the current Hugo-theme blog at https://dogukanteber.github.io with a fully custom, hand-built personal site for Doğukan Teber, a software engineer who builds things and writes about coding, entrepreneurship, AI, HPC, and life.

The site should feel like a **builder-plus-writer** home page: text-led, calm, fast, and personal. Not a template, not a hero image with a "View my work" button.

## 2. The core pattern (non-negotiable)

1. **Short first-person bio first.** A greeting line ("Hi, I'm Doğukan."), location, then 2–4 short first-person sentences on what I build and write about. Optional one-line "Previously:" credibility line.
2. **Separate, labeled sections for projects and writing.** Each section has a name AND a one-line description of what it contains.
3. **One line per item.** Every project and post is shown as a title plus a one-line hook/description (plus date for posts). No big cards, no thumbnails required.
4. **At most one standout touch.** Everything else stays quiet. Pick one (see section 6) or none for v1.
5. **Readable first.** Narrow content column, generous whitespace, strong typography, works great on mobile, no JS required to read.

## 3. Primary reference

- **https://www.laraavci.com/**: the site I like most. Built with Next.js (App Router) on Vercel (confirmed via `x-powered-by: Next.js` and `server: Vercel` headers and a `/opengraph-image` route).
  - Structure on the home page, top to bottom:
    - "Hi, I'm Lara." (H1)
    - Location ("Munich")
    - A few first-person paragraphs: what she builds, what she writes about, current projects, community roles
    - "Previously: …" one-liner
    - A **"start here"** section linking to path-style pages, each with a one-word label and one-line description:
      - `/builds`: Proof. Live products, private systems, and research sprints.
      - `/notes`: Thinking. Essays, field notes, and things I'm figuring out.
      - `/about`: Backstory. The longer version.
      - `/contact`: Reach out. Who should get in touch and why.
  - Copy this information architecture closely. Do not copy her text or visual assets.

## 4. Supporting references (what to borrow from each)

All URLs were verified live on Oct 20, 2026.

| Site | Stack | Borrow this |
|---|---|---|
| [Paco Coursey](https://paco.me) | Next.js, repo [pacocoursey/paco](https://github.com/pacocoursey/paco) (older Next 12) | Short bio, then Building / Projects / Writing shown side by side with a one-line description under each link, then a "Now" paragraph. Projects and writing get equal weight on one screen. |
| [Emil Kowalski](https://emilkowal.ski) | Next.js | One narrow, quiet column with small section labels (Today → Projects → Writing). Every entry is a title plus a one-line hook. |
| [Lee Robinson](https://leerob.com) | Next.js + MDX, repo [leerob/next-mdx-blog](https://github.com/leerob/next-mdx-blog) | First-person serif bio with a short/long bio toggle. Notes topic list plus a dated blog list. |
| [Maggie Appleton](https://maggieappleton.com) | Astro, repo [MaggieAppleton/maggieappleton.com-V3](https://github.com/MaggieAppleton/maggieappleton.com-V3) | Names each type of writing (Essays / Notes / Patterns / Library) and describes it in one line. Best model for a wide range of topics. |
| [overreacted.io](https://overreacted.io) (Dan Abramov) | Next.js, repo [gaearon/overreacted.io](https://github.com/gaearon/overreacted.io) | Writing list in its purest form: dated titles, each with a one-line subtitle that does the selling. |
| [Julia Evans](https://jvns.ca) | Hugo | All posts grouped by category on one archive page, plus "most recent" at the top. |

Optional "one standout touch" ideas (pick at most one, later):
- [Rauno Freiberg](https://rauno.me): one bold interaction (a large cursor-follow circle) on an otherwise simple page.
- [Julian Garnier](https://juliangarnier.com): the bio appears as chat bubbles with a typing indicator.
- [Lynn Fisher](https://lynnandtonic.com): the home page is styled like a book's table of contents with dotted leaders.
- [Aditya Verma](https://aditya-verma.me): Cmd+K command palette for navigation (Astro, repo [youngcoder45/Personal-Portfolio](https://github.com/youngcoder45/Personal-Portfolio)).

## 5. Information architecture

```
/            Home: bio + "start here" + latest 3–5 posts + 2–4 featured projects
/builds      Projects: title, one-line description, status (live / archived / experiment), links (site, repo)
/notes       Writing: dated list, one-line subtitle per post, filter or group by topic
/notes/<slug> Individual post
/about       Longer backstory (education, LFX mentorship, Summer of HPC, work history, interests)
/contact     Email + socials (GitHub, LinkedIn, X), who should reach out and why
/rss.xml     RSS feed for the writing
```

Suggested writing topics (tags) based on existing posts: `ai`, `engineering`, `goals-and-life`, `entrepreneurship`, `machine-learning`, `hpc`, `open-source`.

Home page layout, top to bottom:

```
Hi, I'm Doğukan.
<city>

<2–4 first-person sentences: what I build, what I write about, what I'm working on now>
Previously: <one line>

start here
  /builds   Proof      <one line>
  /notes    Thinking   <one line>
  /about    Backstory  <one line>
  /contact  Reach out  <one line>

recent notes
  17 Jan 2026  Use AI to Avoid Typing, Not Thinking: <one-line hook>
  10 Jan 2026  Three Mistakes I Keep Making When Setting Goals: <one-line hook>
  ...

footer: GitHub · LinkedIn · X · RSS · © year
```

## 6. Visual direction

- Single narrow column (about 600–680px max width), left-aligned or centered.
- Typography carries the design: one good serif or sans for body (e.g., Inter, Geist, Newsreader, or Source Serif), a monospace accent for path labels like `/notes` and dates.
- Mostly neutral palette (off-white background, near-black text) with one accent color for links and hovers. Dark mode via `prefers-color-scheme` plus a toggle.
- Subtle hover states, no heavy animations. Respect `prefers-reduced-motion`.
- Small section labels in muted color (like Emil Kowalski's site).

## 7. Tech stack

**Recommended: Astro** with content collections, MDX, and Tailwind (or plain CSS).
- Content-first and ships zero JS by default, so it's fast and readable.
- Existing Hugo Markdown posts move over with minimal changes (front matter mapping only).
- Deploys to GitHub Pages with the official `withastro/action` GitHub Action, keeping `dogukanteber.github.io`.

Alternative: **Next.js (App Router) + MDX**, same as laraavci.com, leerob.com, and overreacted.io. Better choice if you want more React interactivity later. Use static export (`output: 'export'`) for GitHub Pages, or deploy on Vercel.

Must-haves regardless of stack:
- Static generation, Lighthouse 95+ on all categories
- Per-page SEO metadata and auto-generated Open Graph images for posts
- RSS feed and sitemap
- Syntax highlighting for code blocks (Shiki), plus math support (KaTeX), since older posts include ML math
- Image optimization for post images
- Accessible: semantic HTML, keyboard navigation, good contrast

## 8. Content migration from Hugo

Source repo: the current Hugo site behind https://dogukanteber.github.io.

Existing posts to migrate (keep the original dates and, if possible, the original URL slugs; add redirects if slugs change):
- 17 Jan 2026: Use AI to Avoid Typing, Not Thinking
- 10 Jan 2026: Three Mistakes I Keep Making When Setting Goals
- 30 May 2023: A Transformative Journey: My Experience as an LFX Mentee
- 24 Nov 2022: Genetic Algorithm
- 09 Oct 2022: Univariate Linear Regression Implementation Using Gradient Descent Algorithm
- 19 Sep 2022: Parallel Programming in OpenFOAM
- 08 Sep 2022: Can You Briefly Explain The Domain Decomposition Method?

Steps:
1. Copy the Markdown files from Hugo's `content/posts` into the new content collection.
2. Map front matter: `title`, `date`, `tags`, `draft`, and add `description` (the one-line hook shown in lists).
3. Convert any Hugo shortcodes to MDX components or plain Markdown.
4. Move images from `static/` and fix their paths.
5. Check that math and code blocks render correctly.
6. Preserve old URLs or add redirects so existing links don't break.

## 9. Content I (Doğukan) still need to provide

- Bio sentences, city, and "Previously:" line
- List of projects for /builds (name, one-liner, status, links)
- One-line descriptions for each existing post
- Socials and contact email
- Longer /about text

The agent should scaffold placeholders clearly marked `TODO` for these instead of making things up.

## 10. Definition of done (v1)

- Home, /builds, /notes, individual post pages, /about, /contact all built and responsive
- All 7 existing posts migrated with working code, math, and images
- RSS, sitemap, OG images, and dark mode working
- Deployed to dogukanteber.github.io via GitHub Actions
- No standout animation yet (optional v2)
