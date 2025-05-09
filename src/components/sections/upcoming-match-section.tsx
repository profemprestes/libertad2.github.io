import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { ClubLogo } from '@/components/club/club-logo';
import type { Match } from '@/types';

interface UpcomingMatchSectionProps {
  match: Match;
}

export function UpcomingMatchSection({ match }: UpcomingMatchSectionProps) {
  return (
    <section>
      <SectionTitle title="Próximo Partido" icon={CalendarDays} />
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-secondary">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl text-primary">{match.competition}</CardTitle>
          <CardDescription>{new Date(match.date).toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
            <div className="flex flex-col items-center">
              {match.homeTeam === "Club Atlético Libertad" && <ClubLogo className="h-16 w-16 md:h-20 md:w-20 mb-2 text-primary" />}
              {match.homeTeam !== "Club Atlético Libertad" && match.opponentLogoUrl && (
                <Image src={match.opponentLogoUrl} alt={`Logo de ${match.homeTeam}`} width={80} height={80} className="mb-2 rounded-full" data-ai-hint="team logo" />
              )}
              <p className="text-xl font-semibold">{match.homeTeam}</p>
            </div>
            <p className="text-4xl font-bold text-muted-foreground">vs.</p>
            <div className="flex flex-col items-center">
              {match.awayTeam === "Club Atlético Libertad" && <ClubLogo className="h-16 w-16 md:h-20 md:w-20 mb-2 text-primary" />}
              {match.awayTeam !== "Club Atlético Libertad" && match.opponentLogoUrl && (
                 <Image src={match.opponentLogoUrl} alt={`Logo de ${match.awayTeam}`} width={80} height={80} className="mb-2 rounded-full" data-ai-hint="team logo" />
              )}
               <p className="text-xl font-semibold">{match.awayTeam}</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">{match.venue}</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/matches">
              Detalles del Partido <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
