
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sub15TeamRoster } from '@/components/club/Sub15TeamRoster';
import { SectionTitle } from '@/components/shared/section-title';
import { categoriaSub15 } from '@/lib/CategoriaSub15.data';
import { Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Plantel Sub-15 - Club Atlético Libertad',
  description: 'El futuro del club en nuestra categoría Sub-15. Conoce a las jóvenes promesas del Decano.',
  keywords: ['plantel sub-15 libertad', 'sub-15 club libertad', 'futbol infantil libertad canelones', 'cantera libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/roster/sub15',
  },
  openGraph: {
    title: 'Plantel Sub-15 - Club Atlético Libertad',
    description: 'El futuro del club en nuestra categoría Sub-15.',
    url: `${SITE_URL}/roster/sub15`,
    images: [
      {
        url: `${SITE_URL}/tienda/formatiivas1.jpg`, // Placeholder, update if specific image available
        width: 1200,
        height: 630,
        alt: 'Plantel Sub-15 del Club Atlético Libertad',
      },
    ],
  },
};

export default function Sub15RosterPage() {
  return (
    <div className="space-y-12">
       <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/roster">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Planteles
          </Link>
        </Button>
      </div>
      <SectionTitle 
        title="Plantel Sub-15" 
        icon={Users}
        description="El futuro del club en nuestra categoría Sub-15. Jóvenes promesas del Decano."
      />
      <Sub15TeamRoster players={categoriaSub15} />
    </div>
  );
}