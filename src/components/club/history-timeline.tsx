import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { HistoricalEvent } from '@/types';
import { CalendarIcon } from 'lucide-react';

interface HistoryTimelineProps {
  events: HistoricalEvent[];
}

export function HistoryTimeline({ events }: HistoryTimelineProps) {
  if (!events || events.length === 0) {
    return <p className="text-center text-muted-foreground">No historical events to display.</p>;
  }

  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
      {events.map((event, index) => (
        <div 
          key={event.id} 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <CalendarIcon className="h-5 w-5 text-primary" />
          </div>

          {/* Card */}
          <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-primary">{event.title}</CardTitle>
              <CardDescription className="font-semibold text-lg text-foreground">{event.year}</CardDescription>
            </CardHeader>
            <CardContent>
              {event.imageUrl && (
                <div className="mb-4 relative aspect-video rounded-md overflow-hidden">
                  <Image 
                    src={event.imageUrl} 
                    alt={event.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    data-ai-hint="historical event" 
                  />
                </div>
              )}
              <p className="text-muted-foreground">{event.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
