import { noticias } from '@/lib/noticias-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLdScript, generateNewsArticleData } from '@/lib/json-ld';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

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
      alternates: {
        canonical: `${SITE_URL}/news`,
      }
    };
  }

  const imageUrl = noticia.imageUrl 
    ? (noticia.imageUrl.startsWith('http') ? noticia.imageUrl : `${SITE_URL}${noticia.imageUrl}`) 
    : `${SITE_URL}/LogoLibertad.png`;
  
  const pageUrl = `${SITE_URL}/news/${noticia.id}`;

  return {
    title: `${noticia.title} - Club Atlético Libertad`,
    description: noticia.summary,
    keywords: [noticia.title, 'Club Atlético Libertad', 'noticias', noticia.category || 'fútbol', 'Decano Canario'],
    authors: [{ name: noticia.author || 'Club Atlético Libertad', url: SITE_URL }],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${noticia.title} - Club Atlético Libertad`,
      description: noticia.summary,
      url: pageUrl,
      type: 'article',
      publishedTime: noticia.date,
      authors: [noticia.author || 'Club Atlético Libertad'],
      images: [
        {
          url: imageUrl,
          alt: noticia.title,
          width: noticia.imageUrl ? 1200 : 512, 
          height: noticia.imageUrl ? 630 : 512,
        },
      ],
      siteName: 'Club Atlético Libertad',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${noticia.title} - Club Atlético Libertad`,
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

  const newsArticleSchema = generateNewsArticleData(noticia);

  return (
    <>
      <JsonLdScript data={newsArticleSchema} />
      <div className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <Button asChild variant="outline" className="mb-6 group">
            <Link href="/noticias">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Todas las Noticias
            </Link>
          </Button>
        </header>

        <article>
          <Card className="shadow-xl overflow-hidden">
            {noticia.imageUrl && (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={noticia.imageUrl}
                    alt={noticia.title} 
                    fill
                    className="object-cover"
                    data-ai-hint="news main image"
                    priority 
                  />
                </div>
              )}
            <CardHeader className="p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                {noticia.title}
              </h1>
              <div className="flex items-center text-sm text-muted-foreground space-x-2 pt-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={noticia.date}>{formattedDate}</time>
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
              <div className="prose prose-lg max-w-none text-foreground space-y-4 dark:prose-invert">
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
        </article>
      </div>
    </>
  );
}

    
