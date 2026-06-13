import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-[var(--gold)] bg-[var(--gold)]/[0.045] px-6 py-5">
      <strong className="font-heading text-sm tracking-[0.08em] text-[var(--gold)]">{title}</strong>
      <div className="mt-2 text-sm leading-7 text-[var(--muted)]">{children}</div>
    </aside>
  );
}

export function LoreQuote({ children }: { children: ReactNode }) {
  return <blockquote className="lore-quote">{children}</blockquote>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    LoreQuote,
    ...components,
  };
}
