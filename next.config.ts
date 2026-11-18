import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  experimental: { useTypeScriptCli: false, cpus: 2 },
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};
export default config;
