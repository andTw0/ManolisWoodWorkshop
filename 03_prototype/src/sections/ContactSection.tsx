'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionShell } from '@/components/SectionShell';
import { ContactLinks } from '@/components/ContactLinks';
import { siteContent } from '@/content/siteContent';

export function ContactSection() {
  return (
    <SectionShell id="contact" className="grid items-center">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.25fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
          <h2 className="font-display text-5xl uppercase text-orangeBurnt md:text-7xl">{siteContent.contactSection.headline}</h2>
          <div className="mt-10">
            <ContactLinks />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="relative min-h-[320px] md:min-h-[520px]">
          <Image src="/assets/contact/crete-map.webp" alt="Crete map placeholder" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain" />
          <div className="absolute left-[48%] top-[56%] h-8 w-8 rounded-full bg-orangeBurnt shadow-[0_0_35px_rgba(201,87,22,.8)]" />
          <p className="absolute left-[44%] top-[66%] font-display text-3xl uppercase text-bone">
            {siteContent.contactSection.mapLabelBottom.map((line) => <span key={line} className={`block ${line === 'Crete' ? 'text-orangeBurnt' : ''}`}>{line}</span>)}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="p-6 md:p-9">
          <div className="grid gap-6 text-lg leading-8 text-mutedBone">
            {siteContent.contactSection.story.map((line) => <p key={line}>{line}</p>)}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 border-t border-orangeBurnt/40 pt-8 text-center">
        <p className="font-display text-3xl uppercase tracking-[0.08em] text-bone md:text-5xl">{siteContent.contactSection.closing}</p>
      </div>

      <Image src="/assets/decorations/compass.svg" alt="" width={220} height={220} className="pointer-events-none absolute right-[12%] top-[18%] -z-10 opacity-50" />
      <Image src="/assets/decorations/orange-splatter-01.svg" alt="" width={460} height={460} className="pointer-events-none absolute -right-24 bottom-16 -z-10 opacity-45" />
    </SectionShell>
  );
}
