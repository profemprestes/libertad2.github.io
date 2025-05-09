
import { ContactForm } from '@/components/club/contact-form';
import { ClubInfo } from '@/components/club/club-info';
import { SectionTitle } from '@/components/shared/section-title';
import { clubContactInfo } from '@/lib/mock-data';
import { Mail, MapPinIcon } from 'lucide-react';
import { HeroContacto } from '@/components/sections/HeroContacto';
import type { Metadata } from 'next';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Contacto - Club Atlético Libertad',
  description: 'Ponte en contacto con el Club Atlético Libertad. Encuentra nuestra dirección, teléfono, email, redes sociales y envíanos un mensaje directo.',
  keywords: ['contacto club libertad', 'club libertad teléfono', 'club libertad email', 'dirección club libertad', 'consultas club libertad', 'formulario contacto libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contacto - Club Atlético Libertad',
    description: 'Ponte en contacto con el Club Atlético Libertad. Encuentra nuestros datos y envíanos un mensaje.',
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/LogoLibertad.png`,
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

      <SectionTitle
        id="ubicacion"
        title="Nuestra Ubicación"
        icon={MapPinIcon}
        description="Encuentra nuestra sede en el mapa interactivo. ¡Te esperamos!"
        className="pt-12"
      />
      <div
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.8978353219497!2d-56.28321602873977!3d-34.53498688224576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1b5cad07d69bd%3A0x1e517ff03e4cc652!2sClub%20Atl%C3%A9tico%20Libertad!5e1!3m2!1ses!2suy!4v1746822926812!5m2!1ses!2suy"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Ubicación del Club Atlético Libertad en Google Maps"
        ></iframe>
      </div>
    </div>
  );
}
