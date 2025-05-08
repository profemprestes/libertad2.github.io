import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { Player } from '@/types';
import { User, CalendarDays, Flag, Shirt } from 'lucide-react'; // Added Shirt icon

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-secondary">
        <Image
          src={player.imageUrl}
          alt={player.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top" // object-top to prioritize face
          data-ai-hint="player portrait"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-lg font-bold bg-black/50 text-white backdrop-blur-sm">
            <Shirt className="mr-1.5 h-5 w-5 text-primary" /> #{player.number}
          </Badge>
        </div>
      </div>
      <CardHeader className="flex-row items-center gap-4 pt-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={player.imageUrl} alt={player.name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
            {getInitial(player.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl lg:text-2xl">{player.name}</CardTitle>
          <CardDescription className="text-base text-primary font-medium">{player.position}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3 text-sm">{player.bio}</p>
        <div className="mt-3 space-y-1 text-xs text-muted-foreground">
          {player.nationality && (
            <div className="flex items-center">
              <Flag className="mr-1.5 h-3.5 w-3.5 text-primary" /> Nacionalidad: {player.nationality}
            </div>
          )}
          {player.joinedYear && (
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-primary" /> Se unió en: {player.joinedYear}
            </div>
          )}
        </div>
      </CardContent>
       {/* <CardFooter>
        <Button variant="link" className="p-0 text-primary">Ver Perfil</Button> 
      </CardFooter> */}
    </Card>
  );
}
