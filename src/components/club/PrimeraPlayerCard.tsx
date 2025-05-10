import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { PrimeraPlayer } from '@/types';
import { CalendarDays, Instagram, UserCircle } from 'lucide-react';
import Link from 'next/link';

interface PrimeraPlayerCardProps {
  player: PrimeraPlayer;
}

export function PrimeraPlayerCard({ player }: PrimeraPlayerCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 pt-4">
        <div className="flex items-center gap-3">
          <UserCircle className="h-10 w-10 text-primary" />
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">{player.nombre}</CardTitle>
            <CardDescription className="text-sm text-primary">{player.posicion}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-primary/80" />
          Nacimiento: {player.fechaNacimiento}
        </div>
        {player.instagram && (
          <div className="flex items-center">
            <Instagram className="mr-1.5 h-3.5 w-3.5 text-primary/80" />
            <Link 
              href={`https://instagram.com/${player.instagram}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label={`Perfil de Instagram de ${player.nombre}`}
            >
              @{player.instagram}
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
