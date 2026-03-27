/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["10.83.149.44"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
