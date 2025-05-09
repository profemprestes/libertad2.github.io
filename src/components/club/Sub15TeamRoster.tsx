import type { Sub15Player } from '@/types';
import { Sub15PlayerCard } from './Sub15PlayerCard';

interface Sub15TeamRosterProps {
  players: Sub15Player[];
}

const positionOrder: Record<string, number> = {
  'Arquero': 1,
  'Defensa': 2,
  'Volante': 3,
  'Delantero': 4,
};

export function Sub15TeamRoster({ players }: Sub15TeamRosterProps) {
  if (!players || players.length === 0) {
    return <p className="text-center text-muted-foreground">No hay jugadores Sub 15 para mostrar.</p>;
  }

  // Group players by position
  const groupedPlayers: Record<string, Sub15Player[]> = players.reduce((acc, player) => {
    const position = player.posicion;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(player);
    return acc;
  }, {} as Record<string, Sub15Player[]>);

  // Sort positions based on predefined order, then sort players alphabetically within each position
  const sortedPositions = Object.keys(groupedPlayers).sort((a, b) => {
    const orderA = positionOrder[a] || 99;
    const orderB = positionOrder[b] || 99;
    return orderA - orderB;
  });

  return (
    <div className="space-y-10">
      {sortedPositions.map(position => {
        const playersInPosition = groupedPlayers[position].sort((a, b) => a.nombre.localeCompare(b.nombre));
        if (playersInPosition.length === 0) return null;
        
        return (
          <section key={position} className="mb-12">
            <h3 className="text-xl font-semibold mb-5 text-center text-accent border-b-2 border-accent/30 pb-2">
              {position}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {playersInPosition.map((player) => (
                <Sub15PlayerCard key={player.nombre} player={player} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
