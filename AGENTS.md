# AI / Agent Workflow Rules

This repo is intended to work well with AI coding agents and ChatGPT-assisted planning.

## Role split

### Andrew
- Creative director
- Final decision maker
- Runs tools and code locally
- Approves visual direction
- Gives updates and corrections

### AI assistant / coding agent
- Writes documentation
- Keeps project structure clean
- Generates prototype code
- Creates copy and presentation material
- Updates logs and decision records
- Avoids changing locked decisions unless instructed

## Source-of-truth order

When an agent is unsure, use this priority:

1. `01_concept/08_friday_prototype_spec.md`
2. `01_concept/03_sitemap_mvp_structure.md`
3. `01_concept/04_tech_stack_decision.md`
4. `05_logs/decision_log.md`
5. `README.md`

## Implementation rules

- Keep prototype static unless explicitly changed.
- Do not add React, Vue, Next, npm, backend, database, auth, or checkout without approval.
- Use semantic HTML.
- Use readable CSS variables.
- Keep JavaScript small and understandable.
- Product data should live in JSON.
- Inquiry flow first, checkout later.
- Mobile-first layout.
- Visual style should feel dark, warm, rustic, handmade, lively, slightly chaotic.

## Forbidden for Friday prototype

- Real payment integration
- User accounts
- Backend
- Admin panel
- Over-engineered framework setup
- Fake precision around stock/prices
- Sterile ecommerce template look

## Required for Friday prototype

- Home / Workshop page
- Originals / Gallery page
- Meet Manolis page
- Visit / Ask page
- Product categories
- Product cards
- Product detail modal or page
- WhatsApp/email inquiry CTA
- EN/DE-ready structure
- Responsive mobile layout
