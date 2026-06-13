import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/lore/ArticleLayout";
import { articleImports, hasArticleComponent } from "@/lib/article-components";
import { getAdjacentArticles, getArticleBySlug, type LoreSection } from "@/lib/content";

export async function ArticlePage({ section, slug }: { section: string; slug: string }) {
  const key = `${section}/${slug}`;
  const article = getArticleBySlug(section, slug);

  if (!article || !hasArticleComponent(key)) notFound();

  const { default: Content } = await articleImports[key]();
  const { prev, next, siblings } = getAdjacentArticles(section as LoreSection, slug);

  return (
    <ArticleLayout article={article} prev={prev} next={next} siblings={siblings}>
      <Content />
    </ArticleLayout>
  );
}
