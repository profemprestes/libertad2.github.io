
import type { Metadata } from 'next';
import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users } from 'lucide-react';
import { HeroEquipo } from '@/components/sections/HeroEquipo';
import { NuestrasCategorias } from '@/components/sections/NuestrasCategorias'; // Import the new component

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Plantilla del Equipo - Club Atlético Libertad',
  description: 'Conoce a los jugadores y el cuerpo técnico que forman parte del Club Atlético Libertad. Perfiles, números y más información sobre nuestro equipo y categorías.',
  keywords: ['plantilla club libertad', 'jugadores club libertad', 'equipo libertad canelones', 'cuerpo técnico libertad', 'fútbol Canelones plantilla', 'sub 15 libertad', 'sub 20 libertad', 'primera división libertad'],
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
        url: `${SITE_URL}/tienda/plantel1.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Plantel del Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    title: 'Plantilla del Equipo - Club Atlético Libertad',
    description: 'Conoce a los jugadores y el cuerpo técnico del Club Atlético Libertad.',
    images: [`${SITE_URL}/tienda/plantel1.jpg`], 
  },
};

export default function RosterPage() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroEquipo />
      
      <NuestrasCategorias /> {/* Add the new component here */}

      <SectionTitle 
        id="plantel-completo" 
        title="Plantel Principal" // Changed title to be more specific to the roster below
        icon={Users}
        description="Detalle de jugadores y cuerpo técnico del primer equipo del Decano del Fútbol Canario."
        className="pt-8" // Adjust padding if needed
      />
      <TeamRoster players={mockPlayers.filter(p => p.position !== 'Coach')} /> {/* Example: Filter out coaches if displayed separately */}
      
      {/* Optionally, add specific sections for Sub-15 and Sub-20 rosters if data exists */}
      {/* 
      <SectionTitle 
        id="sub20" 
        title="Plantel Sub-20" 
        icon={Users}
        description="Jóvenes promesas de nuestra categoría Sub-20."
        className="pt-8"
      />
      // <TeamRoster players={mockSub20Players} /> // Assuming you have mockSub20Players

      <SectionTitle 
        id="sub15" 
        title="Plantel Sub-15" 
        icon={Users}
        description="El futuro del club en nuestra categoría Sub-15."
        className="pt-8"
      />
      // <TeamRoster players={mockSub15Players} /> // Assuming you have mockSub15Players 
      */}

    </div>
  );
}
