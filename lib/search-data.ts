import factions from "@/content/factions.json";
import timeline from "@/content/timeline.json";
import { getAllArticles } from "@/lib/content";

export type SearchDocument = {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "Article" | "Faction" | "Timeline";
  href: string;
};

export function buildSearchDocuments(): SearchDocument[] {
  const articles: SearchDocument[] = getAllArticles().map((article) => ({
    id: `article-${article.section}-${article.slug}`,
    title: article.title,
    description: article.excerpt,
    category: article.section,
    type: "Article",
    href: article.href,
  }));

  const factionDocuments: SearchDocument[] = factions.map((faction) => ({
    id: `faction-${faction.id}`,
    title: faction.name,
    description: faction.description,
    category: faction.allegiance,
    type: "Faction",
    href: faction.href,
  }));

  const timelineDocuments: SearchDocument[] = timeline.map((event) => ({
    id: `timeline-${event.id}`,
    title: event.title,
    description: event.description,
    category: event.era,
    type: "Timeline",
    href: `/timeline#${event.id}`,
  }));

  return [...articles, ...factionDocuments, ...timelineDocuments];
}
