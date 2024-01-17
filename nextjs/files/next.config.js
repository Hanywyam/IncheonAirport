/** @type {import('next').NextConfig} **/
const nextConfig = {};

module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://apis.data.go.kr/B551177/StatusOfParking/:path*",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
      };
    }
    return config;
  },
};
