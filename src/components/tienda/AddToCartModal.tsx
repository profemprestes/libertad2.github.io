'use client';
import type { Product } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/cart-context';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddToCartModalProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddToCartModal({ product, isOpen, onOpenChange }: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(1); // Or some other default/minimum
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: `${product.name} agregado al carrito`,
      description: `Cantidad: ${quantity}. Total: $${(product.price * quantity).toLocaleString('es-UY')}`,
    });
    onOpenChange(false);
    setQuantity(1); // Reset quantity for next time
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{product.name}</DialogTitle>
          <DialogDescription>{product.category}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="relative aspect-video w-full max-w-xs mx-auto rounded-md overflow-hidden">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
              data-ai-hint={product.imageHint} 
            />
          </div>
          <p className="text-sm text-muted-foreground">{product.description}</p>
          <p className="text-2xl font-semibold text-foreground">Precio: ${product.price.toLocaleString('es-UY')}</p>
          
          <div className="flex items-center space-x-3">
            <Label htmlFor={`quantity-${product.id}`} className="text-base">Cantidad:</Label>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="h-10 w-10 rounded-r-none">
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id={`quantity-${product.id}`}
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min="1"
                className="h-10 w-16 text-center border-l border-r rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="h-10 w-10 rounded-l-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between items-center">
            <p className="text-2xl font-bold text-primary">
                Total: ${(product.price * quantity).toLocaleString('es-UY')}
            </p>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="button" onClick={handleAddToCart} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al Carrito
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
