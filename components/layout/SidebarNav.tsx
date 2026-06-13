"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavActive, navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {navigation.map((item) => {
        const Icon = item.icon;
        const active = isNavActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 border-l px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all",
              active
                ? "border-[var(--gold)] bg-[var(--gold)]/[0.05] text-[var(--parchment)]"
                : "border-transparent text-[var(--muted)] hover:border-[var(--gold)] hover:bg-white/[0.025] hover:text-[var(--parchment)]",
            )}
          >
            <Icon
              className={cn(
                "size-4 transition-colors",
                active ? "text-[var(--gold)]" : "text-[var(--gold)]/70 group-hover:text-[var(--gold)]",
              )}
              strokeWidth={1.5}
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}