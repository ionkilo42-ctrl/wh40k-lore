"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import timeline from "@/content/timeline.json";

const featured = timeline.filter((event) =>
  ["war-in-heaven", "horus-heresy", "great-rift", "indomitus-crusade"].includes(event.id),
);

export function TimelineWidget() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--metal-border)] bg-black/30">
      <div className="absolute left-8 right-8 top-[51px] hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent md:block" />
      <div className="grid md:grid-cols-4">
        {featured.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08 }}
            className="relative border-b border-[var(--metal-border)] p-6 md:border-b-0 md:border-r last:border-0"
          >
            <span className={`timeline-node accent-${event.accent}`} />
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">{event.date}</p>
            <h3 className="mt-5 font-heading text-base text-[var(--parchment)]">{event.title}</h3>
            <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{event.description}</p>
          </motion.div>
        ))}
      </div>
      <Link href="/timeline" className="flex items-center justify-center gap-2 border-t border-[var(--metal-border)] px-4 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] hover:bg-[var(--gold)]/[0.04]">
        Traverse the complete timeline <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
