import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
             <Link href="/" className="flex items-center space-x-2 group">
                <Image src="/Logo.svg" alt="Logo del Club Libertad" width={48} height={48} className="h-12 w-auto" />
                <span className="font-semibold text-xl text-primary group-hover:text-accent transition-colors">
                  Club Libertad
                </span>
             </Link>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Club Atlético Libertad. Todos los derechos reservados.</p>
            <p>Decano del Futbol Canario.</p>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="https://www.facebook.com/OficialCAL" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/decanocanario" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
