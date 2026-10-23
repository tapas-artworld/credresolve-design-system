import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { ComponentLibrary } from "@/components/demos/library";
import { componentCount } from "@/components/demos/registry";

export const metadata: Metadata = { title: "Components" };

export default function ComponentsPage() {
  return (
    <ComponentLibrary
      header={
        <PageHeader eyebrow="Components" title="Component library">
          All {componentCount} components from the CR Design System Figma file, built on the CredResolve tokens. Every preview
          is live: click, type and open them. Each one links to its page in Figma.
        </PageHeader>
      }
    />
  );
}
