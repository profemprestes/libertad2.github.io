import { NewsFeed } from '@/components/club/news-feed';
import { SectionTitle } from '@/components/shared/section-title';
import { mockNewsArticles } from '@/lib/mock-data';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <div>
      <SectionTitle 
        title="Últimas Noticias del Club" 
        icon={Newspaper}
        description="Mantente informado con las últimas actualizaciones, anuncios e historias del Club Atlético Libertad."
      />
      <NewsFeed articles={mockNewsArticles} />
    </div>
  );
}
