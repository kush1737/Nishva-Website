// Static export: `npm run build` writes a plain HTML/CSS/JS site into the /out folder.
// INLINE_CSS=1 is only used to make a single-file preview; leave it unset for production.
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
  ...(process.env.INLINE_CSS === '1' ? { experimental: { inlineCss: true } } : {}),
};
export default nextConfig;
