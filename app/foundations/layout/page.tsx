import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/site/page-header";
import { radii, spacing, shadows } from "@/lib/tokens";

export const metadata: Metadata = { title: "Layout" };

const grids = [
  { name: "Mobile", range: "0–767px", bp: "default", cols: 4, rows: 6, gutter: 16, margin: 16, width: 150, max: "Fluid" },
  { name: "Tablet", range: "768–1023px", bp: "md", cols: 8, rows: 5, gutter: 24, margin: 32, width: 260, max: "Fluid" },
  { name: "Desktop", range: "1024px and up", bp: "lg", cols: 12, rows: 4, gutter: 24, margin: 48, width: 400, max: "1280px" },
];

export default function LayoutTokensPage() {
  return (
    <div>
      <PageHeader eyebrow="Foundations" title="Layout">
        The shadcn/ui primitives every component is built from. The base radius is 8px (<code className="rounded bg-muted px-1.5 py-0.5 text-base">--radius: 0.5rem</code>).
      </PageHeader>

      <Section id="radius" title="Radius">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col gap-2">
              <div className={`aspect-square w-full border bg-muted ${r.cls}`} />
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="text-xs text-muted-foreground">
                {r.px > 999 ? "9999px" : `${r.px}px`} · {r.usage}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="spacing" title="Spacing" lead="A 4px base. Use gap and padding from this scale only.">
        <div className="flex flex-col gap-3">
          {spacing.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="w-28 shrink-0 font-mono text-sm">
                {s.name} · {s.px}px
              </span>
              <span className="h-4 rounded bg-primary" style={{ width: s.px * 4 }} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="layout-guide"
        title="Layout guide"
        lead="Mobile, tablet and desktop side by side. Each device shows the full grid, then its columns and rows on their own. Gutters are the same between columns and rows; margins are fixed."
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max items-start gap-8">
            {grids.map((g) => {
              const style = {
                gridTemplateColumns: `repeat(${g.cols}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${g.rows}, minmax(0, 1fr))`,
                gap: g.gutter / 4,
                padding: g.margin / 4,
              };
              const cell = "rounded-[2px] bg-cr-orange/25";
              const frame = "overflow-hidden rounded-lg border bg-muted/40";
              return (
                <div key={g.name} className="flex flex-col gap-4" style={{ width: g.width }}>
                  <div>
                    <p className="text-sm font-semibold">{g.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {g.range} · {g.bp === "default" ? "no prefix" : `${g.bp}:`}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-medium text-muted-foreground">Grid</p>
                    <div className={frame}>
                      <div className="grid h-48" style={style}>
                        {Array.from({ length: g.cols * g.rows }).map((_, i) => (
                          <div key={i} className={cell} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-medium text-muted-foreground">Columns · {g.cols}</p>
                    <div className={frame}>
                      <div
                        className="grid h-48"
                        style={{ gridTemplateColumns: style.gridTemplateColumns, columnGap: style.gap, paddingInline: style.padding }}
                      >
                        {Array.from({ length: g.cols }).map((_, i) => (
                          <div key={i} className={cell} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-medium text-muted-foreground">Rows · {g.rows}</p>
                    <div className={frame}>
                      <div
                        className="grid h-48"
                        style={{ gridTemplateRows: style.gridTemplateRows, rowGap: style.gap, paddingBlock: style.padding, paddingInline: style.padding }}
                      >
                        {Array.from({ length: g.rows }).map((_, i) => (
                          <div key={i} className={cell} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    {[
                      ["Columns", g.cols],
                      ["Rows", g.rows],
                      ["Gutter", `${g.gutter}px`],
                      ["Margin", `${g.margin}px`],
                      ["Max width", g.max],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd className="font-mono text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="shadows" title="Shadows" lead="Use elevation sparingly: cards sit flat with a border, popovers and dialogs lift.">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {shadows.map((s) => (
            <div key={s.name} className="flex flex-col gap-3">
              <div className={`h-24 rounded-lg border bg-card ${s.cls}`} />
              <p className="font-mono text-xs text-muted-foreground">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
