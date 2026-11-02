import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { MultiplayerCursor, SelectionFrame } from "@/components/ui/Figma";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { designs, sidhmDesktop as sidhm } from "@/data/designs";
import { siteConfig } from "@/data/site";

const inspector = [
  ["W", "1440"],
  ["H", "Hug"],
  ["Gap", "24"],
  ["Radius", "8"],
];

const swatches = ["bg-figma-red", "bg-figma-coral", "bg-figma-violet", "bg-figma-blue", "bg-figma-green"];

/** The opening looks like the tool itself: a working Figma window with real work on the canvas. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 md:pt-44">
      <LoopVideo src="/video/aurora.mp4" poster="/video/aurora.jpg" className="absolute inset-x-0 top-0 h-[85svh] w-full object-cover opacity-50" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[85svh] bg-gradient-to-b from-background/40 via-background/50 to-background" />

      <div className="container-site relative text-center">
        <p className="rise label mb-6 flex items-center justify-center gap-3">
          <span className="pulse-dot h-2 w-2 rounded-full bg-figma-green" />
          {siteConfig.name} / {siteConfig.title}
        </p>
        <h1 className="rise display-xl mx-auto max-w-6xl" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
          Designs that survive <em>contact with code.</em>
        </h1>
        <p className="rise body-lg mx-auto mt-7 max-w-2xl" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
          {siteConfig.heroBio}
        </p>
        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
          <Button href="/work">See the work</Button>
          <Button href={siteConfig.whatsappUrl} variant="outline">Talk on WhatsApp</Button>
        </div>
      </div>

      <div className="rise container-site relative mt-14 md:mt-20" style={{ "--rise-delay": "320ms" } as React.CSSProperties}>
        <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-figma-red" />
                <span className="h-2.5 w-2.5 rounded-full bg-figma-coral" />
                <span className="h-2.5 w-2.5 rounded-full bg-figma-green" />
              </span>
              <p className="label !normal-case">Portfolio / SIDHM homepage</p>
            </div>
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-figma-violet text-[0.65rem] font-medium text-white">V</span>
              <span className="rounded bg-figma-blue px-2 py-0.5 text-[0.7rem] font-medium text-[#09090c]">Share</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[14rem_1fr_14rem]">
            <aside className="hidden border-r border-line p-4 lg:block">
              <p className="label mb-3">Layers</p>
              <ul className="space-y-1 text-sm text-muted">
                {designs.map((design, index) => (
                  <li key={design.slug}>
                    <Link
                      href={`/work/${design.slug}`}
                      className={`flex items-center gap-2 rounded px-2 py-1.5 transition-colors hover:bg-figma-blue/25 hover:text-foreground ${index === 0 ? "bg-figma-blue/15 text-foreground" : ""}`}
                    >
                      <span aria-hidden="true" className="h-2.5 w-2.5 border border-current" />
                      {design.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="canvas-dots relative flex items-center justify-center overflow-hidden px-4 pb-14 pt-8 md:px-10">
              <SelectionFrame tag="1440 × Hug" className="w-full max-w-4xl">
                <div tabIndex={0} aria-label="SIDHM homepage design, scrollable" className="aspect-[8/5] w-full overflow-y-auto bg-white">
                  {sidhm.images.map((image, index) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={`SIDHM homepage design, part ${index + 1} of ${sidhm.images.length}`}
                      width={sidhm.width}
                      height={image.height}
                      preload={index === 0}
                      className="block h-auto w-full"
                      sizes="(max-width: 896px) 100vw, 896px"
                    />
                  ))}
                </div>
              </SelectionFrame>
              <MultiplayerCursor name="Vivek" color="#b18cff" dx="60px" dy="-40px" className="left-[12%] top-[22%] hidden md:flex" />
              <MultiplayerCursor name="You" color="#1abcfe" dx="-70px" dy="50px" duration={18} className="right-[12%] top-[58%] hidden md:flex" />
            </div>

            <aside aria-hidden="true" className="hidden border-l border-line p-4 lg:block">
              <p className="label mb-3">Design</p>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                {inspector.map(([key, value]) => (
                  <div key={key} className="flex justify-between rounded bg-panel-raised px-2 py-1.5">
                    <dt className="text-soft">{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="label mb-3 mt-6">Fill</p>
              <div className="flex gap-1.5">
                {swatches.map((swatch) => (
                  <span key={swatch} className={`h-6 w-6 rounded ${swatch}`} />
                ))}
              </div>
              <p className="label mb-3 mt-6">Prototype</p>
              <p className="body-sm">Scroll inside the frame to explore the page</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
