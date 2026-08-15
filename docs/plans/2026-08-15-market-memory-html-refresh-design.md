# Market Memory HTML Refresh

## Goal

Refresh the existing Quantum Alpha materials gate with the approved market-to-quantum-memory visual while preserving the current single-page HTML architecture, team gallery, and four material links.

## Chosen approach

Use the existing `index.html` and `assets/gate.css` without introducing a framework or a new page. Add one local hero asset derived from the poster, replace only the hero copy and figure, and add a compact evidence strip containing `0.8327`, `7/9`, and `4096`. Keep the roster and material cards structurally unchanged.

The new background remains deliberately pale: an ivory veil sits above the market-memory image so the page retains the readability and lightness of the existing Gate. The hero figure uses a sharper crop of the same visual to create one coherent identity rather than a second competing illustration.

## Claim boundaries

The page identifies `0.8327` as Development Pilot QLIKE, `7/9` as zero-layer fallback cells, and `4096` as returned Quafu Baihua shots. It explicitly describes the hardware result as a frozen single-step diagnostic, not an end-to-end forecast. No SOTA or quantum-advantage claim is added.

## Compatibility and verification

Existing responsive breakpoints, accessible alt text, GitHub link, portraits, PPT/video/demo links, and Feishu document remain intact. Contract tests will be updated to check the new hero, evidence strip, scope text, and asset existence. The page will be checked in desktop and mobile browser sizes, and the existing standalone-HTML build will be rerun if available.
