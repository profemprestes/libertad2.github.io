import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { CartProvider } from '@/contexts/cart-context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// IMPORTANT: Update this with your actual production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubatleticolibertad.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Club Atlético Libertad',
    template: '%s | Club Atlético Libertad',
  },
  description: 'Sitio web oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda oficial del Decano del Fútbol Canario.',
  keywords: ['Club Atlético Libertad', 'Libertad Canelones', 'fútbol uruguayo', 'Decano Canario', 'noticias libertad', 'partidos libertad'],
  authors: [{ name: 'Club Atlético Libertad' }],
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: SITE_URL,
    siteName: 'Club Atlético Libertad',
    title: 'Club Atlético Libertad',
    description: 'Sitio web oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda oficial.',
    images: [
      {
        url: '/LogoLibertad.png', // Path relative to public directory
        width: 512,
        height: 512,
        alt: 'Logo Club Atlético Libertad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Club Atlético Libertad',
    description: 'Sitio web oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda oficial.',
    images: [`${SITE_URL}/LogoLibertad.png`], // Must be absolute URL for Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Assuming favicon.ico is in public
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        className={cn(
          geistSans.variable, 
          geistMono.variable, 
          "antialiased flex flex-col min-h-screen"
        )}
      >
        <CartProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

