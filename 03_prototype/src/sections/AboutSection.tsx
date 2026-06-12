'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionShell } from '@/components/SectionShell';
import { siteContent } from '@/content/siteContent';

export function AboutSection() {
  return (
    <SectionShell id="about" className="grid items-center">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial={{ opacity: 0, rotate: -2, y: 30 }} whileInView={{ opacity: 1, rotate: -2, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="relative max-w-[720px]">
          <div className="relative min-h-[520px] overflow-hidden md:min-h-[760px]">
            <Image src="/assets/about/about-manolis-portrait.webp" alt="Manolis portrait placeholder" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <p className="mt-8 max-w-xs font-display text-2xl leading-tight text-orangeBurnt">{siteContent.about.sideQuote}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="relative p-6 md:p-10">
          <h2 className="brush-heading text-[clamp(4rem,8vw,9rem)] text-bone">
            {siteContent.about.headline.map((line, index) => (
              <span key={line} className={`block ${index === 1 ? 'text-orangeBurnt' : ''}`}>{line}</span>
            ))}
          </h2>
          <p className="mt-7 text-xl uppercase tracking-[0.08em] text-orangeBurnt">{siteContent.about.intro}</p>
          <div className="mt-8 grid gap-5 text-lg leading-8 text-mutedBone">
            {siteContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-8 font-display text-5xl text-orangeBurnt">{siteContent.about.signature}</p>
          <Image src="/assets/decorations/paper-note.svg" alt="" width={220} height={270} className="absolute -bottom-12 right-6 hidden rotate-6 opacity-85 md:block" />
        </motion.div>
      </div>

      <Image src="/assets/decorations/orange-splatter-02.svg" alt="" width={420} height={420} className="pointer-events-none absolute right-0 top-24 -z-10 opacity-40" />
    </SectionShell>
  );
}
