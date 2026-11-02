import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { name: "Frame the problem", color: "bg-figma-red", text: "Audience, content and goals agreed first, so the design answers something real." },
  { name: "Explore on the canvas", color: "bg-figma-coral", text: "Layout and visual directions side by side, in the open, where you can comment on them." },
  { name: "Build the system", color: "bg-figma-violet", text: "Colour, type and spacing as variables, and components with the states they actually need." },
  { name: "Prototype the flow", color: "bg-figma-blue", text: "Clickable journeys on desktop and phone, so decisions get tested before they get built." },
  { name: "Hand off, or build it", color: "bg-figma-green", text: "A clean file for your developers, or I take it to production myself in React and Next.js." },
];

/** Spacing and type steps follow Figma's open-source Simple Design System (MIT). */
const spacing = [
  ["100", 4],
  ["200", 8],
  ["300", 12],
  ["400", 16],
  ["600", 24],
  ["800", 32],
  ["1200", 48],
  ["1600", 64],
] as const;

const typeScale = [
  ["Scale 08", "3rem"],
  ["Scale 06", "2rem"],
  ["Scale 04", "1.25rem"],
  ["Scale 03", "1rem"],
] as const;

export function Process() {
  return (
    <section id="process" className="section-padding border-t border-line">
      <div className="container-site">
        <Reveal className="mb-14 md:mb-20">
          <p className="label mb-5">Process</p>
          <h2 className="display-lg max-w-5xl">
            From a blank frame to <em>a build-ready file.</em>
          </h2>
        </Reveal>

        <ol className="border-t border-line">
          {steps.map((step, index) => (
            <li key={step.name} className="border-b border-line">
              <Reveal className="grid items-baseline gap-3 py-7 md:grid-cols-[6rem_1fr_1fr] md:gap-8">
                <span className="label flex items-center gap-2">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${step.color}`} />
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm">{step.name}</h3>
                <p className="body-md">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          <div className="bg-panel p-6 md:p-8">
            <p className="label mb-6">Variables / Spacing</p>
            <ul className="space-y-2.5">
              {spacing.map(([name, size]) => (
                <li key={name} className="flex items-center gap-4">
                  <span className="label w-20 shrink-0">space-{name}</span>
                  <span className="h-3 rounded-sm bg-accent" style={{ width: size * 3 }} />
                  <span className="body-sm">{size}px</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-panel p-6 md:p-8">
            <p className="label mb-6">Variables / Type</p>
            <ul className="space-y-3">
              {typeScale.map(([name, size]) => (
                <li key={name} className="flex items-baseline justify-between gap-4">
                  <span className="truncate font-medium tracking-tight" style={{ fontSize: size, lineHeight: 1.1 }}>Interface</span>
                  <span className="label shrink-0">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <p className="body-sm mt-4">
          Token structure follows{" "}
          <a href="https://github.com/figma/sds" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
            Figma&apos;s Simple Design System
          </a>{" "}
          (MIT).
        </p>
      </div>
    </section>
  );
}
