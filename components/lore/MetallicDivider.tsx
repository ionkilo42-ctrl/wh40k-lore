import { cn } from "@/lib/utils";

export function MetallicDivider({ className }: { className?: string }) {
  return (
    <div className={cn("metallic-divider flex items-center gap-3", className)} aria-hidden="true">
      <span className="h-px flex-1" />
      <span className="size-1 rotate-45 border border-[var(--gold)]/70" />
      <span className="h-px flex-1" />
    </div>
  );
}
