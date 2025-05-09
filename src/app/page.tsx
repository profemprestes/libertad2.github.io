import type { Metadata } from 'next';
import { LatestNewsSection } from '@/components/sections/latest-news-section';
import { UpcomingMatchSection } from '@/components/sections/upcoming-match-section';
import { HeroPrincipal } from '@/components/sections/hero-principal';
import { HistoriaResumen } from '@/components/sections/historia-resumen';
import { HazteSocio } from '@/components/sections/Haztesocio';
import { EntrarATienda } from '@/components/sections/entraratienda';
import { partidos as allMatches } from '@/lib/partidos-data';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Bienvenido al sitio oficial del Club Atlético Libertad. Descubre las últimas noticias, próximos partidos, información del club y más.',
  keywords: ['Club Atlético Libertad', 'fútbol Canelones', 'Decano', 'partidos', 'noticias', 'historia club libertad'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    title: 'Club Atlético Libertad - Inicio',
    description: 'Bienvenido al sitio oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda.',
    url: `${SITE_URL}/`,
    images: [
      {
        url: '/HeroPrincipal.png', // Specific image for homepage OG
        width: 1200,
        height: 630,
        alt: 'Estadio Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    title: 'Club Atlético Libertad - Inicio',
    description: 'Bienvenido al sitio oficial del Club Atlético Libertad.',
    images: [`${SITE_URL}/HeroPrincipal.png`],
  },
};


export default function HomePage() {
  const upcomingMatches = allMatches
    .filter(match => match.status === 'upcoming' || match.status === 'live')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const nextUpcomingMatch = upcomingMatches.length > 0 ? upcomingMatches[0] : null;

  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroPrincipal />
      <HistoriaResumen />
      {nextUpcomingMatch && (
        <div className="py-8">
          <UpcomingMatchSection match={nextUpcomingMatch} />
        </div>
      )}
      <LatestNewsSection />
      <EntrarATienda />
      <HazteSocio />
    </div>
  );
}

