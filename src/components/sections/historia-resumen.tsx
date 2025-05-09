import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, ArrowRight } from 'lucide-react';

export function HistoriaResumen() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <ScrollText className="h-12 w-12 mx-auto text-accent mb-4" />
            <CardTitle className="text-3xl font-bold text-primary">
              Nuestra Rica Historia
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-lg">
              Un legado de pasión y fútbol desde 1906.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-foreground mb-6 text-base leading-relaxed max-w-3xl mx-auto">
              Fundado el 18 de Marzo del 1906, el Club Atlético Libertad es una institución emblemática
              del fútbol uruguayo, arraigada en la ciudad de Canelones. A lo largo de más de un siglo,
              el club ha sido un faro de deporte y comunidad, cosechando logros y forjando una identidad
              fuerte y respetada. Desde sus humildes comienzos hasta convertirse en un referente,
              Libertad ha escrito páginas gloriosas, siendo protagonista en ligas locales y
              dejando una huella imborrable en el corazón de sus hinchas.
            </p>
            <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/history">
                Descubrir Más <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
