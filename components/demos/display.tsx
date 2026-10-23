"use client";
import * as React from "react";
import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, GripVertical, Info, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "./inputs";
import { cn } from "@/lib/utils";

/* Accordion ------------------------------------------------------------------- */
const faqs = [
  ["How does CredResolve pick the next channel?", "Workflow IQ looks at past response, time of day and promise history, then chooses voice, WhatsApp, SMS or field."],
  ["Can lenders upload their own templates?", "Yes. Upload approved templates per channel; every message is checked against compliance guardrails before it is sent."],
  ["How are calls audited?", "Drona transcribes and scores every call in real time for script adherence, tone and compliance."],
];
export function AccordionDemo() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="w-full max-w-xl">
      {faqs.map(([q, a], i) => (
        <div key={q} className="border-b">
          <h3>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:underline"
            >
              {q}
              <ChevronDown className={cn("size-4 shrink-0 transition-transform", open === i && "rotate-180")} />
            </button>
          </h3>
          {open === i && <p className="pb-4 text-sm text-muted-foreground">{a}</p>}
        </div>
      ))}
    </div>
  );
}

/* Alert ----------------------------------------------------------------------- */
export function AlertDemo() {
  return (
    <div className="grid w-full gap-4">
      <Alert>
        <Info />
        <AlertTitle>Upload processed</AlertTitle>
        <AlertDescription>1,284 accounts from HDFC batch 14 are ready for allocation.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <TriangleAlert />
        <AlertTitle>12 rows failed validation</AlertTitle>
        <AlertDescription>Mobile numbers are missing. Download the error file, fix the rows and upload again.</AlertDescription>
      </Alert>
    </div>
  );
}

/* Aspect ratio ---------------------------------------------------------------- */
export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg" style={{ background: "var(--cr-gradient)" }}>
        <img src="/brand/credresolve-mark-white.svg" alt="" className="absolute left-1/2 top-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2" />
        <span className="absolute bottom-3 left-3 rounded bg-black/40 px-2 py-0.5 text-xs text-white">16 : 9</span>
      </div>
    </div>
  );
}

/* Avatar ---------------------------------------------------------------------- */
export function Avatar({ name, src, className }: { name: string; src?: string; className?: string }) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <span className={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="aspect-square size-full object-cover" />
      ) : (
        <span aria-label={name} className="grid size-full place-items-center bg-muted text-sm font-medium">
          {initials}
        </span>
      )}
    </span>
  );
}
export function AvatarDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar name="CredResolve" src="/brand/credresolve-mark-orange.svg" className="border bg-white p-1.5" />
      <Avatar name="Priya Sharma" />
      <div className="flex -space-x-2">
        {["Ravi Iyer", "Anita Das", "Mohit Jain"].map((n) => (
          <Avatar key={n} name={n} className="ring-2 ring-background" />
        ))}
        <span className="grid size-10 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground ring-2 ring-background">+8</span>
      </div>
    </div>
  );
}

/* Badge ----------------------------------------------------------------------- */
export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Live</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Field</Badge>
      <Badge variant="success">Paid</Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  );
}

/* Card ------------------------------------------------------------------------ */
export function CardDemo() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardDescription>Recovered this month</CardDescription>
          <CardTitle className="text-3xl tabular-nums">₹4,82,30,000</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-medium text-success">+12.4% vs September</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Start a campaign</CardTitle>
          <CardDescription>Upload a lender file to allocate accounts across channels.</CardDescription>
        </CardHeader>
        <CardFooter className="gap-2">
          <Button>Upload file</Button>
          <Button variant="ghost">Use template</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

/* Carousel -------------------------------------------------------------------- */
const slides = [
  ["Point", "Say the thing first."],
  ["Proof", "Earn the claim with data."],
  ["Action", "Make the next step obvious."],
  ["Credit is a conversation.", "Recovery beyond collections."],
];
export function CarouselDemo() {
  const [i, setI] = React.useState(0);
  return (
    <div className="flex w-full max-w-md items-center gap-3">
      <Button variant="outline" size="icon" className="rounded-full" aria-label="Previous slide" disabled={i === 0} onClick={() => setI(i - 1)}>
        <ChevronLeft />
      </Button>
      <div className="flex-1 overflow-hidden rounded-lg border">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map(([t, b], n) => (
            <div key={t} aria-hidden={n !== i} className="flex aspect-[4/3] w-full shrink-0 flex-col justify-end gap-1 p-6" style={n === slides.length - 1 ? { background: "var(--cr-gradient)" } : undefined}>
              <span className="text-xs text-muted-foreground">{n + 1} / {slides.length}</span>
              <p className={cn("text-2xl font-bold", n === slides.length - 1 && "text-cr-twilight")}>{t}</p>
              <p className={cn("text-sm text-muted-foreground", n === slides.length - 1 && "text-cr-twilight/80")}>{b}</p>
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" size="icon" className="rounded-full" aria-label="Next slide" disabled={i === slides.length - 1} onClick={() => setI(i + 1)}>
        <ChevronRight />
      </Button>
    </div>
  );
}

/* Chart ----------------------------------------------------------------------- */
const months = [
  { m: "May", rec: 3.1, target: 3.4 },
  { m: "Jun", rec: 3.6, target: 3.6 },
  { m: "Jul", rec: 3.4, target: 3.8 },
  { m: "Aug", rec: 4.0, target: 3.9 },
  { m: "Sep", rec: 4.3, target: 4.1 },
  { m: "Oct", rec: 4.8, target: 4.4 },
];
export function ChartDemo() {
  const max = 5;
  const H = 180;
  const [hover, setHover] = React.useState<number | null>(5);
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Recovered vs target</CardTitle>
        <CardDescription>₹ crore, May – October 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 pb-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-chart-1" /> Recovered</span>
          <span className="flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-chart-2" /> Target</span>
        </div>
        <div className="relative" style={{ height: H + 24 }}>
          {[0, 1, 2, 3, 4, 5].map((g) => (
            <div key={g} className="absolute inset-x-6 border-t border-dashed" style={{ bottom: 24 + (g / max) * H }}>
              <span className="absolute -left-6 -translate-y-1/2 text-[10px] text-muted-foreground">{g}</span>
            </div>
          ))}
          <div className="absolute inset-x-6 bottom-0 top-0 flex items-end justify-around">
            {months.map((d, i) => (
              <div key={d.m} className="relative flex flex-col items-center gap-1" onMouseEnter={() => setHover(i)}>
                {hover === i && (
                  <div className="absolute bottom-full z-10 mb-1 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs shadow-sm" style={{ marginBottom: (d.rec / max) * H - 12 }}>
                    <b>{d.m}</b> ₹{d.rec} Cr · target ₹{d.target} Cr
                  </div>
                )}
                <div className="flex items-end gap-1">
                  <div className="w-4 rounded-t bg-chart-1 sm:w-6" style={{ height: (d.rec / max) * H }} />
                  <div className="w-4 rounded-t bg-chart-2 sm:w-6" style={{ height: (d.target / max) * H }} />
                </div>
                <span className="h-5 text-xs text-muted-foreground">{d.m}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* Collapsible ----------------------------------------------------------------- */
export function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false);
  const rest = ["Bajaj Finance · 2,104 accounts", "Axis Bank · 1,870 accounts"];
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">3 lenders uploaded today</p>
        <Button variant="ghost" size="icon" className="size-8" aria-expanded={open} aria-label="Toggle list" onClick={() => setOpen(!open)}>
          <ChevronsUpDown />
        </Button>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">HDFC Bank · 8,420 accounts</div>
      {open && rest.map((r) => <div key={r} className="rounded-md border px-4 py-2 text-sm">{r}</div>)}
    </div>
  );
}

/* Data table ------------------------------------------------------------------ */
type Row = { lan: string; name: string; dpd: number; due: number; status: "Paid" | "Promised" | "No contact" };
const rows: Row[] = [
  { lan: "LAN-00482193", name: "Ramesh Kumar", dpd: 42, due: 48200, status: "Promised" },
  { lan: "LAN-00491027", name: "Sunita Verma", dpd: 12, due: 15600, status: "Paid" },
  { lan: "LAN-00477310", name: "Arjun Mehta", dpd: 75, due: 92300, status: "No contact" },
  { lan: "LAN-00488845", name: "Fatima Shaikh", dpd: 33, due: 27450, status: "Promised" },
  { lan: "LAN-00470052", name: "Vikram Rao", dpd: 58, due: 61800, status: "No contact" },
];
const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export function DataTableDemo() {
  const [q, setQ] = React.useState("");
  const [sort, setSort] = React.useState<"asc" | "desc">("desc");
  const [sel, setSel] = React.useState<string[]>([]);
  const list = rows
    .filter((r) => (r.name + r.lan).toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (sort === "asc" ? a.due - b.due : b.due - a.due));
  const all = list.length > 0 && list.every((r) => sel.includes(r.lan));
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 pb-3">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter borrowers…" className="max-w-xs" aria-label="Filter borrowers" />
        <span className="text-sm text-muted-foreground">{sel.length} of {rows.length} selected</span>
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox id="dt-all" checked={all} onChange={(v) => setSel(v ? list.map((r) => r.lan) : [])} />
              </TableHead>
              <TableHead>Borrower</TableHead>
              <TableHead>DPD</TableHead>
              <TableHead className="text-right">
                <button type="button" onClick={() => setSort(sort === "asc" ? "desc" : "asc")} className="inline-flex items-center gap-1 hover:text-foreground">
                  Outstanding <ArrowUpDown className="size-3.5" />
                </button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((r) => (
              <TableRow key={r.lan} className={cn(sel.includes(r.lan) && "bg-muted")}>
                <TableCell>
                  <Checkbox id={`dt-${r.lan}`} checked={sel.includes(r.lan)} onChange={(v) => setSel(v ? [...sel, r.lan] : sel.filter((x) => x !== r.lan))} />
                </TableCell>
                <TableCell>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.lan}</p>
                </TableCell>
                <TableCell>{r.dpd}</TableCell>
                <TableCell className="text-right">{inr(r.due)}</TableCell>
                <TableCell>
                  <Badge variant={r.status === "Paid" ? "success" : r.status === "Promised" ? "default" : "secondary"}>{r.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
            {list.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-20 text-center text-muted-foreground">No borrowers match “{q}”.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

/* Progress -------------------------------------------------------------------- */
export function ProgressDemo() {
  const [v, setV] = React.useState(64);
  React.useEffect(() => {
    const t = setInterval(() => setV((x) => (x >= 100 ? 12 : x + 4)), 900);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Processing lender file</span>
        <span className="tabular-nums text-muted-foreground">{v}%</span>
      </div>
      <div role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} className="h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full bg-primary transition-[width] duration-500" style={{ width: `${v}%` }} />
      </div>
    </div>
  );
}

/* Resizable ------------------------------------------------------------------- */
export function ResizableDemo() {
  const [w, setW] = React.useState(40);
  const box = React.useRef<HTMLDivElement>(null);
  const drag = (e: React.PointerEvent) => {
    const el = box.current;
    if (!el) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const move = (ev: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setW(Math.min(80, Math.max(20, ((ev.clientX - r.left) / r.width) * 100)));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return (
    <div ref={box} className="flex h-48 w-full max-w-lg overflow-hidden rounded-lg border">
      <div className="grid place-items-center bg-muted/40 text-sm font-medium" style={{ width: `${w}%` }}>
        Borrowers
      </div>
      <div
        role="separator"
        aria-orientation="vertical"
        aria-valuenow={Math.round(w)}
        tabIndex={0}
        onPointerDown={drag}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setW(Math.max(20, w - 5));
          if (e.key === "ArrowRight") setW(Math.min(80, w + 5));
        }}
        className="relative flex w-px cursor-col-resize items-center justify-center bg-border"
      >
        <span className="z-10 grid h-6 w-3.5 place-items-center rounded-sm border bg-border">
          <GripVertical className="size-2.5" />
        </span>
      </div>
      <div className="grid flex-1 place-items-center text-sm font-medium">Call details</div>
    </div>
  );
}

/* Scroll area ----------------------------------------------------------------- */
export function ScrollAreaDemo() {
  const tags = Array.from({ length: 30 }, (_, i) => `Campaign v1.${30 - i}`);
  return (
    <div className="h-64 w-56 overflow-y-auto rounded-md border [scrollbar-width:thin]">
      <div className="p-4">
        <p className="mb-3 text-sm font-medium">Release history</p>
        {tags.map((t) => (
          <div key={t} className="border-b py-2 text-sm last:border-0">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Separator ------------------------------------------------------------------- */
export function SeparatorDemo() {
  return (
    <div className="max-w-sm">
      <p className="text-sm font-medium">CredResolve/ui</p>
      <p className="text-sm text-muted-foreground">The design system for CredResolve OS.</p>
      <div role="separator" className="my-4 h-px bg-border" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Brand</span>
        <span role="separator" aria-orientation="vertical" className="h-full w-px bg-border" />
        <span>Foundations</span>
        <span role="separator" aria-orientation="vertical" className="h-full w-px bg-border" />
        <span>Components</span>
      </div>
    </div>
  );
}

/* Skeleton -------------------------------------------------------------------- */
export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <div className="size-12 animate-pulse rounded-full bg-muted" />
      <div className="grid gap-2">
        <div className="h-4 w-56 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-40 animate-pulse rounded-md bg-muted" />
      </div>
    </div>
  );
}

/* Table ----------------------------------------------------------------------- */
const campaigns = [
  { name: "DPD 31–60 · HDFC batch 14", channel: "Voice + WhatsApp", accounts: "8,420", status: "Live" },
  { name: "Bucket X recovery · Oct", channel: "Field (Jatayu)", accounts: "1,102", status: "Draft" },
  { name: "Legal notice wave 3", channel: "LegalX", accounts: "640", status: "Failed" },
];
export function TableDemo() {
  return (
    <div className="w-full rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead className="text-right">Accounts</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((c) => (
            <TableRow key={c.name}>
              <TableCell className="font-medium">{c.name}</TableCell>
              <TableCell className="text-muted-foreground">{c.channel}</TableCell>
              <TableCell className="text-right">{c.accounts}</TableCell>
              <TableCell>
                <Badge variant={c.status === "Live" ? "default" : c.status === "Failed" ? "destructive" : "secondary"}>{c.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
