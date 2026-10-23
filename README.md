# CredResolve/ui — Brand guidelines & design system

The CredResolve brand guidelines and the CredResolve/ui design system as a Next.js site.
It mirrors the Figma file **CR Design System** (shadcn/ui kit, primary `#F68B1F`, Inter Variable).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

**Seeing "Could not find the module … in the React Client Manifest"?** The dev server's cache is out of date (usually after files were added while it was running). Stop it with Ctrl+C and run `npm run dev:clean`, which clears `.next` and starts fresh.

## What's inside

| Route | Content |
| --- | --- |
| `/` | Overview |
| `/brand` | Logo, colour, typography, layout, voice & tone, product family, imagery |
| `/foundations/colors` | Brand palette, orange + Twilight scales, theme tokens, contrast |
| `/foundations/typography` | Inter Variable, weights, type scale |
| `/foundations/layout` | Radius, spacing, shadows |
| `/components` | Button, Badge, Input, Switch, Alert, Card, Table |

- **Tokens:** `app/globals.css` (CSS variables, light + dark) and `lib/tokens.ts` (data used by the docs pages).
- **Font:** `app/fonts/InterVariable*.woff2`, loaded with `next/font/local`.
- **Logos:** `public/brand/`.
- **Components:** `components/ui/` (shadcn/ui style, class-variance-authority + tailwind-merge).

## Host it

Push the folder to a GitHub repo and import it on Vercel (framework preset: Next.js). No environment variables are needed.

To change a brand value, edit `app/globals.css` and `lib/tokens.ts`, and the matching variable in Figma.
