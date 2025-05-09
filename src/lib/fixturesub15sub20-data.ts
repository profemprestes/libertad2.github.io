import type { Match } from '@/types';
import { equipos } from './equipos-data';

const CLUB_LIBERTAD_NOMBRE = "Club Atlético Libertad";
const CLUB_LIBERTAD_ESTADIO = "Estadio Libertad";

const getOpponentByName = (nombreCorto: string) => {
  const equipo = equipos.find(e => e.nombreCorto === nombreCorto);
  if (!equipo) {
    // Comment: Opponent not found in equipos-data.ts, using placeholders.
    console.warn(`Opponent "${nombreCorto}" not found in equipos-data.ts. Using placeholder data.`);
    return {
      nombre: `Oponente Desconocido (${nombreCorto})`,
      nombreCorto: nombreCorto,
      escudoUrl: 'https://picsum.photos/seed/defaultlogo/64/64', // Placeholder logo
    };
  }
  return equipo;
};

const opponentsSchedule = [
  "Juventud Melilla",
  "Libertad Washington",
  "Juanico",
  "Liverpool CS",
  "Villa Nelly Unido",
  "Wanderers",
  "Calpino",
];

const startDate = new Date();
// Start fixtures next Saturday
startDate.setDate(startDate.getDate() + (6 - startDate.getDay() + 7) % 7);
startDate.setHours(13, 30, 0, 0); // Set time for Sub 15

export const fixtureSub15Sub20: Match[] = [];

opponentsSchedule.forEach((opponentShortName, index) => {
  const opponentData = getOpponentByName(opponentShortName);
  const fechaNumero = index + 1;

  const matchDateSub15 = new Date(startDate.getTime());
  matchDateSub15.setDate(startDate.getDate() + index * 7); // Weekly matches

  const matchDateSub20 = new Date(matchDateSub15.getTime());
  matchDateSub20.setHours(15, 30, 0, 0); // Sub 20 starts 2 hours later

  // Sub 15 Match
  fixtureSub15Sub20.push({
    id: `sub15-fecha${fechaNumero}-vs-${opponentShortName.toLowerCase().replace(/\s+/g, '-')}`,
    fechaNumero: fechaNumero,
    category: 'Sub 15',
    competition: 'Campeonato Sub 15 - Serie A',
    date: matchDateSub15.toISOString(),
    homeTeam: CLUB_LIBERTAD_NOMBRE,
    awayTeam: opponentData.nombre,
    opponent: opponentData.nombreCorto,
    opponentLogoUrl: opponentData.escudoUrl,
    venue: CLUB_LIBERTAD_ESTADIO,
    status: 'upcoming',
  });

  // Sub 20 Match
  fixtureSub15Sub20.push({
    id: `sub20-fecha${fechaNumero}-vs-${opponentShortName.toLowerCase().replace(/\s+/g, '-')}`,
    fechaNumero: fechaNumero,
    category: 'Sub 20',
    competition: 'Campeonato Sub 20 - Serie A',
    date: matchDateSub20.toISOString(),
    homeTeam: CLUB_LIBERTAD_NOMBRE,
    awayTeam: opponentData.nombre,
    opponent: opponentData.nombreCorto,
    opponentLogoUrl: opponentData.escudoUrl,
    venue: CLUB_LIBERTAD_ESTADIO,
    status: 'upcoming',
  });
});

// Log for opponents not found during generation (developer information)
const notFoundOpponents = new Set<string>();
opponentsSchedule.forEach(shortName => {
    if (!equipos.find(e => e.nombreCorto === shortName)) {
        notFoundOpponents.add(shortName);
    }
});

if (notFoundOpponents.size > 0) {
    console.warn("The following opponents were not found in equipos-data.ts and are using placeholder data in fixtureSub15Sub20-data.ts:", Array.from(notFoundOpponents));
    // This comment block can be used to list them in the file itself if preferred.
    /*
    Equipos no encontrados en equipos-data.ts (usando placeholders):
    ${Array.from(notFoundOpponents).join('\n    ')}
    */
}
