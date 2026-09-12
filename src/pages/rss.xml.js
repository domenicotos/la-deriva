import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = await getCollection("articles");

  return rss({
    title: "La Deriva",
    description:
      "Poesie, racconti brevi e riflessioni sulle cose che spesso non sappiamo dire.",
    site: context.site ?? "https://la-deriva.domenicotoscano-site.workers.dev",
    items: articles
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.date,
        link: `/${article.data.number}`,
      })),
  });
}
