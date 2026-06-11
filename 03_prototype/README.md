# Manolis Tsouris Website Prototype

Responsive single-page scroll-story prototype for the Manolis Wood Workshop website.

This is a visual and interaction prototype, not a finished webshop. It is built to test the current homepage-to-contact story flow, compare it against the concept docs, and improve the existing implementation without rebuilding from scratch.

## Project path

WSL path:

```txt
/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype
```

## What this prototype is

- Next.js 14 single-page prototype
- TypeScript + Tailwind CSS + Framer Motion
- Scroll-based section navigation
- Inquiry-first contact flow
- Asset-driven structure so images and text can be replaced later

## Quick start

If Node.js is already set up in WSL, run:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

Keep the terminal open while the site is running. Closing that terminal stops the local website.

## Daily startup

Use this when dependencies are already installed:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && npm run dev
```

## Main directories

- `src/app` - Next.js app entry files, global layout, global CSS
- `src/sections` - one main React section per storyboard slide
- `src/components` - reusable navigation, buttons, parallax, gallery, and contact components
- `src/content` - editable text, navigation items, and gallery data
- `public/assets` - replaceable image, icon, decoration, and background assets
- `docs` - run guide, handoff notes, implementation notes, and copied prototype docs

## Where to find what

- Need setup or startup help: `docs/RUN_AND_TROUBLESHOOT.md`
- Need the technical overview: `docs/IMPLEMENTATION_NOTES.md`
- Need to replace text or assets: `docs/DESIGNER_HANDOFF.md`
- Need to change the main editable content:
  - `src/content/siteContent.ts`
  - `src/content/galleryItems.ts`
  - `src/content/navigationItems.ts`
- Need to inspect the main page assembly: `src/app/page.tsx`
- Need the original prototype reference docs:
  - `docs/01-home.md`
  - `docs/02-about.md`
  - `docs/03-workshop.md`
  - `docs/04-gallery.md`
  - `docs/05-contact.md`
  - `docs/website_architecture.md`

## Safe routine commands

- `npm install` - install project dependencies
- `npm run dev` - start the local development server
- `npm run build` - check whether the app builds for production
- `npm run start` - run the production build locally after `npm run build`
- `npm run lint` - run the current lint rules

## Current limitations

- Some copy is still placeholder text
- Some images are still placeholder assets
- Mobile quality still needs review and likely tuning
- This is not a multi-page site yet
- There is no backend, database, cart, checkout, pricing logic, accounts, or admin panel

## Important workflow note

During the current testing iteration, keep these concept and architecture docs as reference and do not casually rewrite them:

- `01_concept/prototype 1/*.md`
- `03_prototype/docs/01-home.md`
- `03_prototype/docs/02-about.md`
- `03_prototype/docs/03-workshop.md`
- `03_prototype/docs/04-gallery.md`
- `03_prototype/docs/05-contact.md`
- `03_prototype/docs/website_architecture.md`

## No webshop

This prototype has no cart, checkout, pricing, payments, accounts, or backend ordering system. Product CTAs point to WhatsApp or email inquiry flows only.
