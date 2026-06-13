import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content", "mdx");

export type LoreSection =
  | "cosmology"
  | "imperium"
  | "primarchs"
  | "chaos"
  | "xenos";

export type Article = {
  slug: string;
  section: LoreSection;
  title: string;
  description: string;
  excerpt: string;
  era: string;
  faction: string;
  order: number;
  featured: boolean;
  readingTime: string;
  href: string;
};

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function normalizeArticle(filePath: string): Article {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const section = path.basename(path.dirname(filePath)) as LoreSection;
  const slug = path.basename(filePath, ".mdx");
  const excerpt = String(data.excerpt ?? data.description ?? "")
    .replace(/\s+/g, " ")
    .trim();

  return {
    slug,
    section,
    title: String(data.title ?? slug),
    description: String(data.description ?? excerpt),
    excerpt,
    era: String(data.era ?? "Unknown Era"),
    faction: String(data.faction ?? "Unaligned"),
    order: Number(data.order ?? 999),
    featured: Boolean(data.featured ?? false),
    readingTime: getReadingTime(content),
    href: `/${section}/${slug}`,
  };
}

export function getAllArticles() {
  if (!fs.existsSync(CONTENT_ROOT)) return [];

  return fs
    .readdirSync(CONTENT_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const directory = path.join(CONTENT_ROOT, entry.name);
      return fs
        .readdirSync(directory)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => normalizeArticle(path.join(directory, file)));
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getArticleBySlug(section: string, slug: string) {
  const filePath = path.join(CONTENT_ROOT, section, `${slug}.mdx`);
  return fs.existsSync(filePath) ? normalizeArticle(filePath) : null;
}

export function getArticlesBySection(section: LoreSection) {
  return getAllArticles().filter((article) => article.section === section);
}

export function getAdjacentArticles(section: LoreSection, slug: string) {
  const articles = getArticlesBySection(section);
  const index = articles.findIndex((article) => article.slug === slug);
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : undefined,
    siblings: articles.filter((article) => article.slug !== slug).slice(0, 3),
  };
}
