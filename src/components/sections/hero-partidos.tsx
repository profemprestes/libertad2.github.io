import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, CalendarCheck, ListOrdered } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';

export function HeroPartidos() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-700 to-neutral-800 mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/seed/stadiumNight/1200/800')" }}
        data-ai-hint="stadium night"
        aria-hidden="true"
      ></div>

      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-24 w-24 md:h-32 md:w-32 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Partidos y Resultados
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-sm">
          Mantente actualizado con los próximos partidos del Club Atlético Libertad y revisa los resultados pasados.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
            <Link href="#proximos-resultados">
              Próximos Encuentros <CalendarCheck className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-black/70 text-primary-foreground border border-primary-foreground/30 hover:bg-black/80 shadow-lg transition-transform hover:scale-105">
            <Link href="#proximos-resultados">
              Resultados Recientes <ListOrdered className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
