import type { Metadata } from 'next';
import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users } from 'lucide-react';
import { HeroEquipo } from '@/components/sections/HeroEquipo';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Plantilla del Equipo - Club Atlético Libertad',
  description: 'Conoce a los jugadores y el cuerpo técnico que forman parte del Club Atlético Libertad. Perfiles, números y más información sobre nuestro equipo.',
  keywords: ['plantilla club libertad', 'jugadores club libertad', 'equipo libertad canelones', 'cuerpo técnico libertad', 'fútbol Canelones plantilla'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/roster',
  },
  openGraph: {
    title: 'Plantilla del Equipo - Club Atlético Libertad',
    description: 'Conoce a los jugadores y el cuerpo técnico del Club Atlético Libertad.',
    url: `${SITE_URL}/roster`,
    images: [
      {
        url: `${SITE_URL}/LogoLibertad.png`, 
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
      {
        url: `${SITE_URL}/tienda/plantel1.jpg`, // Updated OG image
        width: 1200,
        height: 630,
        alt: 'Plantel del Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    title: 'Plantilla del Equipo - Club Atlético Libertad',
    description: 'Conoce a los jugadores y el cuerpo técnico del Club Atlético Libertad.',
    images: [`${SITE_URL}/tienda/plantel1.jpg`], // Updated Twitter image
  },
};

export default function RosterPage() {
  return (
    <div>
      <HeroEquipo />
      <SectionTitle 
        id="plantel-completo" // Added ID for anchor link from HeroEquipo
        title="Plantel Completo" 
        icon={Users}
        description="Detalle de jugadores y cuerpo técnico del Decano del Fútbol Canario."
        className="pt-12" // Add padding top to separate from HeroEquipo
      />
      <TeamRoster players={mockPlayers} />
    </div>
  );
}
