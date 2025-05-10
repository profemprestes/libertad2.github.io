
"use server";

import { z } from "zod";
import type { NewsArticle } from "@/types";
import { noticias } from "@/lib/noticias-data"; // Import the noticias array
import { revalidatePath } from "next/cache";

// Schema for validating incoming form data
const newsArticleActionSchema = z.object({
  id: z.string().min(1, "ID es requerido"),
  title: z.string().min(5, "El título debe tener al menos 5 caracteres."),
  date: z.string().refine(val => !isNaN(Date.parse(val)), "Fecha inválida."),
  summary: z.string().min(10, "El resumen debe tener al menos 10 caracteres.").max(300, "El resumen no debe exceder los 300 caracteres."),
  imageUrl: z.string().url("URL de imagen inválida.").optional().or(z.literal('')),
  content: z.string().min(20, "El contenido debe tener al menos 20 caracteres."),
  category: z.string().optional().or(z.literal('')),
  author: z.string().optional().or(z.literal('')),
});

export type SaveNewsArticleState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Partial<Record<keyof NewsArticle, string[]>>;
  articleId?: string;
};

export async function saveNewsArticleAction(
  prevState: SaveNewsArticleState,
  formData: FormData
): Promise<SaveNewsArticleState> {
  
  const rawFormData = {
    id: formData.get("id") as string,
    title: formData.get("title") as string,
    date: formData.get("date") as string,
    summary: formData.get("summary") as string,
    imageUrl: formData.get("imageUrl") as string | undefined,
    content: formData.get("content") as string,
    category: formData.get("category") as string | undefined,
    author: formData.get("author") as string | undefined,
  };

  const validatedFields = newsArticleActionSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Falló la validación. Por favor, revisa los datos del artículo.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const newArticle: NewsArticle = {
    id: validatedFields.data.id,
    title: validatedFields.data.title,
    date: new Date(validatedFields.data.date).toISOString(),
    summary: validatedFields.data.summary,
    imageUrl: validatedFields.data.imageUrl || undefined,
    content: validatedFields.data.content,
    category: validatedFields.data.category || undefined,
    author: validatedFields.data.author || undefined,
  };
  
  const existingArticleIndex = noticias.findIndex(article => article.id === newArticle.id);

  if (existingArticleIndex !== -1) {
    noticias[existingArticleIndex] = newArticle;
    console.log(`Simulating update for article ID: ${newArticle.id}`);
    revalidatePath(`/news/${newArticle.id}`); // Revalidate specific article page
  } else {
    noticias.unshift(newArticle); 
    console.log(`Simulating addition of new article ID: ${newArticle.id}`);
  }
  revalidatePath('/news'); // Always revalidate the news list page
  
  console.log("Current 'noticias' array (in-memory, development only):", noticias.map(n => ({id: n.id, title: n.title.substring(0,20)})));

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: `Noticia "${newArticle.title}" guardada con éxito (simulado en memoria). Los cambios se perderán al reiniciar el servidor.`,
    status: "success",
    articleId: newArticle.id,
  };
}

