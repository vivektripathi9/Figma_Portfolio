import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CanvasToLive } from "@/components/sections/CanvasToLive";
import { Websites } from "@/components/sections/Websites";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Figma design projects by Vivek Tripathi, plus the live websites behind them.",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content">
        <div className="container-site pb-14 pt-36 md:pb-20 md:pt-48">
          <p className="rise label mb-6">The work</p>
          <h1 className="rise display-xl" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            The <em>canvas.</em>
          </h1>
        </div>
        <WorkGrid heading={false} />
        <CanvasToLive />
        <Websites />
      </main>
      <Footer />
    </div>
  );
}
