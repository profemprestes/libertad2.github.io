import type { Metadata } from 'next';
import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { partidos } from '@/lib/partidos-data';
import { CalendarDays } from 'lucide-react';
import { HeroPartidos } from '@/components/sections/hero-partidos';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  title: 'Partidos y Resultados',
  description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad. Sigue al Decano en todas sus competiciones.',
  keywords: ['partidos club libertad', 'resultados club libertad', 'calendario libertad', 'próximos partidos libertad', 'fixture libertad'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    title: 'Partidos y Resultados - Club Atlético Libertad',
    description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.',
    url: `${SITE_URL}/matches`,
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

