# Market Memory HTML Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the existing Quantum Alpha materials gate with the approved pale market-to-quantum-memory hero while preserving its current HTML structure, team gallery, and four material links.

**Architecture:** Keep the static `index.html + assets/gate.css` architecture. Add one poster-derived local image, replace the hero copy and figure in place, and extend the existing `meta-strip` with three evidence pills and one concise scope note.

**Tech Stack:** Semantic HTML5, responsive CSS, Node.js contract tests, existing single-file HTML builder.

## Global Constraints

- Make the smallest practical change; do not introduce a framework or new runtime dependency.
- Preserve all five portrait cards and all four material destinations.
- Show `0.8327`, `7/9`, and `4096` with explicit evidence labels.
- Describe hardware as a frozen single-step diagnostic, not an end-to-end forecast.
- Keep the background pale enough for readable Chinese and mobile rendering.
- Preserve the user's untracked `dist/`, `tools/`, and `tests/single_html_contract.mjs` work.

---

### Task 1: Freeze the refreshed Gate contract

**Files:**
- Modify: `tests/gate_contract.mjs`

**Interfaces:**
- Consumes: `index.html` and files under `assets/`.
- Produces: an executable contract for the new title, evidence strip, claim boundary, and local background asset.

- [ ] **Step 1: Replace the old hero assertion with the new contract**

Assert the exact title `让市场路径进入量子记忆`, the hook `THE MARKET REMEMBERS`, the values `0.8327`, `7/9`, and `4096`, the phrases `Development Pilot` and `冻结单步诊断`, and the asset `assets/market-memory-hero.png`. Retain the existing portrait and material-link assertions.

- [ ] **Step 2: Run the contract and verify it fails against the old page**

Run: `node tests/gate_contract.mjs`

Expected: FAIL because the new hero title is absent.

- [ ] **Step 3: Commit the red contract**

```bash
git add tests/gate_contract.mjs
git commit -m "test: define market memory gate contract"
```

### Task 2: Implement and visually verify the minimal HTML refresh

**Files:**
- Modify: `index.html`
- Modify: `assets/gate.css`
- Create: `assets/market-memory-hero.png`
- Modify: `SHA256SUMS.txt`

**Interfaces:**
- Consumes: the poster hero at `QuantumBFS/poster/quantum_alpha_final/assets/hero_market_memory.png` from the poster worktree.
- Produces: the existing responsive Gate with a new hero, pale fixed background, three evidence pills, and unchanged roster/material sections.

- [ ] **Step 1: Copy the approved hero asset**

Copy the poster hero to `assets/market-memory-hero.png` without deleting or replacing any existing asset.

- [ ] **Step 2: Replace only the hero content in `index.html`**

Use `让市场路径进入量子记忆` as the `h1`, `THE MARKET REMEMBERS` as the kicker, and a short description of five-day causal paths, Q-ECHO-V memory, QFI geometry, and Q-SWITCH fallback. Add three `.evidence-pill` elements inside the existing `.meta-strip` and a `.scope-note` stating `Development Pilot；真机证据为冻结单步诊断，不是端到端五步预测。` Replace the wanderer image with `assets/market-memory-hero.png` and update its alt text and caption.

- [ ] **Step 3: Append minimal CSS overrides**

Change the body background to the local hero with an ivory veil, make the hero figure use an upright scientific crop, add grid styling for `.evidence-pill`, and stack the pills at the existing mobile breakpoint. Do not change roster or material-card selectors.

- [ ] **Step 4: Run contract and standalone checks**

Run: `node tests/gate_contract.mjs`

Run: `node tools/build_single_html.mjs`

Run: `node tests/single_html_contract.mjs`

Expected: all commands exit `0`; standalone HTML contains no external CSS or image dependency.

- [ ] **Step 5: Update checksums and inspect responsive output**

Regenerate `SHA256SUMS.txt` for tracked delivery files. Serve the repository locally, capture desktop `1440 × 1000` and mobile `390 × 844` screenshots, and verify title contrast, no horizontal overflow, all five portraits, and all four material cards.

- [ ] **Step 6: Commit the implementation**

```bash
git add index.html assets/gate.css assets/market-memory-hero.png SHA256SUMS.txt
git commit -m "feat: bring market memory visual into Gate"
```
