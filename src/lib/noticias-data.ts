import type { NewsArticle } from '@/types';

export const noticias: NewsArticle[] = [
  {
    id: 'noticia-1',
    title: '¡Gran Victoria del Gumarelo en el Clásico!',
    date: '2024-08-01T10:00:00Z',
    summary: 'Club Libertad demostró su garra y se impuso con un contundente 3-0 ante su rival tradicional, desatando la alegría de su hinchada.',
    imageUrl: 'https://picsum.photos/seed/noticia1/400/250',
    content: 'En una tarde soleada y con un estadio repleto, Club Atlético Libertad jugó uno de sus mejores partidos de la temporada. Desde el primer minuto, el equipo mostró una actitud ofensiva y un gran despliegue físico.\nLos goles llegaron por medio de Roque Santa Cruz, Lorenzo Melgarejo y una joya de tiro libre de Héctor Villalba. El técnico Ariel Galeano destacó el compromiso de sus jugadores y la importancia de esta victoria para seguir peleando en lo más alto de la tabla.\nLa afición decabi celebró hasta altas horas de la noche este triunfo memorable.',
    category: 'Primer Equipo',
  },
  {
    id: 'noticia-2',
    title: 'Nuevas Incorporaciones Refuerzan el Plantel',
    date: '2024-07-25T15:30:00Z',
    summary: 'El club anunció la llegada de dos jóvenes promesas que se suman al plantel principal para aportar su talento y frescura.',
    imageUrl: 'https://picsum.photos/seed/noticia2/400/250',
    content: 'Pensando en los desafíos futuros, la directiva de Club Libertad concretó la incorporación de dos talentosos jugadores. Se trata del mediocampista creativo Juan Pérez, proveniente de las formativas, y el delantero Matías González, con experiencia en ligas menores.\nAmbos jugadores expresaron su entusiasmo por vestir la camiseta decabi y prometieron darlo todo en cada entrenamiento y partido. "Es un sueño cumplido llegar a un club tan grande como Libertad", comentó Pérez en su presentación oficial.',
    category: 'Fichajes',
  },
  {
    id: 'noticia-3',
    title: 'Libertad Avanza en la Copa: Próximo Rival Definido',
    date: '2024-07-18T09:00:00Z',
    summary: 'Tras una emocionante tanda de penales, el Gumarelo clasificó a la siguiente ronda de la copa y ya conoce a su próximo oponente.',
    imageUrl: 'https://picsum.photos/seed/noticia3/400/250',
    content: 'El camino de Club Libertad en la copa nacional continúa firme. Luego de un empate 1-1 en los 90 minutos, el equipo logró imponerse en la definición por penales gracias a la destacada actuación de su arquero Martín Silva.\nEl próximo desafío será ante el Club Nacional, un rival siempre complicado. El cuerpo técnico ya está analizando al oponente y preparando la estrategia para seguir avanzando en la competición. La hinchada se ilusiona con la posibilidad de sumar un nuevo título a las vitrinas del club.',
    category: 'Copa',
  },
  {
    id: 'noticia-4',
    title: 'Escuela de Fútbol: Abiertas las Inscripciones',
    date: '2024-07-10T12:00:00Z',
    summary: 'La prestigiosa escuela de fútbol de Club Libertad abre sus puertas para nuevos talentos. ¡Inscribe a tus hijos!',
    imageUrl: 'https://picsum.photos/seed/noticia4/400/250',
    content: 'Como cada año, Club Atlético Libertad invita a niños y jóvenes a formar parte de su reconocida escuela de fútbol. Las inscripciones para la temporada 2024-2025 ya están abiertas en diversas categorías.\nCon un cuerpo técnico altamente calificado y unas instalaciones de primer nivel, la escuela busca no solo formar futbolistas, sino también inculcar valores como el respeto, la disciplina y el trabajo en equipo. Para más información sobre requisitos y horarios, acercarse a la secretaría del club o visitar la página web oficial.',
    category: 'Formativas',
  },
];
