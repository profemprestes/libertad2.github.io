import { UltimasNoticias } from '@/components/sections/ultimasnoticias';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias | Club Libertad',
  description: 'Todas las últimas noticias y actualizaciones sobre Club Atlético Libertad.',
};

export default function NoticiasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Archivo de Noticias
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Explora todas las noticias y novedades de Club Atlético Libertad.
        </p>
      </header>
      <UltimasNoticias showViewAllLink={false} /> {/* Show all news, no "view all" link needed here */}
    </div>
  );
}
