"use client";

import Image from "next/image";
import { useState } from "react";

import { figmaEmbedUrl, type FigmaDesign } from "@/data/designs";

/** Figma's embed is heavy, so it only loads once someone asks for the live file. */
export function FigmaEmbed({ design }: { design: FigmaDesign }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="relative h-[78svh] min-h-[32rem] overflow-hidden rounded-2xl border border-line bg-panel">
      {open ? (
        <iframe
          src={figmaEmbedUrl(design)}
          title={`${design.title} Figma file`}
          allowFullScreen
          className="h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="canvas-dots group flex h-full w-full flex-col items-center justify-center gap-8 p-6"
        >
          <span className="relative h-[55%] w-full max-w-3xl">
            <Image
              src={design.poster}
              alt={`Overview of the ${design.title} Figma canvas`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
          </span>
          <span className="inline-flex min-h-12 items-center rounded-full bg-accent px-7 text-sm font-medium text-on-accent transition-colors group-hover:bg-foreground">
            Explore the live Figma file
          </span>
          <span className="body-sm">Drag to move. Scroll or pinch to zoom.</span>
        </button>
      )}
    </div>
    {open ? <p className="body-sm mt-4">The live file can take a few seconds to appear.</p> : null}
    </>
  );
}
