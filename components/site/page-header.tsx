export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="flex flex-col gap-3 border-b pb-8">
      <p className="text-sm text-muted-foreground">
        CredResolve/ui <span aria-hidden>/</span> {eyebrow}
      </p>
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {children && <div className="max-w-[65ch] text-lg text-muted-foreground">{children}</div>}
    </header>
  );
}

export function Section({
  id,
  title,
  lead,
  action,
  children,
}: {
  id?: string;
  title: string;
  lead?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex scroll-mt-20 flex-col gap-6 border-b py-12 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {lead && <div className="max-w-[65ch] text-muted-foreground">{lead}</div>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {children}
    </section>
  );
}
