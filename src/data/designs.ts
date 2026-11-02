export type DesignView = {
  label: string;
  width: number;
  images: { src: string; height: number }[];
};

type DesignBase = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
};

export type ImageDesign = DesignBase & {
  source: "pages";
  views: DesignView[];
};

export type FigmaDesign = DesignBase & {
  source: "figma";
  poster: string;
  fileKey: string;
  fileName: string;
};

export type Design = ImageDesign | FigmaDesign;

export const sidhmDesktop: DesignView = {
  label: "Desktop",
  width: 1440,
  images: [
    { src: "/designs/sidhm/desktop-1.jpg", height: 5582 },
    { src: "/designs/sidhm/desktop-2.jpg", height: 4763 },
  ],
};

export const designs: Design[] = [
  {
    slug: "sidhm",
    index: "01",
    title: "SIDHM",
    kind: "Ecommerce homepage · Desktop + phone",
    summary:
      "A homepage concept for a spiritual-wellness brand selling Rudraksha, bracelets and Vastu essentials, paired with one-to-one consultations. Warm editorial layouts, bilingual section labels and arched product imagery.",
    highlights: ["Desktop and phone layouts", "Bilingual Hindi + English labels", "Shop by purpose navigation"],
    source: "pages",
    views: [
      sidhmDesktop,
      {
        label: "Phone",
        width: 390,
        images: [
          { src: "/designs/sidhm/phone-1.jpg", height: 4893 },
          { src: "/designs/sidhm/phone-2.jpg", height: 3678 },
        ],
      },
    ],
  },
  {
    slug: "mediplux",
    index: "02",
    title: "MediPlux",
    kind: "Healthcare app · Figma file",
    summary:
      "A multi-role healthcare app covering account-type selection for doctors, hospitals and pharmacies, then profile setup, ID upload, consent and terms flows.",
    highlights: ["Role-based onboarding", "Consent and terms screens", "Colour and component foundations"],
    source: "figma",
    poster: "/designs/mediplux.webp",
    fileKey: "YFem4bRtBnC18oyzXaxq9a",
    fileName: "MediPlux",
  },
  {
    slug: "step-up",
    index: "03",
    title: "STEP UP",
    kind: "Mobile screens · Figma file",
    summary:
      "An image-led dark interface explored across long mobile screens, with several colour directions laid out side by side on one canvas.",
    highlights: ["Long-scroll mobile screens", "Side-by-side colour directions", "Full working canvas"],
    source: "figma",
    poster: "/designs/step-up.webp",
    fileKey: "ImUeHM1F0eXAkBBPiddiSM",
    fileName: "STEP-UP",
  },
  {
    slug: "mindnest",
    index: "04",
    title: "MindNest",
    kind: "Mobile app · Figma file",
    summary:
      "A calm olive-and-peach mobile app, organised into labelled flows on one canvas with its colour palette and a device mockup.",
    highlights: ["Labelled screen flows", "Defined colour palette", "Device mockup"],
    source: "figma",
    poster: "/designs/mindnest.webp",
    fileKey: "m0gVyDXEIpfcvG88oASmFc",
    fileName: "MindNest",
  },
];

export function figmaEmbedUrl(design: FigmaDesign) {
  return `https://embed.figma.com/design/${design.fileKey}/${design.fileName}?node-id=0-1&embed-host=vivek-portfolio&footer=false&theme=dark`;
}
