// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myWebsite',
  assetPrefix: '/myWebsite',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
