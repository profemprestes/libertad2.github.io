import type { Metadata } from 'next';
import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { partidos } from '@/lib/partidos-data';
import { CalendarDays } from 'lucide-react';
import { HeroPartidos } from '@/components/sections/hero-partidos';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Partidos y Resultados - Club Atlético Libertad',
  description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad. Sigue al Decano del Fútbol Canario en todas sus competiciones.',
  keywords: ['partidos club libertad', 'resultados club libertad', 'calendario libertad', 'próximos partidos libertad', 'fixture libertad', 'fútbol Canelones partidos'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/matches',
  },
  openGraph: {
    title: 'Partidos y Resultados - Club Atlético Libertad',
    description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.',
    url: `${SITE_URL}/matches`,
    images: [
      {
        url: `${SITE_URL}/LogoLibertad.png`, 
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
      // Podrías añadir una imagen genérica de un estadio o calendario
      // {
      //   url: `${SITE_URL}/public/estadio_partido.jpg`,
      //   width: 1200,
      //   height: 630,
      //   alt: 'Estadio para un partido de fútbol',
      // },
    ],
  },
  twitter: {
    title: 'Partidos y Resultados - Club Atlético Libertad',
    description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.',
    images: [`${SITE_URL}/LogoLibertad.png`],
  },
};

export default function MatchesPage() {
  return (
    <div>
      <HeroPartidos />
      <SectionTitle 
        id="proximos-resultados" 
        title="Calendario y Marcadores" 
        icon={CalendarDays}
        description="Explora el calendario de los próximos partidos y consulta los resultados de los encuentros anteriores del Club Atlético Libertad."
        className="pt-12" 
      />
      <MatchSchedule matches={partidos} />
    </div>
  );
}
