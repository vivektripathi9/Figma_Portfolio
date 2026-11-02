"use client";

import Image from "next/image";
import { useState } from "react";

import type { ImageDesign } from "@/data/designs";

export function PageViews({ design }: { design: ImageDesign }) {
  const [label, setLabel] = useState(design.views[0].label);
  const view = design.views.find((option) => option.label === label) ?? design.views[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel">
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
        <p className="label">{design.title} / {view.label}</p>
        <div className="flex gap-1 rounded-full border border-line p-1" role="group" aria-label="Device">
          {design.views.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => setLabel(option.label)}
              aria-pressed={option.label === view.label}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${option.label === view.label ? "bg-accent text-on-accent" : "text-muted hover:text-foreground"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div key={view.label} tabIndex={0} aria-label={`${design.title} ${view.label} design, scrollable`} className="canvas-dots h-[82svh] overflow-y-auto p-3 md:p-8">
        <div className="mx-auto shadow-2xl" style={{ maxWidth: view.width }}>
          {view.images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={`${design.title} ${view.label} design, part ${index + 1} of ${view.images.length}`}
              width={view.width}
              height={image.height}
              className="block h-auto w-full"
              sizes={`(max-width: ${view.width}px) 100vw, ${view.width}px`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
