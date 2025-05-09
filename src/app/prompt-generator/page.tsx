
'use client';

import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { FileText, Copy, AlertCircle, LogIn, LogOut, ShieldCheck, FolderOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PromptFormData {
  elementType: string;
  elementName: string;
  integrationTarget: string; // Kept as string, will be comma-separated
  elementDescription: string;
}

interface PromptFormErrors {
  elementType?: string;
  elementName?: string;
  // integrationTarget is optional
  elementDescription?: string;
}

const LOGIN_USER = 'LibertadAdmin';
const LOGIN_PASS = 'DecanoCanario';
const SESSION_KEY = 'promptGenSession';

const elementTypes = [
  { value: "componente", label: "Componente" },
  { value: "sección", label: "Sección" },
  { value: "data", label: "Archivo de Datos (data.ts)" },
  { value: "page", label: "Página (page.tsx)" },
];

const commonIntegrationTargets = [
  'src/app/page.tsx',
  'src/app/layout.tsx',
  'src/app/contact/page.tsx',
  'src/app/history/page.tsx',
  'src/app/matches/page.tsx',
  'src/app/news/page.tsx',
  'src/app/roster/page.tsx',
  'src/app/tienda/page.tsx',
  'src/app/cart/page.tsx',
  'src/app/haztesocio/page.tsx',
  'src/components/layout/header.tsx',
  'src/components/layout/footer.tsx',
  // Add other relevant files as needed
];


export default function PromptGeneratorPage() {
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [formData, setFormData] = useState<PromptFormData>({
    elementType: '',
    elementName: '',
    integrationTarget: '',
    elementDescription: '',
  });
  const [selectedIntegrationFiles, setSelectedIntegrationFiles] = useState<string[]>([]);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [formErrors, setFormErrors] = useState<PromptFormErrors>({});
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    if (localStorage.getItem(SESSION_KEY) === 'loggedIn') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === LOGIN_USER && password === LOGIN_PASS) {
      localStorage.setItem(SESSION_KEY, 'loggedIn');
      setIsAuthenticated(true);
      setLoginError('');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof PromptFormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleElementTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, elementType: value }));
    if (formErrors.elementType) {
      setFormErrors(prev => ({ ...prev, elementType: undefined }));
    }
  };

  const handleIntegrationFileChange = (filePath: string, isChecked: boolean) => {
    const newSelection = isChecked
      ? [...selectedIntegrationFiles, filePath]
      : selectedIntegrationFiles.filter(file => file !== filePath);
    setSelectedIntegrationFiles(newSelection);
    setFormData(prev => ({ ...prev, integrationTarget: newSelection.join(', ') }));
  };

  const validateForm = (): boolean => {
    const newErrors: PromptFormErrors = {};
    if (!formData.elementType.trim()) newErrors.elementType = 'El tipo de elemento es obligatorio.';
    if (!formData.elementName.trim()) newErrors.elementName = 'El nombre del nuevo elemento es obligatorio.';
    if (!formData.elementDescription.trim()) newErrors.elementDescription = 'La descripción detallada es obligatoria.';
    setFormErrors(newErrors);
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
    
    let integrationInstruction;
    if (formData.integrationTarget.trim()) {
      integrationInstruction = `Integración Específica: Este [${formData.elementType.toLowerCase()}] debe ser integrado o sus exportaciones utilizadas en el/los siguiente(s) archivo(s): [${formData.integrationTarget.trim()}]. Asegúrate de añadir las importaciones y el uso necesario en dicho(s) archivo(s).`;
    } else {
      integrationInstruction = `Consulta: Primero, indica en qué archivo existente del proyecto debo importar o utilizar este nuevo elemento. Si no se especifica uno, sugiere ubicaciones comunes basadas en el tipo de elemento (ej. páginas principales, layout, etc.).`;
    }

    const promptTemplate = `Crea un nuevo [${formData.elementType}] llamado [${formData.elementName}]. Este [${formData.elementType.toLowerCase()}] debe [${formData.elementDescription}].
Para asegurar la correcta integración y consistencia con el proyecto, sigue estos pasos:

${integrationInstruction}

Análisis de Dependencias: Analiza el código del nuevo elemento para identificar si requiere dependencias adicionales. Revisa la configuración general del proyecto (package.json y otros archivos de configuración) para determinar si estas dependencias ya están instaladas. Si no lo están, indica qué dependencias deben ser añadidas y su propósito.

Estilos: Asegúrate de que el nuevo elemento se integre visualmente con el resto del proyecto. Revisa los archivos tailwind.config.ts y src/app/globals.css para entender el tema de colores, tipografía y estilos existentes. Utiliza EXCLUSIVAMENTE las clases de utilidad de Tailwind CSS y las variables CSS globales para dar estilo al nuevo elemento.

Creación e Integración: Una vez que tengas la información sobre la ubicación de la importación (si no se especificó previamente), las dependencias y los estilos, crea el archivo en el directorio adecuado (siguiendo la estructura del proyecto) e inserta la importación y uso del nuevo elemento en el archivo especificado.

Documentación: Incluye comentarios en el código para explicar las decisiones tomadas y la funcionalidad del nuevo elemento.

Recuerda priorizar la modularidad, la reutilización de código y la consistencia con el estilo general del proyecto.`;
    setGeneratedPrompt(promptTemplate);
  };

  const handleCopyPrompt = async () => {
    if (!generatedPrompt) {
      toast({ title: 'Nada que copiar', description: 'Primero genera un prompt.', variant: 'destructive' });
      return;
    }
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast({ title: 'Prompt Copiado', description: 'El prompt ha sido copiado al portapapeles.' });
    } catch (err) {
      console.error('Error al copiar el prompt: ', err);
      toast({ title: 'Error al Copiar', description: 'No se pudo copiar el prompt.', variant: 'destructive' });
    }
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <p className="text-muted-foreground text-lg">Cargando generador de prompts...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] bg-background p-4">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-2" />
            <CardTitle className="text-2xl font-bold text-primary">Acceso Restringido</CardTitle>
            <CardDescription>Por favor, inicia sesión para acceder al generador de prompts.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Tu nombre de usuario"
                  required
                  className="bg-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Tu contraseña"
                  required
                  className="bg-input"
                />
              </div>
              {loginError && (
                <p className="text-sm text-destructive flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {loginError}
                </p>
              )}
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <SectionTitle
          title="Generador de Prompts Técnicos"
          icon={FileText}
          description="Crea prompts estructurados para tareas de desarrollo de manera rápida y sencilla."
          className="mb-0 text-left" 
          titleClassName="text-3xl lg:text-4xl"
        />
        <Button onClick={handleLogout} variant="outline" className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Definir Elemento</CardTitle>
            <CardDescription>Completa los detalles para generar tu prompt técnico.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGeneratePrompt} className="space-y-6">
              <div>
                <Label htmlFor="elementType" className="text-foreground">Tipo de Elemento</Label>
                <Select
                  value={formData.elementType}
                  onValueChange={handleElementTypeChange}
                  // name="elementType" // Not needed directly for Select, handled by onValueChange
                >
                  <SelectTrigger className="mt-1 w-full" aria-invalid={!!formErrors.elementType} id="elementType">
                    <SelectValue placeholder="Selecciona un tipo de elemento" />
                  </SelectTrigger>
                  <SelectContent>
                    {elementTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formErrors.elementType && <p className="text-sm text-destructive mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{formErrors.elementType}</p>}
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
                  aria-invalid={!!formErrors.elementName}
                />
                {formErrors.elementName && <p className="text-sm text-destructive mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{formErrors.elementName}</p>}
              </div>

              <div>
                <Label htmlFor="integrationTarget" className="text-foreground mb-1 flex items-center">
                  <FolderOpen className="h-4 w-4 mr-2 text-primary" />
                  Archivo(s) de Integración (Opcional)
                </Label>
                <ScrollArea className="mt-1 h-40 w-full rounded-md border p-3 bg-muted/30">
                  <div className="space-y-2">
                    {commonIntegrationTargets.map(filePath => {
                      const uniqueId = `checkbox-${filePath.replace(/[\/\.]/g, '-')}`;
                      return (
                        <div key={uniqueId} className="flex items-center space-x-2">
                          <Checkbox
                            id={uniqueId}
                            checked={selectedIntegrationFiles.includes(filePath)}
                            onCheckedChange={(checked) => handleIntegrationFileChange(filePath, !!checked)}
                          />
                          <Label htmlFor={uniqueId} className="text-sm font-normal text-foreground/80 cursor-pointer">
                            {filePath}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
                <Textarea
                  id="integrationTarget"
                  name="integrationTarget"
                  value={formData.integrationTarget}
                  onChange={handleChange}
                  placeholder="O escribe rutas adicionales separadas por coma si no están en la lista..."
                  className="mt-2"
                  rows={2}
                />
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
                  aria-invalid={!!formErrors.elementDescription}
                />
                {formErrors.elementDescription && <p className="text-sm text-destructive mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{formErrors.elementDescription}</p>}
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <FileText className="mr-2 h-4 w-4" /> Generar Prompt
              </Button>
            </form>
          </CardContent>
        </Card>

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

