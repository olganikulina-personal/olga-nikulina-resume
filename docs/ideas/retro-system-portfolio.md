# Retro system portfolio

## Problem Statement

How might we make Olga's portfolio immediately legible as the work of a senior
full-stack engineer and team lead who still ships code, while adding a playful
visual cue that is more distinctive than the current notebook grid?

## Recommended Direction

Reframe the site as a **System Properties + Retro Explorer** portfolio. The
first viewport should function like a polished system-properties panel: it
clearly presents Olga's name, role, location, experience, technical focus, and
leadership scope before asking visitors to click anywhere. The rest of the
site can be explored through an Explorer-like navigation structure that makes
the available material obvious.

Use Windows 98 as a visual language, not as a simulated operating system:
gray-blue chrome, beveled controls, compact title bars, pixel details, status
areas, and restrained system-style labels. Keep standard web navigation,
semantic HTML, keyboard access, responsive behavior, and modern readable
typography. The retro layer should communicate playfulness and technical
fluency while the content communicates seniority and credibility.

The existing Astro architecture remains the foundation. Existing routes,
Markdown essays, the resume content collection, the `now` page, and the React
contact form can be retained while the home layout, shared chrome, route
headers, and navigation are redesigned.

## Key Assumptions to Validate

- [ ] A first-viewport identity panel makes the portfolio's purpose clear
      without requiring a route click. Validate with a five-second review from
      three engineering leaders or peers.
- [ ] Retro styling reads as personal and playful rather than as a generic
      nostalgia theme. Validate with screenshot feedback from people who know
      Olga and people who do not.
- [ ] Explorer-style navigation improves orientation compared with the current
      card grid. Validate by asking first-time visitors to find the resume,
      essays, and contact page without explanation.
- [ ] Modern typography plus restrained chrome preserves readability at
      320px, 768px, 1024px, and 1440px. Validate with browser screenshots and
      keyboard navigation.
- [ ] The visual treatment can be implemented as a moderate UI rebuild without
      changing the Astro/content model. Validate during the first layout slice.

## MVP Scope

- Replace the current home grid's first viewport with an identity-first
  system-properties panel.
- Add a clear Explorer-like navigation surface for Bio, Resume, Now, Thoughts,
  and Contact.
- Preserve the existing content routes and essay Markdown collection.
- Establish a small retro design system: panel, title bar, beveled button/link,
  system label, status bar, and selected/hover/focus states.
- Use modern, readable body typography with retro details reserved for chrome
  and metadata.
- Keep all navigation as ordinary links and preserve visible focus states.
- Make the home page and shared route chrome responsive rather than simulating
  a fixed desktop viewport.
- Make the first viewport state the professional summary, not the essay grid.

## Not Doing (and Why)

- **No full simulated Windows desktop** — discovery through folders, fake
  applications, or hidden interactions would recreate the current siloing.
- **No draggable or resizable windows** — adds implementation and accessibility
  cost without helping visitors understand the portfolio.
- **No bitmap-only typography** — nostalgia should not reduce readability or
  make the site feel like a novelty.
- **No fake boot sequence, loading screens, or error dialogs** — they delay the
  professional signal and turn the experience into a demo.
- **No replacement of the Astro/content architecture** — the existing content
  model is already appropriate; the problem is hierarchy and presentation.
- **No requirement that every page look like Windows 98** — essays can retain a
  quieter reading surface while shared chrome carries the identity.
- **No hidden resume or contact actions** — important portfolio tasks remain
  visible in the navigation.

## Open Questions

- Should the Explorer navigation be a persistent left rail on desktop and a
  compact toolbar/menu on mobile, or should it be a single shared top bar?
- Should the professional summary live inside a `System Properties` panel,
  alongside a small portrait/mark, or span the main content area as the page's
  primary document?
- How much of the current graph-paper notebook language should survive as a
  secondary texture, if any?
- Should the essay collection be labeled `Thoughts`, `Documents`, or another
  system-style name that remains understandable to portfolio visitors?
