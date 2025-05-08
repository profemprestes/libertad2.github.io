import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { NewsArticle } from '@/types';
import { ArrowRight, Tag } from 'lucide-react'; // Added Tag icon for category
import { Badge } from '@/components/ui/badge';

interface NewsCardProps {
  article: NewsArticle;
}

const getCategoryInSpanish = (category: NewsArticle['category']): string => {
  switch (category) {
    case 'Club News': return 'Noticias del Club';
    case 'Match Report': return 'Crónica del Partido';
    case 'Transfer': return 'Fichaje';
    case 'Community': return 'Comunidad';
    default: return category;
  }
};

export function NewsCard({ article }: NewsCardProps) {
  const articleDate = new Date(article.date);

  return (
    <Card id={article.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {article.imageUrl && (
        <div className="relative h-56 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint="news article"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-center mb-1">
          <CardDescription className="text-xs">
            {articleDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </CardDescription>
          <Badge variant="secondary" className="text-xs">
            <Tag className="mr-1 h-3 w-3" /> {getCategoryInSpanish(article.category)}
          </Badge>
        </div>
        <CardTitle className="text-xl lg:text-2xl hover:text-primary transition-colors">
          {/* If full content exists, link to a dedicated page, otherwise anchor on current page */}
          {article.content ? (
            <Link href={`/news/${article.id}`}>{article.title}</Link>
          ) : (
            article.title
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">{article.summary}</p>
      </CardContent>
      <CardFooter>
        {article.content ? (
          <Button variant="default" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            <Link href={`/news/${article.id}`}>
              Leer Historia Completa <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
           <span className="text-sm text-muted-foreground italic">Solo resumen</span>
        )}
      </CardFooter>
    </Card>
  );
}
