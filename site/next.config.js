/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'My Kasm Registry',
    description: 'Custom Kasm Workspaces Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://borja.github.io/kasm-bor/',
    contactUrl: 'https://github.com/borja/kasm-bor/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-bor/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
