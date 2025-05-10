
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sub20TeamRoster } from '@/components/club/Sub20TeamRoster';
import { SectionTitle } from '@/components/shared/section-title';
import { categoriaSub20 } from '@/lib/CategoriaSub20.data';
import { Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SITE_URL = 'https://pruebaslibertad.netlify.app';

export const metadata: Metadata = {
  title: 'Plantel Sub-20 - Club Atlético Libertad',
  description: 'Conoce a las jóvenes promesas de nuestra categoría Sub-20, forjando el futuro del club.',
  keywords: ['plantel sub-20 libertad', 'sub-20 club libertad', 'jóvenes promesas libertad canelones', 'cantera libertad'],
  authors: [{ name: 'Club Atlético Libertad', url: SITE_URL }],
  alternates: {
    canonical: '/roster/sub20',
  },
  openGraph: {
    title: 'Plantel Sub-20 - Club Atlético Libertad',
    description: 'Conoce a las jóvenes promesas de nuestra categoría Sub-20.',
    url: `${SITE_URL}/roster/sub20`,
    images: [
      {
        url: `${SITE_URL}/tienda/formatiivas1.jpg`, // Placeholder, update if specific image available
        width: 1200,
        height: 630,
        alt: 'Plantel Sub-20 del Club Atlético Libertad',
      },
    ],
  },
};

export default function Sub20RosterPage() {
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
        title="Plantel Sub-20" 
        icon={Users}
        description="Jóvenes promesas de nuestra categoría Sub-20, forjando el futuro del club."
      />
      <Sub20TeamRoster players={categoriaSub20} />
    </div>
  );
}