"use client";
import * as React from "react";
import { CircleCheck, Copy, Ellipsis, Info, Pencil, Phone, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { MenuItem, MenuLabel, MenuSeparator, Modal, Popover, useClickOutside } from "./primitives";
import { cn } from "@/lib/utils";

/* Alert dialog ---------------------------------------------------------------- */
export function AlertDialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Stop campaign
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        dismissible={false}
        title="Stop this campaign?"
        description="Calls and messages scheduled for 8,420 accounts will be cancelled. You can restart the campaign later."
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Keep running
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Stop campaign
            </Button>
          </>
        }
      />
    </>
  );
}

/* Dialog ---------------------------------------------------------------------- */
export function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Edit borrower
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Edit borrower"
        description="Update contact details. Changes apply to all open campaigns."
        footer={<Button onClick={() => setOpen(false)}>Save changes</Button>}
      >
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="d-name">Name</Label>
            <Input id="d-name" defaultValue="Ramesh Kumar" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="d-phone">Mobile</Label>
            <Input id="d-phone" defaultValue="98765 43210" />
          </div>
        </div>
      </Modal>
    </>
  );
}

/* Sheet ----------------------------------------------------------------------- */
export function SheetDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open account details
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} side="right" title="LAN-00482193" description="Ramesh Kumar · HDFC Bank">
        <dl className="grid gap-3 text-sm">
          {[
            ["Outstanding", "₹48,200"],
            ["DPD", "42 days"],
            ["Last contact", "Voice · 21 Oct, 11:40"],
            ["Promise to pay", "30 Oct · ₹12,500"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b pb-2">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-medium tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
      </Modal>
    </>
  );
}

/* Drawer ---------------------------------------------------------------------- */
export function DrawerDemo() {
  const [open, setOpen] = React.useState(false);
  const [goal, setGoal] = React.useState(350);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Set daily target
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        side="bottom"
        title="Daily call target"
        description="Calls per agent per day."
        footer={
          <>
            <Button onClick={() => setOpen(false)}>Save</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </>
        }
      >
        <div className="flex items-center justify-center gap-6 py-2">
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Decrease" onClick={() => setGoal(Math.max(50, goal - 10))}>
            –
          </Button>
          <span className="w-24 text-center text-5xl font-bold tabular-nums">{goal}</span>
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Increase" onClick={() => setGoal(goal + 10)}>
            +
          </Button>
        </div>
      </Modal>
    </>
  );
}

/* Popover --------------------------------------------------------------------- */
export function PopoverDemo() {
  return (
    <Popover
      className="w-72 p-4"
      trigger={({ toggle }) => (
        <Button variant="outline" onClick={toggle}>
          Retry rules
        </Button>
      )}
    >
      <div className="grid gap-3">
        <div>
          <p className="font-medium">Retry rules</p>
          <p className="text-sm text-muted-foreground">Applied when a call is not answered.</p>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <Label htmlFor="p-att">Attempts</Label>
          <Input id="p-att" defaultValue="3" className="col-span-2 h-8" />
          <Label htmlFor="p-gap">Gap</Label>
          <Input id="p-gap" defaultValue="4 hours" className="col-span-2 h-8" />
        </div>
      </div>
    </Popover>
  );
}

/* Hover card ------------------------------------------------------------------ */
export function HoverCardDemo() {
  return (
    <div className="group relative inline-block">
      <Button variant="link" className="px-0">
        @drona
      </Button>
      <div className="invisible absolute left-1/2 top-full z-30 mt-1 w-[min(20rem,calc(100vw-5rem))] -translate-x-1/2 rounded-md border bg-popover p-4 text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="flex gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">D</span>
          <div className="grid gap-1">
            <p className="text-sm font-semibold">Drona</p>
            <p className="text-sm">Speech QA and real-time call audit for every collection call.</p>
            <p className="text-xs text-muted-foreground">Part of CredResolve OS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tooltip --------------------------------------------------------------------- */
export function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}

export function TooltipDemo() {
  return (
    <div className="flex gap-3 pt-8">
      <Tooltip label="Call borrower">
        <Button variant="outline" size="icon" aria-label="Call borrower">
          <Phone />
        </Button>
      </Tooltip>
      <Tooltip label="Copy loan account number">
        <Button variant="outline" size="icon" aria-label="Copy loan account number">
          <Copy />
        </Button>
      </Tooltip>
    </div>
  );
}

/* Dropdown menu --------------------------------------------------------------- */
export function DropdownMenuDemo() {
  return (
    <Popover
      className="w-56"
      trigger={({ toggle, open }) => (
        <Button variant="outline" onClick={toggle} aria-expanded={open}>
          <Ellipsis /> Actions
        </Button>
      )}
    >
      {(close) => (
        <div role="menu">
          <MenuLabel>Account</MenuLabel>
          <MenuSeparator />
          <MenuItem shortcut="⌘E" onSelect={close}>
            <Pencil /> Edit details
          </MenuItem>
          <MenuItem shortcut="⌘C" onSelect={close}>
            <Copy /> Copy LAN
          </MenuItem>
          <MenuItem onSelect={close}>
            <Phone /> Call now
          </MenuItem>
          <MenuSeparator />
          <MenuItem destructive onSelect={close}>
            <Trash2 /> Remove from campaign
          </MenuItem>
        </div>
      )}
    </Popover>
  );
}

/* Context menu ---------------------------------------------------------------- */
export function ContextMenuDemo() {
  const [pos, setPos] = React.useState<{ x: number; y: number } | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const close = React.useCallback(() => setPos(null), []);
  useClickOutside(ref, close, !!pos);
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      className="relative grid h-40 w-full max-w-md place-items-center rounded-md border border-dashed text-sm text-muted-foreground"
    >
      Right-click here
      {pos && (
        <div ref={ref} role="menu" className="absolute z-30 w-52 rounded-md border bg-popover p-1 text-popover-foreground shadow-md" style={{ left: Math.min(pos.x, 220), top: Math.min(pos.y, 40) }}>
          <MenuItem shortcut="⌘[" onSelect={close}>Back</MenuItem>
          <MenuItem shortcut="⌘R" onSelect={close}>Reload</MenuItem>
          <MenuSeparator />
          <MenuItem onSelect={close}>Show call log</MenuItem>
          <MenuItem disabled>Export (no access)</MenuItem>
        </div>
      )}
    </div>
  );
}

/* Toast & Sonner -------------------------------------------------------------- */
type T = { id: number; title: string; body: string; kind: "default" | "success" | "error" };
const ToastCtx = React.createContext<(t: Omit<T, "id">) => void>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<T[]>([]);
  const push = React.useCallback((t: Omit<T, "id">) => {
    const id = Date.now() + Math.random();
    setItems((s) => [...s.slice(-2), { ...t, id }]);
    setTimeout(() => setItems((s) => s.filter((x) => x.id !== id)), 4000);
  }, []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div aria-live="polite" className="fixed bottom-4 right-4 z-[110] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2">
        {items.map((t) => (
          <div
            key={t.id}
            className={cn(
              "flex items-start gap-3 rounded-lg border bg-background p-4 shadow-lg",
              t.kind === "error" && "border-destructive bg-destructive text-destructive-foreground"
            )}
          >
            {t.kind === "success" && <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" />}
            {t.kind === "default" && <Info className="mt-0.5 size-4 shrink-0 text-primary" />}
            <div className="grid flex-1 gap-0.5">
              <p className="text-sm font-semibold">{t.title}</p>
              <p className={cn("text-sm", t.kind === "error" ? "opacity-90" : "text-muted-foreground")}>{t.body}</p>
            </div>
            <button type="button" aria-label="Dismiss" onClick={() => setItems((s) => s.filter((x) => x.id !== t.id))} className="opacity-60 hover:opacity-100">
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function ToastDemo() {
  const toast = React.useContext(ToastCtx);
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => toast({ kind: "default", title: "Campaign scheduled", body: "Starts tomorrow at 10:00 for 8,420 accounts." })}>
        Show toast
      </Button>
      <Button variant="outline" onClick={() => toast({ kind: "error", title: "Upload failed", body: "12 rows are missing mobile numbers." })}>
        Show error toast
      </Button>
    </div>
  );
}

export function SonnerDemo() {
  const toast = React.useContext(ToastCtx);
  return (
    <Button variant="outline" onClick={() => toast({ kind: "success", title: "Payment received", body: "₹12,500 from LAN-00482193 via UPI." })}>
      Show notification
    </Button>
  );
}
