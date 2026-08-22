/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel serves the site from the root domain; BASE_PATH remains empty
  // for compatibility with the existing asset helper.
  env: {
    BASE_PATH: '',
  },
};

export default nextConfig;
