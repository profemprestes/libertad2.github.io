import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users } from 'lucide-react';

export default function RosterPage() {
  return (
    <div>
      <SectionTitle 
        title="Conoce Nuestro Equipo" 
        icon={Users}
        description="Conoce a los talentosos jugadores y al dedicado cuerpo técnico del Club Atlético Libertad."
      />
      <TeamRoster players={mockPlayers} />
    </div>
  );
}
