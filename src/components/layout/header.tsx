'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CalendarDays, Home, Mail, Newspaper, ShieldCheck, Users, ShoppingBag, ShoppingCart } from 'lucide-react';
import { ClubLogo } from '@/components/club/club-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/contexts/cart-context';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/history', label: 'Historia', icon: BookOpen },
  { href: '/roster', label: 'Plantilla', icon: Users },
  { href: '/matches', label: 'Partidos', icon: CalendarDays },
  { href: '/news', label: 'Noticias', icon: Newspaper },
  { href: '/contact', label: 'Contacto', icon: Mail },
  { href: '/tienda', label: 'Tienda', icon: ShoppingBag },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { getTotalItems } = useCart();
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setTotalCartItems(getTotalItems());
    }
  }, [getTotalItems, isClient, pathname]); // Re-check on pathname change if cart updates don't trigger it


  const NavLink = ({ href, label, icon: Icon, isCartLink = false }: { href: string; label: string; icon: React.ElementType; isCartLink?: boolean }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out relative",
          "md:text-base md:px-4", 
          isCartLink 
            ? "text-primary hover:bg-primary/10"
            : href === '/tienda'
              ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transform hover:scale-105"
              : isActive
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'text-foreground hover:bg-secondary hover:text-secondary-foreground',
          (href === '/tienda' && isActive) ? "ring-2 ring-offset-1 ring-accent-foreground/70" : ""
        )}
        onClick={() => setIsSheetOpen(false)}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon className="mr-2 h-5 w-5 shrink-0" />
        <span className="truncate">{label}</span>
        {isCartLink && isClient && totalCartItems > 0 && (
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
            {totalCartItems}
          </Badge>
        )}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsSheetOpen(false)}>
          <ClubLogo className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
          <span className="hidden sm:inline-block text-xl font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
            Club Atlético Libertad
          </span>
          <span className="inline-block sm:hidden text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            C.A.L.
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
           <NavLink href="/cart" label="Carrito" icon={ShoppingCart} isCartLink />
        </nav>

        <div className="md:hidden flex items-center gap-2">
           <NavLink href="/cart" label="" icon={ShoppingCart} isCartLink />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Alternar Menú">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <SheetHeader className="flex flex-row items-center gap-2 border-b p-4">
                <ClubLogo className="h-8 w-8 text-primary" />
                <SheetTitle className="text-lg font-semibold text-foreground">
                  Club Atlético Libertad
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2 p-4">
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
