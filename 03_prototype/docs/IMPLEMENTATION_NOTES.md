# Implementation Notes

## Build stack

- Next.js app router
- TypeScript
- Tailwind CSS
- Framer Motion

## Main entry files

```txt
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
```

## Sections

```txt
src/sections/HomeSection.tsx
src/sections/AboutSection.tsx
src/sections/WorkshopSection.tsx
src/sections/GallerySection.tsx
src/sections/ContactSection.tsx
```

## Components

```txt
src/components/Navigation.tsx
src/components/ParallaxBackground.tsx
src/components/SectionShell.tsx
src/components/BrushButton.tsx
src/components/GalleryShowcase.tsx
src/components/ProductMeta.tsx
src/components/ContactLinks.tsx
```

## Current limitations

- Placeholder visual assets are intentionally generic.
- The parallax background is implemented as a single fixed layer with scroll-linked background position.
- Framer Motion is used for simple entrance transitions and gallery crossfade.
- No backend, database, CMS, or webshop has been implemented.

## Next iteration suggestions

1. Replace placeholder assets with real art exports.
2. Tune spacing per section against the storyboard.
3. Add more precise decorative scribble placement.
4. Replace placeholder fonts with selected licensed fonts.
5. Optimize final background files into WebP/AVIF variants.
