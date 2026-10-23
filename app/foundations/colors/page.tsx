import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/site/page-header";
import { Swatch } from "@/components/site/swatch";
import { brandColors, orange, twilight, themeTokens, inkFor, contrast } from "@/lib/tokens";

export const metadata: Metadata = { title: "Colors" };

function Scale({ title, sub, items }: { title: string; sub: string; items: { name: string; hex: string; note?: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{sub}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-11">
        {items.map((s) => (
          <Swatch key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div>
      <PageHeader eyebrow="Foundations" title="Colors">
        The brand palette, the orange and Twilight scales, and the shadcn/ui theme tokens. Click any swatch to copy its hex.
      </PageHeader>

      <Section id="brand" title="Brand" lead="Six colours from the CredResolve Brand Identity Guidelines. Resolve Orange is the primary colour.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brandColors.map((c) => (
            <Swatch key={c.hex} {...c} size="lg" />
          ))}
        </div>
      </Section>

      <Section id="scales" title="Scales" lead="Tints and shades for product UI. Orange 500 is the primary; Twilight 800 is the brand dark neutral.">
        <Scale title="Orange" sub="cr/orange-50 … 950" items={orange} />
        <Scale title="Twilight" sub="cr/twilight-50 … 950" items={twilight} />
      </Section>

      <Section
        id="theme-tokens"
        title="Theme tokens"
        lead={
          <>
            shadcn/ui semantic variables. Use them in code as Tailwind classes, for example <code className="rounded bg-muted px-1.5 py-0.5 text-sm">bg-primary</code> or{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">text-muted-foreground</code>.
          </>
        }
      >
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-muted text-left text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Token</th>
                <th className="p-3 font-medium">Light</th>
                <th className="p-3 font-medium">Dark</th>
                <th className="p-3 font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              {themeTokens.map((t) => (
                <tr key={t.name} className="border-t align-top">
                  <td className="p-3 font-mono text-xs font-medium">--{t.name}</td>
                  {[t.light, t.dark].map((hex, i) => (
                    <td key={i} className="p-3">
                      <span className="flex items-center gap-2">
                        <span className="size-6 shrink-0 rounded-md border" style={{ background: hex }} />
                        <span className="font-mono text-xs">{hex}</span>
                      </span>
                    </td>
                  ))}
                  <td className="p-3 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="contrast" title="Contrast" lead="Text on orange is always Twilight. The pairs below are measured against WCAG 2.1.">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["#F68B1F", "#282A53", "Twilight on Resolve Orange"],
            ["#F68B1F", "#000000", "Jet on Resolve Orange"],
            ["#F68B1F", "#FFFFFF", "White on Resolve Orange"],
          ].map(([bg, fg, label]) => {
            const r = contrast(bg, fg);
            return (
              <div key={label} className="flex flex-col gap-2 rounded-lg p-5" style={{ background: bg, color: fg }}>
                <p className="text-2xl font-bold">Aa {r.toFixed(1)}:1</p>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-xs font-semibold" style={{ color: inkFor(bg) }}>
                  {r >= 4.5 ? "Passes AA" : "Fails AA, do not use"}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
