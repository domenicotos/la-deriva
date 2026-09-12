import { getCollection } from "astro:content";

export async function getSearchArticles() {
  const articles = await getCollection("articles");

  return articles
    .sort((a, b) => b.data.number - a.data.number)
    .map((article) => ({
      number: article.data.number,
      title: article.data.title,
      subtitle: article.data.subtitle ?? "",
      description: article.data.description,
      type: article.data.type,
      formats: article.data.formats,
      url: `/${article.data.number}`,
    }));
}