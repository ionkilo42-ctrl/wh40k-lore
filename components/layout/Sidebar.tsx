import Link from "next/link";
import { BookMarked } from "lucide-react";

import { SidebarNav } from "@/components/layout/SidebarNav";
import { MetallicDivider } from "@/components/lore/MetallicDivider";

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-[72px] z-20 hidden w-64 border-r border-[var(--metal-border)] bg-[#080808]/95 xl:block">
      <div className="flex h-full flex-col px-4 py-7">
        <p className="px-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
          Archives of Terra
        </p>
        <MetallicDivider className="my-4" />
        <SidebarNav />
        <div className="mt-auto border border-[var(--metal-border)] bg-[var(--parchment-panel)] p-4">
          <BookMarked className="mb-3 size-5 text-[var(--gold)]" strokeWidth={1.5} />
          <p className="font-heading text-xs text-[var(--parchment)]">Begin the Pilgrimage</p>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
            Follow the learning roadmaps from first principles to the Era Indomitus.
          </p>
          <Link href="/learning" className="mt-3 inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">
            Open roadmap →
          </Link>
        </div>
      </div>
    </aside>
  );
}
