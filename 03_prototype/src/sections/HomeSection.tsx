'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionShell } from '@/components/SectionShell';
import { BrushButton } from '@/components/BrushButton';
import { siteContent } from '@/content/siteContent';

export function HomeSection() {
  return (
    <SectionShell id="home" className="grid items-end overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <h1 className="brush-heading max-w-[850px] text-[clamp(4rem,12vw,12rem)] text-bone">
            {siteContent.home.headline.map((line, index) => (
              <span key={line} className={`block ${index === 2 ? 'text-orangeBurnt' : ''}`}>{line}</span>
            ))}
          </h1>
          <p className="mt-10 max-w-sm text-lg uppercase leading-8 tracking-[0.08em] text-bone">{siteContent.home.kicker}</p>
          <BrushButton href="#gallery" className="mt-8">{siteContent.home.cta}</BrushButton>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative min-h-[460px] overflow-hidden rough-border bg-black/40 lg:min-h-[720px]">
          <Image src="/assets/hero/hero-manolis-carving.webp" alt="Manolis carving olive wood placeholder" fill priority sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/10" />
          <Image src="/assets/decorations/scribble-face-right.svg" alt="" width={260} height={420} className="absolute right-6 top-8 hidden opacity-50 md:block" />
        </motion.div>
      </div>

      <div className="mt-12 grid gap-4 border-y border-white/10 bg-black/35 py-5 md:grid-cols-4">
        {siteContent.home.trust.map((item) => (
          <div key={item.title} className="flex items-center gap-4 px-3">
            <Image src={item.icon} alt="" width={34} height={34} className="opacity-80" />
            <div>
              <p className="font-display uppercase tracking-[0.08em] text-bone">{item.title}</p>
              <p className="text-sm uppercase tracking-[0.08em] text-mutedBone">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <Image src="/assets/decorations/orange-splatter-01.svg" alt="" width={380} height={380} className="pointer-events-none absolute -left-16 top-40 -z-10 opacity-50" />
      <Image src="/assets/decorations/scribble-face-left.svg" alt="" width={220} height={380} className="pointer-events-none absolute bottom-32 left-8 -z-10 opacity-45" />
    </SectionShell>
  );
}
