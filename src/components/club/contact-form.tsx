"use client";

import { useState, type FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit: handleFormSubmit, // Renamed to avoid conflict with the new handleSubmit
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData, event?: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);

    const myForm = event?.target as HTMLFormElement;
    const formData = new FormData(myForm);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: '¡Mensaje Enviado!',
          description: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
        });
        reset();
      } else {
        const errorData = await response.text();
        toast({
          title: 'Error al Enviar',
          description: `Hubo un problema al enviar tu mensaje. ${errorData || ''}`,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error de Red',
        description: "No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Ponte en Contacto</CardTitle>
        <CardDescription>
          ¿Tienes preguntas o quieres saber más? Completa el formulario a continuación.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* The form needs a name for Netlify and data-netlify attribute */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleFormSubmit(onSubmit)} // Use react-hook-form's handleSubmit
          className="space-y-6"
        >
          {/* Netlify needs this hidden input for JavaScript-rendered forms */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <Label htmlFor="name">Nombre Completo</Label>
            <Input 
              id="name" 
              {...register('name')} 
              name="name" // Ensure name attribute for Netlify
              placeholder="Juan Pérez" 
              aria-invalid={!!errors.name} 
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Dirección de Correo Electrónico</Label>
            <Input 
              id="email" 
              type="email" 
              {...register('email')} 
              name="email" // Ensure name attribute for Netlify
              placeholder="juan.perez@ejemplo.com" 
              aria-invalid={!!errors.email} 
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="subject">Asunto</Label>
            <Input 
              id="subject" 
              {...register('subject')} 
              name="subject" // Ensure name attribute for Netlify
              placeholder="Consulta sobre entradas" 
              aria-invalid={!!errors.subject} 
            />
            {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea 
              id="message" 
              {...register('message')} 
              name="message" // Ensure name attribute for Netlify
              placeholder="Tu mensaje aquí..." 
              rows={5} 
              aria-invalid={!!errors.message} 
            />
            {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
              </>
            ) : (
              <>
                Enviar Mensaje <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
