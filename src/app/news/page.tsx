import { NewsFeed } from '@/components/club/news-feed';
import { SectionTitle } from '@/components/shared/section-title';
import { mockNewsArticles } from '@/lib/mock-data';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <div>
      <SectionTitle 
        title="Latest Club News" 
        icon={Newspaper}
        description="Stay informed with the latest updates, announcements, and stories from Club Atlético Libertad."
      />
      <NewsFeed articles={mockNewsArticles} />
    </div>
  );
}
