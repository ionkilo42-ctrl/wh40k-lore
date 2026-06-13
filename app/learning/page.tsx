import type { Metadata } from "next";

import { LearningProgress } from "@/components/learning/LearningProgress";

export const metadata: Metadata = {
  title: "Learning Roadmap",
  description: "A guided path through the essential concepts and history of Warhammer 40,000.",
};

export default function LearningPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
      <header className="max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--gold)]">A path through the darkness</p>
        <h1 className="mt-5 font-heading text-4xl leading-tight text-[var(--parchment)] sm:text-6xl">Learn the setting without getting lost</h1>
        <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">Move from cosmology to the current era in a sequence designed to make each new name, faction, and catastrophe easier to place.</p>
      </header>
      <div className="mt-14"><LearningProgress /></div>
    </div>
  );
}
