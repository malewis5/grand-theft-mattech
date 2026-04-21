import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/utah",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
