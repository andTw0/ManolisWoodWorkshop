# Implementation Notes

## Build stack

- Next.js app router
- TypeScript
- Tailwind CSS
- Framer Motion

## Runtime behavior

- The prototype is a single-page site assembled in `src/app/page.tsx`
- Navigation uses anchor links for `#home`, `#about`, `#workshop`, `#gallery`, and `#contact`
- The local development server runs at `http://localhost:3000` during `npm run dev`
- Closing the terminal that runs `npm run dev` stops the local site

## Main entry files

```txt
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
```

## Main page assembly

The page currently renders these sections in order:

1. `HomeSection`
2. `AboutSection`
3. `WorkshopSection`
4. `GallerySection`
5. `ContactSection`

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

## Content and data files

Editable content is intentionally separated from JSX components.

Primary content files:

```txt
src/content/siteContent.ts
src/content/galleryItems.ts
src/content/navigationItems.ts
```

In general:

- section copy lives in `siteContent.ts`
- gallery item content and image paths live in `galleryItems.ts`
- nav labels and anchor targets live in `navigationItems.ts`

## Asset structure

Visual files are loaded from `public/assets`.

Main groups:

```txt
public/assets/backgrounds/
public/assets/hero/
public/assets/about/
public/assets/workshop/
public/assets/gallery/
public/assets/contact/
public/assets/decorations/
public/assets/icons/
```

## Interaction notes

- `Navigation.tsx` handles fixed nav state, active section tracking, and mobile menu toggle
- `ParallaxBackground.tsx` provides the fixed scroll-linked background layer
- `GalleryShowcase.tsx` is the main interaction-heavy component and swaps the selected gallery item without changing route
- Contact CTAs are inquiry-based only and point to WhatsApp or email

## Current limitations

- Placeholder visual assets are intentionally generic.
- The parallax background is implemented as a single fixed layer with scroll-linked background position.
- Framer Motion is used for simple entrance transitions and gallery crossfade.
- No backend, database, CMS, or webshop has been implemented.

## Known review targets for this iteration

These are the most likely areas to test and refine before touching the design/spec docs.

1. Mobile layout quality
2. Navigation behavior and scroll offsets
3. Gallery thumbnail switching and content clarity
4. Readability and contrast over dark backgrounds
5. Contact and inquiry CTA clarity
6. Placeholder copy or imagery that breaks immersion

## Practical workflow notes

- Treat the current prototype as the working implementation
- Do not rebuild from scratch unless there is a clear reason
- During this test round, keep the concept and architecture markdown files as frozen reference docs
- Prefer changing `src/content/*` for copy updates before editing section components

## Next iteration suggestions

1. Replace placeholder assets with real art exports.
2. Tune spacing per section against the storyboard.
3. Add more precise decorative scribble placement.
4. Replace placeholder fonts with selected licensed fonts.
5. Optimize final background files into WebP/AVIF variants.
