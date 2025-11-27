/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: ["i.ibb.co.com"], // Add allowed image hosts
  },
};

export default nextConfig;

