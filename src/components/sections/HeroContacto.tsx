import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubLogo } from '@/components/club/club-logo';
import { MessageSquare } from 'lucide-react';

export function HeroContacto() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary via-red-700 to-accent mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/seed/stadiumContact/1200/800')" }}
        data-ai-hint="stadium floodlights"
        aria-hidden="true"
      ></div>

      <div className="relative container mx-auto px-4 text-center">
        <ClubLogo className="h-20 w-20 md:h-28 md:w-28 text-primary-foreground mx-auto mb-6 drop-shadow-lg" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md">
          Contáctanos
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-sm">
          ¡Nos encantaría saber de ti! Contáctanos con cualquier pregunta, consulta o simplemente para saludar.
        </p>

        <div className="mt-8 flex justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary shadow-lg transition-transform hover:scale-105">
            <Link href="#formulario">
              Escribir Mensaje <MessageSquare className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
