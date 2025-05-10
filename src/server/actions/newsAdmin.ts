
"use server";

import { z } from "zod";
import type { NewsArticle } from "@/types";

// Schema for validating incoming form data
const newsArticleActionSchema = z.object({
  id: z.string().min(1, "ID es requerido"), // ID is now required
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
    id: formData.get("id") as string, // Ensure ID is captured
    title: formData.get("title") as string,
    date: formData.get("date") as string, // Keep as string for now, convert later if needed
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
    id: validatedFields.data.id, // Use validated ID
    title: validatedFields.data.title,
    date: new Date(validatedFields.data.date).toISOString(), // Convert to ISO string
    summary: validatedFields.data.summary,
    imageUrl: validatedFields.data.imageUrl || undefined, // Ensure empty string becomes undefined
    content: validatedFields.data.content,
    category: validatedFields.data.category || undefined,
    author: validatedFields.data.author || undefined,
  };

  // --- SIMULATION: In a real app, this is where you'd save to a DB or write to a file on the server ---
  console.log("Simulating saving news article to data source:");
  console.log(newArticle);
  // For demonstration, we'll just log it.
  // To actually update `noticias-data.ts` would require server-side file system access,
  // which is complex and generally not recommended for typical Next.js deployments on platforms like Vercel/Netlify.
  // A proper backend/CMS/database would be used here.
  // --- END SIMULATION ---

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For now, let's assume success if validation passes.
  // In a real scenario, you'd check the result of the save operation.
  return {
    message: `Noticia "${newArticle.title}" guardada con éxito (simulado).`,
    status: "success",
    articleId: newArticle.id,
  };
}
