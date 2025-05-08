import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { mockMatches } from '@/lib/mock-data';
import { CalendarDays } from 'lucide-react';

export default function MatchesPage() {
  return (
    <div>
      <SectionTitle 
        title="Partidos y Resultados" 
        icon={CalendarDays}
        description="Mantente actualizado con los próximos partidos del Club Atlético Libertad y revisa los resultados pasados."
      />
      <MatchSchedule matches={mockMatches} />
    </div>
  );
}
