/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles the base path automatically for the root domain.
  // We remove the GH Pages specific prefixes.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' }
    ],
  },
  env: {
    BASE_PATH: '',
  },
};

export default nextConfig;
