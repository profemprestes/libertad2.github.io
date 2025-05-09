"use client";

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from '@/server/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
        </>
      ) : (
        <>
          Enviar Mensaje <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: '¡Mensaje Enviado!',
        description: state.message,
      });
      reset(); // Reset form fields
    } else if (state.status === 'error' && state.message && !state.errors) {
      // General error not related to fields
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, reset]);
  
  // Combine server-side field errors with client-side for display
  const getFieldError = (fieldName: keyof ContactFormData) => 
    errors[fieldName]?.message || state.errors?.[fieldName]?.[0];

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Ponte en Contacto</CardTitle>
        <CardDescription>
          ¿Tienes preguntas o quieres saber más? Completa el formulario a continuación.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" {...register('name')} placeholder="Juan Pérez" aria-invalid={!!getFieldError('name')} />
            {getFieldError('name') && <p className="text-sm text-destructive mt-1">{getFieldError('name')}</p>}
          </div>

          <div>
            <Label htmlFor="email">Dirección de Correo Electrónico</Label>
            <Input id="email" type="email" {...register('email')} placeholder="juan.perez@ejemplo.com" aria-invalid={!!getFieldError('email')} />
            {getFieldError('email') && <p className="text-sm text-destructive mt-1">{getFieldError('email')}</p>}
          </div>

          <div>
            <Label htmlFor="subject">Asunto</Label>
            <Input id="subject" {...register('subject')} placeholder="Consulta sobre entradas" aria-invalid={!!getFieldError('subject')} />
            {getFieldError('subject') && <p className="text-sm text-destructive mt-1">{getFieldError('subject')}</p>}
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" {...register('message')} placeholder="Tu mensaje aquí..." rows={5} aria-invalid={!!getFieldError('message')} />
            {getFieldError('message') && <p className="text-sm text-destructive mt-1">{getFieldError('message')}</p>}
          </div>
          
          <SubmitButton />
          
        </form>
      </CardContent>
    </Card>
  );
}
