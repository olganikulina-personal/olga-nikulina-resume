# Spec: Retro system home screen

## Objective

Replace the current notebook card grid on `/` with an identity-first home
screen that makes the site's owner immediately legible as a senior full-stack
engineer and team lead who still ships code.

The visual direction is **System Properties + Retro Explorer**:

- The primary content area resembles a polished system-properties panel.
- A clear Explorer-style navigation surface exposes the site's destinations.
- Windows 98 is used as a visual language: gray-blue chrome, beveled controls,
  compact title bars, pixel details, and status areas.
- The site remains a normal, accessible, responsive web page. It is not a
  simulated desktop application.

This vertical slice changes only the home page and the shared primitives needed
to render it. Existing route content and route behavior remain unchanged.

### User stories

- As a first-time visitor, I can understand Olga's role, seniority, location,
  and technical focus within five seconds without clicking.
- As an engineering leader, I can find the resume, essays, now page, and
  contact page from the home screen without decoding the metaphor.
- As a keyboard user, I can reach every home-page destination in a logical
  order and see the current focus.
- As a mobile visitor, I can read the identity panel and navigate the site
  without horizontal scrolling or desktop-only interactions.

## Tech Stack

- Astro 5 static rendering
- TypeScript
- React 19 only where existing islands require it
- Tailwind CSS 4 through the existing Vite integration
- Existing self-hosted IBM Plex Sans, IBM Plex Mono, and Source Serif 4 fonts
- Existing Astro content collections and route structure

No new dependency is required for this slice.

## Commands

```sh
node --version
npm run lint
npm run build
npm run dev
```

The supported runtime is Node `>=18.20.8`; the current working runtime is
Node `24.15.0`.

## Design Contract

### Information hierarchy

The first viewport must present, in this order:

1. Olga Nikulina's name
2. Senior full-stack engineer and team lead
3. A concise description of building complex B2B products while staying
   hands-on
4. Location and compact technical/leadership signals
5. Direct navigation to Resume, Bio, Now, Thoughts, and Contact

The professional summary must not be hidden behind the Bio route.

### Desktop layout

- A compact Explorer-style navigation rail sits on the left.
- The main content area contains the dominant System Properties panel.
- The navigation rail may include a small site mark, a root label, and grouped
  destinations.
- The identity panel is visually primary; navigation is secondary but always
  visible.
- No uniform card grid, hero image, decorative gradient, or large marketing
  CTA.

### Mobile layout

- The navigation rail becomes a compact top navigation surface.
- The identity panel remains the first major content block.
- Navigation destinations remain visible or reachable through a clearly labeled
  native control.
- No horizontal scrolling, hover-dependent information, or desktop-only
  interactions.

### Visual language

Use semantic design tokens rather than component-specific hex values.

- Paper/background: warm light neutral
- System chrome: restrained gray-blue
- Primary text: high-contrast dark ink
- Accent: limited blue system highlight
- Borders: 1px system-style rules
- Panels: subtle beveled treatment, not large shadows
- Controls: compact, rectangular, visibly interactive
- Typography: readable modern sans for body copy; mono for metadata and system
  labels; pixel styling only as a small accent

The retro cue must come from chrome, labels, borders, and controls rather than
from tiny bitmap body text or intentionally degraded readability.

### Interaction

- Every destination is a normal anchor.
- Hover may change the selected/active chrome state.
- Keyboard focus must be visibly distinct.
- Do not add draggable, resizable, boot-sequence, fake loading, or simulated
  operating-system behavior.
- Respect `prefers-reduced-motion`; no new motion is required for the slice.

### Content contract

The home page identity copy should communicate:

> Senior full-stack engineer and team lead in Los Angeles. I build complex B2B
> products, lead engineering teams, and stay close to the code.

The exact copy may be edited for voice, but it must preserve those facts:
senior engineering role, leadership responsibility, hands-on work, B2B/product
context, and Los Angeles.

Navigation labels must be understandable without relying on cryptic titles:

- Bio
- Resume
- Now
- Thoughts
- Contact

Essay titles can retain their personality inside the Thoughts destination.

## Project Structure

```text
src/
  components/
    RetroPanel.astro          # shared panel/title-bar primitive if needed
    ExplorerNav.astro         # home navigation surface
    SiteHeader.astro          # updated home identity/site mark treatment
  layouts/
    BaseLayout.astro          # unchanged unless shared tokens require it
  pages/
    index.astro               # home vertical slice
  styles/
    global.css                # semantic retro tokens and global base rules
docs/
  specs/
    home-screen-retro-system.md
```

Prefer extending existing components when their responsibility still fits.
Do not create abstractions for one-off markup unless the same primitive is
clearly used by multiple home-page elements.

## Code Style

Astro components should keep content and layout explicit, use typed props, and
prefer semantic HTML:

```astro
<nav aria-label="Primary">
  <ul class="explorer-list">
    {items.map((item) => (
      <li>
        <a href={item.href} class:list={{ active: item.href === currentPath }}>
          <span class="nav-label">{item.label}</span>
        </a>
      </li>
    ))}
  </ul>
</nav>
```

Conventions:

- Use descriptive component names and typed interfaces.
- Use existing CSS variables and spacing rhythm before adding new tokens.
- Keep interactive elements native.
- Avoid inline hex values and unnecessary inline styles.
- Keep comments limited to non-obvious design or accessibility decisions.
- Preserve the existing content and route data sources.

## Testing Strategy

### Automated

- `npm run lint` must report zero errors, warnings, and hints.
- `npm run build` must generate the home page and all existing routes.
- Inspect the generated `dist/index.html` to confirm the identity copy and
  navigation labels are present in server-rendered HTML.

### Browser/manual

Verify the home page at:

- 320px wide
- 768px wide
- 1024px wide
- 1440px wide

Check:

- The first viewport identifies Olga's role and value without interaction.
- All five primary destinations are findable.
- Tab order is logical and focus indicators are visible.
- No horizontal overflow exists on mobile.
- The retro styling supports, rather than obscures, readable content.
- The browser console has no new errors or warnings.

No new test framework or browser automation dependency is required for this
slice.

## Boundaries

- **Always:**
  - Keep the existing Astro/content architecture.
  - Use semantic HTML and native anchors.
  - Preserve responsive behavior and visible focus states.
  - Keep the professional identity visible in the initial home-page render.
  - Run `npm run lint` and `npm run build` after implementation.

- **Ask first:**
  - Adding a runtime dependency.
  - Changing route URLs or essay/content collection structure.
  - Replacing the existing font system.
  - Adding simulated desktop interactions or a client-side global navigation
    model.

- **Never:**
  - Hide the resume or contact route behind novelty interactions.
  - Use fake loading/boot sequences to delay content.
  - Make drag, hover, or animation necessary to understand the site.
  - Commit secrets or modify generated `dist/` output manually.
  - Remove existing content to simplify the redesign.

## Success Criteria

- The home page has one clear `h1` containing or identifying Olga Nikulina.
- The initial rendered HTML contains the role statement and core identity copy.
- A visitor can identify Olga as a senior full-stack engineer and team lead
  without opening another route.
- Resume, Bio, Now, Thoughts, and Contact are all visible or directly reachable
  from the home navigation.
- The layout works at 320px, 768px, 1024px, and 1440px without horizontal
  overflow.
- Every navigation destination is keyboard reachable with a visible focus state.
- `npm run lint` passes with zero diagnostics.
- `npm run build` succeeds and preserves all existing routes.

## Open Questions

- Should the Explorer navigation be a persistent desktop rail with a mobile
  top bar, or one shared top navigation component at every breakpoint?
- Should a small portrait or mark appear in the System Properties panel, or
  should the first slice remain text-only?
- Should any graph-paper texture survive as a very subtle secondary reference,
  or should the home page fully commit to system chrome?
