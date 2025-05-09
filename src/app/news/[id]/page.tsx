import { noticias } from '@/lib/noticias-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

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
      description: 'La noticia que buscas no está disponible.',
    };
  }

  const imageUrl = noticia.imageUrl ? (noticia.imageUrl.startsWith('http') ? noticia.imageUrl : `${SITE_URL}${noticia.imageUrl}`) : `${SITE_URL}/LogoLibertad.png`;

  return {
    title: noticia.title,
    description: noticia.summary,
    keywords: [noticia.title, 'Club Atlético Libertad', 'noticias', noticia.category || 'fútbol'],
    authors: [{ name: noticia.author || 'Club Atlético Libertad' }],
    openGraph: {
      title: noticia.title,
      description: noticia.summary,
      url: `${SITE_URL}/news/${noticia.id}`,
      type: 'article',
      publishedTime: noticia.date,
      authors: [noticia.author || 'Club Atlético Libertad'],
      images: [
        {
          url: imageUrl,
          alt: noticia.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: noticia.title,
      description: noticia.summary,
      images: [imageUrl],
    },
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
                alt={noticia.title} // Ensuring alt text is descriptive
                layout="fill"
                objectFit="cover"
                data-ai-hint="news main image"
                priority // Prioritize loading for LCP
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
          <article className="prose prose-lg max-w-none text-foreground space-y-4 dark:prose-invert"> {/* Added prose for better article styling */}
            {noticia.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
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

