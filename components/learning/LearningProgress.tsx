"use client";

import { Check, Circle } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  { id: "cosmology", title: "Understand the Cosmos", description: "Learn the Materium, Immaterium, psychic energy, and the gods born from emotion.", href: "/cosmology/materium-immaterium" },
  { id: "imperium", title: "Enter the Imperium", description: "Study the Emperor, the Golden Throne, and the machinery of humanity's survival.", href: "/imperium/golden-throne" },
  { id: "heresy", title: "Witness the Heresy", description: "Trace the Great Crusade's triumph and the betrayal that ended its promise.", href: "/imperium/horus-heresy" },
  { id: "primarchs", title: "Know the Primarchs", description: "Meet the engineered sons whose virtues and failures reshaped the galaxy.", href: "/primarchs/roboute-guilliman" },
  { id: "indomitus", title: "Reach the Current Era", description: "Cross the Great Rift and understand the desperate wars of the Era Indomitus.", href: "/imperium/indomitus-era" },
] as const;

export function LearningProgress() {
  const [complete, setComplete] = useState<string[]>([]);

  useEffect(() => {
    setComplete(JSON.parse(localStorage.getItem("wh40k-learning-progress") ?? "[]"));
  }, []);

  const toggle = (id: string) => {
    setComplete((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      localStorage.setItem("wh40k-learning-progress", JSON.stringify(next));
      return next;
    });
  };

  const percent = Math.round((complete.length / steps.length) * 100);

  return (
    <div>
      <div className="mb-10 border border-[var(--metal-border)] bg-black/30 p-5">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.16em]">
          <span className="text-[var(--muted)]">Archive progress</span>
          <span className="text-[var(--gold)]">{percent}%</span>
        </div>
        <div className="mt-4 h-1 bg-white/5">
          <div className="h-full bg-gradient-to-r from-[var(--blood)] to-[var(--gold)] transition-all duration-500" style={{ width: `${percent}%` }} />
        </div>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isComplete = complete.includes(step.id);
          return (
            <article key={step.id} className="ornate-panel grid gap-5 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <span className="font-heading text-3xl text-[var(--gold)]/30">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-heading text-xl text-[var(--parchment)]">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                <a href={step.href} className="mt-3 inline-block text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">Open reading →</a>
              </div>
              <button onClick={() => toggle(step.id)} className="flex items-center gap-2 border border-[var(--metal-border)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] hover:border-[var(--gold)]/60 hover:text-[var(--gold)]">
                {isComplete ? <Check className="size-3.5 text-[var(--gold)]" /> : <Circle className="size-3.5" />}
                {isComplete ? "Complete" : "Mark read"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
