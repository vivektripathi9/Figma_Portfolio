import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { designs } from "@/data/designs";

const stats = [
  { value: "4+", label: "Years shipping for the web" },
  { value: String(designs.length), label: "Design projects on show" },
  { value: String(projects.length), label: "Live websites below" },
];

export function About() {
  return (
    <section id="about" className="section-padding border-t border-line">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line lg:sticky lg:top-28 lg:self-start">
          <Image src={siteConfig.portrait} alt={`Portrait of ${siteConfig.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        </Reveal>

        <div>
          <Reveal>
            <p className="label mb-5">About</p>
            <h2 className="display-md">{siteConfig.about}</h2>
            <p className="body-lg mt-6">{siteConfig.aboutSecondary}</p>
          </Reveal>

          <Reveal className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-4 md:p-6">
                <p className="display-md tabular-nums">{stat.value}</p>
                <p className="body-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </Reveal>

          <ul className="mt-14 border-t border-line">
            {[...experience].reverse().map((item) => (
              <li key={item.company} className="border-b border-line py-6">
                <Reveal>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display-sm">{item.role}, {item.company}</h3>
                    <p className="label">{item.period}</p>
                  </div>
                  <p className="body-md mt-3">{item.summary}</p>
                  {item.quote ? <p className="mt-3 font-serif text-lg italic text-accent">&ldquo;{item.quote}&rdquo;</p> : null}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
