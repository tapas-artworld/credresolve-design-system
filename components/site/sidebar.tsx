"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { nav } from "./nav";
import { cn } from "@/lib/utils";

type NavItem = { title: string; href: string };

// Anchor links ("/page#id") belong to the page link that precedes them.
function groupItems(items: NavItem[]) {
  const out: { parent: NavItem; children: NavItem[] }[] = [];
  for (const item of items) {
    if (item.href.includes("#") && out.length) out[out.length - 1].children.push(item);
    else out.push({ parent: item, children: [] });
  }
  return out;
}

const ACTIVE = "bg-transparent font-semibold text-cr-orange hover:bg-transparent hover:text-cr-orange";

function NavEntry({ parent, children, path, hash, setHash, onNavigate }: { parent: NavItem; children: NavItem[]; path: string; hash: string; setHash: (h: string) => void; onNavigate?: () => void }) {
  const onPage = path === parent.href;
  const activeChild = onPage ? children.find((c) => hash && c.href.endsWith(hash)) : undefined;
  const active = onPage && !activeChild;
  const [open, setOpen] = useState(active);
  const expanded = open || onPage;
  const hasChildren = children.length > 0;
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Link
          href={parent.href}
          onClick={() => {
            setHash("");
            onNavigate?.();
          }}
          aria-current={active ? "page" : undefined}
          className={cn(
            "relative flex-1 rounded-md px-2 py-1.5 font-medium outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
            active ? ACTIVE : "text-sidebar-foreground"
          )}
        >
          {parent.title}
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${parent.title}`}
            aria-expanded={expanded}
            onClick={() => setOpen(!expanded)}
            className="ml-1 grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRight className={cn("size-4 transition-transform", expanded && "rotate-90")} />
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <div className="ml-4 mt-1 flex flex-col border-l pl-2">
          {children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              onClick={() => {
                setHash(c.href.slice(c.href.indexOf("#")));
                onNavigate?.();
              }}
              aria-current={c === activeChild ? "location" : undefined}
              className={cn(
                "rounded-md px-2 py-1 text-[13px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                c === activeChild ? ACTIVE : "text-muted-foreground hover:text-sidebar-accent-foreground"
              )}
            >
              {c.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const path = usePathname();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [path]);
  return (
    <nav className="flex flex-col gap-6 text-sm" aria-label="Documentation">
      {nav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group.title}
          </p>
          {groupItems(group.items).map((e) => (
            <NavEntry key={e.parent.href} {...e} path={path} hash={hash} setHash={setHash} onNavigate={onNavigate} />
          ))}
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r bg-sidebar px-4 py-6 lg:block">
      <NavList />
    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid size-9 place-items-center rounded-md hover:bg-accent"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
      {open && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t bg-sidebar px-4 py-6">
          <NavList onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
