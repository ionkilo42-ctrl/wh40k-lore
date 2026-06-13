import type { Metadata } from "next";

import { ArticlePage } from "@/components/lore/ArticlePage";
import { getArticleBySlug, getArticlesBySection } from "@/lib/content";

export function generateStaticParams() {
  return getArticlesBySection("chaos").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("chaos", slug);
  return { title: article?.title, description: article?.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage section="chaos" slug={slug} />;
}
