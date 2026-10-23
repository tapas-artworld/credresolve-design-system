/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHeader, Section } from "@/components/site/page-header";
import { Swatch } from "@/components/site/swatch";
import { brandColors } from "@/lib/tokens";

export const metadata: Metadata = { title: "Brand guidelines" };

function Rule({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      {ok ? (
        <Check className="mt-0.5 size-4 shrink-0 text-success" aria-label="Do" />
      ) : (
        <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-label="Don't" />
      )}
      <span>{children}</span>
    </li>
  );
}

const voice = [
  { trait: "Credible", body: "Exact. Named capabilities, specific proof, real numbers." },
  { trait: "Confident", body: "Short, active sentences. No hedging, no superlatives." },
  { trait: "Compassionate", body: "Respect, not pity. Dignity, not softness." },
];

const rewrites = [
  {
    before: "We are delighted to offer an end-to-end, AI-powered, omnichannel debt collections solution.",
    after: "One platform. Every channel. One conversation.",
  },
  {
    before: "Our cutting-edge technology leverages advanced AI to optimise customer engagement.",
    after: "AI decides what happens next: channel, timing and escalation.",
  },
];

const lines = [
  ["Belief", "Credit is a conversation."],
  ["Philosophy", "Recovery beyond collections."],
  ["Shift", "Pressure closes doors. Conversation opens them."],
  ["Promise", "Better conversations. Better recoveries."],
  ["Operating system", "One platform. Every channel. One conversation."],
  ["Proof", "Built in-house, end to end, on purpose."],
];

const products = [
  ["CredResolve OS", "The operating system that holds the family."],
  ["Chakra", "Digital and voice outreach, omnichannel engagement."],
  ["Jatayu", "Field operations and last-mile execution."],
  ["Drona", "Speech QA and real-time call audit."],
  ["Vishwaroop", "The visual role (eye glyph)."],
  ["LegalX", "Legal workflows."],
];

export default function BrandPage() {
  return (
    <div>
      <PageHeader eyebrow="Brand" title="Brand guidelines">
        Credit is a conversation. CredResolve sits between a lender who needs answers and a borrower who deserves to be
        heard. The identity has to be credible enough for institutions, warm enough for human conversations and dynamic
        enough for a platform.
      </PageHeader>

      <Section
        id="logo"
        title="Logo"
        lead={
          <>
            The mark is <strong className="text-foreground">Varta, the conversation loop</strong>: two counter-turning
            strokes that approach but never meet. The gap is the conversation still in progress.
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="flex flex-col gap-3">
            <div className="grid h-48 place-items-center rounded-lg border bg-white p-8">
              <img src="/brand/credresolve-lockup.svg" alt="CredResolve primary lockup" className="h-12 w-auto" />
            </div>
            <figcaption className="text-sm text-muted-foreground">Primary lockup on white or Ivory.</figcaption>
          </figure>
          <figure className="flex flex-col gap-3">
            <div className="grid h-48 place-items-center rounded-lg border bg-cr-twilight p-8">
              <img src="/brand/credresolve-lockup-reversed.svg" alt="CredResolve reversed lockup" className="h-12 w-auto" />
            </div>
            <figcaption className="text-sm text-muted-foreground">Reversed lockup on Twilight or Jet.</figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="grid aspect-square place-items-center rounded-lg" style={{ background: "var(--cr-gradient)" }}>
            <img src="/brand/credresolve-mark-white.svg" alt="White mark on gradient tile" className="h-1/2 w-auto" />
          </div>
          <div className="grid aspect-square place-items-center rounded-lg border bg-white">
            <img src="/brand/credresolve-mark-gradient.svg" alt="Gradient mark" className="h-1/2 w-auto" />
          </div>
          <div className="grid aspect-square place-items-center rounded-lg border bg-cr-ivory">
            <img src="/brand/credresolve-mark-orange.svg" alt="Orange mark" className="h-1/2 w-auto" />
          </div>
          <div className="grid aspect-square place-items-center rounded-lg bg-cr-twilight">
            <img src="/brand/credresolve-mark-white.svg" alt="White mark on Twilight" className="h-1/2 w-auto" />
          </div>
        </div>
        <div className="grid gap-6 rounded-lg border p-6 md:grid-cols-2">
          <ul className="flex flex-col gap-2 text-sm">
            <Rule ok>Keep clear space of half the mark height on every side.</Rule>
            <Rule ok>Keep the gap between mark and wordmark at a quarter of the mark height.</Rule>
            <Rule ok>Use the symbol alone for app icons, avatars and favicons.</Rule>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <Rule ok={false}>Recolour the mark (no teal, no red).</Rule>
            <Rule ok={false}>Rotate, stretch, outline or re-space the lockup.</Rule>
            <Rule ok={false}>Place the orange mark on red or on a gradient it muddies.</Rule>
          </ul>
        </div>
      </Section>

      <Section
        id="colour"
        title="Colour: warmth with authority"
        lead="Colour is direction, not decoration. Every surface resolves to three roles: ground, structure and signal."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {brandColors.map((c) => (
            <Swatch key={c.hex} {...c} size="lg" />
          ))}
        </div>
        <div className="overflow-hidden rounded-lg border">
          <div className="flex h-16 text-xs font-medium">
            <div className="flex w-[60%] items-end bg-cr-ivory p-3 text-cr-twilight">Ground 60%</div>
            <div className="flex w-[30%] items-end bg-cr-twilight p-3 text-cr-ivory">Structure 30%</div>
            <div className="flex w-[10%] items-end bg-cr-orange p-3 text-cr-twilight">10%</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-24 rounded-lg" style={{ background: "var(--cr-gradient)" }} />
          <p className="text-sm text-muted-foreground">
            The CredResolve gradient runs First Light → Resolve Orange → Dusk on a locked 30° axis. Use it once per surface
            for expression (covers, hero moments). Use flat Resolve Orange for function: UI, small sizes, single-colour
            print.
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          <Rule ok>On orange, set type in Twilight (5.6:1) or Jet (8.6:1).</Rule>
          <Rule ok={false}>White text on Resolve Orange (2.4:1 fails contrast).</Rule>
          <Rule ok={false}>Orange as a text colour on light grounds.</Rule>
        </ul>
      </Section>

      <Section
        id="typography"
        title="Typography"
        lead="Inter Variable is the whole system: engineered, neutral, highly readable. It should make CredResolve feel like an operating system, not an advertising campaign."
      >
        <div className="flex flex-col gap-4 rounded-lg border p-6">
          <p className="text-5xl font-extrabold tracking-tight sm:text-6xl">Credit is a conversation.</p>
          <p className="text-2xl font-light text-muted-foreground">
            AI-powered collection beyond automation, at every step of the recovery journey.
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.03em] text-muted-foreground">
            Display · ExtraBold 800 / Intro · Light 300 / Caption · Medium 500 uppercase
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          <Rule ok>Sentence case for headlines, full stop on display statements.</Rule>
          <Rule ok>Load the variable file (weights 100–900) with optical sizing on.</Rule>
          <Rule ok={false}>Title Case headlines, static Inter cuts or substitute fonts.</Rule>
        </ul>
      </Section>

      <Section id="layout" title="Layout and composition" lead="Give every conversation room to move: openness with discipline.">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["One thought leads", "One headline, proposition or proof point carries the page. A secondary zone supports it without competing."],
            ["Anchors, not decoration", "Consistent outer margins and a few shared alignment edges. Protect open space."],
            ["Don't centre everything", "Content anchors bottom-left or top-left to shared edges."],
            ["Recompose, don't resize", "Vertical, horizontal and square formats each get their own composition."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-lg border p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="voice" title="Voice: spoken with, never delivered at" lead="Point → Proof → Action. Say the thing first, earn it with proof, make the next step obvious.">
        <div className="grid gap-4 sm:grid-cols-3">
          {voice.map((v) => (
            <div key={v.trait} className="rounded-lg border p-5">
              <p className="font-semibold text-primary">{v.trait}</p>
              <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {rewrites.map((r) => (
            <div key={r.after} className="grid gap-3 rounded-lg border p-5 md:grid-cols-2">
              <p className="flex gap-2 text-sm text-muted-foreground line-through decoration-destructive/60">
                <X className="mt-0.5 size-4 shrink-0 text-destructive" /> {r.before}
              </p>
              <p className="flex gap-2 text-sm font-medium">
                <Check className="mt-0.5 size-4 shrink-0 text-success" /> {r.after}
              </p>
            </div>
          ))}
        </div>
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {lines.map(([k, v]) => (
            <div key={k} className="border-l-2 border-primary pl-4">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="products" title="Product family" lead="One platform, specialised engines. Products are modules of CredResolve, not separate brands, and share one palette.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(([n, d]) => (
            <div key={n} className="flex items-start gap-3 rounded-lg border p-4">
              <span className="mt-1 size-2.5 shrink-0 rounded-full bg-primary" />
              <div>
                <p className="font-semibold uppercase tracking-wide">{n}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="imagery" title="Imagery" lead="People, systems, real work. Shoot at eye level, show context, leave space and capture exchange.">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Institution", "Authority and intelligence."],
            ["Field", "Execution and reality."],
            ["Human", "Conversation and dignity."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-lg border p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          <Rule ok>Lived-in, recognisably Indian settings. Orange enters through real touchpoints.</Rule>
          <Rule ok={false}>Dramatised debt, staged distress, handshake or call-centre stock clichés.</Rule>
        </ul>
      </Section>
    </div>
  );
}
