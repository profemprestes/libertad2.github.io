import { UltimasNoticias } from '@/components/sections/ultimasnoticias';
import type { Metadata } from 'next';
import { HeroNoticias } from '@/components/sections/HeroNoticias';
import { SectionTitle } from '@/components/shared/section-title';
import { Newspaper } from 'lucide-react';
import { JsonLdScript, generateNewsArticleData } from '@/lib/json-ld'; // Imported generateNewsArticleData
import { noticias } from '@/lib/noticias-data';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Noticias del Club - Club Atlético Libertad',
  description: 'Todas las últimas noticias y actualizaciones sobre el Club Atlético Libertad. Mantente informado sobre el Decano del Fútbol Canario.',
  keywords: ['noticias club libertad', 'últimas noticias libertad', 'club atlético libertad novedades', 'fútbol Canelones noticias'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'Noticias del Club - Club Atlético Libertad',
    description: 'Todas las últimas noticias y actualizaciones sobre el Club Atlético Libertad.',
    url: `${SITE_URL}/news`,
    images: [
      {
        url: `${SITE_URL}/LogoLibertad.png`, 
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
      {
        url: `https://picsum.photos/seed/newsHero/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'Noticias del Club Atlético Libertad',
      }
    ],
  },
  twitter: {
    title: 'Noticias del Club - Club Atlético Libertad',
    description: 'Todas las últimas noticias y actualizaciones sobre el Club Atlético Libertad.',
    images: [`https://picsum.photos/seed/newsHero/1200/630`],
  },
};

export default function NoticiasPage() {
  const newsPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Noticias del Club - Club Atlético Libertad",
    description: "Todas las últimas noticias y actualizaciones sobre el Club Atlético Libertad.",
    url: `${SITE_URL}/news`,
    mainEntity: { // Added mainEntity with ItemList
      "@type": "ItemList",
      itemListElement: noticias.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: generateNewsArticleData(article) // Use imported function to generate schema for each article
      }))
    }
  };

  return (
    <>
      <JsonLdScript data={newsPageSchema} />
      <div className="container mx-auto px-4 py-12">
        <HeroNoticias />
        <SectionTitle
          id="ultimas"
          title="Archivo de Noticias"
          description="Explora todas las noticias y novedades de Club Atlético Libertad."
          icon={Newspaper}
          className="pt-12"
        />
      
        {/* Pass noticias data as a prop */}
        <UltimasNoticias articles={noticias} showViewAllLink={false} /> 
      </div>
    </>
  );
}
