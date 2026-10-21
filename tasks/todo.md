# Retro system home screen

## Phase 1: Foundation

- [x] **Task 1: Add retro design tokens and shared home primitives**
  - **Description:** Add semantic system-chrome tokens and implement the
    reusable panel/title-bar and Explorer navigation primitives needed by the
    home page.
  - **Acceptance:**
    - Retro colors, borders, bevel treatment, and system typography roles are
      defined centrally without new dependencies.
    - The panel primitive has a semantic title bar and content region.
    - Explorer navigation renders native anchors with clear labels and visible
      focus states.
  - **Verification:** Run `npm run lint`; inspect component markup for
    semantic landmarks and keyboard-reachable links.
  - **Dependencies:** None
  - **Files likely touched:** `src/styles/global.css`,
    `src/components/RetroPanel.astro`, `src/components/ExplorerNav.astro`
  - **Estimated scope:** Medium

- [x] **Task 2: Compose the identity-first home screen**
  - **Description:** Replace the current home card grid with the System
    Properties identity panel, Explorer navigation, and explicit professional
    identity content.
  - **Acceptance:**
    - The home page has one clear `h1` identifying Olga Nikulina.
    - The rendered page communicates senior full-stack engineer, team lead,
      hands-on work, B2B products, and Los Angeles.
    - Bio, Resume, Now, Thoughts, and Contact are directly reachable.
    - Existing route URLs and route content remain unchanged.
  - **Verification:** Run `npm run lint` and `npm run build`; inspect
    `dist/index.html` for identity copy and all five navigation labels.
  - **Dependencies:** Task 1
  - **Files likely touched:** `src/pages/index.astro`,
    `src/components/SiteHeader.astro`
  - **Estimated scope:** Medium

## Checkpoint: Home foundation

- [x] `npm run lint` passes with zero diagnostics.
- [x] `npm run build` succeeds and generates all existing routes.
- [x] The home page is understandable without opening another route.

## Phase 2: Responsive and accessibility finish

- [x] **Task 3: Make the home screen responsive and keyboard-complete**
  - **Description:** Add desktop rail/mobile top-surface behavior, establish
    responsive layout constraints, and verify logical keyboard navigation.
  - **Acceptance:**
    - Desktop uses the Explorer rail and mobile uses a compact top navigation
      surface.
    - The layout has no horizontal overflow at 320px, 768px, 1024px, or
      1440px.
    - All links are reachable in logical order with visible focus treatment.
    - No information depends on hover or desktop-only behavior.
  - **Verification:** Run `npm run lint` and `npm run build`; manually review
    the dev server at the four target widths and tab through the page.
  - **Dependencies:** Task 2
  - **Files likely touched:** `src/pages/index.astro`,
    `src/components/ExplorerNav.astro`,
    `src/styles/global.css`
  - **Estimated scope:** Medium

- [x] **Task 4: Perform visual/content polish against the design contract**
  - **Description:** Review the first viewport for hierarchy, readability, and
    retro restraint, then make only contract-aligned refinements.
  - **Acceptance:**
    - The professional identity is visually dominant over decoration.
    - Retro styling is recognizable but does not reduce readability.
    - Navigation is understandable to a visitor unfamiliar with the metaphor.
    - No unrelated route or content changes are introduced.
  - **Verification:** Run `npm run lint` and `npm run build`; compare the
    rendered home page against the spec's first-viewport and accessibility
    criteria.
  - **Dependencies:** Task 3
  - **Files likely touched:** Home-screen files only, limited to
    `src/pages/index.astro`, `src/components/*.astro`, and
    `src/styles/global.css`
  - **Estimated scope:** Small

## Checkpoint: Complete

- [x] Home page meets the approved design contract.
- [x] All lint/build checks pass.
- [x] Existing routes and content remain intact.
