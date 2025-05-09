'use client';
import type { CartItem } from '@/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Inline SVG for WhatsApp icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52s-.67-.816-.917-1.103c-.247-.287-.5-.318-.67-.326h-.025c-.174 0-.447-.05-.67-.05-.224 0-.598.074-.916.446-.318.371-1.217 1.176-1.217 2.873 0 1.699 1.24 3.331 1.414 3.562.174.232 2.43 3.704 5.896 5.186 3.467 1.483 3.467 1.002 4.099.932.633-.07 1.758-.715 2.006-1.413.248-.699.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.02a10.48 10.48 0 0 1-10.4-10.4v-.02c0-5.76 4.696-10.457 10.457-10.457s10.457 4.697 10.457 10.457c0 5.76-4.696 10.457-10.457 10.457z" />
  </svg>
);


interface FinalizeOrderModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  getCartTotal: () => number;
}

const finalizeOrderSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  isSocio: z.enum(['si', 'no'], { required_error: 'Por favor, indica si eres socio.' }),
  message: z.string().optional(),
});

type FinalizeOrderFormData = z.infer<typeof finalizeOrderSchema>;

export function FinalizeOrderModal({
  isOpen,
  onOpenChange,
  cartItems,
  getCartTotal,
}: FinalizeOrderModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FinalizeOrderFormData>({
    resolver: zodResolver(finalizeOrderSchema),
    defaultValues: {
      isSocio: 'no', // Default to "No"
    },
  });

  const onSubmit = (data: FinalizeOrderFormData) => {
    const phoneNumber = '59898896174'; // WhatsApp number without '+' or spaces

    let orderSummary = 'Resumen del Pedido:\n';
    cartItems.forEach(item => {
      orderSummary += `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString('es-UY')}\n`;
    });
    orderSummary += `\nTotal: $${getCartTotal().toLocaleString('es-UY')}`;

    const socioStatus = data.isSocio === 'si' ? 'Sí' : 'No';

    let whatsappMessage = `¡Hola! Quiero finalizar mi pedido:\n\n`;
    whatsappMessage += `Nombre: ${data.name}\n`;
    whatsappMessage += `Socio: ${socioStatus}\n\n`;
    whatsappMessage += `${orderSummary}\n\n`;

    if (data.message) {
      whatsappMessage += `Mensaje Adicional:\n${data.message}`;
    }

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onOpenChange(false); // Close modal
    reset(); // Reset form
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Finalizar Pedido por WhatsApp</DialogTitle>
          <DialogDescription>
            Completa tus datos y te contactaremos por WhatsApp para coordinar el pago y envío.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
          <div>
            <Label htmlFor="name" className="text-foreground">Nombre Completo</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Tu nombre completo"
              className="mt-1"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label className="text-foreground">¿Eres Socio del Club?</Label>
            <RadioGroup
              defaultValue="no"
              onValueChange={(value: 'si' | 'no') => register('isSocio').onChange({ target: { value } })}
              className="flex space-x-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="socio-si" {...register('isSocio')} />
                <Label htmlFor="socio-si">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="socio-no" {...register('isSocio')} />
                <Label htmlFor="socio-no">No</Label>
              </div>
            </RadioGroup>
            {errors.isSocio && <p className="text-sm text-destructive mt-1">{errors.isSocio.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="message" className="text-foreground">Mensaje Adicional (Opcional)</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Cualquier aclaración o consulta..."
              className="mt-1"
              rows={3}
            />
          </div>
        
          <DialogFooter className="sm:justify-end gap-2 pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
              <WhatsAppIcon className="mr-2 h-4 w-4" /> Enviar Pedido por WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
