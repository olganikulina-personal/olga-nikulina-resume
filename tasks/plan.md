# Implementation Plan: Retro system home screen

## Overview

Replace the current notebook card grid on `/` with an identity-first
System Properties + Retro Explorer home screen. The slice keeps Astro,
content collections, route URLs, and existing route content intact while
introducing a small shared visual language for retro system chrome.

The home page is the only user-facing surface changed in this implementation.
The goal is to validate the first-viewport information hierarchy before
redesigning route pages.

## Working Decisions

- Desktop uses a persistent, compact Explorer rail.
- Mobile converts the rail into a compact top navigation surface.
- The first identity panel is text-first; the existing mark remains available
  as a small identity detail, but no portrait is introduced in this slice.
- The home surface fully commits to system chrome; graph-paper styling is not
  carried into the new home layout.
- Navigation uses clear labels: Bio, Resume, Now, Thoughts, and Contact.
- The existing essay routes remain individually addressable through the
  Thoughts destination; no new route or content collection is added.

## Architecture Decisions

- **Astro components over a client-side shell:** the home screen is static
  content with native links, so it needs no new hydration or state management.
- **Shared primitives only where repeated:** add a panel/title-bar primitive
  and an Explorer navigation component; keep identity copy explicit in
  `index.astro`.
- **Tokens in `global.css`:** define semantic retro tokens centrally and
  preserve the existing font stack. Avoid component-specific hex values.
- **Keep `cards.ts`:** essay ordering and route metadata still depend on it,
  even though the home page no longer renders the old card grid.
- **No dependency changes:** the existing Astro/Tailwind setup is sufficient.

## Task List

### Phase 1: Foundation

- [ ] Task 1: Add retro design tokens and shared home primitives
- [ ] Task 2: Compose the identity-first home screen

### Checkpoint: Home foundation

- [ ] `npm run lint` passes with zero diagnostics
- [ ] `npm run build` succeeds and all existing routes are generated
- [ ] Generated home HTML contains the identity copy and five navigation labels

### Phase 2: Responsive and accessibility finish

- [ ] Task 3: Make the home screen responsive and keyboard-complete
- [ ] Task 4: Perform visual/content polish against the design contract

### Checkpoint: Complete

- [ ] Home layout is usable at 320px, 768px, 1024px, and 1440px
- [ ] No horizontal overflow exists on mobile
- [ ] Every navigation link has a visible focus state
- [ ] The first viewport identifies Olga without requiring a click
- [ ] `npm run lint` and `npm run build` pass
- [ ] Existing route URLs and generated pages remain intact

## Dependency Graph

```text
Task 1: tokens + primitives
    ↓
Task 2: home composition
    ↓
Task 3: responsive + accessibility finish
    ↓
Task 4: visual/content polish
```

Tasks are sequential because each later task depends on the home structure and
shared visual primitives established earlier. No independent parallel slice is
worth the coordination cost for this small home-page change.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Retro chrome overwhelms the professional content | High | Keep the identity panel dominant, use modern body type, and restrict retro detail to chrome and metadata |
| The navigation becomes decorative instead of useful | High | Use explicit labels and ordinary anchors; validate resume/contact discoverability |
| Desktop rail breaks small screens | High | Build mobile top navigation as part of the slice, not as follow-up polish |
| Existing essay navigation loses card metadata | Medium | Preserve `cards.ts` for essay ordering and route metadata |
| CSS tokens conflict with the notebook routes | Medium | Scope new retro styles to home primitives and add tokens without deleting existing route tokens until route migration |
| Browser visual validation is unavailable | Medium | Verify generated HTML, run lint/build, inspect responsive CSS, and use the dev server for manual review when browser tooling is available |

## Verification Checkpoints

After Task 1:

- Shared components render with semantic markup and no new dependencies.
- `npm run lint` passes.

After Task 2:

- `/` server-renders identity copy and all primary navigation links.
- `npm run build` still generates all existing routes.

After Tasks 3-4:

- Responsive CSS covers the required breakpoints.
- Focus order and visible states are correct by source inspection and manual
  keyboard review.
- Final lint/build checks pass.

## Open Questions

None block the first implementation slice. The following are intentionally
deferred until after the home page is reviewed:

- Whether route pages should adopt the same retro chrome.
- Whether a portrait or richer site mark belongs in the identity panel.
- Whether the Thoughts destination should later become a dedicated index route.
