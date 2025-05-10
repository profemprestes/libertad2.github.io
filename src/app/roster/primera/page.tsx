
import type { Metadata } from 'next';
import Link from 'next/link';
import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Plantel Principal - Club Atlético Libertad',
  description: 'Conoce a los jugadores y el cuerpo técnico del plantel principal del Club Atlético Libertad.',
  keywords: ['plantel principal libertad', 'primera división club libertad', 'jugadores libertad canelones', 'equipo principal libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/roster/primera',
  },
  openGraph: {
    title: 'Plantel Principal - Club Atlético Libertad',
    description: 'Conoce a los jugadores y el cuerpo técnico del plantel principal.',
    url: `${SITE_URL}/roster/primera`,
    images: [
      {
        url: `${SITE_URL}/tienda/plantel1.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Plantel Principal del Club Atlético Libertad',
      },
    ],
  },
};

export default function PrimeraRosterPage() {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/roster">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Planteles
          </Link>
        </Button>
      </div>
      <SectionTitle 
        title="Plantel Principal" 
        icon={Users}
        description="Detalle de jugadores y cuerpo técnico del primer equipo del Decano del Fútbol Canario."
      />
      <TeamRoster players={mockPlayers} />
    </div>
  );
}