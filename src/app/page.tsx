import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { CanvasToLive } from "@/components/sections/CanvasToLive";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { UxLab } from "@/components/sections/UxLab";
import { Websites } from "@/components/sections/Websites";
import { WorkGrid } from "@/components/sections/WorkGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content">
        <Hero />
        <Marquee />
        <CanvasToLive />
        <WorkGrid />
        <UxLab />
        <Process />
        <About />
        <Websites />
      </main>
      <Footer />
    </div>
  );
}
