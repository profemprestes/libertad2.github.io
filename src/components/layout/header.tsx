"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CalendarDays, Home, Mail, Newspaper, ShieldCheck, Users, ShoppingBag } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/history', label: 'Historia', icon: BookOpen },
  { href: '/roster', label: 'Plantilla', icon: Users },
  { href: '/matches', label: 'Partidos', icon: CalendarDays },
  { href: '/news', label: 'Noticias', icon: Newspaper },
  { href: '/tienda', label: 'Tienda', icon: ShoppingBag },
  { href: '/contact', label: 'Contacto', icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
    const isTiendaLink = href === '/tienda';
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out",
          "md:text-base md:px-4", 
          isTiendaLink
            ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105"
            : isActive
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'text-foreground hover:bg-secondary hover:text-secondary-foreground',
          isTiendaLink && isActive ? "ring-2 ring-offset-2 ring-accent-foreground/70" : ""
        )}
        onClick={() => setIsSheetOpen(false)}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon className="mr-2 h-5 w-5 shrink-0" />
        <span className="truncate">{label}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
          <ClubLogo className="h-10 w-10 text-primary" />
          <span className="hidden sm:inline-block text-xl font-bold text-foreground whitespace-nowrap">
            Club Atlético Libertad
          </span>
          <span className="inline-block sm:hidden text-lg font-bold text-foreground">
            C.A.L.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Alternar Menú">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-4">
              <SheetTitle className="sr-only">Menú Principal</SheetTitle>
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
