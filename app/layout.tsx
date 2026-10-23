import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/site/theme-provider";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Sidebar, MobileNav } from "@/components/site/sidebar";
import { Logo } from "@/components/site/logo";

const inter = localFont({
  src: [
    { path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/InterVariable-Italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "CredResolve/ui", template: "%s · CredResolve/ui" },
  description: "CredResolve brand guidelines and the CredResolve/ui design system.",
  icons: { icon: "/brand/credresolve-mark-orange.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-dvh font-sans">
        <ThemeProvider>
          <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur lg:px-6">
            <MobileNav />
            <Link href="/" aria-label="CredResolve/ui home">
              <Logo />
            </Link>
            <span className="ml-1 hidden rounded-full border px-2 py-0.5 text-xs text-muted-foreground sm:inline">
              v1.0
            </span>
            <div className="ml-auto flex items-center gap-1">
              <a
                href="https://www.figma.com/design/M63lQm4amcN3PGh5sAP3Wg/CR-Design-System"
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:block"
              >
                Figma
              </a>
              <ThemeToggle />
            </div>
          </header>
          <div className="flex">
            <Sidebar />
            <main className="min-w-0 flex-1 px-4 py-10 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-6xl">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
