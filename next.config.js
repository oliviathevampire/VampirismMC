/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    domains: ["source.unsplash.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace 'fs' module with an empty object on the client side
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
}

module.exports = nextConfig