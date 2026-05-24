import { defineCollection, z } from "astro:content";

/*
 * Content collections.
 *
 * resume: a single canonical markdown file at content/resume.md (repo root),
 * symlinked into src/content/resume/resume.md so Astro picks it up.
 *
 * essays: one markdown file per essay in src/content/essays/. Frontmatter
 * mirrors the shape of src/lib/cards.ts so a card and its essay stay in
 * sync by convention. callNumber + slug are intentionally duplicated
 * across cards.ts and the essay frontmatter — cards.ts owns wayfinding
 * (grid metadata), essay frontmatter owns publication metadata. Keep
 * them aligned manually; U9 polish can add a build-time check.
 */
const resume = defineCollection({
  type: "content",
  schema: z.object({}).optional(),
});

const essays = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    callNumber: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resume, essays };
