"use client";
// Single client boundary for the whole component library page.
import { ArrowUpRight } from "lucide-react";
import { Toc } from "@/components/site/toc";
import { ToastProvider } from "./overlays";
import { groups } from "./registry";

const FIGMA = "https://www.figma.com/design/M63lQm4amcN3PGh5sAP3Wg/CR-Design-System?node-id=";

export function ComponentLibrary({ header }: { header: React.ReactNode }) {
  const toc = groups.map((g) => ({ id: g.id, title: g.title, items: g.items.map(({ id, title }) => ({ id, title })) }));
  return (
    <ToastProvider>
      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_13rem] xl:gap-12">
        <div className="min-w-0">
          {header}
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-20 pt-12">
              <h2 className="border-b pb-3 text-2xl font-semibold tracking-tight">
                {g.title} <span className="text-base font-normal text-muted-foreground">({g.items.length})</span>
              </h2>
              {g.items.map(({ id, title, description, figma, Demo }) => (
                <article key={id} id={id} className="flex scroll-mt-20 flex-col gap-4 border-b py-10 last:border-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                    {figma && (
                      <a
                        href={FIGMA + figma}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                      >
                        Figma <ArrowUpRight className="size-3" />
                      </a>
                    )}
                  </div>
                  <div className="flex min-h-40 items-center justify-center rounded-lg border bg-background p-6 sm:p-10">
                    <Demo />
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
        <aside className="hidden xl:block">
          <div className="sticky top-20 pt-1">
            <Toc groups={toc} />
          </div>
        </aside>
      </div>
    </ToastProvider>
  );
}
