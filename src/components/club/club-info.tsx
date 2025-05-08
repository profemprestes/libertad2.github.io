import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Share2, Facebook, Twitter, Instagram } from 'lucide-react'; // Using lucide-react icons
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ClubInfoProps {
  address: string;
  phone: string;
  email: string;
  socialMedia: { name: string; url: string; iconName: 'Facebook' | 'Twitter' | 'Instagram' }[];
}

const iconMap: Record<string, LucideIcon> = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
};

export function ClubInfo({ address, phone, email, socialMedia }: ClubInfoProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center">
          <MapPin className="mr-3 h-6 w-6" /> Sede del Club
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-foreground flex items-center mb-1">
            <MapPin className="mr-2 h-5 w-5 text-muted-foreground" /> Dirección
          </h3>
          <p className="text-muted-foreground ml-7">{address}</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center mb-1">
            <Phone className="mr-2 h-5 w-5 text-muted-foreground" /> Teléfono
          </h3>
          <Link href={`tel:${phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors ml-7">
            {phone}
          </Link>
        </div>
        <div>
          <h3 className="font-semibold text-foreground flex items-center mb-1">
            <Mail className="mr-2 h-5 w-5 text-muted-foreground" /> Correo Electrónico
          </h3>
          <Link href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors ml-7">
            {email}
          </Link>
        </div>
        
        {socialMedia.length > 0 && (
          <div>
            <h3 className="font-semibold text-foreground flex items-center mb-2">
              <Share2 className="mr-2 h-5 w-5 text-muted-foreground" /> Conéctate con Nosotros
            </h3>
            <div className="flex space-x-4 ml-7">
              {socialMedia.map((social) => {
                const IconComponent = iconMap[social.iconName];
                return (
                  IconComponent && (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <IconComponent className="h-7 w-7" />
                    </Link>
                  )
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
