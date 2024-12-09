/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aurorelabs-website' : '', // Add your GitHub Pages repo name here
  trailingSlash: true, // Ensures trailing slashes for compatibility with GitHub Pages
};

export default nextConfig;
