import type { Metadata } from 'next';
import { UltimasNoticias } from '@/components/sections/ultimasnoticias';
import { HeroNoticias } from '@/components/sections/HeroNoticias';
import { SectionTitle } from '@/components/shared/section-title';
import { Newspaper } from 'lucide-react';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  title: 'Noticias',
  description: 'Todas las últimas noticias y actualizaciones sobre Club Atlético Libertad. Mantente informado sobre el Decano del Fútbol Canario.',
  keywords: ['noticias club libertad', 'club libertad novedades', 'actualidad club libertad', 'fútbol canelones noticias'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    title: 'Noticias - Club Atlético Libertad',
    description: 'Todas las últimas noticias y actualizaciones sobre Club Atlético Libertad.',
    url: `${SITE_URL}/news`,
    images: [
      {
        url: '/LogoLibertad.png', 
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    title: 'Noticias - Club Atlético Libertad',
    description: 'Todas las últimas noticias y actualizaciones sobre Club Atlético Libertad.',
    images: [`${SITE_URL}/LogoLibertad.png`],
  },
};

export default function NoticiasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HeroNoticias />
      <SectionTitle
        id="ultimas"
        title="Archivo de Noticias"
        description="Explora todas las noticias y novedades de Club Atlético Libertad."
        icon={Newspaper}
        className="pt-12"
      />
      <UltimasNoticias showViewAllLink={false} />
    </div>
  );
}

