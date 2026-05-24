# Personal Site — Design Spec ("The Notebook")

**Date:** 2026-05-24
**Companion to:** `docs/brainstorms/personal-site-wunderkammer-requirements.md`
**Direction:** The Notebook — a working engineer's bound notebook left open on a desk

## Visual thesis

A working engineer's notebook. Off-white paper, faint graph-paper grid, considered hand-set typography, things written in the margins. Quiet, technical, lived-in. The wunderkammer is a *spread* in the notebook; each card route is a deeper *page*. The audience (engineering leaders) recognizes the metaphor because it's their object.

The site is `place`, not `page`. The metaphor does that work — visitors are looking *at* a notebook, not navigating a website.

## Content plan (already decided in requirements)

Home is a grid of 7 cards: bio/intro, resume, contact, now, faster horse, novelty tax, criminal orders. Each card has its own route. Back nav returns to the grid.

## Interaction plan

Three specific motions, no more:

1. **Card hover** — a thin ink underline draws beneath the card's title (SVG stroke animation, ~180ms, ease-out). The card itself does not lift, scale, or shadow; only the underline moves.
2. **Card → route transition** — the clicked card grows in place to fill the screen (Framer Motion `layoutId` shared-element transition, ~320ms, ease-in-out). All other cards fade out simultaneously. Back returns by reversing the transition.
3. **`now` page liveness** — auto-current slots (LA temperature, current season, current GT class, days-since-last-touch) render in marker-pen teal with a single subtle pulse on mount (~600ms, single iteration), signalling "this is live, not typed in."

No scroll-jacking, no parallax, no scroll-linked motion, no hero entrance choreography.

## Type system

**Primary sans:** [IBM Plex Sans](https://www.ibm.com/plex/) — free, designed-for-engineers, distinctive without being trendy. Used for: card titles, navigation, body in route pages.

**Monospace:** [IBM Plex Mono](https://www.ibm.com/plex/) — same family, used for metadata, timestamps, "last updated," code references, the call-numbers on cards (e.g., the small `r-001` style marks).

**Serif (essays only):** [Source Serif 4](https://github.com/adobe-fonts/source-serif) — used inside the three "things I think about" essay routes for long-form reading. Not used on the grid.

**Scale (rem, root = 16px):**

| Token | Size | Use |
|---|---|---|
| `text-xs` | 0.75 | metadata, call-numbers, timestamps |
| `text-sm` | 0.875 | card body, secondary info |
| `text-base` | 1.0 | route body (sans) |
| `text-lg` | 1.125 | card titles |
| `text-xl` | 1.375 | route H2s |
| `text-2xl` | 1.75 | route H1s |
| `text-display` | 2.5 | bio route name treatment only |

Essay routes shift body to Source Serif 4 at `text-lg` (1.125rem) with a line-height of 1.65 and a max-width of ~62ch. Sans stays for the essay's heading.

**Weights:** 400 (regular) and 500 (medium) only. No 700+ — the notebook metaphor doesn't shout.

## Color system

CSS variables, declared once, no per-component hex values.

```css
:root {
  --paper:       #fafaf7;  /* page background */
  --paper-soft:  #f4f3ed;  /* card fill (very subtle against paper) */
  --grid-line:   #e8e7e0;  /* graph paper lines */
  --ink:         #222018;  /* primary text */
  --ink-soft:    #5b574c;  /* secondary text, metadata */
  --ink-faint:   #9a9588;  /* hairlines, deep secondary */
  --marker:      #1f6470;  /* THE accent — used only for "current/live" */
  --marker-soft: #2b8593;  /* hover state of marker only */
  --emphasis:    #b3431f;  /* used ONCE per essay max, for in-text emphasis */
}
```

**Hard rule:** no other colors. No green for success, no red for error, no gradients, no shadows other than the spec'd one for card → route transition.

**Accessibility check:** `--ink` on `--paper` is contrast ratio ~14:1 (AAA). `--ink-soft` on `--paper` is ~5.8:1 (AA). `--marker` on `--paper` is ~5.5:1 (AA).

## Graph paper underlay

The home grid sits on a faint graph-paper background. Implementation: a repeating linear-gradient or SVG, `--grid-line` at 24px intervals (both horizontal and vertical), 1px lines.

**Critical detail:** the grid lines pass *through* the cards. Cards are filled with `--paper-soft` at ~70% opacity so the grid is visible-but-muted underneath them. This is what kills the "dashboard" read — cards aren't floating boxes, they're regions of the same continuous notebook surface.

Inside route pages, the graph paper continues but at half opacity (or is absent for essay routes, where pure reading takes over).

## Grid behavior

CSS Grid, 12-column on desktop, snapping to the 24px graph-paper rhythm. Cards span:

| Card | Desktop span | Notes |
|---|---|---|
| bio/intro | 6 cols × 2 rows | top-left, the "you are here" |
| resume | 6 cols × 2 rows | top-right |
| now | 4 cols × 2 rows | the alive card, prominent |
| faster horse | 4 cols × 1 row | essay row |
| novelty tax | 4 cols × 1 row | essay row |
| criminal orders | 8 cols × 1 row | wider — the most opinionated, gets room |
| contact | 4 cols × 1 row | smallest, bottom-right |

**Asymmetry is intentional.** Don't normalize to a uniform Bento grid — uniformity is what makes Bento read as template. The varied spans give the grid the "notes placed on a page" feel.

Mobile (< 768px): single column, full-width cards, original DOM order. The metaphor still holds — a portrait-format notebook page.

## Card anatomy

Each card on the grid contains:

1. **Call-number** (top-left, mono, `text-xs`, `--ink-faint`) — e.g., `r-001`, `t-003`. Acts as the "filing" marker. Gives the cards the catalog-aware feel.
2. **Title** (`text-lg`, IBM Plex Sans medium, `--ink`) — short, cryptic-friendly.
3. **Optional subtitle / one-line body** (`text-sm`, `--ink-soft`) — a hint, not a summary.
4. **Optional marginalia** — a small hand-drawn SVG arrow, asterisk, or note. Used SPARINGLY (1–2 cards total on the home grid). These are real hand-drawn SVGs, not generated.

No icons (e.g., no resume icon, no envelope on contact). The call-numbers + titles do the wayfinding work.

**No card borders.** Separation comes from spacing + the graph paper continuing underneath. Optionally, a 1px `--ink-faint` hairline rule under the title — to be evaluated in build.

## Marginalia (the load-bearing detail)

The signature element of the design. 2–3 small hand-drawn SVGs placed on the home grid, *not* tied to specific cards. Examples:

- A small arrow pointing from "novelty tax" toward "faster horse" — implying they're related thoughts.
- A small asterisk near the `now` card with the word "current" written next to it.
- A tiny "↓ read these" near the essay row.

These MUST be hand-drawn (Procreate, pen-tablet, even pen-on-paper-scanned-and-traced). Not Figma-perfect, not AI-generated. The point is that they're unforgeable — they're the proof that a human tended this.

You can ship v1 with placeholder marginalia (or none) and add the real ones post-launch.

## Route pages

**Bio (`/bio`):** name in `text-display`, short personal intro in sans `text-base`, max-width ~52ch, generous line-height. Reads like the inside cover of a notebook.

**Resume (`/resume`):** full typeset resume from `olga_nikulina_resume_rewrite.md`. IBM Plex Sans body, Plex Mono for dates/metadata in a left-margin column. Section headings in `text-xl` medium. Single column, max-width ~70ch. A small "download PDF" link in the bottom-right (`--marker`, mono, `text-sm`), not a button.

**Contact (`/contact`):** the existing form re-styled to match — inputs are bottom-border-only (no boxes), `--ink` text, `--marker` focus state, sans labels in mono `text-xs` above each field. Submit is a text link, not a button.

**Now (`/now`):** see liveness rules. Two-column on desktop: auto-current slots on the left, manual slots on the right. "last updated" timestamp in mono `text-xs` at the top in `--ink-soft`. Auto-current values render in `--marker` (the live ink). Manual values render in `--ink`.

**Essay routes (`/think/...`):** Source Serif 4 body at `text-lg`, line-height 1.65, max-width ~62ch. Title in sans `text-2xl` medium above. A small "previous / next essay" link pair at the bottom in mono `text-xs`. NO sidebar, NO ToC, NO author byline. Just the essay.

## Favicon / identity

New favicon: a single hand-drawn (or hand-drawn-feeling) graph-paper square with a small ink mark inside it. Mono, `--ink` on `--paper`. Same square mark appears in the top-left of the home grid as a tiny site mark (replacing any "home" wordmark).

Wordmark: just "olga nikulina" in IBM Plex Sans medium, `text-sm`, all lowercase, mono `--ink`. Lives in the top-left of the home grid, next to the favicon-mark. Not in route pages — route pages have a small "← back" in the top-left instead.

No tagline, no "engineer + lead" subtitle. The bio card does that work.

## Motion library

**Framer Motion** (already React 19 compatible; ~50kb gzip). Used for:

- Shared-element card → route transitions (`layoutId`)
- Liveness pulse on `now` page values
- Underline draw on card hover (this could also be done in pure CSS with stroke animation — to be decided in build)

No other animations, ever.

## Things this design says NO to

- Dark mode (the notebook metaphor is paper; paper is light)
- Hero section
- Carousel, slider, anything that moves on its own
- Logo cloud, social proof, "featured in"
- Stats / counters (10+ years, X projects, etc. — leave that for the resume)
- Decorative gradients, background images, blob shapes
- Multiple accent colors
- Skeleton loaders (the site is small and static; nothing should ever load slowly enough to need one)
- A footer (a notebook doesn't have a footer)
- "Made with React" or any tech-stack signaling

## Litmus checks for this design

- A visitor scanning only card titles + call-numbers can tell what's on the site.
- The home grid is unmistakably *not* a SaaS dashboard.
- If you removed all decoration (graph paper, marginalia, call-numbers), the typography alone would still be considered.
- The `now` page's live slots are visibly distinct from manual ones, without needing a label.
- The site looks like the same person who wrote the three essays designed it.
- Nothing on the site uses a default Inter / system-sans stack.

## Open for build

- Whether card hover underline is CSS or Framer Motion (probably CSS).
- Exact graph-paper opacity / line weight — eyeball in build.
- Whether hairlines under card titles are kept or dropped.
- Exact call-number scheme (r-001 for resume, t-001/002/003 for thoughts, n-001 for now, b-001 for bio, c-001 for contact — or something more interesting).
- Whether route pages should keep the graph paper or drop it for reading focus.
