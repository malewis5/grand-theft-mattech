/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/utah',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
