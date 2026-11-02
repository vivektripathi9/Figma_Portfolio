import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <LoopVideo src="/video/flow.mp4" poster="/video/flow.jpg" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      <div className="container-site relative pt-[clamp(6rem,14vw,12rem)]">
        <Reveal>
          <p className="label mb-6">Available for Figma design and design-to-build projects</p>
          <h2 className="display-xl">
            Let&apos;s put your idea
            <br />
            <em>on the canvas.</em>
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
            <Button href={siteConfig.whatsappUrl} variant="outline">
              WhatsApp {siteConfig.phone}
            </Button>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-5 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="body-sm">© {new Date().getFullYear()} {siteConfig.name}</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
