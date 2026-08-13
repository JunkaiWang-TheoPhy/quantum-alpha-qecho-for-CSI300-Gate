# Hand-painted Team Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive five-person hand-painted portrait gallery with large portraits above names and a yellow, glasses-wearing advisor card.

**Architecture:** Generate five project-local raster portraits with one consistent art direction, then refactor only the roster HTML/CSS to consume them. Contract tests lock structure, role semantics, asset membership, and the advisor styling hook; existing Pages deployment remains unchanged.

**Tech Stack:** Static HTML5, CSS3 responsive grid, Node.js contract test, PNG image assets, GitHub Pages.

## Global Constraints

- Preserve all existing repository and material-folder destinations.
- Do not reintroduce `Q-ECHO` or `清华大学物理系`.
- Portraits must remain explicitly illustrative, not claimed likenesses.
- Advisor portrait must use a yellow theme and glasses.

---

### Task 1: Lock the gallery contract

**Files:**
- Modify: `tests/gate_contract.mjs`

**Interfaces:**
- Consumes: `index.html` and project-local portrait assets.
- Produces: assertions for `.portrait-gallery`, five `.portrait-card` entries, `.advisor-card`, and five versioned PNG files.

- [ ] **Step 1:** Add assertions for gallery classes, exactly five portrait cards, advisor classes, portrait labels, and versioned hand-painted assets.
- [ ] **Step 2:** Run `node tests/gate_contract.mjs` and confirm it fails before implementation.
- [ ] **Step 3:** Retain every existing navigation and forbidden-copy assertion.

### Task 2: Generate and validate portraits

**Files:**
- Create: `assets/portrait-zhang-hongfei-v2.png`
- Create: `assets/portrait-wu-zhenan-v2.png`
- Create: `assets/portrait-fang-yice-v2.png`
- Create: `assets/portrait-wang-junkai-v2.png`
- Create: `assets/portrait-luo-di-v2.png`

**Interfaces:**
- Consumes: the approved watercolor-and-pencil visual direction.
- Produces: five square, consistent, text-free male portrait illustrations; the advisor output visibly includes glasses and ochre yellow.

- [ ] **Step 1:** Generate each portrait with consistent composition, paper texture, mountain-sketch details, and unique palette.
- [ ] **Step 2:** Inspect all five images and reject any output with text, watermark, malformed faces, or inconsistent framing.
- [ ] **Step 3:** Copy the selected outputs into `assets/` under versioned filenames.

### Task 3: Refactor roster markup and styling

**Files:**
- Modify: `index.html`
- Modify: `assets/gate.css`
- Modify: `THIRD_PARTY_NOTICES.md`

**Interfaces:**
- Consumes: five versioned portraits from Task 2.
- Produces: accessible portrait gallery cards with image, name, role, and editorial number.

- [ ] **Step 1:** Replace `.people/.person` markup with `.portrait-gallery/.portrait-card`, placing the image first and identity copy below it.
- [ ] **Step 2:** Implement a five-column desktop grid, three-plus-two tablet grid, and two-column mobile grid with advisor emphasis.
- [ ] **Step 3:** Apply ochre yellow framing and label styling to `.advisor-card`.
- [ ] **Step 4:** Replace obsolete DiceBear attribution with an AI-generated illustrative portrait notice.

### Task 4: Verify, publish, and inspect

**Files:**
- Modify: `SHA256SUMS.txt`

**Interfaces:**
- Consumes: final site files.
- Produces: verified hashes, passing test, deployed Pages build, and desktop/mobile visual evidence.

- [ ] **Step 1:** Run `node tests/gate_contract.mjs` and require PASS.
- [ ] **Step 2:** Rebuild `SHA256SUMS.txt` and verify it with `shasum -a 256 -c SHA256SUMS.txt`.
- [ ] **Step 3:** Inspect desktop and 390 px mobile renderings for hierarchy, cropping, overflow, and advisor differentiation.
- [ ] **Step 4:** Commit, push, wait for Pages success, and verify the live URL returns HTTP 200.
