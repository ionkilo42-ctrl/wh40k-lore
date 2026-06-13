"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Faction = {
  id: string;
  name: string;
  allegiance: string;
  description: string;
  href: string;
  accent: string;
  sigil: string;
};

export function FactionCard({ faction }: { faction: Faction }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Link href={faction.href} className={`faction-card accent-${faction.accent} group block h-full`}>
        <div className="flex items-start justify-between gap-5">
          <span className="grid size-14 shrink-0 place-items-center border border-current/40 font-heading text-xl text-[var(--gold)]">
            {faction.sigil}
          </span>
          <ArrowUpRight className="size-4 text-[var(--muted)] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--gold)]" />
        </div>
        <div className="mt-12">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]/70">{faction.allegiance}</p>
          <h3 className="mt-3 font-heading text-xl text-[var(--parchment)]">{faction.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faction.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
