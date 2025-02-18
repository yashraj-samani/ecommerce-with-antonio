/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    serverActions: true, // Enable Server Actions
  },
};

module.exports = nextConfig;
