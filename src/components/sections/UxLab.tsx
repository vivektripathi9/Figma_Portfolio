"use client";

import { useEffect, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { id: "hierarchy", name: "Visual hierarchy", why: "Product and price read first, so nobody has to hunt for what matters.", before: "14px everywhere", after: "28 / 20 / 14px" },
  { id: "contrast", name: "Colour contrast", why: "Text stays readable for more people, and in bright sunlight.", before: "2.0:1", after: "17.7:1" },
  { id: "spacing", name: "Spacing rhythm", why: "Related things sit together on a steady scale, so the screen scans at a glance.", before: "Random gaps", after: "8 / 16 / 24px" },
  { id: "target", name: "Touch targets", why: "The main action is big enough to hit with a thumb, first time.", before: "28px tall", after: "52px tall" },
  { id: "feedback", name: "System feedback", why: "Every tap gets an answer, so nobody taps twice or wonders if it worked.", before: "No response", after: "Loading, then added" },
] as const;

type PrincipleId = (typeof principles)[number]["id"];

/** Starts broken on purpose: visitors repair a real screen one UX principle at a time. */
export function UxLab() {
  const [fixed, setFixed] = useState<PrincipleId[]>([]);
  const [cart, setCart] = useState<"idle" | "loading" | "added">("idle");
  const on = (id: PrincipleId) => fixed.includes(id);
  const feedback = on("feedback");

  useEffect(() => {
    if (cart !== "loading") return;
    const timer = setTimeout(() => setCart("added"), 900);
    return () => clearTimeout(timer);
  }, [cart]);

  function toggle(id: PrincipleId) {
    setFixed((list) => (list.includes(id) ? list.filter((item) => item !== id) : [...list, id]));
    if (id === "feedback") setCart("idle");
  }

  const text = on("contrast") ? "text-[#18181b]" : "text-[#a3a3a3]";
  const subtle = on("contrast") ? "text-[#52525b]" : "text-[#a3a3a3]";
  const surface = on("contrast") ? "bg-white" : "bg-[#e5e5e5]";
  const transition = "transition-all duration-500 ease-[var(--ease-out)]";

  return (
    <section id="ux" className="section-padding relative overflow-hidden border-t border-line">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="label mb-5">The UX lab</p>
            <h2 className="display-lg max-w-5xl">
              This screen is broken. <em>Fix it yourself.</em>
            </h2>
          </div>
          <p className="body-md max-w-sm">Good UX is a stack of small decisions. Switch each one on and watch the same screen get easier to use.</p>
        </Reveal>

        <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="canvas-dots flex items-center justify-center bg-panel px-4 py-10 md:py-14">
            <div className="w-full max-w-[20rem] rounded-[2.5rem] border border-line bg-[#09090c] p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
              <div className={`flex min-h-[35rem] flex-col overflow-hidden rounded-[2rem] ${surface} ${transition}`}>
                <div className={`flex items-center justify-between px-5 pb-2 pt-4 text-xs ${subtle} ${transition}`}>
                  <span>Atelier</span>
                  <span aria-label={cart === "added" ? "Cart, 1 item" : "Cart, empty"} className="flex items-center gap-1.5">
                    Cart
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] ${transition} ${cart === "added" ? "scale-110 bg-[#a259ff] text-white" : "bg-black/10"}`}>
                      {cart === "added" ? 1 : 0}
                    </span>
                  </span>
                </div>

                <div aria-hidden="true" className={`mx-3 h-44 rounded-2xl bg-gradient-to-br from-[#a259ff] via-[#ff7262] to-[#f2c94c] ${transition} ${on("contrast") ? "" : "opacity-50 saturate-50"}`} />

                <div className={`flex flex-1 flex-col ${transition} ${on("spacing") ? "gap-6 p-5" : "gap-1 p-2"}`}>
                  <div className={`flex flex-col ${on("spacing") ? "gap-2" : "gap-0"}`}>
                    <p className={`${text} ${transition} ${on("hierarchy") ? "text-[1.75rem] leading-[1.1] font-semibold tracking-tight" : "text-sm"}`}>Linen overshirt</p>
                    <p className={`${text} ${transition} ${on("hierarchy") ? "text-xl font-medium" : "text-sm"}`}>$84.00</p>
                  </div>
                  <p className={`text-sm leading-snug ${subtle} ${transition}`}>Breathable, relaxed fit. Ships in two days with free returns.</p>

                  <div className={`mt-auto flex ${on("spacing") ? "gap-2" : "gap-0.5"}`} role="group" aria-label="Size (demo)">
                    {["S", "M", "L"].map((size) => (
                      <span key={size} className={`flex flex-1 items-center justify-center rounded-lg border text-sm ${transition} ${text} ${size === "M" && on("hierarchy") ? "border-[#18181b] font-medium" : "border-black/15"} ${on("target") ? "h-11" : "h-7"}`}>
                        {size}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (feedback && cart === "idle") setCart("loading");
                    }}
                    className={`self-center rounded-lg font-medium ${transition} ${on("target") ? "h-[3.25rem] w-full text-base" : "h-7 w-24 text-xs"} ${on("contrast") ? "bg-[#18181b] text-white" : "bg-[#d4d4d4] text-[#a3a3a3]"} ${cart === "added" ? "!bg-[#0a8f5b] !text-white" : ""}`}
                  >
                    {cart === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <span aria-hidden="true" className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Adding
                      </span>
                    ) : cart === "added" ? "Added ✓" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-background p-5 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="label" aria-live="polite">{fixed.length} of {principles.length} principles applied</p>
              <button
                type="button"
                onClick={() => {
                  setFixed(fixed.length === principles.length ? [] : principles.map((item) => item.id));
                  setCart("idle");
                }}
                className="min-h-10 rounded-full border border-line px-5 text-sm transition-colors hover:border-foreground"
              >
                {fixed.length === principles.length ? "Break it again" : "Fix everything"}
              </button>
            </div>
            <div aria-hidden="true" className="mb-6 h-1 overflow-hidden rounded-full bg-surface">
              <div className={`h-full rounded-full bg-accent ${transition}`} style={{ width: `${(fixed.length / principles.length) * 100}%` }} />
            </div>

            <ul className="flex flex-1 flex-col gap-2">
              {principles.map((principle, index) => {
                const active = on(principle.id);
                return (
                  <li key={principle.id}>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={active}
                      onClick={() => toggle(principle.id)}
                      className={`grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-xl border p-4 text-left transition-colors ${active ? "border-accent bg-surface" : "border-line hover:border-soft"}`}
                    >
                      <span className="label">{String(index + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-medium">{principle.name}</span>
                        <span className="body-sm mt-1 block">{principle.why}</span>
                        <span className="mt-2 block font-mono text-xs">
                          <span className={active ? "text-soft line-through" : "text-figma-coral"}>{principle.before}</span>
                          <span aria-hidden="true" className="text-soft"> → </span>
                          <span className={active ? "text-figma-green" : "text-soft"}>{principle.after}</span>
                        </span>
                      </span>
                      <span aria-hidden="true" className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${active ? "bg-accent" : "bg-panel-raised"}`}>
                        <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all duration-300 ${active ? "left-6" : "left-1"}`} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="body-sm mt-5">{feedback ? "Now tap Add to cart on the screen." : "Tip: tap Add to cart on the screen. With feedback off, nothing happens."}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
