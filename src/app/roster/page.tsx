/**
 * @file src/app/roster/page.tsx
 * @description Page for displaying team rosters, including Primera División, Sub-15, and Sub-20.
 * - Imports player data for different categories (mockPlayers for Primera, categoriaSub15, categoriaSub20).
 * - Uses TeamRoster, Sub15TeamRoster, and Sub20TeamRoster components to display player cards.
 * - Players in Sub15TeamRoster and Sub20TeamRoster are grouped by position 
 *   (Arquero, Defensa, Volante, Delantero) and then sorted alphabetically by name within each group.
 */
import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { HeroEquipo } from '@/components/sections/HeroEquipo';
import { NuestrasCategorias } from '@/components/sections/NuestrasCategorias'; 
// TeamRoster, Sub15TeamRoster, Sub20TeamRoster and their data will be moved to individual pages.
// import { TeamRoster } from '@/components/club/team-roster';
// import { mockPlayers } from '@/lib/mock-data';
// import { categoriaSub15 } from '@/lib/CategoriaSub15.data'; 
// import { Sub15TeamRoster } from '@/components/club/Sub15TeamRoster'; 
// import { categoriaSub20 } from '@/lib/CategoriaSub20.data'; 
// import { Sub20TeamRoster } from '@/components/club/Sub20TeamRoster';
// import { SectionTitle } from '@/components/shared/section-title';


const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Planteles del Club - Club Atlético Libertad',
  description: 'Explora los planteles de las diferentes categorías del Club Atlético Libertad: Primera División, Sub-20 y Sub-15. Conoce a nuestros jugadores y cuerpo técnico.',
  keywords: ['planteles club libertad', 'jugadores club libertad', 'equipo libertad canelones', 'cuerpo técnico libertad', 'fútbol Canelones plantilla', 'sub 15 libertad', 'sub 20 libertad', 'primera división libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/roster',
  },
  openGraph: {
    title: 'Planteles del Club - Club Atlético Libertad',
    description: 'Explora los planteles de las diferentes categorías del Club Atlético Libertad.',
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
    title: 'Planteles del Club - Club Atlético Libertad',
    description: 'Explora los planteles de las diferentes categorías del Club Atlético Libertad.',
    images: [`${SITE_URL}/tienda/plantel1.jpg`], 
  },
};

export default function RosterPage() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroEquipo />
      
      {/* NuestrasCategorias will link to the new individual roster pages */}
      <NuestrasCategorias /> 
      
      {/* 
        The SectionTitles and Roster components below will be moved to their respective new pages.
        This page (src/app/roster/page.tsx) will now serve as an overview/landing page for the different categories.
      */}

      {/* 
      <SectionTitle 
        id="primera" 
        title="Plantel Principal" 
        icon={Users}
        description="Detalle de jugadores y cuerpo técnico del primer equipo del Decano del Fútbol Canario."
        className="pt-8" 
      />
      <TeamRoster players={mockPlayers} /> 
      
      <SectionTitle 
        id="sub20" 
        title="Plantel Sub-20" 
        icon={Users}
        description="Jóvenes promesas de nuestra categoría Sub-20, forjando el futuro del club."
        className="pt-8"
      />
      <Sub20TeamRoster players={categoriaSub20} />
      
      <SectionTitle 
        id="sub15" 
        title="Plantel Sub-15" 
        icon={Users}
        description="El futuro del club en nuestra categoría Sub-15. Jóvenes promesas del Decano."
        className="pt-8"
      />
      <Sub15TeamRoster players={categoriaSub15} /> 
      */}
      
    </div>
  );
}