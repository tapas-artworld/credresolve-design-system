"use client";
import * as React from "react";
import { Bold, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, CalendarDays, Italic, Plus, Underline, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Popover } from "./primitives";
import { cn } from "@/lib/utils";

/* Button ------------------------------------------------------------------ */
export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button>
          <Plus /> New campaign
        </Button>
        <Button variant="secondary">
          <Upload /> Export
        </Button>
        <Button variant="outline">Filters</Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="link">View all</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" variant="outline" aria-label="Add">
          <Plus />
        </Button>
      </div>
    </div>
  );
}

/* Checkbox ------------------------------------------------------------------ */
export function Checkbox({ checked, onChange, id, label }: { checked: boolean; onChange: (v: boolean) => void; id: string; label?: React.ReactNode }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2 text-sm font-medium">
      <button
        id={id}
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "grid size-4 shrink-0 place-items-center rounded-sm border border-primary transition-colors",
          checked ? "bg-primary text-primary-foreground" : "bg-background"
        )}
      >
        {checked && <Check className="size-3" strokeWidth={3} />}
      </button>
      {label}
    </label>
  );
}

export function CheckboxDemo() {
  const [a, setA] = React.useState(true);
  const [b, setB] = React.useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Checkbox id="cb1" checked={a} onChange={setA} label="Send WhatsApp reminder before the call" />
      <Checkbox id="cb2" checked={b} onChange={setB} label="Escalate to field team after 3 attempts" />
    </div>
  );
}

/* Input / Label / Textarea ---------------------------------------------------- */
export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="lan">Loan account number</Label>
      <Input id="lan" placeholder="LAN-00482193" />
      <p className="text-xs text-muted-foreground">Or search by registered mobile number.</p>
    </div>
  );
}

export function LabelDemo() {
  const [v, setV] = React.useState(true);
  return <Checkbox id="terms" checked={v} onChange={setV} label="Accept data processing terms" />;
}

export function TextareaDemo() {
  return (
    <div className="grid w-full max-w-md gap-2">
      <Label htmlFor="note">Call note</Label>
      <textarea
        id="note"
        rows={4}
        placeholder="Borrower agreed to pay ₹12,500 on 30 Oct via UPI."
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      />
    </div>
  );
}

/* Switch ---------------------------------------------------------------------- */
export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Switch label="Auto-escalate" defaultChecked />
        <span className="text-sm font-medium">Auto-escalate after 3 attempts</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch label="Quiet hours" />
        <span className="text-sm font-medium">Respect quiet hours (9 pm – 8 am)</span>
      </div>
    </div>
  );
}

/* Radio group ----------------------------------------------------------------- */
export function RadioGroupDemo() {
  const options = ["Voice", "WhatsApp", "SMS", "Field visit"];
  const [v, setV] = React.useState("Voice");
  return (
    <div role="radiogroup" aria-label="First channel" className="flex flex-col gap-3">
      {options.map((o) => (
        <label key={o} className="flex cursor-pointer items-center gap-2 text-sm font-medium">
          <button
            type="button"
            role="radio"
            aria-checked={v === o}
            onClick={() => setV(o)}
            className="grid size-4 place-items-center rounded-full border border-primary"
          >
            {v === o && <span className="size-2 rounded-full bg-primary" />}
          </button>
          {o}
        </label>
      ))}
    </div>
  );
}

/* Select ---------------------------------------------------------------------- */
function Listbox({ options, value, onChange, placeholder, width = "w-56" }: { options: string[]; value: string; onChange: (v: string) => void; placeholder: string; width?: string }) {
  return (
    <Popover
      className={width}
      trigger={({ open, toggle }) => (
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={toggle}
          className={cn("flex h-9 items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-sm shadow-sm", width)}
        >
          <span className={cn(!value && "text-muted-foreground")}>{value || placeholder}</span>
          <ChevronDown className="size-4 opacity-50" />
        </button>
      )}
    >
      {(close) => (
        <div role="listbox">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              role="option"
              aria-selected={value === o}
              onClick={() => {
                onChange(o);
                close();
              }}
              className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent"
            >
              {o}
              {value === o && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </Popover>
  );
}

export function SelectDemo() {
  const [v, setV] = React.useState("");
  return <Listbox options={["DPD 0–30", "DPD 31–60", "DPD 61–90", "DPD 90+"]} value={v} onChange={setV} placeholder="Select a bucket" />;
}

/* Combobox -------------------------------------------------------------------- */
const lenders = ["HDFC Bank", "ICICI Bank", "Axis Bank", "Bajaj Finance", "Kotak Mahindra", "IDFC First"];
export function ComboboxDemo() {
  const [v, setV] = React.useState("");
  const [q, setQ] = React.useState("");
  const list = lenders.filter((l) => l.toLowerCase().includes(q.toLowerCase()));
  return (
    <Popover
      className="w-64 p-0"
      trigger={({ open, toggle }) => (
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          onClick={toggle}
          className="flex h-9 w-64 items-center justify-between rounded-md border border-input bg-background px-3 text-sm shadow-sm"
        >
          <span className={cn(!v && "text-muted-foreground")}>{v || "Select lender…"}</span>
          <ChevronsUpDown className="size-4 opacity-50" />
        </button>
      )}
    >
      {(close) => (
        <div>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search lender…"
            className="h-9 w-full border-b bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="p-1">
            {list.length === 0 && <p className="py-4 text-center text-sm text-muted-foreground">No lender found.</p>}
            {list.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  setV(l);
                  close();
                }}
                className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent"
              >
                <Check className={cn("size-4", v === l ? "opacity-100" : "opacity-0")} />
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </Popover>
  );
}

/* Slider ---------------------------------------------------------------------- */
export function SliderDemo() {
  const [v, setV] = React.useState(60);
  return (
    <div className="grid w-full max-w-sm gap-3">
      <div className="flex justify-between text-sm">
        <Label htmlFor="settle">Settlement offer</Label>
        <span className="tabular-nums text-muted-foreground">{v}% of outstanding</span>
      </div>
      <input
        id="settle"
        type="range"
        min={0}
        max={100}
        value={v}
        onChange={(e) => setV(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[var(--primary)]"
        style={{ background: `linear-gradient(to right, var(--primary) ${v}%, var(--secondary) ${v}%)` }}
      />
    </div>
  );
}

/* Toggle & Toggle group ------------------------------------------------------- */
function ToggleBtn({ pressed, onClick, label, children, outline }: { pressed: boolean; onClick: () => void; label: string; children: React.ReactNode; outline?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground [&_svg]:size-4",
        outline && "border border-input",
        pressed && "bg-accent text-accent-foreground"
      )}
    >
      {children}
    </button>
  );
}

export function ToggleDemo() {
  const [b, setB] = React.useState(true);
  const [i, setI] = React.useState(false);
  return (
    <div className="flex gap-2">
      <ToggleBtn pressed={b} onClick={() => setB(!b)} label="Bold">
        <Bold />
      </ToggleBtn>
      <ToggleBtn pressed={i} onClick={() => setI(!i)} label="Italic" outline>
        <Italic /> Italic
      </ToggleBtn>
    </div>
  );
}

export function ToggleGroupDemo() {
  const [on, setOn] = React.useState<string[]>(["bold"]);
  const t = (k: string) => setOn(on.includes(k) ? on.filter((x) => x !== k) : [...on, k]);
  const [view, setView] = React.useState("Week");
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex gap-1">
        <ToggleBtn pressed={on.includes("bold")} onClick={() => t("bold")} label="Bold"><Bold /></ToggleBtn>
        <ToggleBtn pressed={on.includes("italic")} onClick={() => t("italic")} label="Italic"><Italic /></ToggleBtn>
        <ToggleBtn pressed={on.includes("underline")} onClick={() => t("underline")} label="Underline"><Underline /></ToggleBtn>
      </div>
      <div className="inline-flex rounded-md border">
        {["Day", "Week", "Month"].map((x) => (
          <button
            key={x}
            type="button"
            aria-pressed={view === x}
            onClick={() => setView(x)}
            className={cn("h-9 px-3 text-sm font-medium first:rounded-l-md last:rounded-r-md", view === x ? "bg-accent text-accent-foreground" : "hover:bg-muted")}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Input OTP ------------------------------------------------------------------- */
export function InputOTPDemo() {
  const [vals, setVals] = React.useState(["4", "8", "2", "", "", ""]);
  const refs = React.useRef<(HTMLInputElement | null)[]>([]);
  const set = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    const next = [...vals];
    next[i] = d;
    setVals(next);
    if (d && i < 5) refs.current[i + 1]?.focus();
  };
  return (
    <div className="flex flex-col gap-2">
      <Label>Verification code sent to +91 98•••• 4210</Label>
      <div className="flex items-center gap-2">
        {vals.map((v, i) => (
          <React.Fragment key={i}>
            {i === 3 && <span className="text-muted-foreground">–</span>}
            <input
              ref={(el) => {
                refs.current[i] = el;
              }}
              value={v}
              inputMode="numeric"
              aria-label={`Digit ${i + 1}`}
              onChange={(e) => set(i, e.target.value)}
              onKeyDown={(e) => e.key === "Backspace" && !v && i > 0 && refs.current[i - 1]?.focus()}
              className="size-10 rounded-md border border-input bg-background text-center text-lg font-medium shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* Calendar & Date picker ------------------------------------------------------ */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Calendar({ value, onChange }: { value: Date; onChange: (d: Date) => void }) {
  const [view, setView] = React.useState(new Date(value.getFullYear(), value.getMonth(), 1));
  const y = view.getFullYear();
  const m = view.getMonth();
  const start = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const cells = [...Array(start).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  const same = (d: number) => value.getFullYear() === y && value.getMonth() === m && value.getDate() === d;
  return (
    <div className="w-fit rounded-md border bg-card p-3">
      <div className="mb-2 flex items-center justify-between">
        <Button variant="outline" size="icon" className="size-7" aria-label="Previous month" onClick={() => setView(new Date(y, m - 1, 1))}>
          <ChevronLeft />
        </Button>
        <span className="text-sm font-medium">
          {MONTHS[m]} {y}
        </span>
        <Button variant="outline" size="icon" className="size-7" aria-label="Next month" onClick={() => setView(new Date(y, m + 1, 1))}>
          <ChevronRight />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <span key={d} className="w-8 text-xs text-muted-foreground">
            {d}
          </span>
        ))}
        {cells.map((d, i) =>
          d === null ? (
            <span key={`e${i}`} />
          ) : (
            <button
              key={d}
              type="button"
              onClick={() => onChange(new Date(y, m, d))}
              className={cn(
                "size-8 rounded-md text-sm tabular-nums hover:bg-accent",
                same(d) && "bg-primary font-medium text-primary-foreground hover:bg-primary"
              )}
            >
              {d}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export function CalendarDemo() {
  const [d, setD] = React.useState(new Date(2026, 9, 30));
  return <Calendar value={d} onChange={setD} />;
}

export function DatePickerDemo() {
  const [d, setD] = React.useState<Date | null>(null);
  return (
    <div className="grid gap-2">
      <Label>Promise-to-pay date</Label>
      <Popover
        className="w-auto border-0 bg-transparent p-0 shadow-none"
        trigger={({ toggle }) => (
          <button
            type="button"
            onClick={toggle}
            className="flex h-9 w-64 items-center gap-2 rounded-md border border-input bg-background px-3 text-left text-sm shadow-sm"
          >
            <CalendarDays className="size-4 opacity-60" />
            <span className={cn(!d && "text-muted-foreground")}>
              {d ? d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "Pick a date"}
            </span>
          </button>
        )}
      >
        {(close) => (
          <Calendar
            value={d ?? new Date(2026, 9, 23)}
            onChange={(x) => {
              setD(x);
              close();
            }}
          />
        )}
      </Popover>
    </div>
  );
}

/* Form ------------------------------------------------------------------------ */
export function FormDemo() {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [done, setDone] = React.useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(f.get("name")).trim()) next.name = "Enter the campaign name.";
    if (!/^\d{10}$/.test(String(f.get("phone")))) next.phone = "Enter a 10-digit mobile number.";
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  };
  return (
    <form onSubmit={submit} noValidate className="grid w-full max-w-sm gap-4">
      <div className="grid gap-2">
        <Label htmlFor="f-name" className={cn(errors.name && "text-destructive")}>
          Campaign name
        </Label>
        <Input id="f-name" name="name" placeholder="DPD 31–60 · HDFC batch 15" aria-invalid={!!errors.name} />
        {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : <p className="text-xs text-muted-foreground">Shown to agents and in reports.</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="f-phone" className={cn(errors.phone && "text-destructive")}>
          Test mobile number
        </Label>
        <Input id="f-phone" name="phone" inputMode="numeric" placeholder="9876543210" aria-invalid={!!errors.phone} />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit">Create campaign</Button>
        {done && <span className="text-sm font-medium text-success">Campaign created</span>}
      </div>
    </form>
  );
}
