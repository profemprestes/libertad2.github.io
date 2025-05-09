import { ContactForm } from '@/components/club/contact-form';
import { ClubInfo } from '@/components/club/club-info';
import { SectionTitle } from '@/components/shared/section-title';
import { clubContactInfo } from '@/lib/mock-data';
import { Mail } from 'lucide-react';
import { HeroContacto } from '@/components/sections/HeroContacto';
import type { Metadata } from 'next';

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con el Club Atlético Libertad. Encuentra nuestra dirección, teléfono, email, redes sociales y envíanos un mensaje.',
  keywords: ['contacto club libertad', 'club libertad teléfono', 'club libertad email', 'dirección club libertad', 'consultas club libertad'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    title: 'Contacto - Club Atlético Libertad',
    description: 'Ponte en contacto con el Club Atlético Libertad. Encuentra nuestros datos y envíanos un mensaje.',
    url: `${SITE_URL}/contact`,
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
    title: 'Contacto - Club Atlético Libertad',
    description: 'Ponte en contacto con el Club Atlético Libertad.',
    images: [`${SITE_URL}/LogoLibertad.png`],
  },
};

export default function ContactPage() {
  return (
    <div>
      <HeroContacto />
      <SectionTitle 
        id="formulario" 
        title="Información de Contacto y Formulario" 
        icon={Mail}
        description="Utiliza el formulario para enviarnos un mensaje o encuéntranos a través de los siguientes canales."
        className="pt-12" 
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ContactForm />
        <ClubInfo 
          address={clubContactInfo.address}
          phone={clubContactInfo.phone}
          email={clubContactInfo.email}
          socialMedia={clubContactInfo.socialMedia.map(sm => ({...sm, iconName: sm.icon as 'Facebook' | 'Twitter' | 'Instagram'}))}
        />
      </div>
    </div>
  );
}

