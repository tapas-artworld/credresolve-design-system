import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/site/page-header";
import { typeScale } from "@/lib/tokens";

export const metadata: Metadata = { title: "Typography" };

const weights = [
  ["Regular", 400],
  ["Medium", 500],
  ["SemiBold", 600],
  ["Bold", 700],
  ["ExtraBold", 800],
] as const;

export default function TypographyPage() {
  return (
    <div>
      <PageHeader eyebrow="Foundations" title="Typography">
        Inter Variable is the CredResolve typeface for every style. Sizes and line heights follow the shadcn/ui (Tailwind)
        scale, so <code className="rounded bg-muted px-1.5 py-0.5 text-base">text-sm</code> in code matches{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-base">text-sm</code> in Figma.
      </PageHeader>

      <Section id="typeface" title="Typeface">
        <p className="text-6xl font-bold tracking-tight sm:text-7xl">Inter Variable</p>
        <p className="font-mono text-sm text-muted-foreground">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ₹ % / –
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {weights.map(([name, w]) => (
            <div key={name} className="flex flex-col gap-1">
              <span className="text-5xl" style={{ fontWeight: w }}>
                Aa
              </span>
              <span className="text-sm text-muted-foreground">
                {name} {w}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="type-scale" title="Type scale">
        <div className="flex flex-col">
          {typeScale.map((t) => (
            <div key={t.role} className="grid gap-2 border-t py-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-8">
              <div>
                <p className="text-sm font-semibold">{t.role}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {t.token} · {t.size}/{t.leading} · {t.weight}
                </p>
              </div>
              <p
                className="min-w-0"
                style={{ fontSize: t.size, lineHeight: `${t.leading}px`, fontWeight: t.weight, letterSpacing: t.tracking }}
              >
                {t.sample}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="in-code" title="In code">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
          <code>{`// app/layout.tsx
import localFont from "next/font/local";

const inter = localFont({
  src: [{ path: "./fonts/InterVariable.woff2", weight: "100 900" }],
  variable: "--font-inter",
});

/* globals.css */
@theme inline { --font-sans: var(--font-inter), "Inter Variable", sans-serif; }`}</code>
        </pre>
      </Section>
    </div>
  );
}
