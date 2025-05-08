import { MatchSchedule } from '@/components/club/match-schedule';
import { SectionTitle } from '@/components/shared/section-title';
import { mockMatches } from '@/lib/mock-data';
import { CalendarDays } from 'lucide-react';

export default function MatchesPage() {
  return (
    <div>
      <SectionTitle 
        title="Fixtures & Results" 
        icon={CalendarDays}
        description="Stay updated with Club Atlético Libertad's upcoming matches and review past results."
      />
      <MatchSchedule matches={mockMatches} />
    </div>
  );
}
