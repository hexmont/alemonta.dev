import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
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
Textarea.displayName = "Textarea";
