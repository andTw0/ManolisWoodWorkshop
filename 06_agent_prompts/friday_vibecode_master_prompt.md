# Friday Vibecode Master Prompt

Use this prompt with a coding agent when starting the prototype.

```text
You are working in the ManolisWoodWorkshop repo.

Read these files first:
- README.md
- AGENTS.md
- CONTEXT_INDEX.md
- 01_concept/03_sitemap_mvp_structure.md
- 01_concept/04_tech_stack_decision.md
- 01_concept/08_friday_prototype_spec.md
- 05_logs/decision_log.md

Build a static MVP website for Local Art Workshop by Manolis Tsouris.

Core concept:
“When Madness Met Wood”
“Don’t buy souvenirs. Buy originals.”

Required stack:
- HTML
- CSS
- Vanilla JavaScript
- JSON product data

Do not add React, Next, backend, database, checkout, auth, or npm unless explicitly instructed.

Required pages:
- index.html = Workshop / homepage
- gallery.html = Originals / inquiry catalogue
- about.html = Meet Manolis
- contact.html = Visit / Ask

Required features:
- Mobile-first responsive layout
- Dark, warm, rustic, handmade visual style
- Product gallery loaded from JSON
- Product categories
- Product cards
- Product detail or inquiry CTA
- WhatsApp inquiry button with prefilled message
- Email fallback
- EN/DE-ready text structure
- Contact / map placeholder

Important business logic:
This is not a full webshop yet. It is an inquiry-based catalogue because the client has no fixed inventory, no fixed price list, no payment setup, and unclear shipping rules.

Keep code simple, readable, and easy to explain in a 15-minute project presentation.
```
