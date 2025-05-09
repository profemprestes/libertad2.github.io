import type { Metadata } from 'next';
import { HistoryTimeline } from '@/components/club/history-timeline';
import { SectionTitle } from '@/components/shared/section-title';
import { mockHistoricalEvents } from '@/lib/mock-data';
import { BookOpen } from 'lucide-react';
import { HeroHistoria } from '@/components/sections/hero-historia';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  title: 'Nuestra Historia',
  description: 'Explora la rica historia del Club Atlético Libertad desde su fundación en 1906. Descubre los momentos clave, logros y el legado del Decano del Fútbol Canario.',
  keywords: ['historia club libertad', 'fundación club libertad', 'logros club libertad', 'cronología club libertad', 'decano canario'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    title: 'Nuestra Historia - Club Atlético Libertad',
    description: 'Explora la rica historia del Club Atlético Libertad desde su fundación en 1906.',
    url: `${SITE_URL}/history`,
    images: [
      {
        url: '/tienda/formatiivas1.jpg', // Use a relevant image if available, fallback to logo
        width: 1200,
        height: 630,
        alt: 'Imagen histórica del Club Atlético Libertad',
      },
       {
        url: '/LogoLibertad.png',
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    title: 'Nuestra Historia - Club Atlético Libertad',
    description: 'Explora la rica historia del Club Atlético Libertad.',
    images: [`${SITE_URL}/tienda/formatiivas1.jpg`],
  },
};


export default function HistoryPage() {
  return (
    <div>
      <HeroHistoria />
      <SectionTitle 
        title="Línea de Tiempo Detallada" 
        icon={BookOpen}
        description="Viaja a través de los momentos decisivos del Club Atlético Libertad, desde sus humildes comienzos hasta sus mayores triunfos."
        className="pt-12" 
        id="linea-tiempo"
      />
      <HistoryTimeline events={mockHistoricalEvents} />
    </div>
  );
}

