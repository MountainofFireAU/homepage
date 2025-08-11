/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'homepage'

const nextConfig = {
  images: {
    // Use unoptimized images to support static export and GitHub Pages
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  // Use project path when building on GitHub Actions for project pages
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  basePath: isGithubActions ? `/${repoName}` : undefined,
}

module.exports = nextConfig 