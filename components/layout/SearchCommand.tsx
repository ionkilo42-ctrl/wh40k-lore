"use client";

import MiniSearch from "minisearch";
import { BookOpen, Clock3, Search, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { SearchDocument } from "@/lib/search-data";

const icons = {
  Article: BookOpen,
  Faction: Shield,
  Timeline: Clock3,
};

export function SearchCommand({ documents }: { documents: SearchDocument[] }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [engine] = useState(() => {
    const search = new MiniSearch<SearchDocument>({
      fields: ["title", "description", "category", "type"],
      storeFields: ["id", "title", "description", "category", "type", "href"],
      searchOptions: { boost: { title: 3, category: 1.5 }, fuzzy: 0.2, prefix: true },
    });
    search.addAll(documents);
    return search;
  });

  const results = query.trim()
    ? engine.search(query).slice(0, 12) as unknown as SearchDocument[]
    : documents.slice(0, 8);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-lore-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-lore-search", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 20);
  }, [open]);

  useEffect(() => setSelectedIndex(0), [query]);

  const navigate = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent showCloseButton={false}>
        <DialogTitle className="sr-only">Search the lore archives</DialogTitle>
        <DialogDescription className="sr-only">
          Search lore articles, factions, and major timeline events.
        </DialogDescription>
        <div className="flex items-center gap-3 border-b border-[var(--metal-border)] px-4 py-4">
          <Search className="size-5 text-[var(--gold)]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                return;
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setSelectedIndex((index) => Math.min(results.length - 1, index + 1));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setSelectedIndex((index) => Math.max(0, index - 1));
              }
              if (event.key === "Enter" && results[selectedIndex]) {
                navigate(results[selectedIndex].href);
              }
            }}
            placeholder="Search the archives..."
            className="h-10 flex-1 bg-transparent text-base text-[var(--parchment)] outline-none placeholder:text-[var(--muted)]"
          />
          <button onClick={() => setOpen(false)} className="border border-white/10 px-2 py-1 font-mono text-[9px] text-[var(--muted)]">
            ESC
          </button>
        </div>
        <div className="max-h-[58vh] overflow-y-auto p-2">
          {results.length ? (
            results.map((result, index) => {
              const Icon = icons[result.type];
              return (
                <button
                  key={result.id}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => navigate(result.href)}
                  className={`flex w-full items-start gap-4 border-l px-4 py-3 text-left transition-colors ${
                    selectedIndex === index
                      ? "border-[var(--gold)] bg-[var(--gold)]/[0.06]"
                      : "border-transparent hover:bg-white/[0.025]"
                  }`}
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-[var(--gold)]" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-4">
                      <strong className="truncate font-heading text-sm font-medium text-[var(--parchment)]">{result.title}</strong>
                      <span className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]/70">{result.type}</span>
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-[var(--muted)]">{result.description}</span>
                  </span>
                </button>
              );
            })
          ) : (
            <p className="px-4 py-12 text-center text-sm text-[var(--muted)]">No records answer that query.</p>
          )}
        </div>
        <div className="flex justify-between border-t border-[var(--metal-border)] px-4 py-3 text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>↑↓ Navigate</span>
          <span>Enter Select</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
