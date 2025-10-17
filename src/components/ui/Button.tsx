
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "solid" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, variant = "solid", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-150";
    const variants = {
      solid:
        "bg-cyan-500 hover:bg-cyan-400 text-neutral-950",
      outline:
        "border border-white/10 text-zinc-200 hover:bg-white/5",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
