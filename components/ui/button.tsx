import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border text-xs font-semibold uppercase tracking-[0.18em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[var(--gold)]/60 bg-[var(--gold)] text-black hover:bg-[#efd46e] hover:shadow-[0_0_24px_rgba(212,175,55,.2)]",
        outline:
          "border-[var(--metal-border)] bg-black/20 text-[var(--parchment)] hover:border-[var(--gold)]/70 hover:text-[var(--gold)]",
        ghost:
          "border-transparent bg-transparent text-[var(--muted)] hover:bg-white/5 hover:text-[var(--parchment)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3 text-[10px]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
