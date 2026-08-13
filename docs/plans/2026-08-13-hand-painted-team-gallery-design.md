# Hand-painted Team Gallery Design

## Goal

Replace the shallow horizontal avatar strip with a visually substantial hand-painted team gallery: large portraits above centered names and roles, with a yellow, glasses-wearing advisor card.

## Visual direction

- Five original illustrated male portraits share one editorial watercolor-and-pencil language, visible paper grain, expressive brushwork, and mountain-field-note accents.
- Each participant receives a distinct restrained palette: mist blue, brick red, pine green, and violet grey.
- The advisor portrait uses ochre yellow as its dominant palette, includes glasses, and receives a stronger framed treatment.
- Portraits are illustrative placeholders rather than likeness claims.

## Layout

- Desktop: five equal portrait cards in one row. The portrait occupies most of the card; name and role sit below it.
- Tablet: three-plus-two responsive grid.
- Mobile: two columns; the advisor card spans the final row and remains visually prominent.
- Decorative numbering becomes a small editorial index, not a dominant table cell.

## Boundaries

- Keep the hero, material cards, repository links, copy, and deployment workflow unchanged.
- Replace the five existing avatar files non-destructively with versioned hand-painted assets and update HTML references.
- Update third-party notices to remove the obsolete DiceBear attribution and document that the new portraits are AI-generated illustrations.
- Extend the contract test to assert the gallery structure, advisor theme hook, and new asset names.

## Verification

- Contract test and SHA-256 manifest validation pass.
- Desktop and 390 px mobile screenshots show large portraits above names without overflow.
- The advisor is visibly yellow and wears glasses.
- GitHub Pages deployment succeeds and the live page returns HTTP 200.
