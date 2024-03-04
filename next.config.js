/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["ipfs.io", "fafz.mypinata.cloud"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*", // Matches all paths
  //       destination: "https://www.genuineundead.com/:path*", // Redirects to the external URL, preserving the path
  //       permanent: true, // false for temporary redirect (307), true for permanent (308)
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
