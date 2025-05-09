import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';

export function HeroNoticias() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-600 to-accent mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('https://picsum.photos/seed/newsHero/1200/800')" }}
        data-ai-hint="press conference"
        aria-hidden="true"
      ></div>

      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-24 w-24 md:h-32 md:w-32 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Noticias
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-sm">
          Explorá todas las noticias y novedades del Club Atlético Libertad.
        </p>

        <div className="mt-8 flex justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary shadow-lg transition-transform hover:scale-105">
            <Link href="#ultimas">
              Últimas Noticias
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
