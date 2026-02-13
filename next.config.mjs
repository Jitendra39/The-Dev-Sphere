import withImages from "next-images";
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all image domains with https
      },
      {
        protocol: "http",
        hostname: "**", // Allows all image domains with http
      },
    ],
  },
  // Turbopack config to avoid webpack conflict in Next.js 16
  turbopack: {},
};

let config = withImages(nextConfig);

if (process.env.NODE_ENV === "production") {
  config = withPWA({
    dest: "public", // Specifies where the service worker and assets will be output
  })(config);
}

export default config;
