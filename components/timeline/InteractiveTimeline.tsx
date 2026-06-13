"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import timeline from "@/content/timeline.json";
import { cn } from "@/lib/utils";

const eras = ["All", ...new Set(timeline.map((event) => event.era))];

export function InteractiveTimeline() {
  const [activeEra, setActiveEra] = useState("All");
  const events = activeEra === "All" ? timeline : timeline.filter((event) => event.era === activeEra);

  return (
    <div>
      <div className="hide-scrollbar mb-10 flex gap-2 overflow-x-auto pb-3">
        {eras.map((era) => (
          <button
            key={era}
            onClick={() => setActiveEra(era)}
            className={cn(
              "shrink-0 border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] transition-colors",
              activeEra === era
                ? "border-[var(--gold)] bg-[var(--gold)] text-black"
                : "border-[var(--metal-border)] text-[var(--muted)] hover:border-[var(--gold)]/60 hover:text-[var(--parchment)]",
            )}
          >
            {era}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeEra}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="relative before:absolute before:bottom-0 before:left-[11px] before:top-0 before:w-px before:bg-gradient-to-b before:from-[var(--gold)]/70 before:via-[var(--warp)]/40 before:to-transparent md:before:left-1/2"
        >
          {events.map((event, index) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
              key={event.id}
              id={event.id}
              className={cn(
                "relative mb-7 pl-9 md:w-1/2 md:pl-0",
                index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12",
              )}
            >
              <span className={cn(
                `timeline-node accent-${event.accent}`,
                "absolute left-[5px] top-7 md:left-auto",
                index % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]",
              )} />
              <div className="ornate-panel p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">{event.date}</span>
                  <span className="text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">{event.faction}</span>
                </div>
                <h2 className="mt-4 font-heading text-xl text-[var(--parchment)]">{event.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{event.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
