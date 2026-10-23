"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Switch({
  defaultChecked = false,
  label,
  className,
}: {
  defaultChecked?: boolean;
  label: string;
  className?: string;
}) {
  const [on, setOn] = React.useState(defaultChecked);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => setOn(!on)}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors",
        on ? "bg-primary" : "bg-input",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background shadow-sm transition-transform",
          on ? "translate-x-4" : "translate-x-0.5"
        )}
      />
    </button>
  );
}
