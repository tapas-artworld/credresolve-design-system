// CredResolve/ui design tokens.
// Source of truth: Figma file "CR Design System" (collections "CredResolve" and "shadcn/ui")
// and the CredResolve Brand Identity Guidelines.

export type Swatch = { name: string; hex: string; note?: string };

export const brandColors: Swatch[] = [
  { name: "Resolve Orange", hex: "#F68B1F", note: "Primary. Pantone 715C · CMYK 0/55/100/0" },
  { name: "First Light", hex: "#FBAE17", note: "Gradient light end · CMYK 0/35/100/0" },
  { name: "Dusk", hex: "#F05A22", note: "Gradient deep end · CMYK 0/80/100/0" },
  { name: "Twilight", hex: "#282A53", note: "Brand dark neutral · CMYK 95/90/40/35" },
  { name: "Ivory", hex: "#FFF4EE", note: "Brand light neutral · CMYK 0/5/5/0" },
  { name: "Early Light", hex: "#DBE2EA", note: "Cool relief neutral · CMYK 15/5/5/0" },
];

export const orange: Swatch[] = [
  { name: "50", hex: "#FEF8F1" },
  { name: "100", hex: "#FEEDDA" },
  { name: "200", hex: "#FEDAB4" },
  { name: "300", hex: "#FEC581" },
  { name: "400", hex: "#FBAE17" },
  { name: "500", hex: "#F68B1F", note: "primary" },
  { name: "600", hex: "#F05A22" },
  { name: "700", hex: "#BF4712" },
  { name: "800", hex: "#953710" },
  { name: "900", hex: "#732F10" },
  { name: "950", hex: "#421807" },
];

export const twilight: Swatch[] = [
  { name: "50", hex: "#F9FAFD" },
  { name: "100", hex: "#F3F4FA" },
  { name: "200", hex: "#E5E7F1" },
  { name: "300", hex: "#D0D3E3" },
  { name: "400", hex: "#9CA0BB" },
  { name: "500", hex: "#65698A" },
  { name: "600", hex: "#4D5174" },
  { name: "700", hex: "#393C63" },
  { name: "800", hex: "#282A53", note: "Twilight" },
  { name: "900", hex: "#181A3A" },
  { name: "950", hex: "#0A0B22" },
];

export type ThemeToken = { name: string; light: string; dark: string; on: string; usage: string };

export const themeTokens: ThemeToken[] = [
  { name: "background", light: "#FFFFFF", dark: "#020617", on: "foreground", usage: "Page background." },
  { name: "foreground", light: "#020617", dark: "#F8FAFC", on: "background", usage: "Default text." },
  { name: "primary", light: "#F68B1F", dark: "#F68B1F", on: "primary-foreground", usage: "Main action per view: primary button, checked controls, progress." },
  { name: "primary-foreground", light: "#282A53", dark: "#282A53", on: "primary", usage: "Text and icons on primary. Twilight, never white (5.6:1)." },
  { name: "secondary", light: "#F1F5F9", dark: "#1E293B", on: "secondary-foreground", usage: "Secondary buttons and chips." },
  { name: "muted", light: "#F1F5F9", dark: "#1E293B", on: "muted-foreground", usage: "Table headers, skeletons, disabled fields." },
  { name: "muted-foreground", light: "#64748B", dark: "#94A3B8", on: "background", usage: "Helper text, captions, metadata." },
  { name: "accent", light: "#F1F5F9", dark: "#1E293B", on: "accent-foreground", usage: "Hover fill for ghost buttons, menu items, rows." },
  { name: "destructive", light: "#DC2626", dark: "#B91C1C", on: "destructive-foreground", usage: "Delete, revoke, failed payments." },
  { name: "success", light: "#16A34A", dark: "#22C55E", on: "background", usage: "Paid, resolved, verified." },
  { name: "border", light: "#E2E8F0", dark: "#334155", on: "foreground", usage: "Card edges, dividers, table rules." },
  { name: "input", light: "#E2E8F0", dark: "#334155", on: "foreground", usage: "Form field borders." },
  { name: "ring", light: "#64748B", dark: "#94A3B8", on: "background", usage: "Focus ring." },
];

export type TypeStyle = { token: string; role: string; size: number; leading: number; weight: number; tracking?: string; sample: string };

export const typeScale: TypeStyle[] = [
  { token: "text-4xl", role: "Page title", size: 36, leading: 40, weight: 700, tracking: "-0.025em", sample: "Recovery overview" },
  { token: "text-3xl", role: "Section title", size: 30, leading: 36, weight: 600, tracking: "-0.025em", sample: "Campaign performance" },
  { token: "text-2xl", role: "Card title", size: 24, leading: 32, weight: 600, tracking: "-0.025em", sample: "Allocation summary" },
  { token: "text-xl", role: "Sub-section", size: 20, leading: 28, weight: 600, tracking: "-0.025em", sample: "Borrower details" },
  { token: "text-lg", role: "Large", size: 18, leading: 28, weight: 500, sample: "₹4,82,30,000 recovered" },
  { token: "text-base", role: "Body", size: 16, leading: 24, weight: 400, sample: "Every account in this batch has a promise-to-pay date." },
  { token: "text-sm", role: "Label / button", size: 14, leading: 20, weight: 500, sample: "Start campaign" },
  { token: "text-sm", role: "Small / table", size: 14, leading: 20, weight: 400, sample: "DPD 31–60 · 1,284 accounts" },
  { token: "text-xs", role: "Caption", size: 12, leading: 16, weight: 400, sample: "Updated 2 min ago" },
];

export const radii = [
  { name: "radius-sm", px: 4, cls: "rounded-sm", usage: "Badges, checkboxes" },
  { name: "radius-md", px: 6, cls: "rounded-md", usage: "Buttons, inputs, menu items" },
  { name: "radius", px: 8, cls: "rounded-lg", usage: "Cards, dialogs, popovers" },
  { name: "rounded-xl", px: 12, cls: "rounded-xl", usage: "Large panels" },
  { name: "rounded-full", px: 9999, cls: "rounded-full", usage: "Avatars, pills, switches" },
];

export const spacing = [
  { name: "1", px: 4 },
  { name: "2", px: 8 },
  { name: "3", px: 12 },
  { name: "4", px: 16 },
  { name: "6", px: 24 },
  { name: "8", px: 32 },
  { name: "12", px: 48 },
  { name: "16", px: 64 },
];

export const shadows = [
  { name: "shadow-sm", cls: "shadow-sm" },
  { name: "shadow", cls: "shadow" },
  { name: "shadow-md", cls: "shadow-md" },
  { name: "shadow-lg", cls: "shadow-lg" },
  { name: "shadow-xl", cls: "shadow-xl" },
  { name: "shadow-2xl", cls: "shadow-2xl" },
];

// WCAG relative luminance, used to pick legible text on swatches.
export function luminance(hex: string) {
  const v = hex.replace("#", "");
  const c = [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16) / 255);
  const f = (x: number) => (x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4));
  return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]);
}

export function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

export function inkFor(hex: string) {
  return contrast(hex, "#282A53") >= contrast(hex, "#FFFFFF") ? "#282A53" : "#FFFFFF";
}
