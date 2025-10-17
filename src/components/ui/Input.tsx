import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-zinc-100",
          "placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/40",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
