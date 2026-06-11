import Image from 'next/image';
import { siteContent } from '@/content/siteContent';

const contactItems = [
  { icon: '/assets/icons/whatsapp.svg', label: siteContent.contact.whatsappLabel, text: siteContent.contact.whatsappDisplay, href: siteContent.contact.whatsappUrl },
  { icon: '/assets/icons/email.svg', label: siteContent.contact.emailLabel, text: siteContent.contact.emailDisplay, href: siteContent.contact.emailUrl },
  { icon: '/assets/icons/facebook.svg', label: 'Facebook', text: siteContent.contact.facebookDisplay, href: siteContent.contact.facebookUrl },
  { icon: '/assets/icons/instagram.svg', label: 'Instagram', text: siteContent.contact.instagramDisplay, href: siteContent.contact.instagramUrl },
];

export function ContactLinks() {
  return (
    <div className="grid gap-5">
      {contactItems.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group grid grid-cols-[48px_1fr] items-center gap-4 border-b border-orangeBurnt/25 pb-4 transition-colors hover:border-orangeBurnt">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-orangeBurnt/70">
            <Image src={item.icon} alt="" width={28} height={28} className="opacity-90" />
          </span>
          <span>
            <span className="block font-display uppercase tracking-[0.08em] text-bone group-hover:text-orangeBurnt">{item.label}</span>
            <span className="block text-sm text-mutedBone">{item.text}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
