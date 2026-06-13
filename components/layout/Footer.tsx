import Link from "next/link";

import { MetallicDivider } from "@/components/lore/MetallicDivider";

export function Footer() {
  return (
    <footer className="border-t border-[var(--metal-border)] bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <p className="font-heading text-sm tracking-[0.16em] text-[var(--gold)]">WH40K LORE</p>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
              An unofficial, non-commercial fan archive for studying the setting of Warhammer 40,000. This site is not affiliated with, endorsed by, or connected to Games Workshop Limited in any way.
            </p>
            <MetallicDivider className="my-6" />
            <div className="max-w-2xl space-y-3 text-[11px] leading-relaxed text-[var(--muted)]">
              <p>
                Warhammer 40,000, Space Marine, the Aquila double-headed eagle logo, and all associated marks, imagery, characters, and lore are &copy; Games Workshop Limited. All rights reserved.
              </p>
              <p>
                This project is made for lore appreciation and education only. No challenge to ownership is intended. Content may be amended or removed upon request from the rights holder.
              </p>
              <p className="text-[var(--parchment)]/70">
                In the grim darkness of the far future, there is only war.
              </p>
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Navigate</p>
            <div className="mt-4 grid gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <Link href="/cosmology/materium-immaterium" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Cosmology</Link>
              <Link href="/imperium/golden-throne" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Imperium</Link>
              <Link href="/primarchs/roboute-guilliman" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Primarchs</Link>
              <Link href="/chaos/ruinous-powers" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Chaos</Link>
              <Link href="/xenos/necrons" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Xenos</Link>
              <Link href="/timeline" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Timeline</Link>
              <Link href="/learning" className="text-[var(--muted)] transition-colors hover:text-[var(--gold)]">Learning</Link>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-[var(--metal-border)] pt-6 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]/60">
          Fan-made archive &middot; Not for commercial use &middot; &copy; Games Workshop Limited
        </p>
      </div>
    </footer>
  );
}