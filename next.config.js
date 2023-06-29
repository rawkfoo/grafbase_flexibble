/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com']
  },
    // if it doesnt work in the future use this slice
  //   experimental: {
  //     serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
  // },
}

module.exports = nextConfig
