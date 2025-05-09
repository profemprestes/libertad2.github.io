import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubLogo } from '@/components/club/club-logo';
import { Users, Home } from 'lucide-react';
import Image from 'next/image';

export function HeroEquipo() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-700 to-accent mb-12">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        <Image
          src="/tienda/plantel1.jpg" // Assuming a relevant image for the team
          alt="Plantel del Club Atlético Libertad"
          fill
          className="object-cover bg-center"
          data-ai-hint="team photo"
        />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-24 w-24 md:h-32 md:w-32 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Conoce Nuestro Equipo
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-sm">
          Descubre a los talentosos jugadores y al dedicado cuerpo técnico que representan al Club Atlético Libertad en cada partido.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary shadow-lg transition-transform hover:scale-105">
            <Link href="#plantel-completo"> {/* Assuming an ID for the roster section below */}
              Ver Plantel <Users className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-black/70 text-primary-foreground border border-primary-foreground/30 hover:bg-black/80 shadow-lg transition-transform hover:scale-105">
            <Link href="/">
              Volver al Inicio <Home className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
