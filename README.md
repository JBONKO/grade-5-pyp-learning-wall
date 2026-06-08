# A Learning Wall That Worked

A clean, responsive documentation site for a Grade 5 PYP Exhibition learning
wall. Built with **Next.js + TypeScript + Tailwind CSS**. No CMS, no database —
all the words live in plain files you can edit.

---

## 1. Run it locally

You need **Node.js 18.17 or newer** (Node 20 LTS recommended).
Don't have Node? Install it from <https://nodejs.org> (the "LTS" download), then
reopen your terminal.

From this folder:

```bash
npm install      # first time only — downloads dependencies
npm run dev      # start the local dev server
```

Then open **http://localhost:3000**. Edits you make to files show up instantly.

To check the production build:

```bash
npm run build
npm run start
```

---

## 2. Where to edit the words

**All page text lives in `src/data/`.** You almost never need to touch the
components. Each file is commented.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Site title, the nav menu, the footer line |
| `src/data/home.ts` | The home page (hero, intro, three shifts, cards) |
| `src/data/why.ts` | The "Why the Wall" page |
| `src/data/journey.ts` | The week-by-week journey (also feeds the timeline) |
| `src/data/artifacts.ts` | The 14 wall artifacts |
| `src/data/groups.ts` | The 6 group actions |
| `src/data/reflections.ts` | The "What Changed" page |
| `src/data/resources.ts` | The downloadable resources |

Change a string, save, and the site updates. To add an item (say, a new
artifact), copy one object in the array and edit it.

---

## 3. Where to put photos

Put real photos in **`public/images/`** using the exact filenames listed in
`public/images/README.md`. The moment a file exists, its placeholder on the site
is replaced — no code change required.

Downloadable PDFs go in **`public/files/`** (see `public/files/README.md`).

---

## 4. Project structure

```
src/
  app/                 # one folder per page (Next.js App Router)
    page.tsx           # Home
    why-the-wall/
    journey/
    artifacts/
    group-actions/
    what-changed/
    resources/
    layout.tsx         # shared shell (Header + Footer)
    globals.css        # colours + paper texture
  components/           # reusable building blocks
    Header, Footer, Hero, Timeline, ArtifactCard,
    WeekSection, GroupActionCard, ReflectionBlock, ImagePlaceholder, ...
  data/                 # all editable content (see section 2)
public/
  images/               # your classroom photos
  files/                # your downloadable PDFs
tailwind.config.ts      # the colour palette + fonts
```

---

## 5. Changing colours and fonts

- **Colours:** edit the palette at the top of `tailwind.config.ts`
  (deep teal, mustard, clay, cream, etc.). Change a hex value and the whole
  site retunes.
- **Fonts:** the site uses system fonts (Georgia for headings, your system sans
  for body) so it loads instantly and works everywhere, including where Google
  Fonts is slow or blocked. To use a custom font later, add it with
  [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
  in `src/app/layout.tsx` and update `fontFamily` in `tailwind.config.ts`.
- **Paper texture:** the subtle grain is set on `body` in
  `src/app/globals.css`. Lower the `opacity` value to flatten it, or delete the
  `background-image` line to remove it.

---

## 6. Deploy to Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to <https://vercel.com>, sign in with GitHub, and click **Add New →
   Project**.
3. Pick the repo. Vercel detects Next.js automatically — just click **Deploy**.
   No settings to change.
4. You get a live URL. Every time you push to GitHub, the site redeploys.

Prefer the terminal? Install the CLI with `npm i -g vercel`, then run `vercel`
from this folder and follow the prompts.

---

## 7. Notes

- The site is fully static — fast to load and cheap (free) to host.
- It's mobile-first and responsive; the nav collapses to a menu on small
  screens.
- Nothing depends on an external service, so it keeps working offline once
  installed.
