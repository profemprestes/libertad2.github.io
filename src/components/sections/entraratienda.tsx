
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export function EntrarATienda() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-red-600 to-accent text-primary-foreground overflow-hidden rounded-xl shadow-xl mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Imagen del producto */}
        <div className="relative">
          <Image
            src="/tienda/camiseta1.jpg" // Using an existing image from public/tienda
            alt="Camiseta Oficial Club Atlético Libertad"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto rounded-lg drop-shadow-lg object-contain"
            data-ai-hint="club jersey"
          />
        </div>

        {/* Contenido de texto */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Tienda Oficial
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-xl">
            Descubrí los productos del Club Atlético Libertad. Vestí nuestros colores con orgullo y apoyá al equipo con cada compra.
          </p>

          <Button asChild size="lg" className="bg-background text-primary hover:bg-secondary shadow-lg transition-transform hover:scale-105">
            <Link href="/tienda">
              Entrar a la Tienda <ShoppingBag className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
