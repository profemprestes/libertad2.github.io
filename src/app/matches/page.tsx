import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { partidos } from '@/lib/partidos-data';
import { CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';
import { HeroPartidos } from '@/components/sections/hero-partidos';

export const metadata: Metadata = {
  title: 'Partidos y Resultados | Club Libertad',
  description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.',
};

export default function MatchesPage() {
  return (
    <div>
      <HeroPartidos />
      <SectionTitle 
        id="proximos-resultados" // Added ID for anchor links from HeroPartidos
        title="Calendario y Marcadores" 
        icon={CalendarDays}
        description="Explora el calendario de los próximos partidos y consulta los resultados de los encuentros anteriores del Club Atlético Libertad."
        className="pt-12" // Add padding top to separate from HeroPartidos
      />
      <MatchSchedule matches={partidos} />
    </div>
  );
}
