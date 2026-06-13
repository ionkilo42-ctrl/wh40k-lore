import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, ScrollText } from "lucide-react";
import type { ReactNode } from "react";

import { SearchTrigger } from "@/components/layout/SearchTrigger";
import { MetallicDivider } from "@/components/lore/MetallicDivider";
import type { Article } from "@/lib/content";

export function ArticleLayout({
  article,
  prev,
  next,
  siblings,
  children,
}: {
  article: Article;
  prev?: Article;
  next?: Article;
  siblings: Article[];
  children: ReactNode;
}) {
  const sectionLabel = article.section.charAt(0).toUpperCase() + article.section.slice(1);

  return (
    <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--gold)]">
        <ArrowLeft className="size-3.5" />
        Return to archives
      </Link>
      <header className="mt-10 border border-[var(--gold)]/25 bg-[var(--parchment-panel)] px-6 py-10 shadow-[inset_0_1px_rgba(255,255,255,.03)] sm:px-10 lg:px-14">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
          <span>{article.section}</span>
          <span>{article.era}</span>
          <span className="flex items-center gap-1.5 text-[var(--muted)]"><Clock3 className="size-3" />{article.readingTime}</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] text-[var(--parchment)] sm:text-6xl">{article.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">{article.description}</p>
      </header>
      <MetallicDivider className="my-10" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0">
          <div className="lore-prose">{children}</div>
          {(prev || next) && (
            <nav className="mt-14 grid gap-px border border-[var(--metal-border)] bg-[var(--metal-border)] sm:grid-cols-2">
              {prev ? (
                <Link href={prev.href} className="group bg-[var(--void)] p-5 transition-colors hover:bg-[var(--gold)]/[0.035]">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Previous</span>
                  <span className="mt-2 flex items-center gap-2 font-heading text-sm text-[var(--parchment)] group-hover:text-[var(--gold)]">
                    <ArrowLeft className="size-3.5" />
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden bg-[var(--void)] sm:block" />
              )}
              {next ? (
                <Link href={next.href} className="group bg-[var(--void)] p-5 text-right transition-colors hover:bg-[var(--gold)]/[0.035]">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Next</span>
                  <span className="mt-2 flex items-center justify-end gap-2 font-heading text-sm text-[var(--parchment)] group-hover:text-[var(--gold)]">
                    {next.title}
                    <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              ) : (
                <div className="hidden bg-[var(--void)] sm:block" />
              )}
            </nav>
          )}
        </div>
        <aside className="order-first lg:order-last">
          <div className="sticky top-28 space-y-5">
            <div className="border border-[var(--metal-border)] bg-black/30 p-5">
              <ScrollText className="size-5 text-[var(--gold)]" strokeWidth={1.5} />
              <p className="mt-4 font-heading text-sm text-[var(--parchment)]">Archive Record</p>
              <dl className="mt-5 space-y-4 text-xs">
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.16em] text-[var(--gold)]">Era</dt>
                  <dd className="mt-1 text-[var(--muted)]">{article.era}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.16em] text-[var(--gold)]">Affiliation</dt>
                  <dd className="mt-1 text-[var(--muted)]">{article.faction}</dd>
                </div>
              </dl>
              <SearchTrigger className="mt-6 w-full border border-[var(--gold)]/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--gold)] hover:bg-[var(--gold)]/[0.05]" />
            </div>
            {siblings.length > 0 && (
              <div className="border border-[var(--metal-border)] bg-black/30 p-5">
                <p className="font-heading text-sm text-[var(--parchment)]">More in {sectionLabel}</p>
                <ul className="mt-4 space-y-3">
                  {siblings.map((sibling) => (
                    <li key={sibling.href}>
                      <Link href={sibling.href} className="block text-xs leading-6 text-[var(--muted)] transition-colors hover:text-[var(--gold)]">
                        {sibling.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}