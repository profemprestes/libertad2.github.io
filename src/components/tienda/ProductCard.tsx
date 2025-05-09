'use client';
import type { Product } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { AddToCartModal } from './AddToCartModal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 h-12">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow pt-0">
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 mb-2">
            {product.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-2 pb-4 px-4">
          <span className="text-xl font-bold text-primary">${product.price.toLocaleString('es-UY')}</span>
          <Button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            size="sm"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Agregar
          </Button>
        </CardFooter>
      </Card>
      {isModalOpen && (
          <AddToCartModal 
            product={product} 
            isOpen={isModalOpen} 
            onOpenChange={setIsModalOpen} 
          />
        )
      }
    </>
  );
}
