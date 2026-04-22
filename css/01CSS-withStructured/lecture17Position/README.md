### CSS Positioning — From Basics To Advanced (With Visuals)

#### 1) why positioning matters

-   **layout-control**: place elements independently of normal flow when needed
-   **ui-patterns**: tooltips, modals, dropdowns, sticky headers/footers, badges
-   **z-layers**: manage which elements appear above others via stacking contexts

#### 2) the core values

-   **static**: default; element participates in normal flow; `top/right/bottom/left/z-index` ignored
-   **relative**: keeps flow space; offsets visually via `top/right/bottom/left`; establishes new containing block for absolutely positioned descendants
-   **absolute**: removed from normal flow; positioned relative to the nearest ancestor that is not `static` and has a positioning context; otherwise relative to initial containing block
-   **fixed**: removed from flow; anchored to viewport (or nearest transformed/filtered ancestor in some browsers); unaffected by page scroll unless within certain containers
-   **sticky**: toggles between `relative` and `fixed` based on scroll; needs a scroll container and a threshold (`top/left/right/bottom`)

#### 3) the inset shorthand

-   **properties**: `top`, `right`, `bottom`, `left`
-   **shorthand**: `inset: <top> <right> <bottom> <left>`; supports 1–4 values like margin/padding; logical alternatives exist via `inset-block-start` etc.

```css
/* examples */
.badge {
	position: absolute;
	inset: 0 auto auto 0;
}
.center-abs {
	position: absolute;
	inset: 0;
	margin: auto;
	width: 200px;
	height: 100px;
}
.sticky-header {
	position: sticky;
	top: 0;
	z-index: 10;
}
```

#### 4) containing blocks (the key mental model)

-   **for static/relative**: formatted relative to nearest block container in normal flow
-   **for absolute**: the nearest ancestor that is one of: `position` not `static`; or certain `transform`, `filter`, `perspective`, `clip-path`, `will-change`, and `contain` values which create containing/stacking contexts
-   **for fixed**: typically the viewport; but if an ancestor has `transform` (or `filter`, `perspective`, etc.), it becomes the containing block
-   **for sticky**: the scroll container (nearest ancestor with `overflow` not `visible`) plus element’s own containing block

```text
[viewport]
  └─ A (position: relative)
      └─ B (position: absolute; top: 0) -> positions to A, not viewport
```

#### 5) stacking contexts and z-index

-   **what creates a stacking context**:
    -   `position` not `static` with `z-index` other than `auto`
    -   `opacity < 1`, `mix-blend-mode`, `transform`, `filter`, `perspective`, `clip-path`, `will-change`, `isolation: isolate`, `contain: paint`, `backdrop-filter`
    -   `position: fixed` always creates one; `position: sticky` does not by itself
-   **z-index rules**:
    -   z-index comparisons only apply within the same stacking context
    -   child cannot escape parent’s stacking context regardless of larger `z-index`

```text
visual: overlapping cards

parent (z-index: 1; position: relative;)
  ├─ child A (z-index: 999; position: absolute;)  ← still below any sibling in a higher parent context
  └─ child B (z-index: 2; position: absolute;)

separate-parent (z-index: 10; position: relative;)  ← stacks above entire first parent block
```

#### 6) sticky positioning specifics

-   **requirements**:
    -   threshold via `top/left/right/bottom`
    -   a scroll container: nearest ancestor with `overflow` set to `auto`, `scroll`, or `hidden`
    -   enough space in the container for the sticky movement
-   **common pitfalls**:
    -   parent with `overflow: hidden`/`auto` unexpectedly becomes scroll container
    -   no `top` (or side) set → sticky behaves like `relative`
    -   insufficient space → appears not to stick

```html
<header class="site-header">...</header>
<main class="content">
	<aside class="toc">...</aside>
	<article>...</article>
</main>
```

```css
.site-header {
	position: sticky;
	top: 0;
	z-index: 100;
}
.content {
	display: grid;
	grid-template-columns: 280px 1fr;
}
.toc {
	position: sticky;
	top: 6rem;
	align-self: start;
	max-height: calc(100vh - 6rem);
	overflow: auto;
}
```

#### 7) patterns and recipes

-   **center an element absolutely**:

```css
.center-box {
	position: absolute;
	inset: 0;
	margin: auto;
	width: 300px;
	height: 200px;
}
/* or */
.center-transform {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

-   **tooltip**:

```css
.anchor {
	position: relative;
}
.tooltip {
	position: absolute;
	inset: auto auto 100% 50%;
	transform: translateX(-50%);
	margin-bottom: 0.5rem;
}
```

-   **modal overlay**:

```css
.overlay {
	position: fixed;
	inset: 0;
	background: rgb(0 0 0 / 0.5);
	z-index: 1000;
}
.modal {
	position: fixed;
	inset: 10% 50% auto 50%;
	transform: translateX(-50%);
	max-height: 80vh;
	overflow: auto;
}
```

-   **dropdown menu**:

```css
.btn {
	position: relative;
}
.menu {
	position: absolute;
	top: 100%;
	right: 0;
	min-width: 200px;
}
```

#### 8) advanced topics

-   **logical insets**: `inset-inline-start/end`, `inset-block-start/end` for writing-mode aware layouts
-   **safe areas**: on notched devices use `padding-top: env(safe-area-inset-top)`; fixed headers/footers should account for this
-   **scroll containers**: `overflow` changes containing blocks; nested scrolling affects sticky/fixed behavior
-   **transform side-effects**: any transformed ancestor can trap `position: fixed` and create new stacking context
-   **containment**: `contain: layout | paint | size` can isolate layout/paint and influence positioning and z-index
-   **will-change**: can hint future `transform`/`position` changes; use sparingly to avoid memory bloat
-   **subgrid + positioning**: grid parents provide powerful alignment alternative to absolute positioning; prefer grid/flex where possible
-   **anchor positioning (experimental)**: CSS Anchor Positioning (`position-anchor`, `anchor()`) aligns popovers to anchors without JS; check support before using
-   **popover api**: with `popover` attribute you can combine built-in layering with minimal custom positioning

```css
/* logical properties */
.rtl-badge {
	position: absolute;
	inset-inline-end: 0;
	inset-block-start: 0;
}

/* safe area */
.fixed-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding-top: env(safe-area-inset-top);
}
```

#### 9) performance notes

-   **avoid layout thrash**: frequent style changes to `top/left` may cause layout; prefer `transform` for animations
-   **compositing**: use `will-change: transform` only around transitions; remove after
-   **large fixed overlays**: consider reducing backdrop blur/filters to avoid expensive paints

#### 10) accessibility considerations

-   **focus management**: modals/menus require focus trap and return focus to trigger
-   **reduced motion**: if animating positioned elements, honor `@media (prefers-reduced-motion)`
-   **screen reader order**: absolute/fixed changes visual order, not DOM order; ensure meaningful DOM order and landmarks

#### 11) debugging checklist

-   **is the element in the flow?** static/relative vs absolute/fixed
-   **what is the containing block?** look for nearest positioned or transformed ancestor
-   **which stacking context wins?** inspect `z-index` in DevTools layers panel
-   **is sticky eligible?** scroll container present, threshold set, enough space
-   **is fixed trapped by transform?** remove transforms to verify
-   **is overflow creating a new context?** check `overflow` on ancestors

```text
devtools visual guide

1) toggle element state → inspect computed → position/inset/z-index
2) check layout → scroll containers and containing blocks
3) layers panel → confirm stacking contexts and paint order
```

#### 12) common pitfalls and best practices

-   **prefer layout systems first**: use Flexbox/Grid for alignment; fall back to absolute only when necessary
-   **establish positioning context intentionally**: set `position: relative` on anchors for tooltips/badges
-   **minimize z-index wars**: create local stacking contexts for components; avoid arbitrary large z-index values
-   **avoid magic numbers**: derive offsets from design tokens; use `calc()` where helpful
-   **guard sticky with spacing**: ensure space for the stick region; consider `max-height` with overflow
-   **account for safe areas**: especially for full-viewport fixed headers/footers on mobile
-   **test across scroll scenarios**: page scroll vs nested scroll; RTL and different writing modes
-   **document layers**: keep a small z-index scale (e.g., base 0, dropdown 10, modal 100, toast 1000)

#### 13) quick reference

```css
/* create anchor for absolute children */
.anchor {
	position: relative;
}

/* absolute child relative to anchor */
.child {
	position: absolute;
	top: 0;
	right: 0;
}

/* fixed header */
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
}

/* sticky sidebar */
.sidebar {
	position: sticky;
	top: 2rem;
	align-self: start;
}

/* center with transform */
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

#### 14) further reading

-   **mdn positioning**: `https://developer.mozilla.org/en-US/docs/Web/CSS/position`
-   **mdn stacking contexts**: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context`
-   **web.dev on layers & paint**: `https://web.dev/learn/performance/animations-and-performance/`
-   **css anchor positioning explainer**: `https://developer.chrome.com/articles/anchor-positioning/`

#### 15) mini-lab (try it out)

```html
<div class="card">
	<span class="badge">new</span>
	<h3>product</h3>
	<p>description...</p>
</div>
```

```css
.card {
	position: relative;
	padding: 2rem;
	border: 1px solid #ddd;
	border-radius: 0.75rem;
}
.badge {
	position: absolute;
	inset: 0.5rem 0.5rem auto auto;
	background: #ff4757;
	color: white;
	padding: 0.2rem 0.5rem;
	border-radius: 0.5rem;
	font-size: 0.75rem;
}
```
