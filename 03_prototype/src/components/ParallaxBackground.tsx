'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 -z-50 bg-ink"
      style={{
        backgroundImage: "url('/assets/backgrounds/bg-scroll-desktop.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundPositionX: 'center',
        backgroundPositionY: y,
      }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.05),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.55),transparent_45%)]" />
    </motion.div>
  );
}
