/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    reomotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        post: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
