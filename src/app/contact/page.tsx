import { ContactForm } from '@/components/club/contact-form';
import { ClubInfo } from '@/components/club/club-info';
import { SectionTitle } from '@/components/shared/section-title';
import { clubContactInfo } from '@/lib/mock-data';
import { Mail } from 'lucide-react';
import { HeroContacto } from '@/components/sections/HeroContacto'; // Corrected import name
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Club Libertad',
  description: 'Ponte en contacto con el Club Atlético Libertad. Encuentra nuestra dirección, teléfono, email y redes sociales.',
};

export default function ContactPage() {
  return (
    <div>
      <HeroContacto />
      <SectionTitle 
        id="formulario" // Changed ID to match HeroContacto anchor
        title="Información de Contacto y Formulario" 
        icon={Mail}
        description="Utiliza el formulario para enviarnos un mensaje o encuéntranos a través de los siguientes canales."
        className="pt-12" // Added padding top to separate from HeroContacto
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
