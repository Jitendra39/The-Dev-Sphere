import withImages from "next-images";
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: "public", // Specifies where the service worker and assets will be output
  disable: false, // Disables PWA in development mode
})(
  withImages({
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
    // Additional Next.js configurations if needed
  })
);

export default nextConfig;
