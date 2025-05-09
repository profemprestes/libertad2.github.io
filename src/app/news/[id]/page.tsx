import { noticias } from '@/lib/noticias-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    id: noticia.id,
  }));
}

interface NewsDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const noticia = noticias.find((n) => n.id === params.id);
  if (!noticia) {
    return {
      title: 'Noticia no encontrada',
    };
  }
  return {
    title: `${noticia.title} | Club Libertad`,
    description: noticia.extract,
  };
}


export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const noticia = noticias.find((n) => n.id === params.id);

  if (!noticia) {
    notFound();
  }

  const newsDate = new Date(noticia.date);
  const formattedDate = newsDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
         <Button asChild variant="outline" className="mb-6 group">
          <Link href="/noticias">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Todas las Noticias
          </Link>
        </Button>
      </header>

      <Card className="shadow-xl overflow-hidden">
        {noticia.imageUrl && (
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={noticia.imageUrl}
                alt={noticia.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint="news main image"
              />
            </div>
          )}
        <CardHeader className="p-6">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
            {noticia.title}
          </CardTitle>
          <div className="flex items-center text-sm text-muted-foreground space-x-2 pt-2">
            <CalendarDays className="h-4 w-4" />
            <span>{formattedDate}</span>
            {noticia.category && (
              <>
                <span className="mx-1">•</span>
                <Tag className="h-4 w-4" />
                <span>{noticia.category}</span>
              </>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="text-lg text-foreground space-y-4">
            {noticia.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
         <CardFooter className="p-6 pt-2">
             <Button asChild variant="link" className="text-primary p-0 hover:text-accent group">
                <Link href="/noticias">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Volver a Noticias
                </Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
