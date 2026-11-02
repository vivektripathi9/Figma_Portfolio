import { siteConfig } from "@/data/site";

export function Marquee() {
  const row = [...siteConfig.marquee, ...siteConfig.marquee];

  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line py-6 md:py-8">
      <div className="marquee-track flex w-max">
        {[...row, ...row].map((item, index) => (
          <span key={index} className="display-md flex shrink-0 items-center whitespace-nowrap">
            <span className={index % 2 ? "text-outline" : ""}>{item}</span>
            <span className="mx-6 text-[0.55em] text-accent md:mx-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
