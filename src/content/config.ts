import { defineCollection, z } from "astro:content";

/*
 * Content collections.
 *
 * resume: a single canonical markdown file at content/resume.md (repo root),
 * symlinked into src/content/resume/resume.md so Astro picks it up. Renders
 * via Astro's built-in markdown pipeline; no remark plugins beyond the
 * defaults. Schema is intentionally minimal because there's exactly one
 * resume file and zero frontmatter.
 *
 * essays: deferred to U7. When added, expect frontmatter with title,
 * subtitle, slug, callNumber, publishedAt, and optional updatedAt.
 */
const resume = defineCollection({
  type: "content",
  schema: z.object({}).optional(),
});

export const collections = { resume };
