import type { Match } from '@/types';
import { equipos } from './equipos-data';

const CLUB_LIBERTAD_NOMBRE = "Club Atlético Libertad";
const CLUB_LIBERTAD_ESTADIO = "Estadio Libertad";

// Helper function to find an opponent and ensure it exists
const getOpponent = (nombreCorto: string) => {
  const equipo = equipos.find(e => e.nombreCorto === nombreCorto);
  if (!equipo) {
    console.warn(`Equipo ${nombreCorto} no encontrado, usando datos genéricos.`);
    return {
      nombre: `Oponente Desconocido (${nombreCorto})`,
      nombreCorto: `Oponente Desconocido (${nombreCorto})`,
      estadio: "Estadio Desconocido",
      escudoUrl: "https://picsum.photos/seed/default_opponent_logo/64/64", // Placeholder
      direccion: "Dirección Desconocida",
    };
  }
  return equipo;
};

const juanico = getOpponent("Juanico");
const progreso = getOpponent("Progreso");
const darling = getOpponent("Darling");
const cerrillos = getOpponent("Cerrillos");
const calpino = getOpponent("Calpino");
const santaLucia = getOpponent("Santa Lucía");


export const partidos: Match[] = [
  // Upcoming Match (Libertad Home)
  {
    id: 'partido-1',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // In 1 week
    homeTeam: CLUB_LIBERTAD_NOMBRE,
    awayTeam: juanico.nombre,
    venue: CLUB_LIBERTAD_ESTADIO,
    status: 'upcoming',
    competition: 'Liga Departamental - Fecha 10',
    opponent: juanico.nombre, 
    opponentLogoUrl: juanico.escudoUrl, 
  },
  // Upcoming Match (Libertad Away)
  {
    id: 'partido-2',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // In 2 weeks
    homeTeam: progreso.nombre,
    awayTeam: CLUB_LIBERTAD_NOMBRE,
    venue: progreso.estadio,
    status: 'upcoming',
    competition: 'Liga Departamental - Fecha 11',
    opponent: progreso.nombre,
    opponentLogoUrl: progreso.escudoUrl,
  },
  // Live Match 
   {
    id: 'partido-live-1',
    // Ensure this date is very close to 'now' for testing, or adjust for actual live games
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // Simulating a match starting in 2 hours
    homeTeam: CLUB_LIBERTAD_NOMBRE,
    awayTeam: cerrillos.nombre,
    venue: CLUB_LIBERTAD_ESTADIO,
    status: 'upcoming', // Will change to 'live' when the time comes or manually
    competition: 'Copa de Campeones - Semifinal IDA',
    opponent: cerrillos.nombre,
    opponentLogoUrl: cerrillos.escudoUrl,
  },
  // Past Match (Libertad Home - Win)
  {
    id: 'partido-3',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
    homeTeam: CLUB_LIBERTAD_NOMBRE,
    awayTeam: darling.nombre,
    homeScore: 3,
    awayScore: 1,
    venue: CLUB_LIBERTAD_ESTADIO,
    status: 'past',
    competition: 'Liga Departamental - Fecha 9',
    opponent: darling.nombre,
    opponentLogoUrl: darling.escudoUrl,
    highlightsUrl: '#', 
  },
  // Past Match (Libertad Away - Draw)
  {
    id: 'partido-4',
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
    homeTeam: juanico.nombre,
    awayTeam: CLUB_LIBERTAD_NOMBRE,
    homeScore: 2,
    awayScore: 2,
    venue: juanico.estadio,
    status: 'past',
    competition: 'Liga Departamental - Fecha 8',
    opponent: juanico.nombre,
    opponentLogoUrl: juanico.escudoUrl,
  },
   // Past Match (Libertad Home - Loss)
   {
    id: 'partido-5',
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), // 3 weeks ago
    homeTeam: CLUB_LIBERTAD_NOMBRE,
    awayTeam: calpino.nombre,
    homeScore: 0,
    awayScore: 1,
    venue: CLUB_LIBERTAD_ESTADIO,
    status: 'past',
    competition: 'Liga Departamental - Fecha 7',
    opponent: calpino.nombre,
    opponentLogoUrl: calpino.escudoUrl,
  },
  // Past Match (Libertad Away - Win)
  {
    id: 'partido-6',
    date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(), // 4 weeks ago
    homeTeam: santaLucia.nombre,
    awayTeam: CLUB_LIBERTAD_NOMBRE,
    homeScore: 0,
    awayScore: 2,
    venue: santaLucia.estadio,
    status: 'past',
    competition: 'Copa de Campeones - Cuartos de Final VUELTA',
    opponent: santaLucia.nombre,
    opponentLogoUrl: santaLucia.escudoUrl,
    highlightsUrl: '#',
  },
];
