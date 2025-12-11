/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || '';
const basePath = isGithubActions && repoName ? `/${repoName}` : '';
const assetPrefix = basePath ? `${basePath}/` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' }
    ],
  },
  env: {
    BASE_PATH: basePath,
  },
};

export default nextConfig;
