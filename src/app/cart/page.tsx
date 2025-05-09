'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { useState, useEffect } from 'react';
import { FinalizeOrderModal } from '@/components/cart/FinalizeOrderModal';

export default function CartPage() {
  const { cartItems, removeItem, updateQuantity, clearCart, getCartTotal, getTotalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.title = 'Carrito de Compras | Club Atlético Libertad';
  }, []);


  const handleQuantityChange = (productId: string, currentQuantity: number, amount: number) => {
    const newQuantity = currentQuantity + amount;
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    } else if (newQuantity <= 0) {
      removeItem(productId);
    }
  };

  const handleInputChange = (productId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1; 
    }
    updateQuantity(productId, value);
  };
  
  if (!isClient) {
    return ( // Basic skeleton while client loads
        <div className="container mx-auto px-4 py-8">
            <SectionTitle title="Tu Carrito de Compras" icon={ShoppingCart} />
            <Card className="text-center py-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-muted-foreground">Cargando carrito...</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
                        <div className="h-10 bg-primary/50 rounded w-1/2 mx-auto"></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle title="Tu Carrito de Compras" icon={ShoppingCart} />

      {cartItems.length === 0 ? (
        <Card className="text-center py-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-muted-foreground">Tu carrito está vacío</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">Aún no has agregado ningún producto a tu carrito.</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/tienda">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a la Tienda
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4 gap-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-md overflow-hidden shrink-0">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={item.imageHint} />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">Precio Unitario: ${item.price.toLocaleString('es-UY')}</p>
                </div>
                <div className="flex items-center space-x-2 my-2 sm:my-0">
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, -1)} className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleInputChange(item.id, e)}
                    min="1"
                    className="h-8 w-12 text-center"
                    aria-label={`Cantidad de ${item.name}`}
                  />
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, 1)} className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-md font-semibold text-primary sm:min-w-[100px] text-right">
                  ${(item.price * item.quantity).toLocaleString('es-UY')}
                </p>
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="text-destructive hover:text-destructive/80" aria-label={`Eliminar ${item.name} del carrito`}>
                  <Trash2 className="h-5 w-5" />
                </Button>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-1 p-6 shadow-xl sticky top-24">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-primary">Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-md">
                <span className="text-muted-foreground">Subtotal ({getTotalItems()} productos):</span>
                <span className="font-semibold text-foreground">${getCartTotal().toLocaleString('es-UY')}</span>
              </div>
              <div className="flex justify-between text-md">
                <span className="text-muted-foreground">Envío:</span>
                <span className="font-semibold text-foreground">A coordinar</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between text-xl font-bold">
                <span className="text-foreground">Total:</span>
                <span className="text-primary">${getCartTotal().toLocaleString('es-UY')}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-6">
              <Button 
                onClick={() => setIsModalOpen(true)} 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-3"
              >
                Finalizar Pedido
              </Button>
              <Button variant="outline" onClick={clearCart} className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive">
                <Trash2 className="mr-2 h-4 w-4" /> Vaciar Carrito
              </Button>
               <Button variant="link" asChild className="text-primary p-0 hover:text-accent group">
                <Link href="/tienda">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Continuar Comprando
                </Link>
            </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      {isModalOpen && (
        <FinalizeOrderModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          cartItems={cartItems}
          getCartTotal={getCartTotal}
        />
      )}
    </div>
  );
}
