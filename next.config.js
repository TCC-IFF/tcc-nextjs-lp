/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        port: '',
        pathname: '/t/p/original/**'
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**'
      }
    ]
  }
}

module.exports = nextConfig
