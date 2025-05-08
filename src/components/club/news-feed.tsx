import { NewsCard } from '@/components/club/news-card';
import type { NewsArticle } from '@/types';

interface NewsFeedProps {
  articles: NewsArticle[];
}

export function NewsFeed({ articles }: NewsFeedProps) {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-muted-foreground">No hay artículos de noticias para mostrar.</p>;
  }

  // Sort articles by date, newest first
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedArticles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
