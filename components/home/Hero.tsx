"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

import { WarpParticles } from "@/components/home/WarpParticles";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero-surface relative isolate min-h-[690px] overflow-hidden border-b border-[var(--gold)]/20">
      <WarpParticles />
      <div className="relative z-10 mx-auto flex min-h-[690px] max-w-7xl items-center px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-[var(--parchment)] sm:text-7xl lg:text-[104px]">
            THERE IS
            <span className="block text-[var(--gold)]">ONLY WAR</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Enter a guided archive of the 41st millennium: its impossible cosmology, fallen demigods, ancient species, and wars without end.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/learning">
                Begin the pilgrimage <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.dispatchEvent(new Event("open-lore-search"))}
            >
              <Search className="size-4" />
              Search the archives
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--void)] to-transparent" />
    </section>
  );
}
