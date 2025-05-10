import { MetadataRoute } from 'next';
import { noticias } from '@/lib/noticias-data';
// import { tiendaProducts } from '@/lib/productos-tienda-data'; // tiendaProducts seems unused here

const SITE_URL = 'https://pruebaslibertad.netlify.app';

// Helper function for safe date parsing
const safeToISOString = (dateString?: string): string => {
  if (!dateString) return new Date().toISOString(); // Fallback to current date for undefined inputs
  const dateObj = new Date(dateString);
  if (isNaN(dateObj.getTime())) {
    console.warn(`Sitemap: Invalid date string encountered: ${dateString}, falling back to current date.`);
    return new Date().toISOString(); // Fallback to current date
  }
  return dateObj.toISOString();
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/history',
    '/roster',
    '/roster/primera', 
    '/roster/sub20',   
    '/roster/sub15',   
    '/matches',
    '/news',
    '/contact',
    '/tienda',
    '/cart',
    '/haztesocio',
    '/prompt-generator',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: safeToISOString(undefined), // For static routes, use current date
    changeFrequency: route === '/' ? 'daily' : 'weekly' as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: route === '/' ? 1 : (route.startsWith('/roster') || route === '/prompt-generator' ? 0.7 : 0.8), 
  }));

  const newsArticleRoutes: MetadataRoute.Sitemap = noticias.map((article) => ({
    url: `${SITE_URL}/news/${article.id}`,
    lastModified: safeToISOString(article.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  
  // If product detail pages were to exist:
  // const productRoutes: MetadataRoute.Sitemap = tiendaProducts.map((product) => ({
  //   url: `${SITE_URL}/tienda/${product.id}`, 
  //   lastModified: safeToISOString(undefined), // Assuming products don't have a lastModified date in current data
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));

  return [
    ...staticRoutes, 
    ...newsArticleRoutes,
    // ...productRoutes, // Uncomment if product detail pages and data are available
  ];
}
