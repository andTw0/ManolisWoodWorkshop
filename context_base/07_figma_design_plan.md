# 07 Figma Design Plan – Moodboard, Wireframes, Mockups

## Project

**ManolisWoodWorkshop**  
Figma design plan for the website and inquiry-based catalogue concept.

---

## Purpose of this file

This file defines exactly what needs to be created in Figma before Friday prototyping starts.

The goal is not to create a perfect final UI. The goal is to create enough visual direction, structure, and mockup material to justify the prototype and the team presentation.

---

## Figma file goal

By the end of the design phase, the Figma file should show:

- Research/moodboard
- Visual identity direction
- Two style variants
- Sitemap / structure overview
- Wireframes
- Desktop homepage mockup
- Mobile homepage mockup
- Desktop product/gallery mockup
- Mobile product/gallery mockup
- UI components for prototype

---

## Recommended Figma page structure

```text
01 Research & References
02 Moodboard
03 Style Variant A – Madness Meets Wood
04 Style Variant B – Warm Cretan Artisan
05 Sitemap & User Flow
06 Wireframes
07 Final Mockups
08 Components
09 Presentation Exports
```

---

## Page 01 – Research & References

### Goal

Collect the raw visual and contextual material that proves the design direction.

### Include

- Storefront photos
- Interior workshop photos
- Product/display photos
- “Don’t buy souvenirs” sign image
- Facebook screenshots
- TripAdvisor screenshots/review snippets
- Existing domain screenshot if useful

### Notes to write next to the images

```text
The shop does not feel like a generic souvenir store.
It feels dense, handmade, personal, chaotic, warm, dark, and memorable.
The website should translate this physical workshop experience into a digital format.
```

---

## Page 02 – Moodboard

### Goal

Create the core visual atmosphere.

### Moodboard blocks

```text
1. Real Shop Photos
2. Olive Wood / Material
3. Handmade Signs / Typography
4. Warm Dark Interior
5. Tourist Memory / Crete
6. Product Display Chaos
7. Color Palette
8. UI Inspiration
```

### Moodboard keywords

```text
dark
warm
rustic
olive wood
handmade
workshop
madness
originals
Crete
tourist memory
personal
not sterile
not normal ecommerce
controlled chaos
```

---

## Color palette

Use a palette inspired by the actual shop photos.

```css
--bg: #151412;
--bg-soft: #211d19;
--text: #f3e7d0;
--muted: #b8a98e;
--wood: #b8793b;
--wood-light: #d8a45f;
--accent: #d95f32;
--stone: #5d5a52;
```

### Color use

| Color | Use |
|---|---|
| Charcoal black | Main background, workshop cave feeling |
| Warm cream | Main text |
| Olive wood brown | Product cards, buttons, dividers |
| Terracotta/orange | Accent, CTA, hand-painted sign feeling |
| Dusty gray | Secondary surfaces, map/contact blocks |
| Warm yellow | Light/glow details |

---

## Typography direction

### Headline type

Should feel expressive, handmade, slightly rough, or poster-like.

Possible directions:

- Rough serif display font
- Hand-painted sign-inspired font
- Bold condensed display font

### Body type

Should stay readable and clean.

Possible directions:

- Inter
- Source Sans
- Work Sans
- Manrope
- Open Sans

### Font pairing rule

```text
Expressive headline + clean body font.
Never use two crazy fonts together.
```

---

## Page 03 – Style Variant A

# Madness Meets Wood

This is the main direction.

## Concept

A dark, warm, chaotic digital workshop inspired by Manolis’ real shop.

## Visual qualities

- Charcoal background
- Warm cream text
- Olive wood brown cards
- Terracotta/orange accent
- Rough sign typography
- Masonry image grid
- Big emotional photos
- Irregular labels
- Organic dividers
- Strong “workshop cave” feeling

## Main slogans

```text
When madness met wood.
Don’t buy souvenirs. Buy originals.
Every piece has its own madness.
```

## UI ideas

- Full-width hero image with dark overlay
- Large slogan typography
- Product cards like hanging labels
- Masonry gallery layout
- CTA blocks that feel like painted signs
- Warm glow around important elements

## Why this fits

This direction matches the real shop personality and the client requirement that the website should feel alive and unusual instead of like a sterile ecommerce template.

---

## Page 04 – Style Variant B

# Warm Cretan Artisan

This is the safer comparison variant.

## Concept

A calmer, cleaner handmade gallery website for tourists and gift buyers.

## Visual qualities

- Warm cream background
- Clean product grid
- Elegant typography
- Larger whitespace
- Softer colors
- More premium handmade feel
- Less chaotic

## Main slogans

```text
Handmade olive wood from Crete.
Original pieces from Manolis’ workshop.
Take a piece of Crete home.
```

## Why this exists

The assignment asks for at least two style variants. This version provides a safer comparison, but the main recommendation remains Variant A because it reflects Manolis’ personality more strongly.

---

## Page 05 – Sitemap & User Flow

### Navigation

```text
Workshop
Originals
Meet Manolis
Visit / Ask
EN / DE
```

### Sitemap

```text
Workshop / Home
├── Hero
├── Intro story
├── Featured originals
├── Gallery preview
├── Meet Manolis preview
├── Visit / Ask CTA
└── Footer

Originals / Gallery
├── Category filter
├── Product cards
├── Product detail modal/page
└── Inquiry CTA

Meet Manolis
├── Story
├── Workshop photos
├── Personality / process
└── CTA

Visit / Ask
├── Address
├── Map
├── WhatsApp
├── Email
├── Facebook
└── Contact form
```

### Main user flow

```text
Tourist remembers shop
→ Opens website
→ Recognizes the workshop vibe
→ Browses originals/gallery
→ Opens a product/piece
→ Clicks “Ask about this piece”
→ Sends WhatsApp or email inquiry
```

---

## Page 06 – Wireframes

## Required wireframes

Create rough grayscale wireframes first.

### Desktop homepage wireframe

```text
Header
Hero image + slogan
Intro text
Featured categories
Gallery preview
Meet Manolis block
Visit / Ask CTA
Footer
```

### Mobile homepage wireframe

```text
Mobile header
Hero
Stacked intro
Horizontal/stacked product cards
Gallery preview
Visit CTA
Footer
```

### Desktop product/gallery wireframe

```text
Header
Page intro
Category filters
Product card grid
Product detail modal/page
Inquiry CTA
Footer
```

### Mobile product/gallery wireframe

```text
Mobile header
Category filter chips
Single-column product cards
Product detail view
Sticky inquiry CTA if possible
```

---

## Page 07 – Final Mockups

## Required mockups

- Desktop homepage
- Mobile homepage
- Desktop gallery/product page
- Mobile gallery/product page

## Homepage section order

```text
1. Header / navigation
2. Hero: When Madness Met Wood
3. Slogan block: Don’t buy souvenirs. Buy originals.
4. Short intro story
5. Featured originals/categories
6. Inside the workshop gallery
7. Meet Manolis
8. Visit / Ask section
9. Footer
```

## Gallery/product section order

```text
1. Header
2. Page title: Originals from the Workshop
3. Category filters
4. Product cards
5. Product detail view/modal
6. Inquiry explanation
7. Visit/contact CTA
8. Footer
```

---

## Page 08 – Components

Create simple reusable components.

### Required components

```text
Header / nav
Language toggle
Primary button
Secondary button
Product card
Category filter chip
Image card
Slogan block
Contact CTA
Footer
```

### Product card content

Each card should include:

```text
Image
Category
Title
Short text
CTA: Ask about this piece
```

### Example product card

```text
Category: Sculptures
Title: Olive Wood Face
Text: One-of-a-kind carved olive wood piece from Crete.
CTA: Ask about this piece
```

---

## Page 09 – Presentation Exports

Export or prepare screenshots for the team presentation.

### Needed presentation images

- Moodboard screenshot
- Style Variant A screenshot
- Style Variant B screenshot
- Sitemap screenshot
- Desktop homepage mockup
- Mobile homepage mockup
- Gallery/product mockup
- Prototype preview screenshot after Friday

---

## Design rules

### Do

- Use real shop photos heavily
- Keep the site warm and personal
- Make the homepage emotionally strong
- Use product inquiry language instead of direct checkout language
- Make mobile layout a priority
- Keep structure clean underneath the chaos

### Don’t

- Make it look like Shopify default
- Add fake prices
- Pretend inventory is complete
- Over-design tiny details before the structure works
- Use too many fonts
- Make the gallery unreadable through visual chaos

---

## Tuesday checklist

- [ ] Create Figma file/pages
- [ ] Add real shop photos
- [ ] Add Facebook/TripAdvisor reference screenshots
- [ ] Build moodboard
- [ ] Define color palette
- [ ] Define typography direction
- [ ] Create Style Variant A
- [ ] Create Style Variant B
- [ ] Create homepage wireframe
- [ ] Create gallery/product wireframe

---

## Wednesday checklist

- [ ] Choose main style direction
- [ ] Create desktop homepage mockup
- [ ] Create mobile homepage mockup
- [ ] Create desktop gallery/product mockup
- [ ] Create mobile gallery/product mockup
- [ ] Create product card component
- [ ] Create CTA components
- [ ] Export design screenshots for presentation

---

## Locked recommendation

The main design direction should be:

# Madness Meets Wood

Reason:

It best captures Manolis’ actual shop personality: dark, warm, handmade, unusual, memorable, and not a normal souvenir/ecommerce store.
