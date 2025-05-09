import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';

export function HazteSocio() {
  return (
    <section id="hazte-socio" className="py-20 md:py-28 bg-gradient-to-br from-primary via-red-600 to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
          ¡Hazte Socio!
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground/90">
          Formá parte de la familia del Club Atlético Libertad. Disfrutá de beneficios exclusivos como descuentos en entradas, prioridad en eventos, y promociones en la tienda oficial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <Check className="mx-auto mb-4 h-10 w-10 text-accent" strokeWidth={2.5} />
            <h3 className="text-2xl font-semibold mb-2 text-primary-foreground">Entradas con Descuento</h3>
            <p className="text-sm text-primary-foreground/80">Accedé a entradas a precios especiales para todos los partidos del club.</p>
          </div>
          <div className="bg-background/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <ChevronRight className="mx-auto mb-4 h-10 w-10 text-accent" strokeWidth={2.5} /> {/* Changed to ChevronRight as a generic 'priority' icon */}
            <h3 className="text-2xl font-semibold mb-2 text-primary-foreground">Prioridad en Eventos</h3>
            <p className="text-sm text-primary-foreground/80">Sé el primero en participar de actividades especiales y eventos institucionales.</p>
          </div>
          <div className="bg-background/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <ShoppingBag className="mx-auto mb-4 h-10 w-10 text-accent" strokeWidth={2.5} />
            <h3 className="text-2xl font-semibold mb-2 text-primary-foreground">Descuentos en la Tienda</h3>
            <p className="text-sm text-primary-foreground/80">Obtené beneficios en la compra de camisetas, bufandas y productos oficiales.</p>
          </div>
        </div>

        <Button asChild size="lg" className="bg-background text-primary font-bold rounded-lg shadow-xl hover:bg-accent hover:text-accent-foreground transition-colors text-lg px-8 py-4">
          <Link href="/contact#formulario">
            Quiero Asociarme
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
