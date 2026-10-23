"use client";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function useClickOutside(ref: React.RefObject<HTMLElement | null>, onOutside: () => void, active: boolean) {
  React.useEffect(() => {
    if (!active) return;
    const down = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    };
    const key = (e: KeyboardEvent) => e.key === "Escape" && onOutside();
    document.addEventListener("mousedown", down);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("mousedown", down);
      document.removeEventListener("keydown", key);
    };
  }, [ref, onOutside, active]);
}

/** Click-to-open floating panel anchored under its trigger. */
export function Popover({
  trigger,
  children,
  align = "start",
  className,
  open: controlled,
  onOpenChange,
}: {
  trigger: (props: { open: boolean; toggle: () => void }) => React.ReactNode;
  children: React.ReactNode | ((close: () => void) => React.ReactNode);
  align?: "start" | "end" | "center";
  className?: string;
  open?: boolean;
  onOpenChange?: (o: boolean) => void;
}) {
  const [local, setLocal] = React.useState(false);
  const open = controlled ?? local;
  const set = React.useCallback((o: boolean) => (onOpenChange ? onOpenChange(o) : setLocal(o)), [onOpenChange]);
  const ref = React.useRef<HTMLDivElement>(null);
  const close = React.useCallback(() => set(false), [set]);
  useClickOutside(ref, close, open);
  return (
    <div ref={ref} className="relative inline-block">
      {trigger({ open, toggle: () => set(!open) })}
      {open && (
        <div
          className={cn(
            "absolute top-full z-30 mt-2 min-w-48 rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            align === "end" && "right-0",
            align === "start" && "left-0",
            align === "center" && "left-1/2 -translate-x-1/2",
            className
          )}
        >
          {typeof children === "function" ? children(close) : children}
        </div>
      )}
    </div>
  );
}

export function MenuItem({
  children,
  shortcut,
  onSelect,
  destructive,
  disabled,
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: () => void;
  destructive?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
        destructive && "text-destructive hover:text-destructive"
      )}
    >
      {children}
      {shortcut && <span className="ml-auto pl-4 text-xs tracking-widest text-muted-foreground">{shortcut}</span>}
    </button>
  );
}

export function MenuLabel({ children }: { children: React.ReactNode }) {
  return <div className="px-2 py-1.5 text-sm font-semibold">{children}</div>;
}

export function MenuSeparator() {
  return <div className="-mx-1 my-1 h-px bg-border" />;
}

/** Modal surface: centered dialog, right sheet or bottom drawer. */
export function Modal({
  open,
  onClose,
  side = "center",
  title,
  description,
  children,
  footer,
  dismissible = true,
}: {
  open: boolean;
  onClose: () => void;
  side?: "center" | "right" | "bottom";
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  dismissible?: boolean;
}) {
  React.useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && dismissible && onClose();
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open, onClose, dismissible]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60" onClick={dismissible ? onClose : undefined} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "absolute flex flex-col gap-4 border bg-background p-6 shadow-lg",
          side === "center" && "left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg",
          side === "right" && "inset-y-0 right-0 w-[calc(100%-3rem)] max-w-sm",
          side === "bottom" && "inset-x-0 bottom-0 rounded-t-xl pb-8"
        )}
      >
        {side === "bottom" && <div className="mx-auto -mt-2 mb-1 h-1.5 w-12 rounded-full bg-muted" />}
        <div className={cn("flex flex-col gap-1.5", side === "bottom" && "mx-auto w-full max-w-sm text-center")}>
          <h2 className="text-lg font-semibold leading-none">{title}</h2>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {children && <div className={cn(side === "bottom" && "mx-auto w-full max-w-sm")}>{children}</div>}
        {footer && (
          <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", side === "bottom" && "mx-auto w-full max-w-sm sm:flex-col")}>
            {footer}
          </div>
        )}
        {dismissible && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
