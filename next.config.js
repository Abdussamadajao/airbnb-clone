/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1Ijoic2hhZHkxMiIsImEiOiJjbGUwM2JnbHAwNXN4M25qdjBjY21meTBrIn0.OKU0uyngPBsZ0o8DNQa5kw",
  },
};

module.exports = nextConfig;
