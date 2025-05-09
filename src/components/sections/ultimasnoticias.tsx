import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NewsArticle } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react';
import { noticias as allNoticias } from '@/lib/noticias-data';

interface UltimasNoticiasProps {
  limit?: number;
  showViewAllLink?: boolean;
}

export const UltimasNoticias: FC<UltimasNoticiasProps> = ({ limit, showViewAllLink = true }) => {
  const sortedNoticias = [...allNoticias].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const noticiasToShow = limit ? sortedNoticias.slice(0, limit) : sortedNoticias;

  if (!noticiasToShow || noticiasToShow.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-muted-foreground">No hay noticias disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticiasToShow.map((noticia) => {
          const newsDate = new Date(noticia.date);
          // Ensure date formatting is consistent or handled client-side post-hydration if issues arise
          const formattedDate = newsDate.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <Card key={noticia.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
              {noticia.imageUrl && (
                <div className="relative aspect-video w-full">
                  <Image
                    src={noticia.imageUrl}
                    alt={noticia.title}
                    fill
                    className="object-cover"
                    data-ai-hint="news event"
                  />
                </div>
              )}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-primary line-clamp-2 h-14">{noticia.title}</CardTitle>
                <div className="flex items-center text-xs text-muted-foreground space-x-2 pt-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{formattedDate}</span>
                  {noticia.category && (
                    <>
                      <span className="mx-1">•</span>
                      <Tag className="h-3.5 w-3.5" />
                      <span>{noticia.category}</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <CardDescription className="text-sm line-clamp-3">{noticia.summary}</CardDescription>
              </CardContent>
              <CardFooter className="pt-3">
                <Button asChild variant="link" className="text-primary p-0 hover:text-accent group">
                  <Link href={`/noticias/${noticia.id}`}>
                    Ver Más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {showViewAllLink && allNoticias.length > (limit || 0) && allNoticias.length > noticiasToShow.length && (
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/noticias">
              Ver Todas las Noticias <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
