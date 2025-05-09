import { LatestNewsSection } from '@/components/sections/latest-news-section';
import { UpcomingMatchSection } from '@/components/sections/upcoming-match-section';
import { HeroPrincipal } from '@/components/sections/hero-principal';
import { mockMatches } from '@/lib/mock-data'; 

export default function HomePage() {
  const upcomingMatch = mockMatches.find(match => match.status === 'upcoming');

  return (
    <div className="space-y-12 md:space-y-16">
      <HeroPrincipal />
      <LatestNewsSection />
      {upcomingMatch && <UpcomingMatchSection match={upcomingMatch} />}
    </div>
  );
}
