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

type: z
  .enum([
    "articolo",
    "poesia",
    "racconto",
    "frammento",
    "recensione",
  ])
  .default("articolo"),

formats: z
  .array(z.enum(["video", "podcast"]))
  .default([]),
  }),
});

export const collections = {
  articles,
};
