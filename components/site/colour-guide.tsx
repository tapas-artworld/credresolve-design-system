import { X } from "lucide-react";
import { CopyHex } from "@/components/site/copy-hex";
import { cn } from "@/lib/utils";

const rules = [
  "Use gradient for expression: covers, hero visuals, launch moments and large-scale mark usage.",
  "Use flat Resolve Orange for function: small sizes, UI, single-colour print or anywhere a gradient would muddy.",
  "The gradient angle is locked to the 30° axis. It should not be rotated casually to fit a layout.",
  "Colour should follow the direction of the loop, not fight it.",
  "Use dark neutrals to give the warmth credibility.",
];

const stops = [
  { hex: "#FBAE17", cmyk: [0, 35, 100, 0] },
  { hex: "#F68B1F", cmyk: [0, 55, 100, 0], note: "CredResolve Base Orange · Pantone 715C" },
  { hex: "#F05A22", cmyk: [0, 80, 100, 0] },
];

const spectrum = [
  "#EE3124", "#F04320", "#F2551C", "#F46718", "#F67914",
  "#F78C10", "#F99E0C", "#FBB008", "#FDC204", "#FFD400",
];

type Tile = { name: string; hex: string; rgb: string; cmyk: string; className: string; light?: boolean };

const tiles: Tile[] = [
  { name: "Resolve", hex: "#F68B1F", rgb: "246, 139, 31", cmyk: "00, 55, 100, 00", className: "bg-cr-orange text-cr-twilight" },
  { name: "Ivory", hex: "#FFF4EE", rgb: "255, 244, 238", cmyk: "00, 05, 05, 00", className: "bg-cr-ivory text-cr-twilight border" },
  { name: "Early light", hex: "#DBE2EA", rgb: "219, 226, 234", cmyk: "15, 05, 05, 00", className: "bg-cr-early-light text-cr-twilight" },
  { name: "Twilight", hex: "#282A53", rgb: "40, 42, 83", cmyk: "95, 90, 40, 35", className: "bg-cr-twilight text-cr-ivory" },
  { name: "Jet", hex: "#000000", rgb: "00, 00, 00", cmyk: "100, 100, 100, 100", className: "bg-black text-white" },
];

const roles = [
  { name: "Ivory", hex: "#FFF4EE", role: "Ground", pct: 60, className: "bg-cr-ivory text-cr-twilight border" },
  { name: "Twilight", hex: "#282A53", role: "Structure", pct: 30, className: "bg-cr-twilight text-cr-ivory" },
  { name: "Resolve", hex: "#F68B1F", role: "Signal", pct: 10, className: "bg-cr-orange text-cr-twilight" },
];

const darkRoles = [
  { name: "Twilight", hex: "#282A53", role: "Ground", pct: 60, className: "bg-cr-twilight text-cr-ivory" },
  { name: "Ivory", hex: "#FFF4EE", role: "Structure", pct: 30, className: "bg-cr-ivory text-cr-twilight border" },
  { name: "Resolve", hex: "#F68B1F", role: "Signal", pct: 10, className: "bg-cr-orange text-cr-twilight" },
];

const pairs = [
  { name: "Twilight / Ivory", ratio: "12.6:1", grade: "AAA", className: "bg-cr-ivory text-cr-twilight border" },
  { name: "Ivory / Twilight", ratio: "12.6:1", grade: "AAA", className: "bg-cr-twilight text-cr-ivory" },
  { name: "Jet / Resolve", ratio: "8.6:1", grade: "AAA", className: "bg-cr-orange text-black" },
  { name: "Twilight / Resolve", ratio: "5.6:1", grade: "AA", className: "bg-cr-orange text-cr-twilight" },
  { name: "White / Resolve", ratio: "2.4:1", grade: "FAIL", className: "bg-cr-orange text-white" },
  { name: "Resolve / Ivory", ratio: "2.3:1", grade: "FAIL", className: "bg-cr-ivory text-cr-orange border" },
];

const contrastRules = [
  "On orange, type is always dark: Twilight or Jet. Never white.",
  "Orange is a signal, never a text colour. It fails as type on light.",
  "White display type only on the deep end of the gradient, at large sizes.",
];

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold uppercase tracking-wide">{children}</h3>;
}

function Bar({ items }: { items: typeof roles }) {
  return (
    <div className="flex w-full">
      {items.map((r) => (
        <div key={r.role} style={{ width: `${r.pct}%` }} className="flex min-w-0 flex-col gap-1">
          <div className={cn("flex h-20 flex-col justify-between p-2", r.className)}>
            <span className="text-lg font-bold leading-none">{r.pct}%</span>
            <span className="truncate text-[10px] uppercase leading-none">{r.role}</span>
          </div>
          <span className="truncate text-xs">{r.name}</span>
          <CopyHex hex={r.hex} className={cn("whitespace-nowrap", r.pct <= 10 ? "self-end" : "self-start")} />
        </div>
      ))}
    </div>
  );
}

export function ColourGuide() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <p className="max-w-[75ch] text-muted-foreground">
          Colour is direction, not decoration. The CredResolve palette balances energy with trust: warm enough to humanise
          recovery, serious enough for financial institutions. The gradient is the brand&rsquo;s signature because it
          moves. It runs along the loop from light to deep, carrying the eye from first contact to resolved outcome. Read
          the gradient as progress, never as fill.
        </p>
        <Heading>Rules</Heading>
        <ul className="flex max-w-[75ch] list-disc flex-col gap-1.5 pl-5 text-sm">
          {rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Too much orange makes the system feel promotional rather than institutional.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Heading>CredResolve gradient</Heading>
        <div className="grid gap-4 sm:grid-cols-3">
          {stops.map((s) => (
            <div key={s.hex} className="flex items-start gap-3">
              <div className="size-14 shrink-0 rounded-md" style={{ background: s.hex }} />
              <div className="text-sm">
                <CopyHex hex={s.hex.toLowerCase()} />
                <p className="text-xs text-muted-foreground">
                  C {s.cmyk[0]} · M {s.cmyk[1]} · Y {s.cmyk[2]} · K {s.cmyk[3]}
                </p>
                {s.note && <p className="mt-1 text-xs font-medium">{s.note}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-56 overflow-hidden rounded-lg sm:h-72" style={{ background: "var(--cr-gradient)" }}>
          <svg viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 size-full" aria-hidden>
            <line x1="75" y1="75" x2="225" y2="75" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
            <path d="M 150 75 L 175 75 A 25 25 0 0 1 171.65 87.5 Z" fill="#c25200" fillOpacity="0.7" />
            <line x1="130" y1="63" x2="170" y2="86" stroke="white" strokeWidth="1" />
            <circle cx="130" cy="63" r="2.2" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="170" cy="86" r="2.2" fill="none" stroke="white" strokeWidth="0.8" />
            <text x="180" y="86" fill="white" fontSize="6" fontWeight="600">
              30° Gradient angle
            </text>
          </svg>
        </div>
        <p className="text-center text-sm font-medium">CredResolve gradient</p>
      </div>

      <div className="flex flex-col gap-4">
        <Heading>Palette</Heading>
        <div className="overflow-hidden rounded-lg border">
          <div className="flex flex-col gap-4 p-5 text-cr-twilight" style={{ background: "var(--cr-gradient)" }}>
            <p className="text-sm font-semibold">CredResolve Gradient</p>
            <div className="flex justify-between gap-4 text-xs">
              <div>
                <p className="text-sm font-semibold">First Light</p>
                <CopyHex hex="#fbae17" />
                <p>RGB 251, 174, 23</p>
                <p>CMYK 00, 35, 100, 00</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">Dusk</p>
                <CopyHex hex="#f05a22" />
                <p>RGB 240, 90, 34</p>
                <p>CMYK 00, 80, 100, 00</p>
              </div>
            </div>
          </div>
          <div className="flex h-10" aria-hidden>
            {spectrum.map((c) => (
              <div key={c} className="flex-1" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tiles.map((t) => (
            <div key={t.name} className={cn("flex min-h-44 flex-col gap-1 rounded-lg p-4 text-xs", t.className)}>
              <p className="text-sm font-semibold">{t.name}</p>
              <CopyHex hex={t.hex.toLowerCase()} className="self-start" />
              <p className="mt-2 font-semibold">RGB</p>
              <p>{t.rgb}</p>
              <p className="font-semibold">CMYK</p>
              <p>{t.cmyk}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">Colour in proportion</h3>
          <p className="text-muted-foreground">Neutrals hold the space. Orange is the signal, not the field.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Heading>Proportion</Heading>
            <p className="text-sm text-muted-foreground">
              Every surface resolves to three roles: ground, structure, signal. Ground carries the surface, structure
              orders it, signal directs the eye. Orange is capped near a tenth, and usually less.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Light register</p>
              <Bar items={roles} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Dark register</p>
              <Bar items={darkRoles} />
            </div>
            <p className="text-sm text-muted-foreground">
              The gradient is not part of the ten per cent. It is reserved for hero and launch surfaces, used once as a
              single gesture, never tiled as a field.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Heading>Contrast</Heading>
            <p className="text-sm text-muted-foreground">
              Legibility isn&rsquo;t negotiable. Every safe pairing clears WCAG AA for body text and most clear AAA. The
              ratios are fixed by the palette, not by preference.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {pairs.map((p) => {
                const fail = p.grade === "FAIL";
                return (
                  <div key={p.name} className={cn("flex h-20 flex-col justify-between rounded-md px-3 py-2.5", p.className)}>
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="font-semibold">{p.name}</span>
                      <span>Aa</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs">{p.ratio}</span>
                      {fail && (
                        <span className="grid size-5 place-items-center rounded-full bg-red-600 text-white" aria-hidden>
                          <X className="size-3" />
                        </span>
                      )}
                      <span className="text-sm font-bold">{p.grade}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <ol className="flex flex-col gap-1.5 text-sm">
              {contrastRules.map((r, i) => (
                <li key={r} className="flex gap-2">
                  <span className="font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <span>{r}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
