
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Loader2, Send } from 'lucide-react';
import type { NewsArticle } from '@/types';
import { saveNewsArticleAction, type SaveNewsArticleState } from '@/server/actions/newsAdmin';
import { useActionState, useEffect, useTransition } from 'react'; // Added useTransition

const newsArticleSchema = z.object({
  id: z.string().optional(), 
  title: z.string().min(5, { message: "El título debe tener al menos 5 caracteres." }),
  date: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Fecha inválida." }),
  summary: z.string().min(10, { message: "El resumen debe tener al menos 10 caracteres." }).max(300, "El resumen no debe exceder los 300 caracteres."),
  imageUrl: z.string().url({ message: "Por favor, introduce una URL de imagen válida." }).optional().or(z.literal('')),
  content: z.string().min(20, { message: "El contenido debe tener al menos 20 caracteres." }),
  category: z.string().min(3, { message: "La categoría debe tener al menos 3 caracteres." }).optional().or(z.literal('')),
  author: z.string().min(3, { message: "El autor debe tener al menos 3 caracteres." }).optional().or(z.literal('')),
});

export type NewsArticleFormData = z.infer<typeof newsArticleSchema>;

const initialState: SaveNewsArticleState = {
  message: '',
  status: 'idle',
};

export function NewsArticleForm() {
  const [serverState, formAction] = useActionState(saveNewsArticleAction, initialState);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<NewsArticleFormData>({
    resolver: zodResolver(newsArticleSchema),
    defaultValues: {
        date: new Date().toISOString().split('T')[0], 
        imageUrl: '',
        category: '',
        author: 'Departamento de Prensa C.A.L.',
    }
  });
  
  useEffect(() => {
     setValue('date', new Date().toISOString().split('T')[0]);
  }, [setValue]);

  useEffect(() => {
    if (serverState.status === 'success') {
      toast({
        title: '¡Noticia Guardada!',
        description: serverState.message,
      });
      reset({ 
        date: new Date().toISOString().split('T')[0], 
        author: 'Departamento de Prensa C.A.L.', 
        title: '', 
        summary: '', 
        imageUrl: '', 
        content: '', 
        category: '' 
      });
    } else if (serverState.status === 'error') {
      toast({
        title: 'Error al Guardar',
        description: serverState.message,
        variant: 'destructive',
      });
    }
  }, [serverState, toast, reset]);

  const processForm = (data: NewsArticleFormData) => {
    const formDataToSubmit = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            formDataToSubmit.append(key, String(value));
        }
    });
    
    if (!formDataToSubmit.has('id') || !formDataToSubmit.get('id')) {
        formDataToSubmit.set('id', `noticia-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`);
    }
    
    startTransition(() => {
        formAction(formDataToSubmit);
    });
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center">
          <PlusCircle className="mr-3 h-7 w-7" /> Crear/Editar Noticia
        </CardTitle>
        <CardDescription>
          Completa los campos para agregar una nueva noticia al sitio web.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(processForm)} className="space-y-6">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" {...register('title')} placeholder="Título de la noticia" aria-invalid={!!errors.title} />
            {errors.title && <p className="text-sm text-destructive mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <Label htmlFor="date">Fecha</Label>
            <Input id="date" type="date" {...register('date')} aria-invalid={!!errors.date} />
            {errors.date && <p className="text-sm text-destructive mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <Label htmlFor="summary">Resumen (máx. 300 caracteres)</Label>
            <Textarea id="summary" {...register('summary')} placeholder="Breve resumen de la noticia..." rows={3} aria-invalid={!!errors.summary} />
            {errors.summary && <p className="text-sm text-destructive mt-1">{errors.summary.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="imageUrl">URL de la Imagen (Opcional)</Label>
            <Input id="imageUrl" {...register('imageUrl')} placeholder="https://ejemplo.com/imagen.jpg" aria-invalid={!!errors.imageUrl}/>
            {errors.imageUrl && <p className="text-sm text-destructive mt-1">{errors.imageUrl.message}</p>}
          </div>

          <div>
            <Label htmlFor="content">Contenido Completo</Label>
            <Textarea id="content" {...register('content')} placeholder="Escribe el contenido completo de la noticia aquí..." rows={10} aria-invalid={!!errors.content}/>
            {errors.content && <p className="text-sm text-destructive mt-1">{errors.content.message}</p>}
          </div>

          <div>
            <Label htmlFor="category">Categoría (Opcional)</Label>
            <Input id="category" {...register('category')} placeholder="Ej: Primer Equipo, Fichajes, Formativas" aria-invalid={!!errors.category} />
            {errors.category && <p className="text-sm text-destructive mt-1">{errors.category.message}</p>}
          </div>

          <div>
            <Label htmlFor="author">Autor (Opcional)</Label>
            <Input id="author" {...register('author')} placeholder="Ej: Departamento de Prensa C.A.L." aria-invalid={!!errors.author}/>
            {errors.author && <p className="text-sm text-destructive mt-1">{errors.author.message}</p>}
          </div>
          
          <Button type="submit" disabled={isPending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Guardar Noticia
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
