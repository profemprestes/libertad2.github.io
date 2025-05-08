import { ContactForm } from '@/components/club/contact-form';
import { ClubInfo } from '@/components/club/club-info';
import { SectionTitle } from '@/components/shared/section-title';
import { clubContactInfo } from '@/lib/mock-data';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <SectionTitle 
        title="Contact Us" 
        icon={Mail}
        description="We'd love to hear from you! Reach out with any questions, inquiries, or just to say hello."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ContactForm />
        <ClubInfo 
          address={clubContactInfo.address}
          phone={clubContactInfo.phone}
          email={clubContactInfo.email}
          socialMedia={clubContactInfo.socialMedia.map(sm => ({...sm, iconName: sm.icon as 'Facebook' | 'Twitter' | 'Instagram'}))}
        />
      </div>
    </div>
  );
}
