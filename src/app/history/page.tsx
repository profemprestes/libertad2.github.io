import { HistoryTimeline } from '@/components/club/history-timeline';
import { SectionTitle } from '@/components/shared/section-title';
import { mockHistoricalEvents } from '@/lib/mock-data';
import { BookOpen } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div>
      <SectionTitle 
        title="Our Glorious History" 
        icon={BookOpen}
        description="Journey through the defining moments of Club Atlético Libertad, from its humble beginnings to its greatest triumphs."
      />
      <HistoryTimeline events={mockHistoricalEvents} />
    </div>
  );
}
