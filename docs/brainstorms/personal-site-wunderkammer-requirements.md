# Personal Site — Wunderkammer Rebuild

**Date:** 2026-05-24
**Status:** Requirements captured, ready for design + planning
**Scope:** Deep — product (full restart of the personal site, new product shape)

## Context

The existing resume site (`src/`, built on React + TypeScript + Vite) is functional but conventional and unremarkable. The owner — a senior full-stack engineer / team lead with 10+ years of experience, including leadership work at NuORDER by Lightspeed and a Georgia Tech MS in Computer Science in progress — wants to rebuild it as something more interesting.

This is **not a job-search site.** It's a personal-craft site: a place on the internet that reflects the owner's taste and thinking, intended for an audience of engineering leaders who might land on it from LinkedIn or a referral. There is no conversion goal. The bar is "a site worth visiting and worth tending."

The existing `src/` approach will be discarded. The React + TypeScript + Vite stack stays.

The full updated resume content lives in `olga_nikulina_resume_rewrite.md`.

## Product shape

A **wunderkammer**: a single dense grid of small cards on the home page, no hero section, no scroll-jacking. Each card is its own considered thing. Clicking a card opens its own route with the full content. The grid is the place; the routes are the rooms off it.

The site reads in ~5 seconds for a hurried visitor (the grid is the entire surface) and rewards 5+ minutes for a curious one (each card is a real artifact).

The site should feel like the work of someone with taste, not a portfolio template with a personality skin. The visual identity is deferred to the `ce-frontend-design` skill; this document specifies structure and content, not look.

## Primary audience

Engineering leaders evaluating the owner for senior or lead-level work — even though this site exists for craft, not for the search. They are the imagined reader. The site should reward their attention without performing for them.

## V1 card set

Seven cards on the home grid:

1. **Bio / intro** — a short, considered personal intro. Not a "professional summary." Voice should sound like a person, not a LinkedIn profile.
2. **Resume** — the full resume, sourced from `olga_nikulina_resume_rewrite.md`. The card on the grid is small; the route is the full document, well-typeset.
3. **Contact** — reuses the existing contact form. The card on the grid is a small affordance; the route is the form.
4. **Now** — a "what I'm up to right now" page, designed to be staleness-resistant (see Now-page design below).
5. **Faster horse** — short essay card. "On wanting vs. asking" — the importance of understanding what users actually need rather than what they literally request.
6. **The novelty tax** — short essay card. "When new tech is worth the timeline cost" — on the discipline of choosing whether to adopt novel tooling on client work.
7. **Don't follow criminal orders** — short essay card. On engineering ethics and the line between executing requirements and being complicit.

The three essay cards are the differentiator. They are opinionated, senior in voice, and unmistakably the owner's. Card titles on the grid should be short and slightly cryptic — they reward the curious and filter the scanner, reinforcing the "place not page" feel.

## Card → route behavior

- Each card on the grid is a small surface (title + maybe a one-line subtitle or visual hint).
- Clicking a card navigates to that card's own route: `/bio`, `/resume`, `/contact`, `/now`, `/think/faster-horse`, `/think/novelty-tax`, `/think/criminal-orders` (or similar — final URLs are a design/planning call).
- The route page contains the full content of that card, typeset with care.
- Back navigation returns to the grid. The grid is the canonical "home."

## Now-page design

The `now` page is the alive element of the site and the thing that signals *this site is tended*. It has to be staleness-resistant: an obviously-abandoned "now" page is worse than no "now" page at all.

Design constraints:

- A visible "last updated" timestamp.
- Some slots are **auto-current** — no human action needed for them to stay accurate. Candidates: current GT class (computed from date + program calendar), current LA season/weather, days since the site was last touched, current year of the MS program.
- Some slots are **manual** — currently reading, last thing shipped, what I'm thinking about. These can go stale, but the page never *implies* high-frequency updates.
- Wording should be tolerant of time: "this is from ~6 weeks ago" rather than implying daily updates.

The goal is that whether the owner updates it monthly or annually, the page still reads as *intentionally current* rather than *forgotten*.

## Out of scope for v1

- A guestbook, growing leaf/garden, in-browser SQLite toy, or other playful objects. These are candidate *future cards* but not v1.
- An LLM-reactive resume (considered as Approach 4 in brainstorm, rejected for v1: high carrying cost, partial fit to "place" framing).
- A spatial/illustrated room (Approach 1) or terminal/OS wrapper (Approach 2).
- A blog, CMS, or comments system. Essay cards are content-as-code.
- Conversion funnels, recruiter-targeted PDF generation, prominent CTAs.
- Carry-over of the current `src/` component structure. The frontend is a clean rebuild.
- The current leaf favicon / branding. A new visual identity is part of the design phase.

## Outside this product's identity

Even if the site grows over time, it is **not**:

- A job-search funnel.
- A blog with frequent posts and post counts.
- A technical demo site whose primary purpose is to show off interactive engineering work.
- A personal brand vehicle with newsletter signups or audience-building affordances.

If a future addition would push it toward any of those, it belongs on a different site or a different surface.

## Success criteria

The site is successful if:

1. An engineering leader landing on it for the first time gets enough signal in 30 seconds to form a real impression — and that impression is *this person has taste and thinks clearly*.
2. The site is enjoyable enough to tend that the owner returns to add cards or update `now` without it feeling like a chore.
3. After 6 months, the site does not visibly look abandoned, even if the owner has only made minor updates.
4. None of the cards feel like filler. Every card on the grid earns its spot.

## Visual / design direction

**Deferred to the `ce-frontend-design` skill.** The owner is intentionally not pinning down visual references in this document because they're not sure yet — and that's the right thing for the design skill to surface. The design skill should:

- Establish the visual language (typography, color, spacing, motion) that makes "wunderkammer grid" feel like a *place* rather than a dashboard.
- Decide grid layout specifics — uniform cards vs. varied sizes, density, whitespace.
- Establish the typesetting standard for the route pages (especially essays and resume).
- Propose the new visual identity replacing the leaf favicon.

The design skill should treat this document as the brief.

## Open questions for planning / design

- Final routing structure and card-to-URL mapping.
- Whether essay cards on the grid show just a title, or a title + pull quote.
- Whether `now` is a route (`/now`) or an expanding card-in-place. (Working assumption: route, for consistency with other cards.)
- How to source content: are essays Markdown files in the repo, or React components with embedded prose? (Working assumption: Markdown + MDX or similar — keeps the content layer separable from the visual layer.)
- Whether the contact form needs to be re-styled to match the new design language, or remains as-is.

## Risks & assumptions

- **Assumption:** The owner will add 2–3 additional cards over the next 6–12 months (essays, projects, notes). If the card set stays at 7 forever, the wunderkammer reads as static.
- **Risk:** "A grid of cards" without a strong visual identity is just a dashboard. The design phase is load-bearing here — under-investing in it would collapse the concept.
- **Risk:** Three opinionated essay cards in v1 means three essays need to actually exist at launch. Drafting them is real work, not just engineering.
- **Risk:** The `now` page is the site's promise. If the staleness-resistance design doesn't hold up in practice, the alive element becomes a liability.

## References

- `olga_nikulina_resume_rewrite.md` — source content for the resume card.
- Existing `src/` — to be removed, not extended.
- Existing contact form — to be located and assessed during planning (currently somewhere in `src/components/`).
