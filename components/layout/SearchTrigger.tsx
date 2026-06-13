"use client";

export function SearchTrigger({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-lore-search"))}
      className={className}
    >
      Cmd / Ctrl + K to search
    </button>
  );
}
