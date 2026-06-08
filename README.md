# ManolisWoodWorkshop

Concept, design, documentation, and prototype project for a website / webstore MVP for **Local Art Workshop by Manolis Tsouris**, an olive wood artist from Crete.

## Project goal

Build a realistic two-week project outcome:

- **Stage 1:** website / gallery / contact / visit MVP
- **Stage 2:** inquiry-based catalogue with product categories and product detail flow
- **Friday prototype:** static HTML/CSS/JS prototype ready for vibecoding
- **Final presentation:** 15-minute team/client-style pitch

## Core concept

**When Madness Met Wood**  
**Don’t buy souvenirs. Buy originals.**

A dark, warm, living online workshop for Manolis Tsouris — showing his olive wood originals, his personality, and giving tourists a simple way to ask about pieces after they return home.

## Repo structure

```text
00_source/          Raw assignment docs, images, references, research notes
01_concept/         Source-of-truth markdown context files
02_design_figma/    Figma plan, moodboard notes, design references, exports
03_prototype/       Static prototype scaffold for Friday vibecoding
04_presentation/    Pitch outline, demo script, slide assets
05_logs/            Commit log, decisions, daily logs, agent run notes
06_agent_prompts/   Prompts and rules for AI-assisted vibecoding
```

## Current MVP stance

The first version is **not** a full checkout webshop.

It is an **inquiry-based catalogue** because the client has no fixed product inventory, no stable price list, no online payment setup, and shipping needs to be clarified manually.

## Prototype stack

- HTML
- CSS
- Vanilla JavaScript
- JSON product data
- Static hosting later: GitHub Pages / Netlify / Vercel

## Update rule

Whenever a major decision changes, update:

1. `05_logs/decision_log.md`
2. the relevant file in `01_concept/`
3. `05_logs/commit_log.md` after committing
4. `06_agent_prompts/friday_vibecode_master_prompt.md` if the implementation direction changes
