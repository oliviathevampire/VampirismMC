/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
  },
}

module.exports = nextConfig