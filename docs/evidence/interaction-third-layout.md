# Plaza interaction bar — equal thirds variant

## Release scope

- Source target: `main`.
- Production artifact target: `gh-pages` for the existing GitHub Pages project site.
- Included: `metrics=current|thirds` comparison state, the Metrics selector, feed/detail propagation, equal hit regions, edge-anchored visual alignment, responsive geometry, and review evidence.
- Excluded: Follow/Chat behavior changes, image sizing changes, feed content/data changes, and unrelated screens.

## Revision 2 — edge-anchored visual alignment

- User verdict on revision 1: rejected — equal-width hit areas were correct, but centering all three icon groups made the row look detached from the image edges.
- Negative evidence preserved: `screenshots/metrics-thirds-393.png` (revision 1; do not overwrite).
- Revised target: keep the 311px maximum bar and three equal hit regions; align the first visual group to the image's left edge, center the second group, and align the third visual group to the image's right edge.
- Classification: visual alignment polish only; no information architecture, component semantics, state, route, or behavior-contract change. Page-slice gate remains not triggered.
- Acceptance assertion: interaction bar left/right bounds equal the media left/right bounds; first group begins at the left bound; middle group remains centered; final group ends at the right bound; all three hit regions remain equal and 44px high.
- Rendered evidence status: captured/verified — revision 2 screenshot: `screenshots/metrics-thirds-edge-aligned-393.png`; revision 1 negative evidence remains preserved.
- Revision 2 geometry:
  - 360×800: image/bar `282px`; three hit regions `94px`; first/last visuals align exactly to image edges.
  - 393×852: image/bar `311px`; three hit regions `103.66px`; first/last visuals align to the 311px bounds (subpixel rounding < 0.01px).
  - 430×932: image/bar `311px`; three hit regions `103.66px`; first/last visuals align to the 311px bounds (subpixel rounding < 0.01px).
  - All targets remain 44px high; no horizontal overflow.

## Implementation-owner checkpoint

- Checkpoint rules read: `product-ui-ux-design/SKILL.md#implementation-owner checkpoint`.
- Surface type: mobile consumer community feed rendered as a responsive React/Vite web preview.
- Density mode: consumer relaxed; only the reaction-row alignment changes.
- Primary workflow: browse a post → scan engagement counts → like, comment, or share → remain in the feed/detail context.
- Human intent/friction: make the three engagement targets easier to scan and tap without increasing post height or changing action priority.
- Aesthetic logic: reuse the current Threads-inspired typography, icons, color, and 44px touch targets; introduce only a stable three-column rhythm inside the existing content column.
- Layout structure: the interaction bar is capped at the existing 311px maximum media/content width, then split into three equal columns. Each icon/count group is centered within its own column.
- Required states: default, liked, anonymous/dark feed, feed card, detail card, long counts, 360px narrow viewport, 393px primary viewport, and 430px large viewport.
- Trust/safety boundary: none; this is a visual layout option and does not alter like/comment/share behavior or navigation.
- Behavior-contract diff: none. Existing handlers, aria labels, optimistic like state, comment navigation, and share feedback remain unchanged.
- Design owner: `product-ui-ux-design`.
- Stack implementation owner: `web-react-dev`.
- Entry-rule evidence: `web-react-dev/SKILL.md#Core Workflow` visible-UI rule requires mapping hierarchy/density, interaction flow, responsive collapse, and screenshot acceptance before coding; decision: implement as a prop/class variant with URL-owned state and verify in a real browser.
- Test owner: `testing-strategy`.
- Acceptance-source lookup: found in the user request and attached reference image: “互动栏在最大展示区域三等分”.
- Test scope: the Plaza `FeedCard` interaction bar in feed and post-detail contexts.
- Assertion layer: browser DOM geometry assertions for equal column widths/centers plus click behavior; `npm run build` as structural evidence.
- Rendered/device evidence status: completed at 360×800, 393×852, and 430×932. Screenshots are persisted under `docs/evidence/interaction-third-layout/screenshots/`.
- Adaptation matrix:
  - Primary: 393×852.
  - Stress: 360×800 and 430×932.
  - Collapse: width becomes `min(311px, available content width)`; three equal columns remain on one row.
  - Touch: each action retains a minimum 44×44px target.
  - Long text: counts remain inside their column without changing the three-column grid.
- Visual acceptance: no change to post height; equal column widths; icon/count groups optically centered; no overlap with the comment preview; no horizontal overflow; current layout remains selectable.
- Page-slice gate: not triggered. This is an explicitly bounded layout alternative inside one existing component; it does not alter content grouping, information architecture, or the product visual system.

## Verification record

- `npm run build`: passed (Vite 8.0.16, 105 modules transformed).
- Browser DOM geometry:
  - 360×800: bar 284px; three buttons 94.66px each; 44px high; width delta 0; no horizontal overflow.
  - 393×852: bar 311px; three buttons 103.66px each; 44px high; width delta 0; no horizontal overflow.
  - 430×932: bar 311px; three buttons 103.66px each; 44px high; width delta 0; no horizontal overflow.
- Behavior regression: first Like action changed `143 → 144` and received the existing `liked` state; `metrics=current` removes the grid class and restores the prior layout.
- Detail regression: opening Comments reached the existing detail screen; its interaction bar remained 311px with three 103.66×44px targets and zero width delta.
- Screenshot evidence:
  - `screenshots/metrics-thirds-360.png`
  - `screenshots/metrics-thirds-393.png`
  - `screenshots/metrics-thirds-430.png`
- `npm run lint`: still reports the repository baseline of 5 errors and 1 warning (`Stub`, Fast Refresh constant export, unused `FollowIcon`, effect state update, undefined `process`, and the existing hook dependency warning). No new lint finding points to this variant.
