// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enable static HTML export for Netlify
  output: "export",

  // Hide the floating Next.js dev indicator ("N" button)
  devIndicators: false,

  // disable built-in image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  // optional: remove or set to true if you prefer
  // trailingSlash: true,
};

export default nextConfig;
