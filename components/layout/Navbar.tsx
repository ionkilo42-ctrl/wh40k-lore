"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { isNavActive, navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  const openSearch = () => window.dispatchEvent(new Event("open-lore-search"));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-[var(--metal-border)] bg-black/85 backdrop-blur-xl lg:h-[72px]">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 sm:px-6">
          <Link href="/" className="group flex items-center gap-3" aria-label="WH40K Lore home">
            <span className="gothic-corner grid size-10 place-items-center border border-[var(--gold)]/50 bg-[var(--gold)]/5 text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)]/10">
              <Shield className="size-5" strokeWidth={1.5} />
            </span>
            <span className="font-heading text-sm font-bold tracking-[0.24em] text-[var(--parchment)] sm:text-base">
              WH40K <span className="text-[var(--gold)]">LORE</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] transition-colors 2xl:px-3 2xl:text-[10px] 2xl:tracking-[0.16em]",
                  isNavActive(pathname, item.href)
                    ? "border-[var(--gold)] text-[var(--gold)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--parchment)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={openSearch} className="hidden sm:flex">
              <Search className="size-3.5" />
              Search
              <kbd className="ml-2 border border-white/10 px-1.5 py-0.5 font-mono text-[9px] text-[var(--muted)]">
                ⌘K
              </kbd>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={openSearch}
              className="sm:hidden"
              aria-label="Open search"
            >
              <Search className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden"
              aria-label="Open navigation"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav className="fixed inset-x-0 top-16 z-30 border-b border-[var(--gold)]/25 bg-[#080808]/98 px-4 py-5 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-xl gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 border-l px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all",
                    isNavActive(pathname, item.href)
                      ? "border-[var(--gold)] bg-[var(--gold)]/[0.05] text-[var(--parchment)]"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--gold)] hover:bg-white/[0.03] hover:text-[var(--parchment)]",
                  )}
                >
                  <Icon className="size-4 text-[var(--gold)]" strokeWidth={1.5} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}
