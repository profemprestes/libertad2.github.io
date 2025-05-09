import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { partidos } from '@/lib/partidos-data';
import { CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partidos y Resultados | Club Libertad',
  description: 'Calendario de partidos, resultados y próximos encuentros del Club Atlético Libertad.',
};

export default function MatchesPage() {
  return (
    <div>
      <SectionTitle 
        title="Partidos y Resultados" 
        icon={CalendarDays}
        description="Mantente actualizado con los próximos partidos del Club Atlético Libertad y revisa los resultados pasados."
      />
      <MatchSchedule matches={partidos} />
    </div>
  );
}
