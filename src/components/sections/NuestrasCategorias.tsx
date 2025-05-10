
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Users, ArrowRight, Shield, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface CategoriaItem {
  id: string;
  nombre: string;
  descripcion: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  icon: React.ElementType;
}

const categorias: CategoriaItem[] = [
  {
    id: 'primera',
    nombre: 'Primera División',
    descripcion: 'El equipo principal compitiendo al más alto nivel en la liga local. Garra, pasión y experiencia.',
    imageUrl: 'https://picsum.photos/seed/primeraEquipo/600/400',
    imageHint: 'soccer team action',
    link: '/roster/primera', 
    icon: Shield,
  },
  {
    id: 'sub20',
    nombre: 'Categoría Sub-20',
    descripcion: 'Jóvenes promesas puliendo su talento y preparándose para el salto al primer equipo. Futuro y proyección.',
    imageUrl: 'https://picsum.photos/seed/sub20Equipo/600/400',
    imageHint: 'youth soccer team',
    link: '/roster/sub20',
    icon: Zap,
  },
  {
    id: 'sub15',
    nombre: 'Categoría Sub-15',
    descripcion: 'La base de nuestro club. Formando jugadores con los valores y la identidad de Libertad. Semillero de cracks.',
    imageUrl: 'https://picsum.photos/seed/sub15Equipo/600/400',
    imageHint: 'young soccer players',
    link: '/roster/sub15',
    icon: BarChart3,
  },
];

export function NuestrasCategorias() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <Users className="h-12 w-12 mx-auto text-primary mb-3" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Nuestras Categorías
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde la formación de jóvenes talentos hasta la competencia en la élite, el Club Atlético Libertad se enorgullece de todas sus divisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categorias.map((categoria) => (
            <Card key={categoria.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full bg-card">
              <div className="relative w-full h-56">
                <Image
                  src={categoria.imageUrl}
                  alt={`Imagen de la categoría ${categoria.nombre}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={categoria.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                   <categoria.icon className="h-8 w-8 text-accent mb-1 drop-shadow-md" />
                  <CardTitle className="text-2xl font-bold text-primary-foreground drop-shadow-lg">{categoria.nombre}</CardTitle>
                </div>
              </div>
              <CardContent className="p-5 flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{categoria.descripcion}</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                 <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <Link href={categoria.link}>
                    Ver Plantel <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}