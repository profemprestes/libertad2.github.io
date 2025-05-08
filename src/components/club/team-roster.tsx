import { PlayerCard } from '@/components/club/player-card';
import type { Player } from '@/types';

interface TeamRosterProps {
  players: Player[];
}

export function TeamRoster({ players }: TeamRosterProps) {
  if (!players || players.length === 0) {
    return <p className="text-center text-muted-foreground">No hay jugadores para mostrar en la plantilla.</p>;
  }

  const coaches = players.filter(p => p.position === 'Coach');
  const goalkeepers = players.filter(p => p.position === 'Goalkeeper');
  const defenders = players.filter(p => p.position === 'Defender');
  const midfielders = players.filter(p => p.position === 'Midfielder');
  const forwards = players.filter(p => p.position === 'Forward');

  const renderPlayerSection = (title: string, playersInSection: Player[]) => {
    if (playersInSection.length === 0) return null;
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary border-b-2 border-primary/30 pb-2">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {playersInSection.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8">
      {renderPlayerSection('Cuerpo Técnico', coaches)}
      {renderPlayerSection('Porteros', goalkeepers)}
      {renderPlayerSection('Defensas', defenders)}
      {renderPlayerSection('Centrocampistas', midfielders)}
      {renderPlayerSection('Delanteros', forwards)}
    </div>
  );
}
