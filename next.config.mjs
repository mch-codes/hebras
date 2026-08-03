/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static HTML — no Node runtime in production, which is what the
  // component comments already assumed. Also removes the whole server-side
  // attack surface the next@14 advisories live in (image optimizer, server
  // actions, RSC cache, middleware).
  output: "export",
};

export default nextConfig;
