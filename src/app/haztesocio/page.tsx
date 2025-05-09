import type { Metadata } from 'next';
import { SectionTitle } from '@/components/shared/section-title';
import { Users, ShieldCheck } from 'lucide-react';
import { HeroHazteSocio } from '@/components/sections/HeroHazteSocio';
import { BeneficiosSocio } from '@/components/sections/BeneficiosSocio';
import { HazteSocio } from '@/components/sections/Haztesocio'; // Re-using the CTA component

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Hazte Socio - Club Atlético Libertad',
  description: 'Descubre los beneficios de ser socio del Club Atlético Libertad y únete a nuestra gran familia. Apoya al Decano del Fútbol Canario.',
  keywords: ['hazte socio club libertad', 'beneficios socio libertad', 'unirse club libertad', 'asociarse club libertad', 'fútbol Canelones socios'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/haztesocio',
  },
  openGraph: {
    title: 'Hazte Socio - Club Atlético Libertad',
    description: 'Descubre los beneficios de ser socio del Club Atlético Libertad y únete a nuestra gran familia.',
    url: `${SITE_URL}/haztesocio`,
    images: [
      {
        url: `${SITE_URL}/nuevas/carnet-socio.jpg`, // Placeholder image, update if available
        width: 1200,
        height: 630,
        alt: 'Hazte Socio del Club Atlético Libertad',
      },
       {
        url: `${SITE_URL}/LogoLibertad.png`,
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    title: 'Hazte Socio - Club Atlético Libertad',
    description: 'Descubre los beneficios de ser socio del Club Atlético Libertad.',
    images: [`${SITE_URL}/nuevas/carnet-socio.jpg`], // Placeholder image
  },
};

export default function HazteSocioPage() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroHazteSocio />
      
      <SectionTitle 
        title="Beneficios Exclusivos para Socios"
        icon={ShieldCheck}
        description="Al hacerte socio del Club Atlético Libertad, no solo apoyas al club de tus amores, sino que también accedes a una serie de ventajas pensadas para vos."
        className="pt-8" 
        id="beneficios-socios"
      />
      <BeneficiosSocio />

      {/* Re-using the existing HazteSocio component as the final CTA */}
      <HazteSocio /> 
    </div>
  );
}
