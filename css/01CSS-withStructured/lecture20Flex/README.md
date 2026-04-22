### CSS Flexbox — Theory First, Then Best Practices

#### 1) what is flexbox and its purpose

-   **flexible box layout**: one-dimensional layout method for distributing space among items in a container
-   **main purpose**: efficient alignment and distribution of space within containers
-   **one-dimensional**: controls layout in either row or column direction (not both simultaneously)
-   **responsive by nature**: items can shrink/grow to fill available space

#### 2) the flex model (core concepts)

-   **flex container (parent)**: element with `display: flex` or `display: inline-flex`
-   **flex items (children)**: direct children of flex container
-   **main axis**: primary axis along which flex items are laid out
-   **cross axis**: perpendicular axis to main axis
-   **main size**: size along main axis (width for row, height for column)
-   **cross size**: size along cross axis (height for row, width for column)

```text
visual representation:

main axis (flex-direction: row) →
┌─────────────────────────────────┐
│ [item1] [item2] [item3]        │ ↑
│                                 │ │ cross axis
└─────────────────────────────────┘ ↓
```

#### 3) flex container properties

**display:**

-   **flex**: creates block-level flex container
-   **inline-flex**: creates inline-level flex container

**flex-direction:**

-   **row**: main axis horizontal, left to right (default)
-   **row-reverse**: main axis horizontal, right to left
-   **column**: main axis vertical, top to bottom
-   **column-reverse**: main axis vertical, bottom to top

**flex-wrap:**

-   **nowrap**: all items in single line (default)
-   **wrap**: items wrap to multiple lines
-   **wrap-reverse**: items wrap to multiple lines in reverse order

**flex-flow:**

-   **shorthand**: `flex-direction` and `flex-wrap` combined
-   **example**: `flex-flow: row wrap`

**justify-content (main axis alignment):**

-   **flex-start**: items packed to start of main axis (default)
-   **flex-end**: items packed to end of main axis
-   **center**: items centered along main axis
-   **space-between**: items evenly distributed, first at start, last at end
-   **space-around**: items evenly distributed with equal space around each
-   **space-evenly**: items evenly distributed with equal space between and around

**align-items (cross axis alignment):**

-   **stretch**: items stretched to fill cross axis (default)
-   **flex-start**: items aligned to start of cross axis
-   **flex-end**: items aligned to end of cross axis
-   **center**: items centered along cross axis
-   **baseline**: items aligned to baseline of text

**align-content (multi-line cross axis alignment):**

-   **stretch**: lines stretched to fill cross axis (default)
-   **flex-start**: lines packed to start of cross axis
-   **flex-end**: lines packed to end of cross axis
-   **center**: lines centered along cross axis
-   **space-between**: lines evenly distributed, first at start, last at end
-   **space-around**: lines evenly distributed with equal space around each
-   **space-evenly**: lines evenly distributed with equal space between and around

```css
/* flex container examples */
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: space-between;
}

/* shorthand */
.container {
	flex-flow: row wrap;
}
```

#### 4) flex item properties

**flex-grow:**

-   **default**: 0 (items don't grow)
-   **value**: positive number determining growth factor
-   **behavior**: items grow to fill available space proportionally

**flex-shrink:**

-   **default**: 1 (items can shrink)
-   **value**: positive number determining shrink factor
-   **behavior**: items shrink when container is too small

**flex-basis:**

-   **default**: auto (based on content size)
-   **value**: length or percentage defining initial main size
-   **behavior**: sets the initial size before free space is distributed

**flex (shorthand):**

-   **syntax**: `flex: <grow> <shrink> <basis>`
-   **common values**: `1` (grow), `0 1 auto` (don't grow), `none` (0 0 auto)

**align-self:**

-   **default**: auto (inherits from align-items)
-   **values**: same as align-items but for individual items
-   **behavior**: overrides align-items for specific item

**order:**

-   **default**: 0 (natural order)
-   **value**: integer determining display order
-   **behavior**: items reordered without changing DOM structure

```css
/* flex item examples */
.item {
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 200px;
	align-self: center;
	order: 2;
}

/* shorthand */
.item {
	flex: 1 0 200px;
}
```

#### 5) flex sizing behavior

-   **available space**: total container size minus sum of flex-basis values
-   **positive space**: when container is larger than sum of flex-basis values
-   **negative space**: when container is smaller than sum of flex-basis values
-   **growth calculation**: positive space distributed according to flex-grow ratios
-   **shrink calculation**: negative space distributed according to flex-shrink ratios

```css
/* sizing examples */
.grow-item {
	flex: 2;
} /* grows twice as much as flex: 1 items */
.shrink-item {
	flex: 0 1 200px;
} /* can shrink from 200px */
.fixed-item {
	flex: 0 0 100px;
} /* always 100px, no grow/shrink */
```

#### 6) common flex patterns

**centering content:**

```css
.center {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

**equal height columns:**

```css
.equal-columns {
	display: flex;
}
.equal-columns > * {
	flex: 1;
}
```

**sticky footer:**

```css
.page {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
.content {
	flex: 1;
}
```

**responsive navigation:**

```css
.nav {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
```

#### 7) flexbox vs other layout methods

**flexbox vs float:**

-   **flexbox**: modern, predictable, no clearfix needed
-   **float**: legacy, requires clearfix, unpredictable behavior

**flexbox vs grid:**

-   **flexbox**: one-dimensional, content-driven sizing
-   **grid**: two-dimensional, explicit positioning

**flexbox vs positioning:**

-   **flexbox**: maintains document flow, responsive
-   **positioning**: removes from flow, fixed positioning

#### 8) browser support and fallbacks

-   **modern browsers**: excellent support (IE10+ with prefixes)
-   **legacy ie**: requires `-ms-` prefixes
-   **mobile browsers**: excellent support
-   **fallback strategy**: provide block layout fallback

```css
/* ie fallback */
.flex-container {
	display: -ms-flexbox; /* ie10 */
	display: flex;
}
```

#### 9) accessibility considerations

-   **logical order**: flexbox doesn't change DOM order
-   **keyboard navigation**: follows DOM order, not visual order
-   **screen readers**: maintain semantic structure
-   **focus management**: ensure focusable elements are accessible

```css
/* accessibility-friendly flexbox */
.accessible-flex {
	display: flex;
	gap: 1rem; /* proper spacing */
}
```

#### 10) performance implications

-   **layout calculations**: flexbox is generally performant
-   **reflow triggers**: changing flex properties can cause reflow
-   **optimization**: avoid frequent changes to flex properties
-   **modern browsers**: highly optimized flexbox implementation

#### 11) common flexbox problems and solutions

**problem**: items not centering

```css
/* solution: check container height */
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh; /* ensure height */
}
```

**problem**: items not wrapping

```css
/* solution: add flex-wrap */
.container {
	display: flex;
	flex-wrap: wrap;
}
```

**problem**: items not equal width

```css
/* solution: use flex: 1 */
.item {
	flex: 1;
}
```

#### 12) debugging flexbox

-   **devtools**: use flexbox debugging tools in browser
-   **outline method**: add outlines to see item boundaries
-   **flex-direction**: verify main axis direction
-   **flex-basis**: check initial sizing
-   **available space**: calculate positive/negative space

```css
/* debugging styles */
.debug-flex {
	outline: 2px solid red;
}
.debug-container {
	outline: 2px solid blue;
}
```

#### 13) best practices for flexbox

**container setup:**

-   use semantic HTML structure
-   set appropriate flex-direction
-   consider flex-wrap for responsive design
-   use gap instead of margins when possible

**item sizing:**

-   use flex shorthand for clarity
-   prefer flex: 1 over flex-grow: 1
-   set flex-basis for consistent sizing
-   avoid mixing flex and fixed widths

**alignment:**

-   use justify-content for main axis
-   use align-items for cross axis
-   use align-self for individual items
-   consider align-content for multi-line

**responsive design:**

-   use flex-wrap for mobile layouts
-   adjust flex-direction for different screens
-   use media queries for complex layouts
-   test on various screen sizes

```css
/* best practice examples */
.best-practice-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
}

.best-practice-item {
	flex: 1 1 300px; /* grow, shrink, basis */
	min-width: 0; /* prevent overflow */
}
```

#### 14) advanced flexbox techniques

**nested flexbox:**

```css
.outer {
	display: flex;
	flex-direction: column;
}
.inner {
	display: flex;
	flex-direction: row;
}
```

**flexbox with grid:**

```css
.hybrid {
	display: grid;
	grid-template-columns: 1fr 2fr;
}
.hybrid .flex-item {
	display: flex;
	align-items: center;
}
```

**flexbox with positioning:**

```css
.positioned-flex {
	position: relative;
	display: flex;
}
.positioned-flex .absolute-item {
	position: absolute;
	top: 0;
	right: 0;
}
```

#### 15) flexbox design patterns

**card layout:**

```css
.card {
	display: flex;
	flex-direction: column;
	border: 1px solid #ddd;
	border-radius: 8px;
}
.card-header {
	flex-shrink: 0;
}
.card-content {
	flex: 1;
}
.card-footer {
	flex-shrink: 0;
}
```

**form layout:**

```css
.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
.form-row {
	display: flex;
	gap: 1rem;
	align-items: center;
}
```

**media object:**

```css
.media {
	display: flex;
	gap: 1rem;
	align-items: flex-start;
}
.media-content {
	flex: 1;
}
```

#### 16) responsive flexbox strategies

**mobile-first approach:**

```css
/* mobile */
.responsive {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

/* tablet */
@media (min-width: 768px) {
	.responsive {
		flex-direction: row;
	}
}

/* desktop */
@media (min-width: 1024px) {
	.responsive {
		gap: 2rem;
	}
}
```

**breakpoint-based layouts:**

```css
.layout {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
.layout-item {
	flex: 1 1 100%; /* mobile: full width */
}

@media (min-width: 600px) {
	.layout-item {
		flex: 1 1 50%; /* tablet: half width */
	}
}

@media (min-width: 900px) {
	.layout-item {
		flex: 1 1 33.333%; /* desktop: third width */
	}
}
```

#### 17) flexbox with css custom properties

```css
:root {
	--flex-gap: 1rem;
	--flex-basis: 300px;
}

.flex-container {
	display: flex;
	gap: var(--flex-gap);
}

.flex-item {
	flex: 1 1 var(--flex-basis);
}
```

#### 18) quick reference guide

```css
/* container properties */
.container {
	display: flex; /* or inline-flex */
	flex-direction: row | column | row-reverse | column-reverse;
	flex-wrap: nowrap | wrap | wrap-reverse;
	justify-content: flex-start | flex-end | center | space-between |
		space-around | space-evenly;
	align-items: stretch | flex-start | flex-end | center | baseline;
	align-content: stretch | flex-start | flex-end | center | space-between |
		space-around | space-evenly;
}

/* item properties */
.item {
	flex: <grow> <shrink> <basis>;
	flex-grow: <number>;
	flex-shrink: <number>;
	flex-basis: <length> | auto;
	align-self: auto | stretch | flex-start | flex-end | center | baseline;
	order: <number>;
}
```

#### 19) further reading

-   **mdn flexbox**: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout`
-   **css-tricks flexbox guide**: `https://css-tricks.com/snippets/css/a-guide-to-flexbox/`
-   **flexbox froggy**: `https://flexboxfroggy.com/` (interactive game)
-   **flexbox defense**: `http://www.flexboxdefense.com/` (interactive game)

#### 20) mini-lab (try it out)

```html
<div class="flex-demo">
	<div class="flex-item">item 1</div>
	<div class="flex-item">item 2</div>
	<div class="flex-item">item 3</div>
</div>
```

```css
.flex-demo {
	display: flex;
	gap: 1rem;
	padding: 1rem;
	border: 2px solid #333;
	min-height: 200px;
}

.flex-item {
	flex: 1;
	background: #f0f0f0;
	border: 1px solid #ccc;
	padding: 1rem;
	text-align: center;
}
```
