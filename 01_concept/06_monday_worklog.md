# 06 Monday Worklog – Project Foundation

## Project

**ManolisWoodWorkshop**  
Website and inquiry-based webstore concept for **Local Art Workshop by Manolis Tsouris**.

---

## Purpose of this file

This file documents the Monday project foundation decisions. It is meant to prove project progression and act as a working reference for the next steps.

Monday is not for final design or coding. Monday is for locking the concept, structure, MVP scope, and Friday prototype target.

---

## Assignment context

The project is based on a real client scenario:

- Manolis Tsouris is an olive wood artist from Crete.
- His physical shop has strong tourist appeal.
- He has Facebook and a domain, but no functional web presence.
- Tourists regularly ask if he can ship products abroad.
- The project should combine research, concept, design, and a possible MVP website/webshop.

The official assignment phases are:

1. **Phase 1 – Research & Concept**
2. **Phase 2 – Design**
3. **Phase 3 – MVP Implementation**
4. **Phase 4 – Webshop & Presentation**

This week focuses on **Phase 1 and Phase 2**, with the first prototype starting on Friday.

---

## Core project sentence

A dark, warm, living online workshop for Manolis Tsouris — showing his olive wood originals, his personality, and giving tourists a simple way to ask about pieces after they return home.

---

## Main concept

# When Madness Met Wood

Supporting slogan:

# Don’t buy souvenirs. Buy originals.

This slogan direction fits the existing visual identity of the shop and the handmade/non-generic character of the products.

---

## Client situation

Manolis has:

- An existing domain: `eloslocalart.com`
- An existing Facebook page
- A real physical shop in Crete
- Many photos and visual material
- Strong tourist interest
- No structured online product inventory
- No clear online payment setup
- Mostly cash-based business behavior
- Greek language and basic English, but no German/French
- Limited budget
- A wish for a website that feels alive, unusual, and not like a standard webshop

---

## Main problem

Manolis already has **offline attention**, but he loses potential return customers because there is no simple online system for:

- Finding the workshop after the trip
- Browsing examples of his work
- Asking about available pieces
- Requesting shipping
- Contacting him directly

---

## Main opportunity

The website should turn tourist memory into later inquiries.

Many visitors discover the shop while travelling. After returning home, they may want to buy something, recommend the place, or find it again. The website should make that easy.

---

## Target audience summary

### Primary audience

International tourists who already visited the shop and want to find it again or ask about pieces.

### Secondary audience

Tourists planning a trip to Crete who may visit the workshop physically.

### Third audience

People looking for handmade olive wood gifts, sculptures, bowls, or decorative pieces.

---

## MVP decision

The first version should **not** be a full checkout webshop.

The correct MVP is an **inquiry-based catalogue**.

### Stage 1 MVP

- Homepage with personality
- Product/gallery overview
- About/Manolis story section
- Contact options
- Visit/location section
- Map/address placeholder
- EN/DE language structure
- Mobile-first layout

### Stage 2 MVP

- Product categories
- Product cards
- Product detail modal or page
- “Ask about this piece” CTA
- WhatsApp inquiry link
- Email inquiry fallback
- Availability/price/shipping handled personally

---

## Why inquiry-based instead of full checkout?

A full checkout is not realistic for the first MVP because:

- There is no structured product inventory yet.
- Products are handmade and unique.
- Prices are negotiable or need confirmation.
- Shipping rules are not defined.
- Payment setup is missing.
- The client likely needs a simple, low-maintenance system first.

Therefore, the first product system should help visitors ask about pieces instead of pretending the business is ready for automated ecommerce.

---

## Locked navigation structure

```text
Workshop
Originals
Meet Manolis
Visit / Ask
EN / DE
```

---

## Locked page structure

```text
Home / Workshop
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
├── Workshop atmosphere
├── Photos
└── CTA to visit/contact

Visit / Ask
├── Address
├── Map placeholder
├── WhatsApp
├── Email
├── Facebook
└── Contact form mockup
```

---

## Visual direction

The visual direction should be:

- Dark
- Warm
- Rustic
- Handmade
- Slightly chaotic
- Alive
- Personal
- Not sterile
- Not generic ecommerce

The shop should feel like a **digital workshop**, not a normal online store.

---

## Tech-stack decision

### Prototype stack

```text
HTML
CSS
Vanilla JavaScript
JSON product data
Static hosting
```

### Reason

This is the fastest and clearest way to create a working prototype by Friday. It keeps visual freedom high and avoids backend/payment complexity.

### Future real-client stack

```text
WordPress + WooCommerce
or
WordPress + inquiry catalogue plugin/custom fields
```

### Reason

A real handover needs to be maintainable by a non-technical client. A static prototype is good for presentation, but not ideal for long-term self-management.

---

## Friday prototype target

By Friday, start building a working static prototype with:

- `index.html`
- `gallery.html`
- `about.html`
- `contact.html`
- `styles.css`
- `script.js`
- `products.json`
- `/assets`

Required functionality:

- Responsive navigation
- Strong homepage hero
- Product/gallery cards
- Product categories
- Product detail view
- WhatsApp inquiry button
- Email inquiry fallback
- Contact/map placeholder
- EN/DE text structure
- Mobile-first layout

---

## Monday deliverables

- [ ] Confirm existing truth-context files
- [ ] Add Monday worklog
- [ ] Confirm concept sentence
- [ ] Confirm sitemap
- [ ] Confirm MVP scope
- [ ] Confirm tech stack
- [ ] Prepare Figma design plan
- [ ] Prepare Friday prototype specification

---

## Current decision state

| Topic | Decision |
|---|---|
| Concept | When Madness Met Wood |
| Supporting slogan | Don’t buy souvenirs. Buy originals. |
| Product strategy | Inquiry catalogue first |
| Checkout | Roadmap item, not first MVP |
| Prototype stack | Static HTML/CSS/JS + JSON |
| Main audience | International tourists |
| Main design style | Dark, rustic, warm, handmade, alive |
| Friday goal | Start working prototype |

---

## Notes for presentation

The project should be presented as a realistic progression:

```text
messy real client situation
→ research insight
→ target audience
→ MVP decision
→ visual concept
→ wireframes/mockups
→ first prototype
→ future webshop roadmap
```

This shows that the project is not just a website design, but a structured client solution.
