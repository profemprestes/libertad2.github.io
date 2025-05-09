import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Added Twitter for X

export function Footer() {
  const currentYear = new Date().getFullYear();
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
      url: 'https://x.com/decanocanario', // Standard URL for X/Twitter
      icon: Twitter,
    },
  ];

  return (
    <footer className="border-t bg-secondary/50 text-secondary-foreground mt-auto"> {/* mt-auto helps with sticky footer in flex column layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Column 1: Logo and Club Name */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Página de inicio del Club Atlético Libertad">
              <Image 
                src="/Logo.svg" 
                alt="Logo del Club Atlético Libertad" 
                width={48} 
                height={48} 
                className="h-12 w-auto" 
              />
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                  Club Atlético Libertad
                </span>
                <span className="text-xs text-muted-foreground">
                  Decano del Fútbol Canario
                </span>
              </div>
            </Link>
          </div>
          
          {/* Column 2: Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {currentYear} Club Atlético Libertad.</p>
            <p>Todos los derechos reservados.</p>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visita nuestra página de ${social.name}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
