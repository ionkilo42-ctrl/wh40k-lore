import Link from "next/link";
import { ArrowRight, Atom, BookOpen, Crown, GitBranch, Orbit, Sparkles, Swords } from "lucide-react";

import { Hero } from "@/components/home/Hero";
import { TimelineWidget } from "@/components/home/TimelineWidget";
import { FactionCard } from "@/components/lore/FactionCard";
import { MetallicDivider } from "@/components/lore/MetallicDivider";
import factions from "@/content/factions.json";
import { getAllArticles } from "@/lib/content";

const archiveDoors = [
  { title: "Cosmology", description: "The Materium, the Warp, souls, gods, and the forces beneath reality.", href: "/cosmology/materium-immaterium", icon: Orbit },
  { title: "The Imperium", description: "Ten thousand years of human dominion, decay, faith, and survival.", href: "/imperium/golden-throne", icon: Crown },
  { title: "Primarchs", description: "The Emperor's lost sons, their Legions, victories, and betrayals.", href: "/primarchs/roboute-guilliman", icon: Swords },
  { title: "Chaos", description: "The Ruinous Powers and the mortal hosts that answer their call.", href: "/chaos/ruinous-powers", icon: Sparkles },
  { title: "Xenos", description: "Ancient species, alien empires, and threats that predate human dominion.", href: "/xenos/necrons", icon: Atom },
  { title: "Learning Roadmap", description: "A guided path through the setting, from first principles to M42.", href: "/learning", icon: BookOpen },
  { title: "Galactic Timeline", description: "Trace the long chain of disasters that formed the current era.", href: "/timeline", icon: GitBranch },
];

export default function Home() {
  const featuredArticles = getAllArticles().filter((article) => article.featured).slice(0, 4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--gold)]">Choose an archive</p>
          <h2 className="mt-5 font-heading text-3xl leading-tight text-[var(--parchment)] sm:text-5xl">Every war has an origin.</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">Follow the setting by idea, institution, demigod, or calamity. Each archive is built to connect the facts into a coherent history.</p>
        </div>
        <div className="mt-12 grid gap-px border border-[var(--metal-border)] bg-[var(--metal-border)] sm:grid-cols-2 lg:grid-cols-3">
          {archiveDoors.map((door) => {
            const Icon = door.icon;
            return (
              <Link key={door.title} href={door.href} className="group bg-[var(--void)] p-7 transition-colors hover:bg-[var(--gold)]/[0.035]">
                <Icon className="size-6 text-[var(--gold)]" strokeWidth={1.4} />
                <h3 className="mt-8 font-heading text-lg text-[var(--parchment)]">{door.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{door.description}</p>
                <span className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--gold)] opacity-70 transition-all group-hover:gap-3 group-hover:opacity-100">
                  Enter archive <ArrowRight className="size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[var(--metal-border)] bg-black/25 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--gold)]">The long war</p>
              <h2 className="mt-5 font-heading text-3xl text-[var(--parchment)] sm:text-5xl">A galaxy shaped by catastrophe</h2>
            </div>
            <Link href="/timeline" className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold)]">View complete timeline →</Link>
          </div>
          <TimelineWidget />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--gold)]">Featured records</p>
            <h2 className="mt-5 font-heading text-3xl leading-tight text-[var(--parchment)] sm:text-5xl">Foundational lore</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">Begin with the forces and decisions that define every other conflict in the setting.</p>
          </div>
          <div className="space-y-1">
            {featuredArticles.map((article, index) => (
              <Link key={article.href} href={article.href} className="group grid gap-4 border-b border-[var(--metal-border)] py-5 sm:grid-cols-[50px_1fr_auto] sm:items-center">
                <span className="font-heading text-xl text-[var(--gold)]/35">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong className="block font-heading text-lg font-medium text-[var(--parchment)] group-hover:text-[var(--gold)]">{article.title}</strong>
                  <span className="mt-1 block text-xs leading-6 text-[var(--muted)]">{article.excerpt}</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--gold)]">{article.readingTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <MetallicDivider className="mb-14" />
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--gold)]">Powers of the age</p>
          <h2 className="mt-5 font-heading text-3xl text-[var(--parchment)] sm:text-5xl">Factions without mercy</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {factions.map((faction) => <FactionCard key={faction.id} faction={faction} />)}
        </div>
      </section>
    </>
  );
}
