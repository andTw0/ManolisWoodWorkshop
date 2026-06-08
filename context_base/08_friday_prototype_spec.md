# 08 Friday Prototype Spec – Static MVP Build

## Project

**ManolisWoodWorkshop**  
Static MVP prototype specification for Friday vibecoding.

---

## Purpose of this file

This file is the technical and content specification for the first working prototype.

It should be used as context for coding tools, AI code assistants, and the final project build.

The goal is to avoid random coding decisions on Friday.

---

## Prototype goal

Build a responsive static MVP website for **Local Art Workshop by Manolis Tsouris**.

The prototype should demonstrate:

- Strong visual personality
- Homepage with workshop atmosphere
- Product/gallery catalogue
- Inquiry-based product flow
- Contact/visit information
- EN/DE language structure
- Mobile-first layout

The prototype does **not** need a real backend, real checkout, real payment processing, or real CMS.

---

## Concept

# When Madness Met Wood

Supporting slogan:

# Don’t buy souvenirs. Buy originals.

The website should feel like a dark, warm, handmade digital workshop — not a sterile ecommerce template.

---

## Prototype stack

```text
HTML
CSS
Vanilla JavaScript
JSON product data
Static assets
```

No framework required for the first version.

---

## Required file structure

```text
prototype/
├── index.html
├── gallery.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── products.json
└── assets/
    ├── images/
    │   ├── hero-storefront.jpg
    │   ├── sign-dont-buy-souvenirs.jpg
    │   ├── workshop-interior-01.jpg
    │   └── workshop-interior-02.jpg
    ├── products/
    │   ├── face-sculpture-01.jpg
    │   ├── olive-bowl-01.jpg
    │   ├── kitchen-tool-01.jpg
    │   ├── wall-art-01.jpg
    │   └── gift-piece-01.jpg
    ├── textures/
    │   └── wood-grain.jpg
    └── icons/
```

---

## Required pages

## 1. `index.html` – Workshop / Home

### Purpose

Introduce the workshop, personality, and main inquiry flow.

### Required sections

```text
Header / Navigation
Hero section
Intro story
Slogan block
Featured originals/categories
Workshop gallery preview
Meet Manolis preview
Visit / Ask CTA
Footer
```

### Hero content

```text
When madness met wood.

Handmade olive wood originals from Crete.
Step inside Manolis’ workshop and ask about unique pieces shipped from the island.
```

### Hero CTA buttons

```text
Explore Originals
Ask About a Piece
Visit the Workshop
```

---

## 2. `gallery.html` – Originals / Catalogue

### Purpose

Show product categories and sample pieces.

### Required sections

```text
Header / Navigation
Page intro
Category filters
Product card grid
Product detail modal or detail section
Inquiry explanation
Footer
```

### Page title

```text
Originals from the Workshop
```

### Intro copy

```text
Every piece is handmade and unique. Availability, price, and shipping are confirmed personally.
```

---

## 3. `about.html` – Meet Manolis

### Purpose

Show that Manolis himself is the brand.

### Required sections

```text
Header / Navigation
About hero
Short story
Workshop atmosphere block
Photo gallery
CTA to visit/contact
Footer
```

### About copy draft

```text
Manolis Tsouris creates olive wood pieces in Crete with humor, patience, and a little madness. His workshop is not a normal souvenir shop — it is a place full of faces, bowls, creatures, signs, stories, and original handmade objects.
```

---

## 4. `contact.html` – Visit / Ask

### Purpose

Make it easy to visit or ask about a piece.

### Required sections

```text
Header / Navigation
Contact intro
WhatsApp CTA
Email CTA
Contact form mockup
Address/map placeholder
Facebook link
Footer
```

### Contact copy draft

```text
Saw something you like? Send a message and ask what is available. You can also send a screenshot or describe the kind of piece you are looking for.
```

---

## Navigation

Use this navigation:

```text
Workshop
Originals
Meet Manolis
Visit / Ask
EN / DE
```

### Mobile navigation

- Hamburger menu or stacked mobile nav
- Large readable links
- No tiny desktop nav squeezed onto mobile

---

## Product categories

Use these first categories:

```text
Sculptures
Masks & Faces
Bowls & Vessels
Kitchen Tools
Wall Art
Gift Pieces
Original Oddities
```

---

## `products.json` structure

```json
[
  {
    "id": "face-sculpture-01",
    "title": "Olive Wood Face Sculpture",
    "category": "Sculptures",
    "description": "A one-of-a-kind carved olive wood face from Manolis' workshop.",
    "image": "assets/products/face-sculpture-01.jpg",
    "availability": "Ask for availability",
    "inquiryText": "Hello Manolis, I saw the Olive Wood Face Sculpture on your website. Is this or something similar available for shipping?"
  },
  {
    "id": "olive-bowl-01",
    "title": "Olive Wood Bowl",
    "category": "Bowls & Vessels",
    "description": "Handmade olive wood bowl with natural grain and organic shape.",
    "image": "assets/products/olive-bowl-01.jpg",
    "availability": "Ask for availability",
    "inquiryText": "Hello Manolis, I saw the Olive Wood Bowl on your website. Is this or something similar available for shipping?"
  },
  {
    "id": "kitchen-tool-01",
    "title": "Olive Wood Kitchen Tool",
    "category": "Kitchen Tools",
    "description": "Functional handmade olive wood object for the kitchen, shaped by hand in Crete.",
    "image": "assets/products/kitchen-tool-01.jpg",
    "availability": "Ask for availability",
    "inquiryText": "Hello Manolis, I saw the Olive Wood Kitchen Tool on your website. Is this or something similar available for shipping?"
  },
  {
    "id": "wall-art-01",
    "title": "Olive Wood Wall Piece",
    "category": "Wall Art",
    "description": "A decorative original piece made from olive wood, shaped by the natural character of the material.",
    "image": "assets/products/wall-art-01.jpg",
    "availability": "Ask for availability",
    "inquiryText": "Hello Manolis, I saw the Olive Wood Wall Piece on your website. Is this or something similar available for shipping?"
  },
  {
    "id": "gift-piece-01",
    "title": "Small Olive Wood Gift Piece",
    "category": "Gift Pieces",
    "description": "A small handmade olive wood original, suitable as a personal gift from Crete.",
    "image": "assets/products/gift-piece-01.jpg",
    "availability": "Ask for availability",
    "inquiryText": "Hello Manolis, I saw the Small Olive Wood Gift Piece on your website. Is this or something similar available for shipping?"
  }
]
```

---

## Inquiry flow

### Product CTA label

```text
Ask about this piece
```

### Secondary CTA label

```text
Request something similar
```

### Product note

```text
Each piece is handmade and unique. Availability, price, and shipping are confirmed personally.
```

### WhatsApp behavior

The product button should generate a prefilled WhatsApp message using the product title.

Example message:

```text
Hello Manolis, I saw this piece on your website: "Olive Wood Bowl". Is this or something similar available for shipping?
```

### Email behavior

The email fallback should use:

```text
Subject: Inquiry about [Product Title]
Body: Hello Manolis, I saw [Product Title] on your website. Is this or something similar available for shipping?
```

---

## Language structure

The MVP must support an EN/DE structure.

For Friday, the language toggle can be simple:

- Either static buttons with placeholder behavior
- Or basic JavaScript text switching for important labels
- Or duplicated copy blocks hidden/shown by class

Do not build a complex translation system.

### Required visible labels

| English | German |
|---|---|
| Workshop | Werkstatt |
| Originals | Unikate |
| Meet Manolis | Manolis kennenlernen |
| Visit / Ask | Besuch / Anfrage |
| Ask about this piece | Zu diesem Stück anfragen |
| Every piece is unique | Jedes Stück ist ein Unikat |

---

## CSS visual direction

Start with these variables:

```css
:root {
  --bg: #151412;
  --bg-soft: #211d19;
  --text: #f3e7d0;
  --muted: #b8a98e;
  --wood: #b8793b;
  --wood-light: #d8a45f;
  --accent: #d95f32;
  --stone: #5d5a52;
  --max-width: 1180px;
  --radius: 18px;
}
```

### Layout style

- Dark background
- Warm text
- Large images
- Masonry-like gallery if possible
- Organic card shapes, but keep readable
- Strong mobile layout
- Big CTAs
- Avoid tiny text

---

## JavaScript requirements

### Minimum JS

```text
Load product data from products.json
Render product cards
Filter by category
Open product detail modal or detail section
Generate WhatsApp inquiry link
Generate email inquiry link
Basic language toggle if time allows
Mobile nav toggle if needed
```

### Nice-to-have JS

```text
Masonry layout enhancement
Scroll reveal animations
Image lightbox
Saved selected product in URL hash
```

Only add nice-to-have features after the core pages work.

---

## Build order for Friday

Follow this order exactly:

```text
1. Create files and folders
2. Add CSS variables and reset
3. Build header/navigation
4. Build homepage hero
5. Build homepage sections
6. Build gallery page layout
7. Add products.json
8. Load/render product cards with JS
9. Add category filters
10. Add product detail modal/page
11. Add WhatsApp/email inquiry links
12. Build about page
13. Build contact page
14. Add mobile CSS
15. Test all pages locally
16. Deploy to test link if time allows
```

Do not polish before step 11 works.

---

## Friday success criteria

The prototype is successful if:

- The homepage opens and feels like the workshop.
- The gallery shows sample products.
- Product cards have inquiry buttons.
- WhatsApp/email inquiry links work or are visibly mocked.
- Contact/visit page exists.
- Mobile view is not broken.
- The project can be demonstrated to the team as a first MVP direction.

---

## What not to build on Friday

Do not build:

- Real checkout
- Stripe integration
- PayPal integration
- User accounts
- Admin backend
- Real CMS
- Complex multilingual routing
- Perfect SEO
- Final legal pages
- Full product inventory system

These belong to the roadmap, not the Friday prototype.

---

## Prompt for AI coding assistant

Use this prompt when starting vibecoding:

```text
We are building a static MVP website for “Local Art Workshop by Manolis Tsouris”, an olive wood artist from Crete.

The website must feel rustic, handmade, warm, lively, slightly crazy, and not like a sterile ecommerce template. Core slogan: “When madness met wood.” Supporting slogan: “Don’t buy souvenirs. Buy originals.”

Build a responsive static site using HTML, CSS, and vanilla JavaScript.

Required pages:
- Home / Workshop
- Originals / Gallery
- Meet Manolis
- Visit / Ask

Required features:
- Mobile-first responsive design
- EN/DE language toggle structure
- Product gallery loaded from products.json
- Product categories
- Product detail modal or detail page
- Inquiry-based shop flow, not checkout
- WhatsApp inquiry button with prefilled product message
- Email inquiry fallback
- Contact info section
- Map/address placeholder
- Social links placeholder
- Fast-loading structure

Do not build real payment checkout yet.
Do not use heavy frameworks.
Keep the code clean and easy to explain in a school/client presentation.

Visual direction:
- dark warm charcoal background
- olive wood brown
- warm cream text
- terracotta accent
- organic shapes
- rough handmade feeling
- image-heavy layout
- large expressive hero section
```

---

## Final prototype statement for presentation

Use this wording:

```text
The first MVP is not a full automated webshop. Because the products are handmade, unique, and not yet structured into a fixed inventory with prices and shipping rules, the correct first step is an inquiry-based catalogue. Visitors can explore Manolis’ originals, recognize the workshop atmosphere, and ask directly about available pieces or similar works. The checkout system can be added later once inventory, payment, and shipping processes are defined.
```
