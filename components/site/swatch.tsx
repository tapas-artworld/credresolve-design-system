"use client";
import { useState } from "react";
import { inkFor } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function Swatch({
  name,
  hex,
  note,
  size = "md",
}: {
  name: string;
  hex: string;
  note?: string;
  size?: "md" | "lg";
}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${hex}`}
      className={cn(
        "group flex flex-col justify-end gap-0.5 rounded-lg border p-3 text-left transition-transform hover:-translate-y-0.5",
        size === "lg" ? "h-40" : "h-28"
      )}
      style={{ background: hex, color: inkFor(hex) }}
    >
      <span className="text-sm font-medium">{name}</span>
      <span className="font-mono text-xs opacity-80">{copied ? "Copied" : hex}</span>
      {note && <span className="text-[11px] leading-tight opacity-70">{note}</span>}
    </button>
  );
}
