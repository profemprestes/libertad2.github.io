'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { FileText, Copy, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  elementType: string;
  elementName: string;
  elementDescription: string;
}

interface FormErrors {
  elementType?: string;
  elementName?: string;
  elementDescription?: string;
}

export default function PromptGeneratorPage() {
  const [formData, setFormData] = useState<FormData>({
    elementType: '',
    elementName: '',
    elementDescription: '',
  });
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.elementType.trim()) {
      newErrors.elementType = 'El tipo de elemento es obligatorio.';
    }
    if (!formData.elementName.trim()) {
      newErrors.elementName = 'El nombre del nuevo elemento es obligatorio.';
    }
    if (!formData.elementDescription.trim()) {
      newErrors.elementDescription = 'La descripción detallada es obligatoria.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGeneratePrompt = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: 'Error de Validación',
        description: 'Por favor, completa todos los campos obligatorios.',
        variant: 'destructive',
      });
      return;
    }

    const promptTemplate = `Crea un nuevo [${formData.elementType}] llamado [${formData.elementName}]. Este [${formData.elementType.toLowerCase()}] debe [${formData.elementDescription}].
Para asegurar la correcta integración y consistencia con el proyecto, sigue estos pasos:

1.  **Consulta:** Primero, indica en qué archivo existente del proyecto debo importar o utilizar este nuevo elemento.

2.  **Análisis de Dependencias:** Analiza el código del nuevo elemento para identificar si requiere dependencias adicionales. Revisa la configuración general del proyecto (package.json y otros archivos de configuración) para determinar si estas dependencias ya están instaladas. Si no lo están, indica qué dependencias deben ser añadidas y su propósito.

3.  **Estilos:** Asegúrate de que el nuevo elemento se integre visualmente con el resto del proyecto. Revisa los archivos tailwind.config.ts y src/app/globals.css para entender el tema de colores, tipografía y estilos existentes. Utiliza EXCLUSIVAMENTE las clases de utilidad de Tailwind CSS y las variables CSS globales para dar estilo al nuevo elemento.

4.  **Creación e Integración:** Una vez que tengas la información sobre la ubicación de la importación, las dependencias y los estilos, crea el archivo en el directorio adecuado (siguiendo la estructura del proyecto) e inserta la importación y uso del nuevo elemento en el archivo especificado.

5.  **Documentación:** Incluye comentarios en el código para explicar las decisiones tomadas y la funcionalidad del nuevo elemento.

Recuerda priorizar la modularidad, la reutilización de código y la consistencia con el estilo general del proyecto.`;

    setGeneratedPrompt(promptTemplate);
  };

  const handleCopyPrompt = async () => {
    if (!generatedPrompt) {
      toast({
        title: 'Nada que copiar',
        description: 'Primero genera un prompt.',
        variant: 'destructive',
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: 'Prompt Copiado',
        description: 'El prompt ha sido copiado al portapapeles.',
      });
    } catch (err) {
      console.error('Error al copiar el prompt: ', err);
      toast({
        title: 'Error al Copiar',
        description: 'No se pudo copiar el prompt al portapapeles.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle
        title="Generador de Prompts Técnicos"
        icon={FileText}
        description="Crea prompts estructurados para tareas de desarrollo de manera rápida y sencilla."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Definir Elemento</CardTitle>
            <CardDescription>Completa los detalles para generar tu prompt técnico.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGeneratePrompt} className="space-y-6">
              <div>
                <Label htmlFor="elementType" className="text-foreground">Tipo de Elemento</Label>
                <Input
                  id="elementType"
                  name="elementType"
                  value={formData.elementType}
                  onChange={handleChange}
                  placeholder="Ej: componente, sección, archivo de datos"
                  className="mt-1"
                  aria-invalid={!!errors.elementType}
                />
                {errors.elementType && <p className="text-sm text-destructive mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.elementType}</p>}
              </div>

              <div>
                <Label htmlFor="elementName" className="text-foreground">Nombre del Nuevo Elemento</Label>
                <Input
                  id="elementName"
                  name="elementName"
                  value={formData.elementName}
                  onChange={handleChange}
                  placeholder="Ej: HeroBanner, ProductCard, userData.ts"
                  className="mt-1"
                  aria-invalid={!!errors.elementName}
                />
                {errors.elementName && <p className="text-sm text-destructive mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.elementName}</p>}
              </div>

              <div>
                <Label htmlFor="elementDescription" className="text-foreground">Descripción Detallada</Label>
                <Textarea
                  id="elementDescription"
                  name="elementDescription"
                  value={formData.elementDescription}
                  onChange={handleChange}
                  placeholder="Describe la funcionalidad, contenido, y cualquier detalle relevante..."
                  className="mt-1"
                  rows={5}
                  aria-invalid={!!errors.elementDescription}
                />
                {errors.elementDescription && <p className="text-sm text-destructive mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.elementDescription}</p>}
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <FileText className="mr-2 h-4 w-4" /> Generar Prompt
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Generated Prompt Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Prompt Generado</CardTitle>
            <CardDescription>Copia y utiliza este prompt para tus tareas.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              id="generatedPrompt"
              value={generatedPrompt}
              readOnly
              placeholder="Aquí aparecerá tu prompt generado..."
              className="min-h-[280px] bg-muted/50 text-sm"
              aria-label="Prompt generado"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleCopyPrompt} variant="outline" className="w-full" disabled={!generatedPrompt}>
              <Copy className="mr-2 h-4 w-4" /> Copiar Prompt al Portapapeles
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
