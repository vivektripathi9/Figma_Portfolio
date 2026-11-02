export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  sector?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    title: "Anastasia Beverly Hills",
    subtitle: "Cosmetics & Brows",
    description:
      "Frontend work on the beauty ecommerce experience — brows, makeup collections, and campaign storytelling.",
    image: "/projects/anastasia-beverly-hills.jpg",
    technologies: ["Ecommerce", "Frontend", "Beauty"],
    liveUrl: "https://www.anastasiabeverlyhills.com",
    category: "Beauty",
    sector: "Health & Beauty",
      role: "Ecommerce frontend",
    },
  {
    title: "Touristal India",
    subtitle: "Education & Travel",
    description:
      "Travel site for destinations and trip inspiration across India, built to stay readable on mobile.",
    image: "/projects/touristal-india.jpg",
    technologies: ["Web", "Responsive", "Travel"],
    liveUrl: "https://touristalindia.com",
    category: "Travel",
    sector: "Travel & Education",
      role: "Marketing website",
    },
  {
    title: "Butlerco Marketing",
    subtitle: "Marketing Agency",
    description:
      "Agency site with a conversion-ready service layout and clear paths from story to enquiry.",
    image: "/projects/butlerco.jpg",
    technologies: ["Web", "Marketing", "SEO"],
    liveUrl: "https://www.butlercomarketing.com",
    category: "Agency",
    sector: "Marketing & Agency",
      role: "Marketing website",
    },
  {
    title: "ModernX SaaS",
    subtitle: "Product Platform",
    description:
      "SaaS landing page with a tight hierarchy, feature storytelling, and product-focused visuals.",
    image: "/projects/modernx-saas.jpg",
    technologies: ["SaaS", "Landing page", "UI"],
    liveUrl: "https://saas.modernxwebs.com",
    category: "SaaS",
    sector: "SaaS & Product",
      role: "Product landing",
    },
  {
    title: "Zeko",
    subtitle: "Modern Product Brand",
    description:
      "Product brand site with a strong visual rhythm and a responsive layout for a modern catalogue.",
    image: "/projects/zeko.jpg",
    technologies: ["Web", "Product", "UI"],
    liveUrl: "https://zeko.modernxwebs.com",
    category: "Product",
    sector: "Product",
      role: "Brand website",
    },
  {
    title: "Pinakkaa",
    subtitle: "Digital Marketing Agency",
    description:
      "Growth-agency site covering SEO, paid media, Shopify development, and an ROI-led service story.",
    image: "/projects/pinakkaa.jpg",
    technologies: ["Web", "Agency", "Shopify"],
    liveUrl: "https://pinakkaa.com",
    category: "Agency",
    sector: "Marketing & Agency",
      role: "Marketing website",
    },
  {
    title: "Stratus",
    subtitle: "Architecture & Interiors",
    description:
      "Practice site for architecture and interiors — material storytelling, selected work, and a design-to-build process.",
    image: "/projects/stratus.jpg",
    technologies: ["Web", "Branding", "Architecture"],
    liveUrl: "https://www.stratus.company",
    category: "Architecture",
    sector: "Architecture & Interiors",
      role: "Brand website",
      },
  {
    title: "Tula Projects",
    subtitle: "Luxury Real Estate",
    description:
      "Real estate brand site for projects in Bangalore — storytelling, sustainability, and enquiry-led conversion.",
    image: "/projects/tulaprojects.jpg",
    technologies: ["Web", "Branding", "Real estate"],
    liveUrl: "https://www.tulaprojects.com",
    category: "Real Estate",
    sector: "Real Estate & Development",
      role: "Brand website",
      },
  {
    title: "Studio Real Estate",
    subtitle: "Real Estate & Architecture",
    description:
      "Studio site offering premium websites for developers, architects, and real-estate brands, from strategy and design to SEO and launch.",
    image: "/projects/real-estate-portfolio.jpg",
    technologies: ["Web", "Branding", "Real estate"],
    liveUrl: "https://vivektripathi9.github.io/Real_estate_Portfolio/",
    category: "Real Estate",
    sector: "Real Estate & Development",
      role: "Brand website",
    },
  {
    title: "Hotwheelz",
    subtitle: "Automotive",
    description:
      "Automotive brand site with bold presentation, service highlights, and a performance-led visual style.",
    image: "/projects/hotwheelz.jpg",
    technologies: ["Web", "Branding", "Automotive"],
    liveUrl: "https://hotwheelz.co",
    category: "Automotive",
    sector: "Automotive",
      role: "Brand website",
    },
  {
    title: "Adchitects",
    subtitle: "Creative Studio",
    description:
      "Advertising studio site for campaigns and capabilities, with a design-forward identity.",
    image: "/projects/adchitects.jpg",
    technologies: ["Web", "Agency", "UI"],
    liveUrl: "https://adchitects.co",
    category: "Agency",
    sector: "Marketing & Agency",
      role: "Brand website",
    },
];
