"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MatchCard } from '@/components/club/match-card';
import type { Match } from '@/types';
import { CalendarClock, CheckCircle } from 'lucide-react';

interface MatchScheduleProps {
  matches: Match[];
}

export function MatchSchedule({ matches }: MatchScheduleProps) {
  if (!matches || matches.length === 0) {
    return <p className="text-center text-muted-foreground">No hay partidos para mostrar.</p>;
  }

  const upcomingMatches = matches
    .filter((match) => match.status === 'upcoming' || match.status === 'live')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
  const pastMatches = matches
    .filter((match) => match.status === 'past')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const renderMatchList = (matchList: Match[], emptyMessage: string) => {
    if (matchList.length === 0) {
      return <p className="text-center text-muted-foreground py-8">{emptyMessage}</p>;
    }
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
        {matchList.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="upcoming" className="text-base">
          <CalendarClock className="mr-2 h-5 w-5" /> Próximos / En Vivo
        </TabsTrigger>
        <TabsTrigger value="past" className="text-base">
          <CheckCircle className="mr-2 h-5 w-5" /> Resultados
        </TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">
        {renderMatchList(upcomingMatches, 'No hay próximos partidos programados.')}
      </TabsContent>
      <TabsContent value="past">
        {renderMatchList(pastMatches, 'No hay resultados de partidos anteriores disponibles.')}
      </TabsContent>
    </Tabs>
  );
}
