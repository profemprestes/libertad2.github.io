// src/components/sections/Bannersociales.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { clubContactInfo } from '@/lib/mock-data'; 
import { SectionTitle } from '@/components/shared/section-title';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  bgColor: string;
  hoverBgColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: clubContactInfo.socialMedia.find(s => s.icon === 'FacebookIcon')?.url || '#',
    icon: Facebook,
    bgColor: 'bg-blue-600',
    hoverBgColor: 'hover:bg-blue-700',
  },
  {
    name: 'Instagram',
    url: clubContactInfo.socialMedia.find(s => s.icon === 'InstagramIcon')?.url || '#',
    icon: Instagram,
    bgColor: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    hoverBgColor: 'hover:from-pink-600 hover:via-red-600 hover:to-yellow-600',
  },
  {
    name: 'Twitter',
    url: clubContactInfo.socialMedia.find(s => s.icon === 'TwitterIcon')?.url || '#',
    icon: Twitter,
    bgColor: 'bg-sky-500',
    hoverBgColor: 'hover:bg-sky-600',
  },
];

export function Bannersociales() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10 mt-12 rounded-lg shadow-inner">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Conéctate con Nosotros"
          description="Sigue al Club Atlético Libertad en nuestras redes sociales para no perderte ninguna novedad, contenido exclusivo y mucho más."
          className="mb-10"
        />
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sigue al Club Atlético Libertad en ${link.name}`}
                className={`group relative flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl ${link.bgColor} ${link.hoverBgColor}`}
              >
                <link.icon className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:rotate-[-15deg]" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 shadow-md">
                  {link.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
         <p className="text-center text-sm text-muted-foreground mt-10">
          ¡Forma parte de nuestra comunidad digital y vive la pasión por Libertad!
        </p>
      </div>
    </section>
  );
}
