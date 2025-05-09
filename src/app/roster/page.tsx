import type { Metadata } from 'next';
import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users } from 'lucide-react';

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
      // Podrías agregar una imagen del equipo si está disponible
      // {
      //   url: `${SITE_URL}/public/equipo_plantel.jpg`,
      //   width: 1200,
      //   height: 630,
      //   alt: 'Plantel del Club Atlético Libertad',
      // },
    ],
  },
  twitter: {
    title: 'Plantilla del Equipo - Club Atlético Libertad',
    description: 'Conoce a los jugadores y el cuerpo técnico del Club Atlético Libertad.',
    images: [`${SITE_URL}/LogoLibertad.png`],
  },
};

export default function RosterPage() {
  return (
    <div>
      <SectionTitle 
        title="Conoce Nuestro Equipo" 
        icon={Users}
        description="Descubre a los talentosos jugadores y al dedicado cuerpo técnico que representan al Club Atlético Libertad en cada partido."
      />
      <TeamRoster players={mockPlayers} />
    </div>
  );
}
