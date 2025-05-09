import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // No redirects needed for sitemap.xml (served by app/sitemap.ts)
  // and robots.txt (served from public/)
  // async redirects() {
  //   return [];
  // },
};

export default nextConfig;
