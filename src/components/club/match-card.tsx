import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Match } from '@/types';
import { CalendarDays, MapPin, ShieldCheck, Trophy, Tv, BarChart } from 'lucide-react'; // Added Tv, BarChart for future use
import { ClubLogo } from './club-logo'; // Assuming ClubLogo is available
import { cn } from '@/lib/utils';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const matchDate = new Date(match.date);
  const isPast = match.status === 'past';
  const isLibertadHome = match.homeTeam === "Club Atlético Libertad";

  const TeamDisplay = ({ teamName, teamLogoUrl, isLibertad }: { teamName: string; teamLogoUrl?: string; isLibertad: boolean }) => (
    <div className="flex flex-col items-center text-center w-1/3 min-w-[100px]">
      {isLibertad ? (
        <ClubLogo className="h-12 w-12 sm:h-16 sm:w-16 mb-2 text-primary" />
      ) : teamLogoUrl ? (
        <Image 
          src={teamLogoUrl} 
          alt={`${teamName} logo`} 
          width={64} 
          height={64} 
          className="rounded-full mb-2 h-12 w-12 sm:h-16 sm:w-16 object-contain"
          data-ai-hint="team logo" 
        />
      ) : (
        <div className="h-12 w-12 sm:h-16 sm:w-16 mb-2 bg-muted rounded-full flex items-center justify-center">
          <ShieldCheck className="h-8 w-8 text-muted-foreground" />
        </div>
      )}
      <p className="font-semibold text-sm sm:text-base truncate w-full">{teamName}</p>
    </div>
  );

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
      <CardHeader className={cn("pb-3", isPast ? "bg-muted/50" : "bg-secondary")}>
        <CardTitle className="text-base sm:text-lg text-center text-primary truncate">{match.competition}</CardTitle>
        <CardDescription className="text-center text-xs sm:text-sm">
          {matchDate.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          {' - '}
          {matchDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4 pb-4">
        <div className="flex items-center justify-around mb-4">
          <TeamDisplay teamName={match.homeTeam} teamLogoUrl={!isLibertadHome ? match.opponentLogoUrl : undefined} isLibertad={isLibertadHome} />
          
          {isPast ? (
            <div className="text-center px-2">
              <p className="text-2xl sm:text-4xl font-bold text-foreground">
                {match.homeScore} - {match.awayScore}
              </p>
              <p className="text-xs text-muted-foreground">Full Time</p>
            </div>
          ) : (
            <p className="text-2xl sm:text-4xl font-bold text-muted-foreground">VS</p>
          )}

          <TeamDisplay teamName={match.awayTeam} teamLogoUrl={isLibertadHome ? match.opponentLogoUrl : undefined} isLibertad={!isLibertadHome} />
        </div>
        
        <div className="text-center text-sm text-muted-foreground flex items-center justify-center">
          <MapPin className="h-4 w-4 mr-1.5 shrink-0" /> {match.venue}
        </div>
      </CardContent>
      {isPast && match.highlightsUrl && (
        <CardFooter className="bg-muted/50 p-3 justify-center">
          <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80 hover:bg-primary/10">
            <Link href={match.highlightsUrl} target="_blank" rel="noopener noreferrer">
              <Tv className="h-4 w-4 mr-1.5" /> Watch Highlights
            </Link>
          </Button>
        </CardFooter>
      )}
      {match.status === 'live' && (
         <CardFooter className="bg-destructive/80 p-3 justify-center">
          <Button variant="destructive" size="sm" asChild className="text-destructive-foreground hover:bg-destructive">
            <Link href="#"> {/* Link to live match updates */}
              <BarChart className="h-4 w-4 mr-1.5 animate-pulse" /> Live Updates
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
