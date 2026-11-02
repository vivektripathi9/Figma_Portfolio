"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { liveStores } from "@/data/liveStores";

const clamp = (value: number) => Math.min(96, Math.max(4, value));

/** One capture, two states: drag the divider to wipe from the design layer to the live site. */
export function CanvasToLive() {
  const [slug, setSlug] = useState(liveStores[0].slug);
  const [split, setSplit] = useState(52);
  const stage = useRef<HTMLDivElement>(null);
  const store = liveStores.find((item) => item.slug === slug) ?? liveStores[0];

  function moveTo(event: PointerEvent<HTMLButtonElement>) {
    const box = stage.current?.getBoundingClientRect();
    if (box) setSplit(clamp(((event.clientX - box.left) / box.width) * 100));
  }

  function onKey(event: KeyboardEvent<HTMLButtonElement>) {
    const step = { ArrowLeft: -4, ArrowRight: 4 }[event.key];
    if (!step) return;
    event.preventDefault();
    setSplit((value) => clamp(value + step));
  }

  const image = (extra: string, eager = false) => (
    <Image
      src={store.image.src}
      alt=""
      width={store.image.width}
      height={store.image.height}
      preload={eager}
      draggable={false}
      className={`block h-auto w-full select-none ${extra}`}
      sizes="(max-width: 1024px) 100vw, 75vw"
    />
  );

  return (
    <section id="live" className="section-padding relative overflow-hidden border-t border-line">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="label mb-5">Canvas to live / {String(liveStores.length).padStart(2, "0")}</p>
            <h2 className="display-lg max-w-5xl">
              Drag the line. <em>Watch the design go live.</em>
            </h2>
          </div>
          <p className="body-md max-w-sm">Three Figma designs now selling on the real internet. Pull the divider across, and scroll each page yourself.</p>
        </Reveal>

        <Reveal>
          <div role="group" aria-label="Choose a store" className="flex gap-1 overflow-x-auto rounded-t-2xl border border-b-0 border-line bg-panel p-2">
            {liveStores.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                aria-pressed={item.slug === store.slug}
                onClick={() => {
                  setSlug(item.slug);
                  setSplit(52);
                }}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${item.slug === store.slug ? "bg-panel-raised text-foreground" : "text-muted hover:text-foreground"}`}
              >
                <span className="label">{String(index + 1).padStart(2, "0")}</span>
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid overflow-hidden rounded-b-2xl border border-line bg-panel lg:grid-cols-[1fr_18rem]">
            <div ref={stage} className="relative h-[72svh] min-h-[28rem] overflow-hidden bg-[#0d0f1a]">
              <div key={store.slug} tabIndex={0} aria-label={`${store.name} page, scrollable`} className="h-full overflow-y-auto">
                <div className="relative">
                  {image("", true)}
                  <div className="absolute inset-0 overflow-hidden bg-[#0d0f1a]" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
                    {image("opacity-45 grayscale contrast-125")}
                    <span aria-hidden="true" className="canvas-dots absolute inset-0" />
                    <span aria-hidden="true">
                      {store.frames.map((frame) => (
                        <span
                          key={frame.label}
                          className="absolute inset-x-[3%] border"
                          style={{ top: `${frame.top}%`, height: `${frame.height}%`, borderColor: frame.color, backgroundColor: `color-mix(in srgb, ${frame.color} 10%, transparent)` }}
                        >
                          <span className="absolute left-0 top-0 -translate-y-full px-1.5 py-0.5 font-mono text-[0.65rem] whitespace-nowrap text-[#09090c]" style={{ backgroundColor: frame.color }}>
                            {frame.label}
                          </span>
                          <span className="absolute -left-1 -top-1 h-2 w-2 border bg-white" style={{ borderColor: frame.color }} />
                          <span className="absolute -right-1 -top-1 h-2 w-2 border bg-white" style={{ borderColor: frame.color }} />
                          <span className="absolute -bottom-1 -left-1 h-2 w-2 border bg-white" style={{ borderColor: frame.color }} />
                          <span className="absolute -bottom-1 -right-1 h-2 w-2 border bg-white" style={{ borderColor: frame.color }} />
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-y-0 w-px bg-figma-blue" style={{ left: `${split}%` }}>
                <span aria-hidden="true" className="label absolute right-3 top-3 rounded bg-[#09090c] px-2 py-1 !text-white">Design</span>
                <span aria-hidden="true" className="absolute left-3 top-3 flex items-center gap-1.5 rounded bg-[#09090c] px-2 py-1 font-mono text-[0.7rem] tracking-[0.08em] text-white">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-figma-green" />
                  LIVE
                </span>
                <button
                  type="button"
                  role="slider"
                  aria-label="Reveal the live website"
                  aria-valuemin={4}
                  aria-valuemax={96}
                  aria-valuenow={Math.round(split)}
                  onKeyDown={onKey}
                  onPointerDown={(event) => event.currentTarget.setPointerCapture(event.pointerId)}
                  onPointerMove={(event) => {
                    if (event.currentTarget.hasPointerCapture(event.pointerId)) moveTo(event);
                  }}
                  className="pointer-events-auto absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full bg-figma-blue text-lg font-medium text-[#09090c] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform hover:scale-110"
                >
                  <span aria-hidden="true">↔</span>
                </button>
              </div>
            </div>

            <aside className="flex flex-col gap-6 border-t border-line p-5 lg:border-l lg:border-t-0">
              <div>
                <p className="label mb-2">{store.kind}</p>
                <h3 className="display-sm">{store.name}</h3>
                <p className="body-sm mt-3">{store.blurb}</p>
              </div>
              <div>
                <p className="label mb-3">Colour styles</p>
                <ul className="space-y-2">
                  {store.colors.map((color) => (
                    <li key={color.name} className="flex items-center gap-3 text-sm">
                      <span aria-hidden="true" className="h-6 w-6 rounded border border-line" style={{ backgroundColor: color.hex }} />
                      <span className="text-muted">{color.name}</span>
                      <span className="ml-auto font-mono text-xs text-soft">{color.hex}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-2">Type</p>
                <p className="text-sm text-muted">{store.font}</p>
              </div>
              <a
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-on-accent transition-colors hover:bg-foreground"
              >
                Visit {store.host} ↗
              </a>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
