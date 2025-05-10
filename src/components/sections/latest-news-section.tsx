
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Newspaper } from 'lucide-react';
import { noticias as allNoticias } from '@/lib/noticias-data'; 
import { SectionTitle } from '@/components/shared/section-title';

export function LatestNewsSection() {
  // Sort news by date to get the latest ones
  const sortedNews = [...allNoticias].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestNews = sortedNews.slice(0, 2);

  return (
    <section>
      <SectionTitle title="Últimas Noticias" icon={Newspaper} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1"> {/* On lg, stack news for better readability on home */}
        {latestNews.map((article) => (
          <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {article.imageUrl && (
              <div className="w-full md:w-1/3 aspect-video relative"> {/* Changed to aspect-video and adjusted width classes */}
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint="sports news"
                />
              </div>
            )}
            <div className="md:w-2/3 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {/* Link to the specific news article page */}
                  <Link href={`/news/${article.id}`}>{article.title}</Link>
                </CardTitle>
                <CardDescription>{new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{article.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0">
                  {/* Link to the specific news article page */}
                  <Link href={`/news/${article.id}`}>
                    Leer Más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/news">
            Todas las Noticias <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

