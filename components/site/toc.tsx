"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export type TocGroup = { id: string; title: string; items: { id: string; title: string }[] };

export function Toc({ groups }: { groups: TocGroup[] }) {
  const [active, setActive] = React.useState<string>(groups[0]?.items[0]?.id ?? "");
  React.useEffect(() => {
    const ids = groups.flatMap((g) => g.items.map((i) => i.id));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [groups]);
  const [query, setQuery] = React.useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? groups
        .map((g) => ({ ...g, items: g.items.filter((i) => i.title.toLowerCase().includes(q)) }))
        .filter((g) => g.items.length > 0)
    : groups;
  return (
    <nav aria-label="Component library" className="text-sm">
      <p className="pb-3 font-medium">Component library</p>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search components"
        aria-label="Search components"
        className="mb-4 h-9 w-full rounded-md border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
      <div className="flex flex-col gap-4">
        {filtered.length === 0 && <p className="text-muted-foreground">No components found.</p>}
        {filtered.map((g) => (
          <div key={g.id} className="flex flex-col gap-1">
            <a href={`#${g.id}`} className="pb-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">
              {g.title}
            </a>
            {g.items.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className={cn(
                  "border-l py-0.5 pl-3 text-muted-foreground transition-colors hover:text-foreground",
                  active === i.id && "border-l-2 border-cr-orange bg-cr-orange/10 -ml-px font-medium text-foreground"
                )}
              >
                {i.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
