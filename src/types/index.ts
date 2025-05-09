export interface HistoricalEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward' | 'Coach';
  bio: string;
  imageUrl: string;
  nationality?: string; // Optional: country flag or name
  joinedYear?: number;  // Optional
}

export interface Match {
  id: string;
  date: string; // ISO string or a display-friendly string
  opponent: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  venue: string;
  status: 'upcoming' | 'past' | 'live';
  competition: string; // e.g., "League Match", "Cup Final"
  opponentLogoUrl?: string;
  highlightsUrl?: string; // Optional link to match highlights
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string; // ISO string for date
  summary: string; // Changed from extract to summary to match mock-data and news-card
  imageUrl?: string; // Placeholder URL for image
  content: string; // Full content of the news
  category?: string;
  author?: string; // Added to match mock-data
}

export interface Equipo {
  nombre: string;
  direccion: string;
  nombreCorto: string;
  estadio: string;
  escudoUrl: string;
}
