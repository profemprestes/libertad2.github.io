import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { clubContactInfo } from '@/lib/mock-data'; // Assuming contact info is here
import { cn } from '@/lib/utils';

const mainNavLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/history', label: 'Historia' },
  { href: '/roster', label: 'Plantilla' },
  { href: '/matches', label: 'Partidos' },
  { href: '/news', label: 'Noticias' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/cart', label: 'Carrito' },
  { href: '/contact', label: 'Contacto' },
];

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/OficialCAL',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/decanocanario',
    icon: Instagram,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/decanocanario',
    icon: Twitter,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50 text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Club Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Página de inicio del Club Atlético Libertad">
              <Image 
                src="/Logo.svg" 
                alt="Logo del Club Atlético Libertad" 
                width={56} 
                height={56} 
                className="h-14 w-auto" 
              />
              <div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  Club Atlético Libertad
                </h2>
                <p className="text-sm text-muted-foreground">
                  Decano del Fútbol Canario
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fundado en 1906, forjando una historia de pasión y fútbol en Canelones.
            </p>
          </div>

          {/* Column 2: Enlaces Principales */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">
              Enlaces Principales
            </h3>
            <ul className="space-y-2">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <address className="space-y-3 not-italic text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">{clubContactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary shrink-0" />
                <a href={`tel:${clubContactInfo.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {clubContactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary shrink-0" />
                <a href={`mailto:${clubContactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {clubContactInfo.email}
                </a>
              </div>
            </address>
          </div>

          {/* Column 4: Redes Sociales */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visita nuestra página de ${social.name}`}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Club Atlético Libertad. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
