/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 604800,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/drei', 'framer-motion'],
  },
};

export default nextConfig;
