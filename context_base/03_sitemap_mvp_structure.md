# 03 — Sitemap & MVP Structure

## Purpose of this file

This file defines the website structure for Stage 1 and Stage 2.

Use it as the navigation and page-architecture truth base during Figma and coding.

---

# 1. MVP navigation

Recommended navigation labels:

```text
Workshop
Originals
Meet Manolis
Visit / Ask
EN / DE
```

These labels fit the brand better than generic ecommerce labels.

## Why not “Shop” first?

Because the first version is an inquiry catalogue, not a full checkout webshop.

“Originals” feels more aligned with the slogan:

> Don’t buy souvenirs. Buy originals.

---

# 2. Page structure

## Page 1 — Home / Workshop

Purpose:

- establish personality
- show the real shop vibe
- explain handmade originals
- guide users to gallery or contact

Sections:

```text
Header / Navigation
Hero
Short intro
Featured originals
Workshop gallery preview
Meet Manolis preview
Visit / Ask CTA
Footer
```

### Hero requirements

Use the storefront or strong shop image.

Text:

```text
When madness met wood.
Don’t buy souvenirs. Buy originals.
Handmade olive wood originals from Crete.
```

CTA buttons:

```text
Explore Originals
Ask About a Piece
Visit the Workshop
```

---

## Page 2 — Originals / Gallery

Purpose:

- show categories and product/work examples
- let users browse pieces
- enable inquiry per item

Sections:

```text
Gallery hero / intro
Category filters
Product grid
Product detail modal or page
Inquiry CTA
Footer
```

### Category suggestions

```text
Sculptures
Masks & Faces
Bowls & Vessels
Kitchen Tools
Jewelry & Small Pieces
Wall Art
Original Oddities
```

### Product card structure

Each product card should include:

```text
Image
Category
Title
Short description
CTA: Ask about this piece
```

### Product detail structure

```text
Large image
Title
Category
Description
Availability note
Shipping/price note
CTA: Ask about this piece
CTA: Request similar piece
Related pieces
```

### Product detail note

Use consistently:

```text
Each piece is handmade and unique. Availability, price, and shipping are confirmed personally.
```

---

## Page 3 — Meet Manolis

Purpose:

- make the artist visible
- communicate personality
- explain the workshop and olive wood
- avoid the site feeling like anonymous ecommerce

Sections:

```text
Hero / portrait or workshop image
Short story
Workshop philosophy
Photo block
Quote/slogan block
CTA to visit or ask
Footer
```

### Possible copy angle

```text
Manolis does not make souvenirs. He carves originals — faces, bowls, creatures, tools and strange little objects from olive wood, each with its own character.
```

---

## Page 4 — Visit / Ask

Purpose:

- give all contact paths
- support physical visits
- support product inquiries

Sections:

```text
Contact intro
WhatsApp CTA
Email CTA
Phone placeholder
Address
Map embed or placeholder
Facebook link
TripAdvisor link/reference
Contact form mockup
Footer
```

### Contact CTA copy

```text
Saw something you like?
Send a message with the piece name or a screenshot. Availability, price and shipping can be discussed personally.
```

---

# 3. Optional sections if time allows

## Reviews / social proof

Can be added to homepage or Visit page:

```text
Loved by travelers in Crete
TripAdvisor / Facebook reference
```

## Instagram/Facebook feed placeholder

Nice-to-have only. Do not prioritize over gallery/contact.

## Video/photo gallery

Nice-to-have only.

---

# 4. Stage mapping

## Stage 1 — Website / Gallery

Must include:

```text
Home / Workshop
Originals / Gallery basic view
Meet Manolis or About section
Visit / Ask contact page
Mobile-friendly layout
EN/DE structure
```

## Stage 2 — Catalogue / inquiry shop

Must include:

```text
Categories
Product cards
Product detail view/modal
WhatsApp inquiry CTA
Email inquiry fallback
No-price / price-on-request logic
```

---

# 5. User flows

## Flow A — Returning tourist

```text
Homepage
→ recognizes shop/slogan
→ Originals
→ clicks product
→ Ask about this piece
→ WhatsApp/email inquiry
```

## Flow B — Tourist planning visit

```text
Homepage
→ Meet Manolis
→ Visit / Ask
→ map/address
→ Facebook/TripAdvisor
```

## Flow C — Gift buyer

```text
Homepage
→ Originals
→ category filter
→ product detail
→ inquiry
```

---

# 6. Prototype file structure

Use this for the Friday static prototype:

```text
manolis-site/
├── index.html
├── gallery.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── products.json
└── assets/
    ├── logo/
    ├── photos/
    ├── products/
    ├── textures/
    └── icons/
```

---

# 7. Component list

Build these components in Figma and code:

```text
Navbar
Language toggle
Hero section
CTA buttons
Section heading
Product card
Product detail modal/page
Category filter
Gallery grid
Story block
Contact CTA
Map/address block
Footer
```

---

# 8. Friday build priority

Build in this order:

```text
1. Global layout and CSS variables
2. Header/navigation
3. Homepage hero
4. Homepage sections
5. Gallery grid
6. Product cards
7. Product detail/inquiry flow
8. Contact page
9. Mobile responsiveness
10. Visual polish
```

No polish before all pages exist.

---

# 9. Checklist

- [ ] Navigation labels locked
- [ ] Homepage sections defined
- [ ] Gallery/product structure defined
- [ ] Product inquiry flow defined
- [ ] Contact/visit path clear
- [ ] Stage 1 and Stage 2 separated
- [ ] Friday file structure ready

