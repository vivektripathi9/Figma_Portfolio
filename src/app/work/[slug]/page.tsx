import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FigmaEmbed } from "@/components/ui/FigmaEmbed";
import { PageViews } from "@/components/ui/PageViews";
import { designs } from "@/data/designs";

export const dynamicParams = false;

export function generateStaticParams() {
  return designs.map((design) => ({ slug: design.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const design = designs.find((item) => item.slug === slug);
  return design ? { title: design.title, description: design.summary } : {};
}

export default async function DesignPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const position = designs.findIndex((item) => item.slug === slug);
  if (position < 0) notFound();

  const design = designs[position];
  const next = designs[(position + 1) % designs.length];

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content" className="pb-20 pt-32 md:pt-44">
        <div className="container-site">
          <Link href="/work" className="label transition-colors hover:text-foreground">← All work</Link>
          <p className="rise label mb-6 mt-10">{design.index} / {design.kind}</p>
          <h1 className="rise display-xl" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>{design.title}</h1>

          <div className="rise mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-[2fr_1fr]" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
            <p className="body-lg max-w-3xl">{design.summary}</p>
            <ul className="space-y-2">
              {design.highlights.map((highlight) => (
                <li key={highlight} className="body-md flex items-center gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise mt-12" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            {design.source === "figma" ? <FigmaEmbed design={design} /> : <PageViews design={design} />}
          </div>

          <Link href={`/work/${next.slug}`} className="group mt-20 block border-t border-line pt-8">
            <span className="label">Next project</span>
            <span className="display-lg mt-3 block transition-colors group-hover:!text-accent">{next.title} →</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
