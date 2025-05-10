import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { CartProvider } from '@/contexts/cart-context';
import { JsonLdScript, generateOrganizationData, generateWebSiteData } from '@/lib/json-ld';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Club Atlético Libertad - Sitio Oficial',
    template: '%s | Club Atlético Libertad',
  },
  description: 'Sitio web oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda oficial del Decano del Fútbol Canario.',
  keywords: ['Club Atlético Libertad', 'Libertad Canelones', 'fútbol uruguayo', 'Decano Canario', 'noticias libertad', 'partidos libertad', 'historia club libertad', 'tienda club libertad', 'generador de prompts'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  creator: 'Club Atlético Libertad',
  publisher: 'Club Atlético Libertad',
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: SITE_URL,
    siteName: 'Club Atlético Libertad',
    title: {
        default: 'Club Atlético Libertad - Sitio Oficial',
        template: '%s | Club Atlético Libertad',
    },
    description: 'Sitio web oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda oficial.',
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
    card: 'summary_large_image',
    title: {
        default: 'Club Atlético Libertad - Sitio Oficial',
        template: '%s | Club Atlético Libertad',
    },
    description: 'Sitio web oficial del Club Atlético Libertad. Noticias, partidos, plantilla, historia y tienda oficial.',
    images: [`${SITE_URL}/LogoLibertad.png`], 
    // site: '@nombredeusuario', // Opcional: si el club tiene un usuario de Twitter
    // creator: '@nombredeusuario_creador', // Opcional
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
    icon: '/favicon/favicon.ico', 
    shortcut: '/favicon/favicon-96x96.png',
    apple: '/favicon/apple-touch-icon.png',
    other: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    ]
  },
  manifest: `${SITE_URL}/favicon/site.webmanifest`,
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Noticias del Club Atlético Libertad' }],
    }
  }
};

const organizationSchema = generateOrganizationData();
const websiteSchema = generateWebSiteData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full">
      <head>
        <JsonLdScript data={organizationSchema} />
        <JsonLdScript data={websiteSchema} />
      </head>
      <body 
        className={cn(
          geistSans.variable, 
          geistMono.variable, 
          "antialiased flex flex-col min-h-screen bg-background text-foreground"
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

    