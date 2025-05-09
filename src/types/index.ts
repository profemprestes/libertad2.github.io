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
  fechaNumero?: number; // Optional: For fixture display
  category?: 'Sub 15' | 'Sub 20' | string; // Optional: For category specific fixtures like Sub 15, Sub 20
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string; // ISO string for date
  summary: string; 
  imageUrl?: string; 
  content: string; 
  category?: string;
  author?: string; 
}

export interface Equipo {
  nombre: string;
  direccion: string;
  nombreCorto: string;
  estadio: string;
  escudoUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Price in a numeric format, e.g., UYU
  imageUrl: string;
  imageHint: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Sub15Player {
  nombre: string;
  posicion: string; // Ej: Arquero, Defensa, Volante, Delantero
  instagram: string; // usuario de Instagram, sin link
  fechaNacimiento: string; // formato "DD/MM/AAAA"
}
