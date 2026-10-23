import Link from "next/link";
import { ArrowRight, Palette, Type, LayoutGrid, Component, BookOpen } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const areas = [
  { href: "/brand", icon: BookOpen, title: "Brand guidelines", body: "Logo, colour, typography, layout, voice and imagery rules from the CredResolve Brand Identity Guidelines." },
  { href: "/foundations/colors", icon: Palette, title: "Colors", body: "Brand palette, orange and Twilight scales, and the shadcn/ui theme tokens for light and dark." },
  { href: "/foundations/typography", icon: Type, title: "Typography", body: "Inter Variable across every style, on the shadcn/ui (Tailwind) type scale." },
  { href: "/foundations/layout", icon: LayoutGrid, title: "Radius, spacing & shadows", body: "Corner radius, spacing steps and elevation used by every component." },
  { href: "/components", icon: Component, title: "Components", body: "Buttons, badges, inputs, alerts, cards and tables, built on the tokens." },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="relative overflow-hidden rounded-xl border bg-cr-twilight px-6 py-12 text-cr-ivory sm:px-10 sm:py-16">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 size-80 rounded-full opacity-90 blur-[2px]"
          style={{ background: "var(--cr-gradient)" }}
        />
        <div className="relative flex max-w-2xl flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cr-first-light">CredResolve/ui · v1.0</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Credit is a conversation.</h1>
          <p className="text-lg font-light text-cr-ivory/80">
            The CredResolve brand guidelines and the CredResolve/ui design system in one place. Built on shadcn/ui, with
            Resolve Orange as the primary colour and Inter Variable as the typeface.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/brand" className={buttonVariants()}>
              Brand guidelines <ArrowRight />
            </Link>
            <Link
              href="/components"
              className={buttonVariants({ variant: "outline", className: "border-cr-ivory/30 bg-transparent text-cr-ivory hover:bg-cr-ivory/10 hover:text-cr-ivory" })}
            >
              Components
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map(({ href, icon: Icon, title, body }) => (
          <Link key={href} href={href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary">
              <CardHeader>
                <Icon className="mb-2 size-5 text-primary" />
                <CardTitle className="flex items-center gap-2">
                  {title}
                  <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
                <CardDescription>{body}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 rounded-lg border p-6 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">Primary</p>
          <p className="mt-1 flex items-center gap-2 font-semibold">
            <span className="size-4 rounded-sm bg-primary" /> #F68B1F Resolve Orange
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Typeface</p>
          <p className="mt-1 font-semibold">Inter Variable, 100–900</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Base</p>
          <p className="mt-1 font-semibold">shadcn/ui · Tailwind CSS · Radix</p>
        </div>
      </section>
    </div>
  );
}
