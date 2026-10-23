/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-md"
        style={{ background: "var(--cr-gradient)" }}
      >
        <img src="/brand/credresolve-mark-white.svg" alt="" className="h-4 w-auto" />
      </span>
      <span className="text-sm font-semibold tracking-tight">
        CredResolve<span className="text-muted-foreground">/ui</span>
      </span>
    </span>
  );
}
