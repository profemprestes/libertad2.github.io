import { HistoryTimeline } from '@/components/club/history-timeline';
import { SectionTitle } from '@/components/shared/section-title';
import { mockHistoricalEvents } from '@/lib/mock-data';
import { BookOpen } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div>
      <SectionTitle 
        title="Nuestra Gloriosa Historia" 
        icon={BookOpen}
        description="Viaja a través de los momentos decisivos del Club Atlético Libertad, desde sus humildes comienzos hasta sus mayores triunfos."
      />
      <HistoryTimeline events={mockHistoricalEvents} />
    </div>
  );
}
