import type { HistoricalEvent, Player, Match, NewsArticle } from '@/types';

export const mockHistoricalEvents: HistoricalEvent[] = [
  {
    id: '1',
    year: 1905,
    title: 'Club Foundation',
    description: 'Club Atlético Libertad was founded by a group of passionate football enthusiasts with the dream of creating a lasting legacy.',
    imageUrl: 'https://picsum.photos/seed/history1/600/400',
  },
  {
    id: '2',
    year: 1952,
    title: 'First Championship Victory',
    description: 'A landmark year as the club secured its first major championship, marking a new era of success.',
    imageUrl: 'https://picsum.photos/seed/history2/600/400',
  },
  {
    id: '3',
    year: 1988,
    title: 'Stadium Inauguration',
    description: 'The new "Estadio Libertad" was inaugurated, providing a modern home for the club and its fans.',
    imageUrl: 'https://picsum.photos/seed/history3/600/400',
  },
  {
    id: '4',
    year: 2010,
    title: 'Continental Debut',
    description: 'Club Atlético Libertad made its debut in a major continental competition, showcasing its talent on an international stage.',
    imageUrl: 'https://picsum.photos/seed/history4/600/400',
  },
];

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Santiago "El Muro" Rojas',
    number: 1,
    position: 'Goalkeeper',
    bio: 'A commanding presence in goal, known for his incredible reflexes and leadership.',
    imageUrl: 'https://picsum.photos/seed/player1/300/300',
    nationality: 'Argentina',
    joinedYear: 2018,
  },
  {
    id: '2',
    name: 'Isabella "La Roca" Gómez',
    number: 4,
    position: 'Defender',
    bio: 'A tenacious and intelligent defender, unbeatable in one-on-one situations.',
    imageUrl: 'https://picsum.photos/seed/player2/300/300',
    nationality: 'Brazil',
    joinedYear: 2020,
  },
  {
    id: '3',
    name: 'Mateo "El Mago" Silva',
    number: 10,
    position: 'Midfielder',
    bio: 'The creative heart of the team, with a magical touch and vision that unlocks defenses.',
    imageUrl: 'https://picsum.photos/seed/player3/300/300',
    nationality: 'Uruguay',
    joinedYear: 2019,
  },
  {
    id: '4',
    name: 'Lucas "El Rayo" Fernández',
    number: 7,
    position: 'Forward',
    bio: 'Blistering pace and a lethal finisher, always a threat to the opposing goal.',
    imageUrl: 'https://picsum.photos/seed/player4/300/300',
    nationality: 'Colombia',
    joinedYear: 2021,
  },
  {
    id: '5',
    name: 'Elena "La Capitana" Rodriguez',
    number: 5,
    position: 'Midfielder',
    bio: 'Team captain, known for her tireless work rate and ability to control the midfield.',
    imageUrl: 'https://picsum.photos/seed/player5/300/300',
    nationality: 'Chile',
    joinedYear: 2017,
  },
  {
    id: '6',
    name: 'Ricardo "El Táctico" Mendez',
    number: 0, // Coaches might not have numbers or use 0
    position: 'Coach',
    bio: 'The strategic mastermind behind the team\'s success, with years of experience.',
    imageUrl: 'https://picsum.photos/seed/coach1/300/300',
    nationality: 'Spain',
    joinedYear: 2022,
  },
];

export const mockMatches: Match[] = [
  {
    id: '1',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Next week
    opponent: 'Club Deportivo Rivales',
    homeTeam: 'Club Atlético Libertad',
    awayTeam: 'Club Deportivo Rivales',
    venue: 'Estadio Libertad',
    status: 'upcoming',
    competition: 'League - Matchday 15',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_rivales/50/50',
  },
  {
    id: '2',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // In two weeks
    opponent: 'Academia FC',
    homeTeam: 'Academia FC',
    awayTeam: 'Club Atlético Libertad',
    venue: 'Estadio Academia',
    status: 'upcoming',
    competition: 'League - Matchday 16',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_academia/50/50',
  },
  {
    id: '3',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Last week
    opponent: 'Unidos FC',
    homeTeam: 'Club Atlético Libertad',
    awayTeam: 'Unidos FC',
    homeScore: 2,
    awayScore: 1,
    venue: 'Estadio Libertad',
    status: 'past',
    competition: 'League - Matchday 14',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_unidos/50/50',
    highlightsUrl: '#',
  },
  {
    id: '4',
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // Two weeks ago
    opponent: 'Estrella Roja CF',
    homeTeam: 'Estrella Roja CF',
    awayTeam: 'Club Atlético Libertad',
    homeScore: 0,
    awayScore: 0,
    venue: 'Estadio Municipal',
    status: 'past',
    competition: 'Cup - Quarter Final',
    opponentLogoUrl: 'https://picsum.photos/seed/logo_estrella/50/50',
  },
];

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Important Victory Boosts Libertad\'s Title Hopes',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    summary: 'A thrilling 2-1 victory over Unidos FC has put Club Atlético Libertad in a strong position for the league title.',
    imageUrl: 'https://picsum.photos/seed/news1/600/300',
    category: 'Match Report',
    author: 'Club Media Team',
  },
  {
    id: '2',
    title: 'New Youth Academy Talent Signs Professional Contract',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    summary: 'Young prodigy Alejandro Vargas has signed his first professional contract with the club, a testament to our successful youth program.',
    imageUrl: 'https://picsum.photos/seed/news2/600/300',
    category: 'Transfer',
    author: 'Club Media Team',
  },
  {
    id: '3',
    title: 'Club Announces Community Outreach Program for Local Schools',
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    summary: 'Club Atlético Libertad is proud to launch a new initiative aimed at promoting sports and healthy living in local schools.',
    imageUrl: 'https://picsum.photos/seed/news3/600/300',
    category: 'Community',
  },
];

export const clubContactInfo = {
  address: '123 Calle Libertad, Ciudad Principal, País',
  phone: '+12 345 678 9010',
  email: 'info@clublibertad.example.com',
  socialMedia: [
    { name: 'Facebook', url: 'https://facebook.com/clublibertad', icon: 'FacebookIcon' }, // Placeholder for actual icons
    { name: 'Twitter', url: 'https://twitter.com/clublibertad', icon: 'TwitterIcon' },
    { name: 'Instagram', url: 'https://instagram.com/clublibertad', icon: 'InstagramIcon' },
  ]
};
