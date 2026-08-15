# Feishu Cover Poster Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone HTML poster that migrates the Feishu document's content skeleton and visual tone without touching the live Gate or any existing poster file.

**Architecture:** One self-contained `poster-feishu-cover.html` references one new WebP hero and the existing five portraits. A Node contract checks canvas, migrated headings, evidence, claim boundaries, team count, and the absence of Q-SWITCH.

**Tech Stack:** Semantic HTML5, inline CSS, existing raster assets, Node.js contract test, Playwright CLI screenshots.

## Global Constraints

- Create only new poster-specific files.
- Do not modify `index.html`, `assets/gate.css`, or any existing poster.
- Use an 800 × 2000 screen canvas and an 800 × 2000 mm print page.
- Q-SWITCH must not appear.
- Keep claims within the frozen Pilot and Quafu H1 evidence.

### Task 1: Add the contract and assets

**Files:**
- Create: `tests/feishu_cover_poster_contract.mjs`
- Create: `assets/feishu-cover-market-memory.webp`

- [ ] Write assertions for the canvas, four migrated headings, `0.8327`, `7/9`, `4096`, five portraits, scope language, and absence of Q-SWITCH.
- [ ] Run the contract and confirm it fails because the HTML file is absent.
- [ ] Copy and compress the approved hero under the unique asset name.

### Task 2: Build and verify the poster

**Files:**
- Create: `poster-feishu-cover.html`

- [ ] Implement the fixed-ratio document-cover layout with inline CSS.
- [ ] Run the Node contract.
- [ ] Capture exact 800 × 2000 and scaled mobile previews with Playwright.
- [ ] Verify no overflow or browser console errors.
- [ ] Commit only the new poster-specific files and design records.
