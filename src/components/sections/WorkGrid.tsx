import Image from "next/image";
import Link from "next/link";

import { LoopVideo } from "@/components/ui/LoopVideo";
import { Reveal } from "@/components/ui/Reveal";
import { designs, type Design } from "@/data/designs";

function Cover({ design }: { design: Design }) {
  if (design.source === "pages") {
    return (
      <span className="relative block h-full w-full">
        <Image
          src={design.views[0].images[0].src}
          alt=""
          fill
          className="object-cover object-top transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-[1.03]"
          sizes="100vw"
        />
      </span>
    );
  }

  return (
    <span className="relative block h-full w-full">
      <LoopVideo src="/video/aurora.mp4" poster="/video/aurora.jpg" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <span aria-hidden="true" className="canvas-dots absolute inset-0" />
      <Image
        src={design.poster}
        alt=""
        fill
        className="object-contain p-5 transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-105 md:p-8"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </span>
  );
}

export function WorkGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section id="work" className={heading ? "section-padding" : "pb-[clamp(5rem,11vw,10rem)]"}>
      <div className="container-site">
        {heading ? (
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
            <div>
              <p className="label mb-5">Selected work / {String(designs.length).padStart(2, "0")}</p>
              <h2 className="display-lg">
                Open the file. <em>Not a mockup.</em>
              </h2>
            </div>
            <p className="body-md max-w-sm">Every project opens right here, with the full page or the live Figma canvas to explore.</p>
          </Reveal>
        ) : null}

        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {designs.map((design, index) => (
            <li key={design.slug} className={index === 0 ? "md:col-span-2" : ""}>
              <Reveal delay={index === 0 ? 0 : (index % 2) * 100}>
                <Link href={`/work/${design.slug}`} className="group block">
                  <span className={`block overflow-hidden rounded-xl border border-line bg-panel transition-colors duration-300 group-hover:border-accent ${index === 0 ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[4/3]"}`}>
                    <Cover design={design} />
                  </span>
                  <span className="mt-5 flex items-baseline justify-between gap-4">
                    <span className="display-sm transition-colors group-hover:!text-accent">
                      <span className="label mr-3 align-middle">{design.index}</span>
                      {design.title}
                    </span>
                    <span className="body-sm text-right">{design.kind}</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
