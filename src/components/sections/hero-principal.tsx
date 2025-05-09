import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';
import Image from 'next/image';

export function HeroPrincipal() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-primary/80 to-rose-700">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        <Image 
          src="/tienda/hinchada.jpg"
          alt="Hinchada del Club Atlético Libertad alentando en el estadio"
          layout="fill"
          objectFit="cover"
          className="bg-center"
          data-ai-hint="stadium crowd"
          priority 
        />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-24 w-24 md:h-32 md:w-32 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Club Atlético Libertad
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-sm">
          Pasión, Historia, Victoria. Únete a la familia Libertad.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
            <Link href="/matches">
              Ver Partidos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 shadow-lg transition-transform hover:scale-105">
            <Link href="/roster">
              Conoce al Equipo <Users className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

