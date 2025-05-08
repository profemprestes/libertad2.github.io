import type { HistoricalEvent, Player, Match, NewsArticle } from '@/types';

export const mockHistoricalEvents: HistoricalEvent[] = [
  {
    id: '1',
    year: 1905,
    title: 'Fundación del Club',
    description: 'El Club Atlético Libertad fue fundado por un grupo de apasionados entusiastas del fútbol con el sueño de crear un legado duradero.',
    imageUrl: 'https://picsum.photos/seed/history1/600/400',
  },
  {
    id: '2',
    year: 1952,
    title: 'Primera Victoria en Campeonato',
    description: 'Un año histórico en el que el club consiguió su primer campeonato importante, marcando una nueva era de éxitos.',
    imageUrl: 'https://picsum.photos/seed/history2/600/400',
  },
  {
    id: '3',
    year: 1988,
    title: 'Inauguración del Estadio',
    description: 'Se inauguró el nuevo "Estadio Libertad", proporcionando un hogar moderno para el club y sus aficionados.',
    imageUrl: 'https://picsum.photos/seed/history3/600/400',
  },
  {
    id: '4',
    year: 2010,
    title: 'Debut Continental',
    description: 'El Club Atlético Libertad debutó en una importante competición continental, mostrando su talento en un escenario internacional.',
    imageUrl: 'https://picsum.photos/seed/history4/600/400',
  },
];

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Santiago "El Muro" Rojas',
    number: 1,
    position: 'Goalkeeper', // Kept in English for filtering, translated in TeamRoster
    bio: 'Una presencia imponente en la portería, conocido por sus increíbles reflejos y liderazgo.',
    imageUrl: 'https://picsum.photos/seed/player1/300/300',
    nationality: 'Argentino', // Nationality translated
    joinedYear: 2018,
  },
  {
    id: '2',
    name: 'Isabella "La Roca" Gómez',
    number: 4,
    position: 'Defender', // Kept in English
    bio: 'Una defensa tenaz e inteligente, imbatible en situaciones de uno contra uno.',
    imageUrl: 'https://picsum.photos/seed/player2/300/300',
    nationality: 'Brasileña', // Nationality translated
    joinedYear: 2020,
  },
  {
    id: '3',
    name: 'Mateo "El Mago" Silva',
    number: 10,
    position: 'Midfielder', // Kept in English
    bio: 'El corazón creativo del equipo, con un toque mágico y una visión que desbloquea defensas.',
    imageUrl: 'https://picsum.photos/seed/player3/300/300',
    nationality: 'Uruguayo', // Nationality translated
    joinedYear: 2019,
  },
  {
    id: '4',
    name: 'Lucas "El Rayo" Fernández',
    number: 7,
    position: 'Forward', // Kept in English
    bio: 'Velocidad vertiginosa y un rematador letal, siempre una amenaza para la portería contraria.',
    imageUrl: 'https://picsum.photos/seed/player4/300/300',
    nationality: 'Colombiano', // Nationality translated
    joinedYear: 2021,
  },
  {
    id: '5',
    name: 'Elena "La Capitana" Rodriguez',
    number: 5,
    position: 'Midfielder', // Kept in English
    bio: 'Capitana del equipo, conocida por su incansable ritmo de trabajo y su habilidad para controlar el mediocampo.',
    imageUrl: 'https://picsum.photos/seed/player5/300/300',
    nationality: 'Chilena', // Nationality translated
    joinedYear: 2017,
  },
  {
    id: '6',
    name: 'Ricardo "El Táctico" Mendez',
    number: 0, 
    position: 'Coach', // Kept in English
    bio: 'El cerebro estratégico detrás del éxito del equipo, con años de experiencia.',
    imageUrl: 'https://picsum.photos/seed/coach1/300/300',
    nationality: 'Español', // Nationality translated
    joinedYear: 2022,
  },
];

export const mockMatches: Match[] = [
  {
    id: '1',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), 
    opponent: 'Club Deportivo Rivales',
    homeTeam: 'Club Atlético Libertad',
    awayTeam: 'Club Deportivo Rivales',
    venue: 'Estadio Libertad',
    status: 'upcoming',
    competition: 'Liga - Jornada 15',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_rivales/50/50',
  },
  {
    id: '2',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), 
    opponent: 'Academia FC',
    homeTeam: 'Academia FC',
    awayTeam: 'Club Atlético Libertad',
    venue: 'Estadio Academia',
    status: 'upcoming',
    competition: 'Liga - Jornada 16',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_academia/50/50',
  },
  {
    id: '3',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), 
    opponent: 'Unidos FC',
    homeTeam: 'Club Atlético Libertad',
    awayTeam: 'Unidos FC',
    homeScore: 2,
    awayScore: 1,
    venue: 'Estadio Libertad',
    status: 'past',
    competition: 'Liga - Jornada 14',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_unidos/50/50',
    highlightsUrl: '#',
  },
  {
    id: '4',
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), 
    opponent: 'Estrella Roja CF',
    homeTeam: 'Estrella Roja CF',
    awayTeam: 'Club Atlético Libertad',
    homeScore: 0,
    awayScore: 0,
    venue: 'Estadio Municipal',
    status: 'past',
    competition: 'Copa - Cuartos de Final',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_estrella/50/50',
  },
];

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Importante Victoria Impulsa las Esperanzas de Libertad por el Título',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), 
    summary: 'Una emocionante victoria por 2-1 sobre Unidos FC ha colocado al Club Atlético Libertad en una sólida posición para el título de liga.',
    imageUrl: 'https://picsum.photos/seed/news1/600/300',
    category: 'Match Report', // Kept in English, translated in NewsCard
    author: 'Equipo de Medios del Club',
  },
  {
    id: '2',
    title: 'Nuevo Talento de la Cantera Firma Contrato Profesional',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), 
    summary: 'El joven prodigio Alejandro Vargas ha firmado su primer contrato profesional con el club, un testimonio de nuestro exitoso programa juvenil.',
    imageUrl: 'https://picsum.photos/seed/news2/600/300',
    category: 'Transfer', // Kept in English
    author: 'Equipo de Medios del Club',
  },
  {
    id: '3',
    title: 'El Club Anuncia Programa de Alcance Comunitario para Escuelas Locales',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), 
    summary: 'El Club Atlético Libertad se enorgullece en lanzar una nueva iniciativa destinada a promover el deporte y la vida saludable en las escuelas locales.',
    imageUrl: 'https://picsum.photos/seed/news3/600/300',
    category: 'Community', // Kept in English
    author: 'Equipo de Medios del Club',
  },
];

export const clubContactInfo = {
  address: '123 Calle Libertad, Ciudad Principal, País',
  phone: '+12 345 678 9010',
  email: 'info@clublibertad.example.com',
  socialMedia: [
    { name: 'Facebook', url: 'https://facebook.com/clublibertad', icon: 'FacebookIcon' },
    { name: 'Twitter', url: 'https://twitter.com/clublibertad', icon: 'TwitterIcon' },
    { name: 'Instagram', url: 'https://instagram.com/clublibertad', icon: 'InstagramIcon' },
  ]
};
