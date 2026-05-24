/**
 * Single source of truth for the home grid's seven cards.
 *
 * Order in this array == DOM order on the page (also the mobile stack order).
 * `gridClass` controls desktop placement on the 12-col grid; on mobile (<768px)
 * the grid collapses to a single column and these positional classes are
 * neutralized by a media-query reset in index.astro.
 *
 * Call-number scheme: <prefix>-NN where prefix is the route family.
 *   b- bio · r- resume · c- contact · n- now · t- thoughts (essays)
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
    title: "who, briefly",
    callNumber: "b-01",
    subtitle: "the inside cover",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-1 md:row-start-1",
  },
  {
    slug: "resume",
    href: "/resume",
    title: "the working record",
    callNumber: "r-01",
    subtitle: "ten years, in order",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-7 md:row-start-1",
  },
  {
    slug: "now",
    href: "/now",
    title: "currently",
    callNumber: "n-01",
    subtitle: "what's live, right now",
    gridClass: "md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-3",
  },
  {
    slug: "faster-horse",
    href: "/thoughts/faster-horse",
    title: "a faster horse",
    callNumber: "t-01",
    gridClass: "md:col-span-4 md:col-start-5 md:row-start-3",
    isEssay: true,
  },
  {
    slug: "novelty-tax",
    href: "/thoughts/novelty-tax",
    title: "the novelty tax",
    callNumber: "t-02",
    gridClass: "md:col-span-4 md:col-start-9 md:row-start-3",
    isEssay: true,
  },
  {
    slug: "criminal-orders",
    href: "/thoughts/criminal-orders",
    title: "orders without a crime",
    callNumber: "t-03",
    subtitle: "the longest one — start here if you start somewhere",
    gridClass: "md:col-span-8 md:col-start-5 md:row-start-4",
    isEssay: true,
  },
  {
    slug: "dallas-incident",
    href: "/thoughts/dallas-incident",
    title: "the dallas incident",
    callNumber: "t-04",
    subtitle: "a low-stakes bug, a high-stakes UAT, one bruce willis",
    gridClass: "md:col-span-8 md:col-start-1 md:row-start-5",
    isEssay: true,
  },
  {
    slug: "contact",
    href: "/contact",
    title: "say hello",
    callNumber: "c-01",
    gridClass: "md:col-span-4 md:col-start-9 md:row-start-5",
  },
];
