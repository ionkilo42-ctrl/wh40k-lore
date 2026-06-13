import type { Metadata } from "next";

import { InteractiveTimeline } from "@/components/timeline/InteractiveTimeline";
import { TimelineHashScroll } from "@/components/timeline/TimelineHashScroll";

export const metadata: Metadata = {
  title: "Galactic Timeline",
  description: "An interactive chronology of the major events that shaped the Warhammer 40,000 galaxy.",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <header className="max-w-4xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--gold)]">From prehistory to M42</p>
        <h1 className="mt-5 font-heading text-4xl leading-tight text-[var(--parchment)] sm:text-6xl">The long descent into war</h1>
        <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">Filter the record by era and trace how ancient choices echo into the desperate wars of the Era Indomitus.</p>
      </header>
      <TimelineHashScroll />
      <div className="mt-14"><InteractiveTimeline /></div>
    </div>
  );
}
