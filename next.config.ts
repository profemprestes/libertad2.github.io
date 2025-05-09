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
  // Redirects for sitemap.xml if using src/app/sitemap.ts
  // and for robots.txt if it's in public
  async redirects() {
    return [
      // {
      //   source: '/sitemap.xml',
      //   destination: '/api/sitemap', // If you were to generate it via an API route
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;

