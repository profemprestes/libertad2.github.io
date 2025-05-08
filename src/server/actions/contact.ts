"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Falló la validación. Por favor, revisa tus datos.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email or save to a database here.
  console.log("Formulario de contacto enviado:");
  console.log("Nombre:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Asunto:", validatedFields.data.subject);
  console.log("Mensaje:", validatedFields.data.message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    status: "success",
  };
}
