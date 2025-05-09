
import { SectionTitle } from '@/components/shared/section-title';
import { ShoppingBag } from 'lucide-react';
import type { Metadata } from 'next';
import { HeroTienda } from '@/components/sections/HeroTienda'; 
import { ComoComprar } from '@/components/sections/comocomprar';
import { ProductList } from '@/components/tienda/ProductList';
import { tiendaProducts } from '@/lib/productos-tienda-data';

export const metadata: Metadata = {
  title: 'Tienda Oficial | Club Libertad',
  description: 'Descubrí productos oficiales del Club Atlético Libertad. Camisetas, bufandas, merchandising y más para verdaderos hinchas.',
};

export default function TiendaPage() {
  return (
    <div>
      <HeroTienda />
      <SectionTitle
        id="productos" 
        title="Nuestros Productos"
        icon={ShoppingBag}
        description="Descubrí productos exclusivos del Club Atlético Libertad y lucí los colores con orgullo."
        className="pt-12"
      />
      <ProductList products={tiendaProducts} />
      <ComoComprar />
      {/* Section for contacting about purchases, can be linked from modal or cart */}
      <section id="contacto-compra" className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">¿Preguntas sobre tu compra?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Si tenés dudas sobre un producto, el proceso de compra o querés coordinar un envío, no dudes en contactarnos.
          </p>
          <a
            href="/contact#formulario"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-primary text-primary-foreground rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-primary/90"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
