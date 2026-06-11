'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryItems } from '@/content/galleryItems';
import { siteContent } from '@/content/siteContent';
import { ProductMeta } from './ProductMeta';
import { BrushButton } from './BrushButton';

export function GalleryShowcase() {
  const [selectedId, setSelectedId] = useState(galleryItems[0].id);
  const selected = galleryItems.find((item) => item.id === selectedId) ?? galleryItems[0];

  return (
    <div className="grid min-h-[72vh] gap-8 lg:grid-cols-[120px_minmax(0,1.1fr)_minmax(320px,0.85fr)] lg:items-center">
      <div className="order-2 flex gap-3 overflow-x-auto pb-2 lg:order-none lg:flex-col lg:overflow-visible">
        {galleryItems.map((item) => (
          <button key={item.id} onClick={() => setSelectedId(item.id)} className={`relative h-24 w-20 shrink-0 overflow-hidden border transition-colors md:h-32 md:w-24 ${selected.id === item.id ? 'border-orangeBurnt' : 'border-white/15 hover:border-orangeBurnt/60'}`}>
            <Image src={item.thumbnail} alt={`${item.title} thumbnail`} fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="relative order-1 min-h-[420px] overflow-hidden rough-border bg-black/40 lg:order-none lg:min-h-[680px]">
        <AnimatePresence mode="wait">
          <motion.div key={selected.id} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.45 }} className="absolute inset-0">
            <Image src={selected.image} alt={selected.title} fill priority={selected.id === 'ancestor'} sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="order-3 texture-panel p-6 md:p-9">
        <p className="mb-5 text-xs uppercase tracking-[0.18em] text-orangeBurnt">{siteContent.gallery.eyebrow}</p>
        <AnimatePresence mode="wait">
          <motion.div key={selected.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.25 }}>
            <h2 className="brush-heading text-5xl text-bone md:text-7xl">{selected.title}</h2>
            <p className="mt-2 font-display text-2xl text-orangeBurnt">{selected.category}</p>
            <p className="mt-8 max-w-prose leading-8 text-mutedBone">{selected.description}</p>
            <div className="mt-8">
              <ProductMeta item={selected} />
            </div>
            <BrushButton href={siteContent.contact.whatsappUrl} external className="mt-9">{siteContent.gallery.cta}</BrushButton>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
