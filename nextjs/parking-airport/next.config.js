/** @type {import('next').NextConfig} **/
const nextConfig = {
  basePath: "/{IncheonAirport}",
};

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
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
