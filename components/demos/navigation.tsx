"use client";
import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, Ellipsis, FileText, House, LayoutDashboard, Megaphone, Search, Settings, Upload, Users } from "lucide-react";
import { MenuItem, MenuSeparator, Popover } from "./primitives";
import { cn } from "@/lib/utils";

/* Sidebar --------------------------------------------------------------------- */
export function SidebarDemo() {
  const [active, setActive] = React.useState("Campaigns");
  const [collapsed, setCollapsed] = React.useState(false);
  const items = [
    { t: "Overview", i: LayoutDashboard },
    { t: "Campaigns", i: Megaphone },
    { t: "Lender uploads", i: Upload },
    { t: "Borrowers", i: Users },
    { t: "Reports", i: FileText },
    { t: "Settings", i: Settings },
  ];
  return (
    <div className="flex h-80 w-full overflow-hidden rounded-lg border">
      <aside className={cn("flex shrink-0 flex-col gap-4 border-r bg-sidebar p-2 transition-[width]", collapsed ? "w-14" : "w-56")}>
        <button type="button" className="flex items-center gap-2 rounded-md p-1.5 text-left hover:bg-sidebar-accent">
          <img src="/brand/aastra-mark.png" alt="Aastra" className="size-8 shrink-0 rounded-md" />
          {!collapsed && (
            <>
              <span className="grid flex-1 leading-tight">
                <span className="text-sm font-semibold">Aastra</span>
                <span className="text-xs text-muted-foreground">CredResolve OS</span>
              </span>
              <ChevronsUpDown className="size-4 opacity-50" />
            </>
          )}
        </button>
        <nav className="flex flex-col gap-0.5">
          {!collapsed && <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">Platform</p>}
          {items.map(({ t, i: Icon }) => (
            <button
              key={t}
              type="button"
              title={t}
              onClick={() => setActive(t)}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent",
                active === t && "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
              )}
            >
              <Icon className={cn("size-4 shrink-0", active === t && "text-primary")} />
              {!collapsed && t}
            </button>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <div className="flex h-12 items-center gap-2 border-b px-3">
          <button type="button" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar" className="grid size-7 place-items-center rounded-md hover:bg-accent">
            {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </button>
          <span className="text-sm text-muted-foreground">Aastra</span>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium">{active}</span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 p-3">
          <div className="rounded-lg bg-muted/60" />
          <div className="rounded-lg bg-muted/60" />
          <div className="col-span-2 rounded-lg bg-muted/60" />
        </div>
      </div>
    </div>
  );
}

/* Breadcrumb ------------------------------------------------------------------ */
export function BreadcrumbDemo() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li><a href="#breadcrumb" className="inline-flex items-center gap-1 hover:text-foreground"><House className="size-3.5" /> Home</a></li>
        <li aria-hidden><ChevronRight className="size-3.5" /></li>
        <li>
          <Popover
            className="w-44"
            trigger={({ toggle }) => (
              <button type="button" onClick={toggle} aria-label="More pages" className="flex size-6 items-center justify-center rounded hover:bg-accent">
                <Ellipsis className="size-4" />
              </button>
            )}
          >
            {(close) => (
              <>
                <MenuItem onSelect={close}>Lenders</MenuItem>
                <MenuItem onSelect={close}>HDFC Bank</MenuItem>
              </>
            )}
          </Popover>
        </li>
        <li aria-hidden><ChevronRight className="size-3.5" /></li>
        <li><a href="#breadcrumb" className="hover:text-foreground">Campaigns</a></li>
        <li aria-hidden><ChevronRight className="size-3.5" /></li>
        <li aria-current="page" className="font-normal text-foreground">DPD 31–60 · batch 14</li>
      </ol>
    </nav>
  );
}

/* Navigation menu ------------------------------------------------------------- */
export function NavigationMenuDemo() {
  const [open, setOpen] = React.useState<string | null>(null);
  const menus: Record<string, { t: string; d: string }[]> = {
    Products: [
      { t: "Chakra", d: "Digital and voice outreach across every channel." },
      { t: "Jatayu", d: "Field operations and last-mile execution." },
      { t: "Drona", d: "Speech QA and real-time call audit." },
      { t: "LegalX", d: "Legal notices and workflows." },
    ],
    Solutions: [
      { t: "Banks", d: "Early and late-bucket recovery at scale." },
      { t: "NBFCs", d: "Collections built for high-volume portfolios." },
    ],
  };
  return (
    <nav className="relative" onMouseLeave={() => setOpen(null)}>
      <ul className="flex items-center gap-1">
        {Object.keys(menus).map((k) => (
          <li key={k}>
            <button
              type="button"
              aria-expanded={open === k}
              onMouseEnter={() => setOpen(k)}
              onClick={() => setOpen(open === k ? null : k)}
              className={cn("inline-flex h-9 items-center gap-1 rounded-md px-4 text-sm font-medium hover:bg-accent", open === k && "bg-accent")}
            >
              {k} <ChevronDown className={cn("size-3 transition-transform", open === k && "rotate-180")} />
            </button>
          </li>
        ))}
        <li>
          <a href="#navigation-menu" className="inline-flex h-9 items-center rounded-md px-4 text-sm font-medium hover:bg-accent">
            Docs
          </a>
        </li>
      </ul>
      {open && (
        <div className="absolute left-0 top-full z-30 mt-1.5 w-[min(30rem,calc(100vw-4rem))] rounded-md border bg-popover p-3 shadow-md">
          <ul className="grid gap-1 sm:grid-cols-2">
            {menus[open].map((m) => (
              <li key={m.t}>
                <a href="#navigation-menu" className="block rounded-md p-3 hover:bg-accent">
                  <p className="text-sm font-medium">{m.t}</p>
                  <p className="text-sm text-muted-foreground">{m.d}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

/* Menubar --------------------------------------------------------------------- */
export function MenubarDemo() {
  const menus: Record<string, [string, string?][]> = {
    File: [["New campaign", "⌘N"], ["Upload lender file", "⌘U"], ["Export report", "⌘E"]],
    Edit: [["Undo", "⌘Z"], ["Redo", "⇧⌘Z"], ["Find borrower", "⌘F"]],
    View: [["Show call log"], ["Show settlements"], ["Full screen", "⌃⌘F"]],
  };
  return (
    <div className="flex h-10 items-center gap-1 rounded-md border bg-background p-1">
      {Object.entries(menus).map(([k, items]) => (
        <Popover
          key={k}
          className="w-56"
          trigger={({ toggle, open }) => (
            <button type="button" onClick={toggle} className={cn("rounded-sm px-3 py-1 text-sm font-medium hover:bg-accent", open && "bg-accent")}>
              {k}
            </button>
          )}
        >
          {(close) => (
            <>
              {items.map(([t, s], i) => (
                <React.Fragment key={t}>
                  {i === items.length - 1 && <MenuSeparator />}
                  <MenuItem shortcut={s} onSelect={close}>{t}</MenuItem>
                </React.Fragment>
              ))}
            </>
          )}
        </Popover>
      ))}
    </div>
  );
}

/* Pagination ------------------------------------------------------------------ */
export function PaginationDemo() {
  const [page, setPage] = React.useState(2);
  const total = 12;
  const pages = [1, 2, 3];
  const btn = "inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium hover:bg-accent disabled:pointer-events-none disabled:opacity-50";
  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      <button type="button" className={btn} disabled={page === 1} onClick={() => setPage(page - 1)}>
        <ChevronLeft className="size-4" /> Previous
      </button>
      {pages.map((p) => (
        <button key={p} type="button" aria-current={page === p ? "page" : undefined} onClick={() => setPage(p)} className={cn(btn, page === p && "border border-input")}>
          {p}
        </button>
      ))}
      <span className="px-2 text-muted-foreground"><Ellipsis className="size-4" /></span>
      <button type="button" onClick={() => setPage(total)} className={cn(btn, page === total && "border border-input")}>{total}</button>
      <button type="button" className={btn} disabled={page === total} onClick={() => setPage(page + 1)}>
        Next <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}

/* Tabs ------------------------------------------------------------------------ */
export function TabsDemo() {
  const tabs = { Overview: "8,420 accounts · ₹3.9 Cr outstanding · 31% contacted today.", Calls: "2,610 calls made · 41% connected · avg. 3m 12s.", Settlements: "312 promises to pay due today, worth ₹38.4 L." };
  const [t, setT] = React.useState<keyof typeof tabs>("Overview");
  return (
    <div className="w-full max-w-md">
      <div role="tablist" className="inline-flex h-9 items-center rounded-lg bg-muted p-1 text-muted-foreground">
        {(Object.keys(tabs) as (keyof typeof tabs)[]).map((k) => (
          <button
            key={k}
            role="tab"
            type="button"
            aria-selected={t === k}
            onClick={() => setT(k)}
            className={cn("rounded-md px-3 py-1 text-sm font-medium transition-colors", t === k && "bg-background text-foreground shadow-sm")}
          >
            {k}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-3 rounded-lg border p-4 text-sm">
        {tabs[t]}
      </div>
    </div>
  );
}

/* Command --------------------------------------------------------------------- */
export function CommandDemo() {
  const [q, setQ] = React.useState("");
  const groups = {
    Suggestions: ["New campaign", "Upload lender file", "Search borrower"],
    Pages: ["Overview", "Campaigns", "Reports", "Settings"],
  };
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border shadow-md">
      <div className="flex items-center gap-2 border-b px-3">
        <Search className="size-4 opacity-50" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command or search…" className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
      </div>
      <div className="max-h-64 overflow-y-auto p-1">
        {Object.entries(groups).map(([g, items]) => {
          const list = items.filter((i) => i.toLowerCase().includes(q.toLowerCase()));
          if (!list.length) return null;
          return (
            <div key={g} className="py-1">
              <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">{g}</p>
              {list.map((i) => (
                <MenuItem key={i}>{i}</MenuItem>
              ))}
            </div>
          );
        })}
        {Object.values(groups).flat().every((i) => !i.toLowerCase().includes(q.toLowerCase())) && (
          <p className="py-6 text-center text-sm text-muted-foreground">No results found.</p>
        )}
      </div>
    </div>
  );
}

export function LinkCard({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href}>{children}</Link>;
}
