
import { Trophy } from 'lucide-react';

export function DecanoStatsSection() {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight drop-shadow-sm">
            Decano de las Instituciones Deportivas de Canelones <span role="img" aria-label="Bandera de Uruguay">🇺🇾</span>
          </h2>
          <div className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-semibold text-accent mt-6 mb-8 drop-shadow-sm">
            <Trophy className="h-8 w-8 md:h-10 md:w-10 mr-3 text-accent filter drop-shadow" />
            <span>15 Campeonatos Monegal</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Un legado de gloria y tradición que nos enorgullece. Desde 1906, escribiendo la historia grande del fútbol canario.
          </p>
        </div>
      </div>
    </section>
  );
}
