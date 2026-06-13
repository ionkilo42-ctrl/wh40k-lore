import { describe, expect, it } from "vitest";

import { getAllArticles, getArticleBySlug } from "../lib/content";

describe("lore content registry", () => {
  it("discovers the initial rich MDX library", () => {
    const articles = getAllArticles();

    expect(articles.length).toBeGreaterThanOrEqual(8);
    expect(articles.filter((article) => article.section === "cosmology")).toHaveLength(3);
    expect(articles.filter((article) => article.section === "imperium")).toHaveLength(3);
    expect(articles.filter((article) => article.section === "primarchs")).toHaveLength(2);
  });

  it("loads an article by section and slug with normalized metadata", () => {
    const article = getArticleBySlug("imperium", "golden-throne");

    expect(article?.title).toBe("The Golden Throne");
    expect(article?.href).toBe("/imperium/golden-throne");
    expect(article?.readingTime).toMatch(/min read/);
    expect(article?.excerpt.length).toBeGreaterThan(60);
  });
});
