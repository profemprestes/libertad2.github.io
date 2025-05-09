// src/components/layout/footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  Home,
  BookOpen,
  Users,
  CalendarDays,
  Newspaper,
  ShoppingBag,
  ShoppingCart,
  ChevronRight,
  ShieldPlus // Icon for Hazte Socio
} from 'lucide-react';
import type { ElementType } from 'react';
import { clubContactInfo } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/cart-context';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

interface NavLinkItem {
  href: string;
  label: string;
  icon: ElementType;
}

const mainSiteLinks: NavLinkItem[] = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/history', label: 'Historia', icon: BookOpen },
  { href: '/roster', label: 'Plantilla', icon: Users },
  { href: '/matches', label: 'Partidos', icon: CalendarDays },
  { href: '/news', label: 'Noticias', icon: Newspaper },
  { href: '/haztesocio', label: 'Hazte Socio', icon: ShieldPlus }, // Added Hazte Socio link
  { href: '/contact', label: 'Contacto', icon: Mail },
];

const shopLinks: NavLinkItem[] = [
    { href: '/tienda', label: 'Tienda Oficial', icon: ShoppingBag },
    { href: '/cart', label: 'Carrito de Compras', icon: ShoppingCart }
];

const socialMediaLinks = [
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
  const { cartItems, getTotalItems } = useCart(); 
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setTotalCartItems(getTotalItems());
    }
  }, [getTotalItems, cartItems, isClient]); 

  const NavListItem = ({ href, label, icon: Icon }: NavLinkItem) => (
    <li>
      <Link
        href={href}
        className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-200 ease-in-out text-sm py-1.5"
      >
        <Icon className="h-4 w-4 mr-2.5 text-primary/80 group-hover:text-primary transition-colors" />
        <span className="group-hover:translate-x-1 transition-transform duration-200 ease-in-out">{label}</span>
      </Link>
    </li>
  );
  
  const ShopLinkItem = ({ href, label, icon: Icon }: NavLinkItem) => (
     <li>
      <Link
        href={href}
        className="group flex items-center text-accent-foreground hover:text-primary transition-all duration-300 ease-in-out text-base font-medium py-2 relative"
      >
        <Icon className="h-5 w-5 mr-2.5 text-accent-foreground/80 group-hover:text-primary transition-colors" />
        <span className="group-hover:translate-x-1 transition-transform duration-200 ease-in-out">{label}</span>
         {href === '/cart' && isClient && totalCartItems > 0 && (
          <Badge variant="destructive" className="ml-auto text-xs px-1.5 py-0.5 h-5 min-w-[20px] flex items-center justify-center group-hover:bg-destructive/80 transition-colors">
            {totalCartItems}
          </Badge>
        )}
      </Link>
    </li>
  );


  return (
    <footer className="border-t bg-card text-card-foreground mt-auto">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Club Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group" aria-label="Página de inicio del Club Atlético Libertad">
              <div className="flex items-center space-x-3 transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image 
                  src="/Logo.svg" 
                  alt="Logo del Club Atlético Libertad" 
                  width={64} 
                  height={64} 
                  className="h-16 w-auto" 
                />
                <div>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Club Atlético Libertad
                  </h2>
                  <p className="text-sm text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                    Decano del Fútbol Canario
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fundado en 1906, forjando una historia de pasión y fútbol en Canelones.
            </p>
          </div>

          {/* Column 2: Enlaces Principales */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center">
              <ChevronRight className="h-5 w-5 mr-1 text-primary" /> Navegación
            </h3>
            <ul className="space-y-1">
              {mainSiteLinks.map((link) => <NavListItem key={link.href} {...link} />)}
            </ul>
          </div>

          {/* Column 3: Tienda y Carrito (Destacado) */}
          <div className="bg-secondary/70 dark:bg-secondary/40 p-5 rounded-lg shadow-md">
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center">
               <ShoppingBag className="h-5 w-5 mr-1.5 text-primary" /> Tienda y Carrito
            </h3>
            <ul className="space-y-1.5">
              {shopLinks.map((link) => <ShopLinkItem key={link.href} {...link} />)}
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-1.5 text-primary" /> Contacto
            </h3>
            <address className="space-y-3 not-italic text-sm">
              <div className="flex items-start group">
                <MapPin className="h-4 w-4 mr-2.5 mt-0.5 text-primary/80 group-hover:text-primary transition-colors shrink-0" />
                <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{clubContactInfo.address}</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-4 w-4 mr-2.5 text-primary/80 group-hover:text-primary transition-colors shrink-0" />
                <a href={`tel:${clubContactInfo.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {clubContactInfo.phone}
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="h-4 w-4 mr-2.5 text-primary/80 group-hover:text-primary transition-colors shrink-0" />
                <a href={`mailto:${clubContactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {clubContactInfo.email}
                </a>
              </div>
            </address>
            <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mt-6 mb-3 flex items-center">
              <Users className="h-5 w-5 mr-1.5 text-primary" /> Síguenos
            </h3>
            <div className="flex space-x-3">
              {socialMediaLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visita nuestra página de ${social.name}`}
                  className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10 transform hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Club Atlético Libertad. Todos los derechos reservados.</p>
          <p className="mt-1">Sitio web desarrollado con pasión.</p>
        </div>
      </div>
    </footer>
  );
}
