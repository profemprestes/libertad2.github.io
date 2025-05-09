import { HistoryTimeline } from '@/components/club/history-timeline';
import { SectionTitle } from '@/components/shared/section-title';
import { mockHistoricalEvents } from '@/lib/mock-data';
import { BookOpen } from 'lucide-react';
import { HeroHistoria } from '@/components/sections/hero-historia';

export default function HistoryPage() {
  return (
    <div>
      <HeroHistoria />
      <SectionTitle 
        title="Línea de Tiempo Detallada" 
        icon={BookOpen}
        description="Viaja a través de los momentos decisivos del Club Atlético Libertad, desde sus humildes comienzos hasta sus mayores triunfos."
        className="pt-12" // Add padding top to separate from HeroHistoria
        id="linea-tiempo"
      />
      <HistoryTimeline events={mockHistoricalEvents} />
    </div>
  );
}
