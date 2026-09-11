import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
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
