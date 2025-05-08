import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users } from 'lucide-react';

export default function RosterPage() {
  return (
    <div>
      <SectionTitle 
        title="Meet Our Squad" 
        icon={Users}
        description="Get to know the talented players and dedicated coaching staff of Club Atlético Libertad."
      />
      <TeamRoster players={mockPlayers} />
    </div>
  );
}
