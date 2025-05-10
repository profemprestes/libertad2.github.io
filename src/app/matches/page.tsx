import type { Metadata } from 'next';
import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { partidos } from '@/lib/partidos-data';
import { CalendarDays } from 'lucide-react';
import { HeroPartidos } from '@/components/sections/hero-partidos';
import { JsonLdScript, generateEventData } from '@/lib/json-ld';

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
    ],
  },
  twitter: {
    title: 'Partidos y Resultados - Club Atlético Libertad',
    description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.',
    images: [`${SITE_URL}/LogoLibertad.png`],
  },
};

export default function MatchesPage() {
  const upcomingMatches = partidos.filter(match => match.status === 'upcoming' || match.status === 'live');
  const pastMatches = partidos.filter(match => match.status === 'past');

  const eventsSchema = [...upcomingMatches, ...pastMatches].map(match => generateEventData(match));

  const matchesPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Partidos y Resultados - Club Atlético Libertad",
    description: "Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.",
    url: `${SITE_URL}/matches`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: eventsSchema.map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: event 
      }))
    }
  };


  return (
    <>
      <JsonLdScript data={matchesPageSchema} />
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
    </>
  );
}

    