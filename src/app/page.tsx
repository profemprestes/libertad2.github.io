import { LatestNewsSection } from '@/components/sections/latest-news-section';
import { UpcomingMatchSection } from '@/components/sections/upcoming-match-section';
import { HeroPrincipal } from '@/components/sections/hero-principal';
import { HistoriaResumen } from '@/components/sections/historia-resumen';
import { HazteSocio } from '@/components/sections/Haztesocio'; // Corrected import name
import { partidos as allMatches } from '@/lib/partidos-data';

export default function HomePage() {
  const upcomingMatches = allMatches
    .filter(match => match.status === 'upcoming' || match.status === 'live')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const nextUpcomingMatch = upcomingMatches.length > 0 ? upcomingMatches[0] : null;

  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroPrincipal />
      <HistoriaResumen />
      {nextUpcomingMatch && (
        <div className="py-8">
          <UpcomingMatchSection match={nextUpcomingMatch} />
        </div>
      )}
      <LatestNewsSection />
      <HazteSocio />
    </div>
  );
}
