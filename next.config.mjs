/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/musicnextjs",
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    unoptimized: true,
  },
};

export default nextConfig;
