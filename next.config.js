/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["ipfs.io", "fafz.mypinata.cloud"],
  },
};

module.exports = nextConfig;
