import type { Metadata } from 'next';
import { TeamRoster } from '@/components/club/team-roster';
import { SectionTitle } from '@/components/shared/section-title';
import { mockPlayers } from '@/lib/mock-data';
import { Users } from 'lucide-react';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  title: 'Plantilla del Equipo',
  description: 'Conoce a los jugadores y el cuerpo técnico que forman parte del Club Atlético Libertad. Perfiles, números y más.',
  keywords: ['plantilla club libertad', 'jugadores club libertad', 'equipo libertad canelones', 'cuerpo técnico libertad'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    title: 'Plantilla del Equipo - Club Atlético Libertad',
    description: 'Conoce a los jugadores y el cuerpo técnico del Club Atlético Libertad.',
    url: `${SITE_URL}/roster`,
    images: [
      {
        url: '/LogoLibertad.png', 
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
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
        description="Conoce a los talentosos jugadores y al dedicado cuerpo técnico del Club Atlético Libertad."
      />
      <TeamRoster players={mockPlayers} />
    </div>
  );
}

