import { MetadataRoute } from 'next';
import { noticias } from '@/lib/noticias-data'; // Ensure this path is correct
import { partidos } from '@/lib/partidos-data'; // For potential future use if match details pages are added
import { tiendaProducts } from '@/lib/productos-tienda-data'; // For potential future use if product details pages are added

// IMPORTANT: Update this with your actual production URL
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/history',
    '/roster',
    '/matches',
    '/news',
    '/contact',
    '/tienda',
    '/cart',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'daily' : 'weekly', // Homepage might change more often
    priority: route === '/' ? 1 : 0.8,
  }));

  const newsArticleRoutes: MetadataRoute.Sitemap = noticias.map((article) => ({
    url: `${BASE_URL}/news/${article.id}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Example for future expansion: product pages
  // const productRoutes: MetadataRoute.Sitemap = tiendaProducts.map((product) => ({
  //   url: `${BASE_URL}/tienda/${product.id}`, // Assuming product detail pages
  //   lastModified: new Date().toISOString(), // Or product update date
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));

  return [
    ...staticRoutes, 
    ...newsArticleRoutes,
    // ...productRoutes, // Add if product detail pages are created
];
}
