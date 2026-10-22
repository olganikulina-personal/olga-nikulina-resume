/**
 * Single source of truth for the site's route and essay registry.
 *
 * Order in this array == DOM order on the page (also the mobile stack order).
 * `gridClass` controls desktop placement on the 12-col grid; on mobile (<768px)
 * the grid collapses to a single column and these positional classes are
 * neutralized by a media-query reset in index.astro.
 *
 * Call-number scheme: <prefix>-NN where prefix is the route family.
 *   b- bio · r- resume · c- contact · t- thoughts (essays)
 */
export interface Card {
  slug: string;
  href: string;
  title: string;
  callNumber: string;
  subtitle?: string;
  gridClass: string;
  /** Identifies essay cards for grouping/filtering (used in U7's prev/next). */
  isEssay?: boolean;
}

export const cards: Card[] = [
  {
    slug: "bio",
    href: "/bio",
    title: "Who, briefly",
    callNumber: "b-01",
    subtitle: "The inside cover",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-1 md:row-start-1",
  },
  {
    slug: "resume",
    href: "/resume",
    title: "The working record",
    callNumber: "r-01",
    subtitle: "Ten years, in order",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-7 md:row-start-1",
  },
  {
    slug: "faster-horse",
    href: "/thoughts/faster-horse",
    title: "A faster horse",
    callNumber: "t-01",
    subtitle: "On hearing the real ask under the asked ask",
    gridClass: "md:col-span-4 md:row-span-2 md:col-start-5 md:row-start-3",
    isEssay: true,
  },
  {
    slug: "novelty-tax",
    href: "/thoughts/novelty-tax",
    title: "The novelty tax",
    callNumber: "t-02",
    subtitle: "What every new thing costs you, paid quietly",
    gridClass: "md:col-span-4 md:row-span-2 md:col-start-9 md:row-start-3",
    isEssay: true,
  },
  {
    slug: "criminal-orders",
    href: "/thoughts/criminal-orders",
    title: "Orders without a crime",
    callNumber: "t-03",
    subtitle: "The longest one — start here if you start somewhere",
    gridClass: "md:col-span-12 md:row-span-2 md:col-start-1 md:row-start-5",
    isEssay: true,
  },
  {
    slug: "dallas-incident",
    href: "/thoughts/dallas-incident",
    title: "The Dallas incident",
    callNumber: "t-04",
    subtitle: "A low-stakes bug, a high-stakes UAT, one Bruce Willis",
    gridClass: "md:col-span-8 md:row-span-2 md:col-start-1 md:row-start-7",
    isEssay: true,
  },
  {
    slug: "evidence-based-ai-native-sdlc",
    href: "/thoughts/evidence-based-ai-native-sdlc",
    title: "An Evidence-Based Approach to the AI-Native SDLC",
    callNumber: "t-05",
    subtitle: "From faster implementation to more effective software delivery",
    gridClass: "md:col-span-8 md:row-span-2 md:col-start-1 md:row-start-9",
    isEssay: true,
  },
  {
    slug: "contact",
    href: "/contact",
    title: "Say hello",
    subtitle: "Short notes, long emails, random questions — all welcome.",
    callNumber: "c-01",
    gridClass: "md:col-span-4 md:row-span-2 md:col-start-9 md:row-start-7",
  },
];
