import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Star, ShoppingBag, Gift, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Beneficio {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const beneficios: Beneficio[] = [
  {
    id: 'beneficio-1',
    title: 'Descuentos en Entradas',
    description: 'Acceso a entradas con precios preferenciales para todos los partidos de local del Club Atlético Libertad.',
    icon: Ticket,
  },
  {
    id: 'beneficio-2',
    title: 'Prioridad en Eventos',
    description: 'Prioridad para la compra de entradas en partidos importantes y acceso a eventos exclusivos del club.',
    icon: Star,
  },
  {
    id: 'beneficio-3',
    title: 'Descuentos en Tienda Oficial',
    description: 'Disfruta de descuentos especiales en todos los productos de la Tienda Oficial: camisetas, merchandising y más.',
    icon: ShoppingBag,
  },
  {
    id: 'beneficio-4',
    title: 'Participación en Actividades',
    description: 'Invitaciones a actividades, sorteos y encuentros exclusivos para los socios del club.',
    icon: Gift,
  },
  {
    id: 'beneficio-5',
    title: 'Voz y Voto',
    description: 'Participa activamente en la vida institucional del club, con voz y voto en asambleas (según categoría de socio).',
    icon: Users,
  },
  {
    id: 'beneficio-6',
    title: 'Apoyo Directo al Club',
    description: 'Tu cuota social contribuye directamente al crecimiento y desarrollo de todas las disciplinas del Club Atlético Libertad.',
    icon: ShieldCheck, // Assuming ShieldCheck is already imported where SectionTitle is used
  },
];

export function BeneficiosSocio() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {beneficios.map((beneficio) => (
          <Card key={beneficio.id} className="flex flex-col text-center items-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card h-full">
            <CardHeader className="pb-3 pt-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                <beneficio.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{beneficio.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{beneficio.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
