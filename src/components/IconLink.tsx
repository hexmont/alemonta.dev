import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
};

export function IconLink({ href, label, className, children }: Props) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full",
        "border border-white/10 bg-white/5 text-zinc-200 hover:text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </a>
  );
}
