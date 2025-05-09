import { UltimasNoticias } from '@/components/sections/ultimasnoticias';
import type { Metadata } from 'next';
import { HeroNoticias } from '@/components/sections/HeroNoticias';
import { SectionTitle } from '@/components/shared/section-title';
import { Newspaper } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Noticias | Club Libertad',
  description: 'Todas las últimas noticias y actualizaciones sobre Club Atlético Libertad.',
};

export default function NoticiasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HeroNoticias />
      <SectionTitle
        id="ultimas"
        title="Archivo de Noticias"
        description="Explora todas las noticias y novedades de Club Atlético Libertad."
        icon={Newspaper}
        className="pt-12"
      />
      <UltimasNoticias showViewAllLink={false} /> {/* Show all news, no "view all" link needed here */}
    </div>
  );
}
