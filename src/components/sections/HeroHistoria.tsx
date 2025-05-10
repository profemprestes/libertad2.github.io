import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';
import Image from 'next/image'; 

export function HeroHistoria() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-700 to-accent mb-12">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true" 
      >
        <Image
          src="/nuevas/escudo1906.jpg" 
          alt="Escudo histórico del Club Atlético Libertad de 1906" 
          fill
          className="object-cover object-center"
          data-ai-hint="club shield"
        />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-24 w-24 md:h-32 md:w-32 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Nuestra Historia
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-sm">
          Desde 1906 construyendo un legado de pasión, identidad y gloria canaria.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary shadow-lg transition-transform hover:scale-105">
            <Link href="#linea-tiempo">
              Línea de Tiempo <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-black/70 text-primary-foreground border border-primary-foreground/30 hover:bg-black/80 shadow-lg transition-transform hover:scale-105">
            <Link href="/">
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
