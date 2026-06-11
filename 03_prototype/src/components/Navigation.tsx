'use client';

import { useEffect, useState } from 'react';
import { navigationItems } from '@/content/navigationItems';
import { siteContent } from '@/content/siteContent';

export function Navigation() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-colors ${scrolled ? 'bg-black/72 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-[var(--nav-height)] max-w-[1800px] items-center justify-between px-5 md:px-10">
        <a href="#home" className="font-display uppercase leading-[0.85] tracking-wide text-bone" onClick={() => setOpen(false)}>
          <span className="block text-xl text-orangeBurnt md:text-3xl">{siteContent.brand.nameTop}</span>
          <span className="block text-xl md:text-3xl">{siteContent.brand.nameBottom}</span>
          <span className="mt-3 hidden text-xs font-normal tracking-[0.16em] text-mutedBone md:block">{siteContent.brand.subtitle.join(' · ')}</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navigationItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = active === id;
            return (
              <a key={item.href} href={item.href} className={`relative font-display uppercase tracking-[0.1em] transition-colors ${isActive ? 'text-orangeBurnt' : 'text-bone hover:text-orangeBurnt'}`}>
                {item.label}
                <span className={`absolute -bottom-3 left-0 h-1 bg-orangeBurnt transition-all ${isActive ? 'w-full' : 'w-0'}`} />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-5">
          <button className="hidden text-sm uppercase tracking-[0.16em] text-bone md:inline-flex" aria-label="Language placeholder">EN⌄</button>
          <button
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-orangeBurnt"
          >
            <span className="h-0.5 w-8 bg-current" />
            <span className="h-0.5 w-8 bg-current" />
            <span className="h-0.5 w-8 bg-current" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/92 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="font-display text-2xl uppercase tracking-[0.1em] text-bone" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
