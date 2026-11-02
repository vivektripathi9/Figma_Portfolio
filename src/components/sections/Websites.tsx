import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

/** The one part of the portfolio that leaves the site: real, live websites. */
export function Websites() {
  return (
    <section id="websites" className="section-padding border-t border-line">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label mb-5">Live websites / {String(projects.length).padStart(2, "0")}</p>
            <h2 className="display-md">
              And when it&apos;s time, <em>it ships.</em>
            </h2>
          </div>
          <p className="body-md max-w-sm">Production sites I&apos;ve worked on. These open the live website in a new tab.</p>
        </Reveal>

        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="relative block aspect-[16/10] overflow-hidden rounded-lg border border-line transition-colors group-hover:border-accent">
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    className="object-cover object-top transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </span>
                <span className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-medium">{project.title} <span aria-hidden="true" className="text-accent">↗</span></span>
                  <span className="body-sm text-right">{project.sector}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
