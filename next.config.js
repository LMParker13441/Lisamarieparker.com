/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap;
  },
};