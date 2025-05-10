import type { Metadata } from 'next';
import { SectionTitle } from '@/components/shared/section-title';
import { ShoppingBag } from 'lucide-react';
import { HeroTienda } from '@/components/sections/HeroTienda'; 
import { ComoComprar } from '@/components/sections/comocomprar';
import { ProductList } from '@/components/tienda/ProductList';
import { tiendaProducts } from '@/lib/productos-tienda-data';
import { JsonLdScript, generateProductData } from '@/lib/json-ld';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Tienda Oficial - Club Atlético Libertad',
  description: 'Descubrí productos oficiales del Club Atlético Libertad. Camisetas, bufandas, merchandising y más para verdaderos hinchas del Decano.',
  keywords: ['tienda club libertad', 'merchandising libertad', 'comprar camiseta libertad', 'productos club libertad', 'regalos fútbol', 'ropa club libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/tienda',
  },
  openGraph: {
    title: 'Tienda Oficial - Club Atlético Libertad',
    description: 'Descubrí productos oficiales del Club Atlético Libertad y llevá los colores del Decano.',
    url: `${SITE_URL}/tienda`,
    images: [
      {
        url: `${SITE_URL}/tienda/camiseta1.jpg`, 
        width: 800,
        height: 600,
        alt: 'Camiseta Oficial Club Atlético Libertad',
      },
      {
        url: `${SITE_URL}/LogoLibertad.png`,
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      }
    ],
  },
  twitter: {
    title: 'Tienda Oficial - Club Atlético Libertad',
    description: 'Descubrí productos oficiales del Club Atlético Libertad.',
    images: [`${SITE_URL}/tienda/camiseta1.jpg`],
  },
};

export default function TiendaPage() {
  const shopPageUrl = `${SITE_URL}/tienda`;

  const productListSchema = tiendaProducts.map(product => generateProductData(product, shopPageUrl));
  
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tienda Oficial - Club Atlético Libertad",
    description: "Productos oficiales del Club Atlético Libertad: camisetas, accesorios y más.",
    url: shopPageUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tiendaProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: generateProductData(product, shopPageUrl) // Generate full product data for each item
      }))
    }
  };


  return (
    <>
      <JsonLdScript data={collectionPageSchema} />
      {/* Individual product schemas can also be added if preferred, though ItemList is comprehensive */}
      {/* <JsonLdScript data={productListSchema} /> */}
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
        <section id="contacto-compra" className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">¿Preguntas sobre tu compra?</h2>
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
    </>
  );
}

    