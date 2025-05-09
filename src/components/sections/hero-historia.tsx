import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';
import Image from 'next/image'; // Import Image component

export function HeroHistoria() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-700 to-accent mb-12">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true" 
      >
        <Image
          src="/tienda/formatiivas1.jpg" 
          alt="Imagen histórica de las formativas del Club Atlético Libertad" // Descriptive alt tag
          layout="fill"
          objectFit="cover"
          className="bg-center"
          data-ai-hint="historical soccer youth"
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
            <Link href="#linea-tiempo">
              Línea de Tiempo <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 shadow-lg transition-transform hover:scale-105">
            <Link href="/">
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
