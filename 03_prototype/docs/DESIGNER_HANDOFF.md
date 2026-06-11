# Designer Handoff / Placeholder Replacement Guide

This prototype is asset-driven. Most visual elements are replaceable by swapping files in `public/assets` while keeping filenames the same.

This file is for practical text and asset replacement. It is not the main place to redefine the core concept or rewrite the architecture rules during the current test round.

## Important note for this test round

For now, keep these reference docs stable while testing the current build:

- `01_concept/prototype 1/*.md`
- `docs/01-home.md`
- `docs/02-about.md`
- `docs/03-workshop.md`
- `docs/04-gallery.md`
- `docs/05-contact.md`
- `docs/website_architecture.md`

Use those as reference. Update the build first, then revisit the concept/spec docs later if needed.

## Where to change text

Editable copy lives in:

```txt
src/content/siteContent.ts
src/content/galleryItems.ts
src/content/navigationItems.ts
```

Avoid editing section components just to change text.

If you only want to update wording, start with:

- `src/content/siteContent.ts` for most section text and contact info
- `src/content/galleryItems.ts` for gallery titles, descriptions, and metadata
- `src/content/navigationItems.ts` for nav labels and anchors

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

If you only want to replace visuals, start in those folders before editing component code.

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

If the background looks wrong after replacement, confirm the file path and image dimensions first before changing the component.

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

If the gallery content changes but the layout does not, check `src/components/GalleryShowcase.tsx`.

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

If you only need to change contact destinations, edit that file first rather than editing `ContactSection.tsx`.

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

## If the browser does not reflect changes

Try these in order:

1. Save the file again
2. Refresh the browser
3. Hard refresh the browser
4. Restart the dev server with `Ctrl+C` and `npm run dev`

If the local site is completely unreachable, the terminal that was running the dev server was probably closed.

## If you need to run the project

Use:

```txt
docs/RUN_AND_TROUBLESHOOT.md
```

That file explains the WSL startup flow, restart steps, and common local errors.

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
