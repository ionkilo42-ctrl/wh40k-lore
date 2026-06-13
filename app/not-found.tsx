import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-7xl text-[var(--blood)]">404</p>
      <h1 className="mt-6 font-heading text-3xl text-[var(--parchment)]">This record has been lost to the Warp.</h1>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">The archive path is broken, forbidden, or never existed.</p>
      <Link href="/" className="mt-8 border border-[var(--gold)]/50 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Return to the archives</Link>
    </div>
  );
}
