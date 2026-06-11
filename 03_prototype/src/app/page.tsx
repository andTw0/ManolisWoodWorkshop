import { Navigation } from '@/components/Navigation';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { HomeSection } from '@/sections/HomeSection';
import { AboutSection } from '@/sections/AboutSection';
import { WorkshopSection } from '@/sections/WorkshopSection';
import { GallerySection } from '@/sections/GallerySection';
import { ContactSection } from '@/sections/ContactSection';

export default function Page() {
  return (
    <>
      <ParallaxBackground />
      <Navigation />
      <main>
        <HomeSection />
        <AboutSection />
        <WorkshopSection />
        <GallerySection />
        <ContactSection />
      </main>
    </>
  );
}
