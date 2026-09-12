import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = {
  articles,
};
