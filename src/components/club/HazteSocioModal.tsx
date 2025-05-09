'use client';

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

interface HazteSocioModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const hazteSocioSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  phone: z.string().min(8, { message: 'El teléfono debe tener al menos 8 dígitos.' }).regex(/^\d+$/, "El teléfono solo debe contener números."),
  address: z.string().min(5, { message: 'La dirección debe tener al menos 5 caracteres.' }),
});

type HazteSocioFormData = z.infer<typeof hazteSocioSchema>;

export function HazteSocioModal({ isOpen, onOpenChange }: HazteSocioModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HazteSocioFormData>({
    resolver: zodResolver(hazteSocioSchema),
  });

  const onSubmit = (data: HazteSocioFormData) => {
    const phoneNumber = '59898896174'; // WhatsApp number

    let whatsappMessage = `¡Hola! Quiero hacerme socio del Club Atlético Libertad.\n\nMis datos son:\n`;
    whatsappMessage += `Nombre: ${data.name}\n`;
    whatsappMessage += `Teléfono: ${data.phone}\n`;
    whatsappMessage += `Dirección: ${data.address}\n\n`;
    whatsappMessage += `¡Aguardo contacto para coordinar!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onOpenChange(false); 
    reset(); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Quiero Ser Socio</DialogTitle>
          <DialogDescription>
            Completa tus datos y nos pondremos en contacto contigo por WhatsApp para finalizar el proceso.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
          <div>
            <Label htmlFor="hazte-socio-name" className="text-foreground">Nombre Completo</Label>
            <Input
              id="hazte-socio-name"
              {...register('name')}
              placeholder="Tu nombre completo"
              className="mt-1"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="hazte-socio-phone" className="text-foreground">Teléfono de Contacto</Label>
            <Input
              id="hazte-socio-phone"
              type="tel"
              {...register('phone')}
              placeholder="Ej: 099123456"
              className="mt-1"
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="hazte-socio-address" className="text-foreground">Dirección</Label>
            <Textarea
              id="hazte-socio-address"
              {...register('address')}
              placeholder="Tu dirección completa"
              className="mt-1"
              rows={3}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
          </div>
        
          <DialogFooter className="sm:justify-end gap-2 pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
              <WhatsAppIcon className="mr-2 h-4 w-4" /> Enviar Datos por WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
