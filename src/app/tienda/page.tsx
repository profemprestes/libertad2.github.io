import { SectionTitle } from '@/components/shared/section-title';
import { ShoppingBag } from 'lucide-react';
import type { Metadata } from 'next';
import { HeroTienda } from '@/components/sections/HeroTienda'; // Corrected import name

export const metadata: Metadata = {
  title: 'Tienda Oficial | Club Libertad',
  description: 'Descubrí productos oficiales del Club Atlético Libertad. Camisetas, bufandas, merchandising y más para verdaderos hinchas.',
};

export default function TiendaPage() {
  return (
    <div>
      <HeroTienda />
      <SectionTitle
        id="productos" // Updated id to match anchor link from HeroTienda
        title="Nuestros Productos"
        icon={ShoppingBag}
        description="Descubrí productos exclusivos del Club Atlético Libertad y lucí los colores con orgullo."
        className="pt-12"
      />
      {/* Placeholder for product listing */}
      <div className="text-center py-16">
        <p className="text-xl text-muted-foreground">
          Próximamente: Catálogo de productos oficiales del Club Atlético Libertad.
        </p>
        <p className="text-muted-foreground mt-2">
          ¡Vuelve pronto para encontrar camisetas, bufandas, y mucho más!
        </p>
      </div>
    </div>
  );
}
