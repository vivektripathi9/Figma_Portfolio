import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/designs", destination: "/work", permanent: true },
      { source: "/projects", destination: "/work#websites", permanent: true },
      { source: "/projects.html", destination: "/work#websites", permanent: true },
      { source: "/architecture", destination: "/work#websites", permanent: true },
      { source: "/services", destination: "/#process", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/video/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
};

export default nextConfig;
