
import { SectionTitle } from '@/components/shared/section-title';
import { ShoppingBag } from 'lucide-react';
import type { Metadata } from 'next';
import { HeroTienda } from '@/components/sections/HeroTienda'; 
import { ComoComprar } from '@/components/sections/comocomprar';
import { Productostienda } from '@/components/sections/productostienda'; // Added import

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
      <Productostienda /> {/* Integrated Productostienda component */}
      <ComoComprar />
    </div>
  );
}
