# 04 — Tech Stack Decision

## Purpose of this file

This file documents the chosen technical direction for the prototype and the realistic future direction for the real client.

Use it in the presentation when explaining why the project does not start with a full checkout webshop.

---

# 1. Project constraints

The client/project situation has these constraints:

- limited budget
- no organized inventory
- no fixed price catalogue
- no existing online payment setup
- language barrier
- many photos, but content needs cleaning
- website must be mobile-friendly
- final system should be maintainable by Manolis without technical knowledge

These constraints make a full custom backend or full ecommerce checkout risky for the first sprint.

---

# 2. Chosen prototype stack

## For the 2-week project prototype

Use:

```text
HTML
CSS
Vanilla JavaScript
products.json
Static hosting / local demo
```

## Why this stack

- fastest to build
- easy to vibe-code
- no backend setup required
- no payment blocker
- full visual freedom
- easy to explain in presentation
- good enough for MVP validation
- works well for a small gallery/inquiry prototype

---

# 3. Prototype architecture

```text
Static HTML pages
→ shared CSS
→ shared JavaScript
→ product data from JSON
→ WhatsApp/email inquiry links
```

## Suggested file structure

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

# 4. Product data model

Use a simple JSON file for product examples.

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
  }
]
```

## Required fields

```text
id
title
category
description
image
availability
inquiryText
```

## Optional fields

```text
material
size
notes
featured
relatedIds
```

---

# 5. Inquiry flow

The first prototype should not include a real cart.

Use:

```text
Product card/detail
→ Ask about this piece
→ WhatsApp prefilled message
→ Email fallback
```

## WhatsApp message pattern

```text
Hello Manolis, I saw this piece on your website: [PRODUCT NAME]. Is this or something similar available for shipping?
```

## Email subject pattern

```text
Inquiry about [PRODUCT NAME]
```

---

# 6. Future real-client stack

For a real handover, recommend:

```text
WordPress + WooCommerce
```

or first:

```text
WordPress + inquiry catalogue plugin/custom post types
```

## Why WordPress later

- easier client handover
- editable pages/products
- common hosting support
- can grow into WooCommerce
- PayPal/Stripe plugins available
- easier long-term maintenance than custom static code

---

# 7. Why not full ecommerce now?

Do not build full checkout first because:

- product availability is unclear
- prices are negotiable
- shipping rules are undefined
- online payment is not set up
- each piece is handmade and unique
- client cannot yet maintain a product database

The first correct digital version is an **inquiry catalogue**.

---

# 8. Tech comparison table

| Stack | Good for | Problems | Decision |
|---|---|---|---|
| Custom HTML/CSS/JS | Fast prototype, strong design control | Not ideal for final client editing | Use for 2-week prototype |
| Webflow | Visual design, fast publishing | Paid, client editing still limited, ecommerce costs | Possible alternative |
| WordPress | Client-editable, realistic long-term | Setup/maintenance/security | Recommend for future |
| WooCommerce | Real checkout/shop | Needs inventory, prices, payment, shipping | Later phase |
| Shopify | Strong ecommerce | Monthly cost, less personal/custom, not ideal for inquiry-first | Not first choice |

---

# 9. Prototype requirements

The Friday prototype should support:

- responsive layout
- product/gallery grid
- product data structure
- inquiry CTA
- WhatsApp link
- email fallback
- EN/DE copy structure
- fast-loading images
- no backend dependency

---

# 10. Presentation explanation

Use this wording:

> For the prototype, I chose a custom static build because it is fast, flexible, and ideal for validating the visual direction and inquiry flow. For the real client handover, I would recommend WordPress with an inquiry catalogue first, and WooCommerce later once product inventory, payment, prices and shipping rules are defined.

---

# 11. Checklist

- [ ] Prototype stack selected
- [ ] Future stack explained
- [ ] No fake checkout in first MVP
- [ ] JSON product model prepared
- [ ] WhatsApp/email inquiry flow defined
- [ ] Tech decision usable in presentation

