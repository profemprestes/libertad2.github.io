
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint: string;
}

const products: Product[] = [
  {
    id: 'camiseta-oficial',
    name: 'Camiseta Oficial',
    description: 'Diseño original con franjas rojas y blancas. Tejido liviano y transpirable.',
    price: '$1.490',
    imageUrl: '/tienda/camiseta1.jpg', // Using existing image
    imageHint: 'club jersey',
  },
  {
    id: 'short-oficial',
    name: 'Short Oficial',
    description: 'Short deportivo negro con escudo bordado. Ideal para entrenar o alentar.',
    price: '$990',
    imageUrl: '/tienda/camiseta4.jpg', // Placeholder, as short-libertad.png doesn't exist
    imageHint: 'sports short',
  },
  {
    id: 'sticker-club',
    name: 'Sticker del Club',
    description: 'Pegatina vinilo resistente con el escudo del club. Ideal para tu cuaderno, auto o laptop.',
    price: '$190',
    imageUrl: '/tienda/sticker1.jpg', // Using existing image
    imageHint: 'club sticker',
  },
];

export function Productostienda() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Productos Oficiales
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí tu artículo favorito y mostrale al mundo tu pasión por el Club Atlético Libertad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-square w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint={product.imageHint}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-4">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/tienda#contacto-compra"> {/* Points to a section on tienda page or contact page */}
                    Comprar <ShoppingCart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
