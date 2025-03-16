/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "api.microlink.io", // Microlink Image Preview
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'mill3.studio',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.squaremetre.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '**',
      },
    ],
    // remotePatterns: ['images.unsplash.com', 'cdn.sanity.io', 'mill3.studio', 'kota-content.b-cdn.net', 'cdn.dribbble.com', 'plus.unsplash.com'],
  },
}
 
module.exports = nextConfig