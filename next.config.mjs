/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/vtsd/b",
};

export default nextConfig;
