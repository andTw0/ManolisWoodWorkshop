'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionShell } from '@/components/SectionShell';
import { BrushButton } from '@/components/BrushButton';
import { siteContent } from '@/content/siteContent';

export function WorkshopSection() {
  return (
    <SectionShell id="workshop">
      <div className="absolute inset-x-0 top-[8%] -z-10 h-[56vh] opacity-70">
        <Image src="/assets/workshop/workshop-background.webp" alt="Workshop background placeholder" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.8fr_0.75fr_0.95fr] lg:items-center">
        <div className="relative min-h-[520px] lg:min-h-[760px]">
          <Image src="/assets/workshop/workshop-manolis-standing.webp" alt="Manolis standing placeholder" fill sizes="(max-width: 1024px) 90vw, 34vw" className="object-contain object-bottom" />
        </div>

        <div className="hidden lg:block" />

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="p-6 md:p-9">
          <p className="font-display text-3xl uppercase text-orangeBurnt">{siteContent.workshop.eyebrow}</p>
          <h2 className="brush-heading mt-2 text-5xl text-bone md:text-7xl">
            {siteContent.workshop.headline.map((line) => <span key={line} className="block">{line}</span>)}
          </h2>
          <p className="mt-7 max-w-prose leading-8 text-mutedBone">{siteContent.workshop.body}</p>
          <BrushButton href="#gallery" className="mt-8">{siteContent.workshop.cta}</BrushButton>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {siteContent.workshop.categories.map((category) => (
            <article key={category.title} className="min-h-40 p-5 transition-transform hover:-translate-y-1">
            <Image src={category.icon} alt="" width={44} height={44} className="mb-4 opacity-80" />
            <h3 className="font-display text-xl uppercase text-bone">{category.title}</h3>
            <p className="mt-3 text-sm leading-6 text-mutedBone">{category.text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
