"use client";

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

type Surface = "light" | "dark";

type Logo = {
  file: string;
  name: string;
  surface: Surface;
};

type Group = {
  title: string;
  note: string;
  cols: string;
  imgClass: string;
  cardClass?: string;
  logos: Logo[];
};

const groups: Group[] = [
  {
    title: "Horizontal",
    note: "Default lockup. Use wherever there is room for the full width.",
    cols: "sm:grid-cols-2 xl:grid-cols-3",
    imgClass: "h-10",
    logos: [
      { file: "horizontal-primary", name: "Primary", surface: "light" },
      { file: "horizontal-primary-black-text", name: "Primary, black text", surface: "light" },
      { file: "horizontal-black", name: "Black", surface: "light" },
      { file: "horizontal-primary-white-text", name: "Primary, white text", surface: "dark" },
      { file: "horizontal-white", name: "White", surface: "dark" },
    ],
  },
  {
    title: "Stacked",
    note: "For square and narrow formats where the horizontal lockup would shrink too far.",
    cols: "sm:grid-cols-2 xl:grid-cols-3",
    imgClass: "h-24",
    logos: [
      { file: "stacked-primary", name: "Primary", surface: "light" },
      { file: "stacked-primary-black-text", name: "Primary, black text", surface: "light" },
      { file: "stacked-black", name: "Black", surface: "light" },
      { file: "stacked-primary-white-text", name: "Primary, white text", surface: "dark" },
      { file: "stacked-white", name: "White", surface: "dark" },
    ],
  },
  {
    title: "Icon",
    note: "The Varta mark alone: app icons, avatars and favicons.",
    cols: "sm:grid-cols-3",
    imgClass: "h-20",
    logos: [
      { file: "icon-primary", name: "Primary", surface: "light" },
      { file: "icon-black", name: "Black", surface: "light" },
      { file: "icon-white", name: "White", surface: "dark" },
    ],
  },
  {
    title: "Wordmark",
    note: "Type only. Use when the mark already appears nearby.",
    cols: "sm:grid-cols-2",
    imgClass: "h-10",
    logos: [
      { file: "wordmark-black", name: "Black", surface: "light" },
      { file: "wordmark-white", name: "White", surface: "dark" },
    ],
  },
];

const scales = [2, 4] as const;

function save(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function downloadSvg(dir: string, file: string, prefix: string) {
  const res = await fetch(`${dir}/${file}.svg`);
  if (!res.ok) throw new Error(`Could not load ${file}.svg`);
  save(await res.blob(), `${prefix}${file}.svg`);
}

async function downloadPng(dir: string, file: string, prefix: string, scale: number) {
  const res = await fetch(`${dir}/${file}.svg`);
  if (!res.ok) throw new Error(`Could not load ${file}.svg`);
  const svg = await res.text();
  const svgUrl = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  try {
    const img = new Image();
    img.src = svgUrl;
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
    if (!blob) throw new Error("PNG export failed");
    save(blob, `${prefix}${file}@${scale}x.png`);
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}

function DownloadMenu({ dir, file, prefix, name }: { dir: string; file: string; prefix: string; name: string }) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const run = async (task: () => Promise<void>) => {
    setError(false);
    try {
      await task();
      setOpen(false);
    } catch {
      setError(true);
    }
  };

  const item =
    "flex w-full items-center justify-between gap-6 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:outline-none";

  return (
    <div ref={ref} className="absolute right-2 top-2">
      <button
        type="button"
        aria-label={`Download ${name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="grid size-8 place-items-center rounded-md border bg-background text-foreground shadow-xs hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Download className="size-4" />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-10 mt-1 w-44 rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
          {scales.map((s) => (
            <button key={s} role="menuitem" className={item} onClick={() => run(() => downloadPng(dir, file, prefix, s))}>
              PNG <span className="text-muted-foreground">@{s}x</span>
            </button>
          ))}
          <button role="menuitem" className={item} onClick={() => run(() => downloadSvg(dir, file, prefix))}>
            SVG <span className="text-muted-foreground">vector</span>
          </button>
          {error && <p className="px-2 py-1 text-xs text-destructive">Download failed. Try again.</p>}
        </div>
      )}
    </div>
  );
}

function LogoGroups({
  groups,
  dir,
  prefix,
  label,
}: {
  groups: Group[];
  dir: string;
  prefix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-10">
      {groups.map((g) => (
        <div key={g.title} className="flex flex-col gap-3">
          <div>
            <h3 className="font-semibold">{g.title}</h3>
            <p className="text-sm text-muted-foreground">{g.note}</p>
          </div>
          <div className={cn("grid gap-4", g.cols)}>
            {g.logos.map((l) => (
              <figure key={l.file} className="flex flex-col gap-2">
                <div
                  className={cn(
                    "relative grid place-items-center rounded-lg border p-8",
                    g.cardClass ?? "h-44",
                    l.surface === "dark" ? "border-transparent bg-cr-twilight" : "bg-white",
                  )}
                >
                  <img
                    src={`${dir}/${l.file}.svg`}
                    alt={`${label} ${g.title.toLowerCase()} logo, ${l.name}`}
                    className={cn("w-auto max-w-full", g.imgClass)}
                  />
                  <DownloadMenu dir={dir} file={l.file} prefix={prefix} name={`${g.title} ${l.name}`} />
                </div>
                <figcaption className="text-sm text-muted-foreground">{l.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function LogoGallery() {
  return <LogoGroups groups={groups} dir="/brand/logos" prefix="credresolve-" label="CredResolve" />;
}

const productNames = [
  ["credresolve-os", "CredResolve OS"],
  ["chakra", "Chakra"],
  ["jatayu", "Jatayu"],
  ["drona", "Drona"],
  ["vishwaroop", "Vishwaroop"],
  ["vajra", "Vajra"],
  ["naadha", "Naadha"],
] as const;

const productLogos = (type: "lockup" | "icon"): Logo[] => [
  ...productNames.map(([slug, name]) => ({ file: `${slug}-${type}-gradient`, name: `${name}, gradient`, surface: "light" as const })),
  ...productNames.map(([slug, name]) => ({ file: `${slug}-${type}-white`, name: `${name}, white`, surface: "dark" as const })),
];

const productGroups: Group[] = [
  {
    title: "Product lockups",
    note: "Product icon with its name. Gradient on light grounds, white on Twilight or Jet.",
    cols: "sm:grid-cols-2 xl:grid-cols-3",
    imgClass: "h-12",
    cardClass: "h-36",
    logos: productLogos("lockup"),
  },
  {
    title: "Product icons",
    note: "The glyph alone for app tiles, navigation and avatars.",
    cols: "grid-cols-2 sm:grid-cols-4 xl:grid-cols-7",
    imgClass: "h-16",
    cardClass: "h-32 p-4",
    logos: productLogos("icon"),
  },
];

export function ProductLogoGallery() {
  return <LogoGroups groups={productGroups} dir="/products/logos" prefix="credresolve-" label="Product" />;
}
