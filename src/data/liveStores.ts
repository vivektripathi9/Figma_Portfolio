export type LiveStore = {
  slug: string;
  name: string;
  host: string;
  url: string;
  kind: string;
  blurb: string;
  image: { src: string; width: number; height: number };
  font: string;
  colors: { name: string; hex: string }[];
  /** Positions are percentages of the captured page. */
  frames: { label: string; top: number; height: number; color: string }[];
};

const red = "var(--figma-red)";
const violet = "var(--figma-violet)";
const blue = "var(--figma-blue)";
const green = "var(--figma-green)";

export const liveStores: LiveStore[] = [
  {
    slug: "blando",
    name: "Blando",
    host: "blandostore.com",
    url: "https://blandostore.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=159984648416",
    kind: "Sleep & comfort",
    blurb: "Pillows, bedding and sleepwear, with a bright offer-led layout that keeps collections and deals easy to scan.",
    image: { src: "/live/blando.webp", width: 1200, height: 2667 },
    font: "Poppins",
    colors: [
      { name: "Primary", hex: "#172D99" },
      { name: "Accent", hex: "#0B99F1" },
      { name: "Tint", hex: "#D9F1FD" },
    ],
    frames: [
      { label: "Frame / Hero offer", top: 6, height: 20, color: violet },
      { label: "Auto layout / Benefits", top: 31.5, height: 7.5, color: blue },
      { label: "Component / Product card", top: 43.6, height: 22, color: green },
      { label: "Frame / Bundle deals", top: 70, height: 19.5, color: red },
    ],
  },
  {
    slug: "ayaam",
    name: "AYAAM",
    host: "ayaamperfumes.com",
    url: "https://ayaamperfumes.com/?_ab=0&_fd=0&_sc=1",
    kind: "Luxury perfume",
    blurb: "A fragrance catalogue where the bottles do the talking: a rich gold identity over a calm, even product grid.",
    image: { src: "/live/ayaam.webp", width: 1200, height: 2375 },
    font: "Tajawal",
    colors: [
      { name: "Primary", hex: "#C89B2D" },
      { name: "Accent", hex: "#E0C264" },
      { name: "Text", hex: "#303030" },
    ],
    frames: [
      { label: "Frame / Campaign hero", top: 5.3, height: 17.2, color: violet },
      { label: "Auto layout / Collection tabs", top: 25, height: 2, color: blue },
      { label: "Component / Bottle card", top: 28, height: 44, color: green },
      { label: "Frame / Bestsellers", top: 76, height: 18, color: red },
    ],
  },
  {
    slug: "cocoon",
    name: "Cocoon Beauty",
    host: "cocoonbeauty.com",
    url: "https://www.cocoonbeauty.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=184542200124",
    kind: "Natural beauty",
    blurb: "Natural skin and body care in soft forest greens, with editorial type moments between the shopping rows.",
    image: { src: "/live/cocoon.webp", width: 1200, height: 2667 },
    font: "Poppins",
    colors: [
      { name: "Primary", hex: "#2B4C34" },
      { name: "Accent", hex: "#508D61" },
      { name: "Surface", hex: "#FFFFFF" },
    ],
    frames: [
      { label: "Frame / Hero", top: 3.6, height: 20.4, color: violet },
      { label: "Component / Product card", top: 27, height: 11, color: green },
      { label: "Auto layout / Categories", top: 48, height: 20, color: blue },
      { label: "Frame / Editorial type", top: 72, height: 10, color: red },
    ],
  },
];
