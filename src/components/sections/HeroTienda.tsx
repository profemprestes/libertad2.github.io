import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubLogo } from '@/components/club/club-logo';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function HeroTienda() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-600 to-accent mb-12">
      <div 
        className="absolute inset-0 opacity-25"
        aria-hidden="true"
      >
        <Image 
          src="https://picsum.photos/seed/storeHero/1200/800" 
          alt="Variedad de productos oficiales del Club Atlético Libertad"
          fill
          className="object-cover bg-center"
          data-ai-hint="club merchandise display"
        />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-20 w-20 md:h-28 md:w-28 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Tienda Oficial
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-sm">
          Vestí los colores del Club Atlético Libertad. Camisetas, bufandas y más para hinchas de verdad.
        </p>

        <div className="mt-8 flex justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary shadow-lg transition-transform hover:scale-105">
            <Link href="#productos">
              Ver Productos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

