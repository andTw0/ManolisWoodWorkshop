# Designer Handoff / Placeholder Replacement Guide

This prototype is asset-driven. Most visual elements are replaceable by swapping files in `public/assets` while keeping filenames the same.

## Where to change text

Editable copy lives in:

```txt
src/content/siteContent.ts
src/content/galleryItems.ts
src/content/navigationItems.ts
```

Avoid editing section components just to change text.

## Where to replace images

Main asset folders:

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

## Important background files

```txt
public/assets/backgrounds/bg-scroll-master.jpg
public/assets/backgrounds/bg-scroll-desktop.webp
public/assets/backgrounds/bg-scroll-mobile.webp
```

The prototype currently uses `bg-scroll-desktop.webp` in `ParallaxBackground.tsx`.

If the background is replaced, keep the same filenames or update:

```txt
src/components/ParallaxBackground.tsx
```

## Hero section assets

```txt
public/assets/hero/hero-manolis-carving.webp
public/assets/hero/hero-wood-object.webp
```

Used by:

```txt
src/sections/HomeSection.tsx
```

## About section assets

```txt
public/assets/about/about-manolis-portrait.webp
public/assets/about/about-paper-note.webp
```

Used by:

```txt
src/sections/AboutSection.tsx
```

## Workshop section assets

```txt
public/assets/workshop/workshop-background.webp
public/assets/workshop/workshop-manolis-standing.webp
```

Used by:

```txt
src/sections/WorkshopSection.tsx
```

## Gallery section assets

Gallery data is controlled by:

```txt
src/content/galleryItems.ts
```

Each gallery item has:

- id
- title
- category
- image
- thumbnail
- description
- material
- dimensions
- finish
- origin
- shipping

Replace images in:

```txt
public/assets/gallery/
```

or update image paths in `galleryItems.ts`.

## Contact section assets

```txt
public/assets/contact/crete-map.webp
```

Used by:

```txt
src/sections/ContactSection.tsx
```

Contact links are edited in:

```txt
src/content/siteContent.ts
```

## Decorative assets

```txt
public/assets/decorations/
```

These are optional visual overlays:

- face scribbles
- splatters
- compass
- underline
- paper note
- brush button

Decorative images should usually use empty alt text.

## No webshop rule

This prototype has no cart, checkout, payments, prices, accounts, or backend ordering system.

Product CTAs should lead to WhatsApp or email only.

## Responsive design notes

Desktop follows the storyboard composition.

Mobile intentionally stacks content vertically instead of shrinking the desktop layout.

Check these widths during design QA:

```txt
320px
375px
768px
1024px
1440px
```
