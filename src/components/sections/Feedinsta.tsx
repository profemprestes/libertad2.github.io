'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/shared/section-title';
import { motion } from 'framer-motion';

// Placeholder data for Instagram posts
const mockPosts = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/seed/insta1/400/400',
    caption: '¡Gran victoria hoy! El equipo lo dio todo en la cancha. #Libertad #Futbol',
    link: 'https://www.instagram.com/decanocanario',
    imageHint: 'soccer match celebration',
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/seed/insta2/400/400',
    caption: 'Entrenamiento intenso preparándonos para el próximo desafío. ¡Vamos Decano! 🔴⚪',
    link: 'https://www.instagram.com/decanocanario',
    imageHint: 'soccer training session',
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/seed/insta3/400/400',
    caption: 'Gracias a toda la hinchada por el apoyo incondicional. ¡Ustedes son nuestra fuerza!',
    link: 'https://www.instagram.com/decanocanario',
    imageHint: 'fans cheering stadium',
  },
  {
    id: '4',
    imageUrl: 'https://picsum.photos/seed/insta4/400/400',
    caption: 'Recordando momentos gloriosos de nuestra historia. #DecanoCanario #HistoriaLibertad',
    link: 'https://www.instagram.com/decanocanario',
    imageHint: 'vintage soccer photo',
  },
];

export function Feedinsta() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Síguenos en Instagram"
          icon={Instagram}
          description="Descubre nuestras últimas publicaciones, momentos detrás de escena y más sobre el Club Atlético Libertad."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-card">
                <div className="relative aspect-square w-full">
                  <Image
                    src={post.imageUrl}
                    alt={`Publicación de Instagram ${post.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={post.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 hover:opacity-100 transition-opacity duration-300">
                     <div className="absolute bottom-2 right-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm"
                            aria-label="Ver en Instagram"
                        >
                            <Link href={post.link} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.caption}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    {/* Optional: Add like/comment count mock if needed */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="https://www.instagram.com/decanocanario" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" /> Ver Perfil en Instagram <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          *Las publicaciones mostradas son representativas. Visita nuestro perfil oficial para ver el contenido más reciente.
        </p>
      </div>
    </section>
  );
}
