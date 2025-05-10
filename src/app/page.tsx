
import type { Metadata } from 'next';
import { LatestNewsSection } from '@/components/sections/latest-news-section';
import { UpcomingMatchSection } from '@/components/sections/upcoming-match-section';
import { HeroPrincipal } from '@/components/sections/hero-principal';
import { HistoriaResumen } from '@/components/sections/historia-resumen';
import { HazteSocio } from '@/components/sections/Haztesocio';
import { EntrarATienda } from '@/components/sections/entraratienda';
import { partidos as allMatches } from '@/lib/partidos-data';
import { DecanoStatsSection } from '@/components/sections/DecanoStatsSection';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Inicio - Club Atlético Libertad',
  description: 'Bienvenido al sitio oficial del Club Atlético Libertad. Descubre las últimas noticias, próximos partidos, información del club, historia y tienda oficial.',
  keywords: ['Club Atlético Libertad', 'Libertad Canelones', 'fútbol Canelones', 'Decano del Fútbol Canario', 'partidos libertad', 'noticias libertad', 'historia club libertad', 'tienda club libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Club Atlético Libertad - Sitio Oficial',
    description: 'Bienvenido al sitio oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda.',
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/HeroPrincipal.png`, 
        width: 1200,
        height: 630,
        alt: 'Hinchada del Club Atlético Libertad en el estadio',
      },
      {
        url: `${SITE_URL}/LogoLibertad.png`,
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      }
    ],
  },
  twitter: {
    title: 'Club Atlético Libertad - Sitio Oficial',
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
      <DecanoStatsSection />
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
