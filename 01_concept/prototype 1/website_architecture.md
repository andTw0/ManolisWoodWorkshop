# Website Architecture – Prototype V1

**Project:** Manolis Tsouris single-page scroll-story website  
**Purpose:** Build a responsive, asset-driven prototype based on the storyboard slides.

> This is not a full webshop yet.

---

## Stack

### Use

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

### Reasoning

| Tool | Reason |
|---|---|
| **Next.js** | Good project structure, easy deployment, image optimization, future webshop/API path. |
| **TypeScript** | Keeps gallery data, content objects, and components predictable. |
| **Tailwind CSS** | Fast styling iteration, responsive utilities, consistent spacing. |
| **Framer Motion** | Good for section transitions, subtle parallax, hover effects, and gallery image changes. |

---

## Site Type

Single-page landing page.

No separate routes for prototype V1.

Navigation scrolls to sections using anchor IDs.

### Menu

- Home
- About
- Workshop
- Gallery
- Contact

---

## Section IDs

Use these exact IDs:

```txt
#home
#about
#workshop
#gallery
#contact
```

The fixed navigation links must scroll smoothly to these sections.

---

## Core Features

### Responsive Design

The layout must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Desktop should follow the storyboard closely.

Mobile must be rebuilt into readable vertical layouts.

Do **not** simply shrink the desktop composition.

---

### Fixed Navigation

Navigation stays fixed at the top.

It overlays the page.

It should remain readable on dark backgrounds.

After scrolling, it may receive a subtle darker backdrop.

Navigation should include:

- Logo left
- Menu center/right
- Language placeholder
- Hamburger placeholder for mobile

---

### Smooth Scrolling

Clicking nav links scrolls smoothly to sections.

Sections must use scroll offset so the fixed nav does not cover section titles.

Use CSS scroll behavior or JS scroll handling.

---

### Parallax Background

The main background uses a continuous vertical texture.

Reference size:

```txt
3000 × 10500 px
```

Expected asset:

```txt
/public/assets/backgrounds/bg-scroll-master.jpg
```

The background should move slower than foreground content.

Parallax must be subtle.

Do **not** make the site feel like a theme-park effect.

---

### Asset-Driven Structure

All images are external files.

Do **not** hardcode visual assets into components.

Use placeholder assets with clear filenames.

The user will replace placeholders later.

---

## Recommended Folder Structure

```txt
manolis-website/
├─ docs/
│  ├─ website_architecture.md
│  ├─ 01-home.md
│  ├─ 02-about.md
│  ├─ 03-workshop.md
│  ├─ 04-gallery.md
│  └─ 05-contact.md
│
├─ public/
│  └─ assets/
│     ├─ backgrounds/
│     │  ├─ bg-scroll-master.jpg
│     │  ├─ bg-scroll-desktop.webp
│     │  └─ bg-scroll-mobile.webp
│     │
│     ├─ hero/
│     │  ├─ hero-manolis-carving.webp
│     │  └─ hero-wood-object.webp
│     │
│     ├─ about/
│     │  ├─ about-manolis-portrait.webp
│     │  └─ about-paper-note.webp
│     │
│     ├─ workshop/
│     │  ├─ workshop-background.webp
│     │  └─ workshop-manolis-standing.webp
│     │
│     ├─ gallery/
│     │  ├─ ancestor-main.webp
│     │  ├─ ancestor-thumb.webp
│     │  ├─ product-02-main.webp
│     │  ├─ product-02-thumb.webp
│     │  ├─ product-03-main.webp
│     │  ├─ product-03-thumb.webp
│     │  ├─ product-04-main.webp
│     │  └─ product-04-thumb.webp
│     │
│     ├─ contact/
│     │  └─ crete-map.webp
│     │
│     ├─ decorations/
│     │  ├─ scribble-face-left.svg
│     │  ├─ scribble-face-right.svg
│     │  ├─ orange-splatter-01.png
│     │  ├─ orange-splatter-02.png
│     │  ├─ compass.svg
│     │  ├─ underline-orange.svg
│     │  ├─ brush-button.svg
│     │  └─ paper-note.webp
│     │
│     └─ icons/
│        ├─ whatsapp.svg
│        ├─ email.svg
│        ├─ facebook.svg
│        ├─ instagram.svg
│        ├─ heart.svg
│        ├─ shipping.svg
│        ├─ lock.svg
│        └─ leaf.svg
│
└─ src/
   ├─ app/
   │  ├─ page.tsx
   │  ├─ layout.tsx
   │  └─ globals.css
   │
   ├─ components/
   │  ├─ Navigation.tsx
   │  ├─ ParallaxBackground.tsx
   │  ├─ SectionShell.tsx
   │  ├─ BrushButton.tsx
   │  ├─ GalleryShowcase.tsx
   │  ├─ ProductMeta.tsx
   │  └─ ContactLinks.tsx
   │
   ├─ sections/
   │  ├─ HomeSection.tsx
   │  ├─ AboutSection.tsx
   │  ├─ WorkshopSection.tsx
   │  ├─ GallerySection.tsx
   │  └─ ContactSection.tsx
   │
   ├─ content/
   │  ├─ siteContent.ts
   │  ├─ galleryItems.ts
   │  └─ navigationItems.ts
   │
   └─ styles/
      └─ tokens.ts
```

---

## Content Structure

All editable text should live in:

```txt
src/content/siteContent.ts
```

Gallery data should live in:

```txt
src/content/galleryItems.ts
```

Navigation data should live in:

```txt
src/content/navigationItems.ts
```

Do **not** bury important text inside JSX components.

---

## Gallery Logic

The Gallery section is interactive.

It has:

- Thumbnail list
- Large selected product image
- Product title
- Product category
- Description
- Material data
- CTA button

Clicking a thumbnail updates the selected product.

No page route change.

No page reload.

Use React state.

---

## Animation Rules

Use subtle animations only.

### Allowed

- Fade in
- Slide in
- Slow parallax
- Hover underline
- Gallery crossfade
- Button texture movement

### Avoid

- Bouncing
- Spinning
- Loud motion
- Excessive scroll hijacking

### Reduced Motion

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
    scroll-behavior: auto;
  }
}
```

---

## Design System

### Visual Style

- Dark
- Raw
- Brutalist
- Handmade
- Textured
- Warm accent
- High contrast
- No clean corporate cards

### Colors

| Token | Value |
|---|---|
| Background Black | `#050505` |
| Charcoal | `#111111` |
| Soft Charcoal | `#1A1A1A` |
| Text Warm White | `#E7D7C5` |
| Muted Text | `#BFA98B` |
| Burnt Orange | `#C95716` |
| Dark Orange | `#8F350F` |

### Typography Direction

| Element | Direction |
|---|---|
| Headlines | Brush / hand-painted style |
| Body | Readable monospace or typewriter-like font |
| Navigation | Handmade uppercase style |
| Buttons | Brush-stroke or rough rectangle style |

---

## Performance Rules

The site must remain fast.

Use optimized image formats:

- WebP for website assets
- JPG for large background if WebP is not practical
- SVG for icons and scribbles

Large background should have multiple versions:

```txt
desktop: 2000–3000 px wide
mobile: 1000–1400 px wide
```

Lazy-load non-critical images.

Hero image should load immediately.

---

## Accessibility Basics

Buttons must be real buttons or links.

Navigation must be keyboard usable.

Images need useful alt text when meaningful.

Decorative assets should use empty alt text.

Text must remain readable on mobile.

Avoid tiny text baked into images.

---

## Build Order

### Step 1

- Create project structure.
- Add placeholder assets.
- Add fixed navigation.
- Add continuous background.

### Step 2

- Build Home, About, and Contact sections.
- Confirm responsive layout.

### Step 3

- Build Workshop section.
- Add category cards.

### Step 4

- Build Gallery section.
- Add thumbnail switching.

### Step 5

- Add parallax and animation polish.

### Step 6

- Optimize mobile and image size.

---

## Important Rules

Do **not** create a webshop in prototype V1.

Do **not** invent extra pages.

Do **not** invent pricing.

Do **not** create login, cart, checkout, CMS, or admin panels.

Do **not** replace the storyboard style with generic ecommerce design.

The storyboard is the visual source of truth.

The user will replace placeholder assets manually later.
