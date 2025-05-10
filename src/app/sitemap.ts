import { MetadataRoute } from 'next';
import { noticias } from '@/lib/noticias-data';
import { tiendaProducts } from '@/lib/productos-tienda-data'; 

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/history',
    '/roster',
    '/roster/primera', // Added
    '/roster/sub20',   // Added
    '/roster/sub15',   // Added
    '/matches',
    '/news',
    '/contact',
    '/tienda',
    '/cart',
    '/haztesocio',
    '/prompt-generator',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'daily' : 'weekly' as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: route === '/' ? 1 : (route.startsWith('/roster') || route === '/prompt-generator' ? 0.7 : 0.8), 
  }));

  const newsArticleRoutes: MetadataRoute.Sitemap = noticias.map((article) => ({
    url: `${SITE_URL}/news/${article.id}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  
  // If product detail pages were to exist:
  // const productRoutes: MetadataRoute.Sitemap = tiendaProducts.map((product) => ({
  //   url: `${SITE_URL}/tienda/${product.id}`, 
  //   lastModified: new Date().toISOString(), 
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));

  return [
    ...staticRoutes, 
    ...newsArticleRoutes,
    // ...productRoutes,
  ];
}