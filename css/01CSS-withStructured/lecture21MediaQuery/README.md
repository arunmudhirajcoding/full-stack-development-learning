### CSS Media Queries — Complete Responsive Design Guide

#### 1) what are media queries

-   **definition**: CSS feature that allows content rendering to adapt to different device characteristics
-   **purpose**: create responsive designs that work across various screen sizes and devices
-   **syntax**: `@media (condition) { /* styles */ }`
-   **history**: evolved from simple screen width queries to complex device-specific targeting

#### 2) basic media query syntax

-   **at-rule**: starts with `@media`
-   **media type**: specifies the media category (screen, print, all)
-   **media feature**: describes specific characteristics (width, height, orientation)
-   **logical operators**: combine conditions (and, or, not, only)

```css
/* basic syntax */
@media screen and (max-width: 768px) {
	.container {
		width: 100%;
		padding: 1rem;
	}
}

/* multiple conditions */
@media screen and (min-width: 768px) and (max-width: 1024px) {
	.grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
```

#### 3) media types

-   **all**: applies to all media types (default)
-   **screen**: applies to computer screens, tablets, smartphones
-   **print**: applies to printed material and print preview
-   **speech**: applies to screen readers and speech synthesizers

```css
/* different media types */
@media screen {
	body {
		background: white;
	}
}

@media print {
	body {
		background: white;
	}
	.no-print {
		display: none;
	}
}

@media speech {
	.visually-hidden {
		position: absolute;
		left: -10000px;
	}
}
```

#### 4) viewport-based media features

**width and height:**

-   **width**: viewport width
-   **height**: viewport height
-   **min-width**: minimum viewport width
-   **max-width**: maximum viewport width
-   **min-height**: minimum viewport height
-   **max-height**: maximum viewport height

```css
/* width-based queries */
@media (max-width: 768px) {
	.mobile-nav {
		display: block;
	}
}

@media (min-width: 769px) {
	.desktop-nav {
		display: block;
	}
}

/* height-based queries */
@media (max-height: 600px) {
	.header {
		height: 50px;
	}
}
```

#### 5) device orientation and aspect ratio

**orientation:**

-   **portrait**: height is greater than width
-   **landscape**: width is greater than height

**aspect-ratio:**

-   **aspect-ratio**: width-to-height ratio
-   **min-aspect-ratio**: minimum aspect ratio
-   **max-aspect-ratio**: maximum aspect ratio

```css
/* orientation queries */
@media (orientation: portrait) {
	.sidebar {
		display: none;
	}
}

@media (orientation: landscape) {
	.sidebar {
		display: block;
	}
}

/* aspect ratio queries */
@media (min-aspect-ratio: 16/9) {
	.video-container {
		aspect-ratio: 16/9;
	}
}
```

#### 6) resolution and pixel density

-   **resolution**: pixel density of the output device
-   **min-resolution**: minimum pixel density
-   **max-resolution**: maximum pixel density
-   **device-pixel-ratio**: ratio of physical pixels to CSS pixels

```css
/* high-resolution displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
	.logo {
		background-image: url("logo@2x.png");
		background-size: 100px 100px;
	}
}

/* retina displays */
@media (min-resolution: 2dppx) {
	.icon {
		background-image: url("icon@2x.png");
	}
}
```

#### 7) color and display capabilities

-   **color**: number of bits per color component
-   **min-color**: minimum color depth
-   **max-color**: maximum color depth
-   **color-gamut**: color space supported by the device
-   **monochrome**: monochrome display capability

```css
/* color depth queries */
@media (min-color: 8) {
	.gradient {
		background: linear-gradient(45deg, #ff0000, #00ff00);
	}
}

/* monochrome displays */
@media (monochrome) {
	.colorful-element {
		display: none;
	}
}

/* wide color gamut */
@media (color-gamut: p3) {
	.vivid-colors {
		color: color(display-p3 1 0 0);
	}
}
```

#### 8) interaction capabilities

-   **hover**: ability to hover over elements
-   **pointer**: accuracy of pointing device (none, coarse, fine)
-   **any-hover**: any input device can hover
-   **any-pointer**: any input device has pointing capability

```css
/* hover capability */
@media (hover: hover) {
	.button:hover {
		background-color: #007bff;
	}
}

/* pointer accuracy */
@media (pointer: coarse) {
	.small-button {
		min-height: 44px;
		min-width: 44px;
	}
}

@media (pointer: fine) {
	.precise-control {
		width: 20px;
		height: 20px;
	}
}
```

#### 9) logical operators

-   **and**: combines multiple conditions (all must be true)
-   **or**: separates multiple queries (any can be true)
-   **not**: negates the entire media query
-   **only**: applies only to devices that support media queries

```css
/* and operator */
@media screen and (min-width: 768px) and (orientation: landscape) {
	.wide-layout {
		display: block;
	}
}

/* or operator */
@media (max-width: 768px), (orientation: portrait) {
	.mobile-styles {
		display: block;
	}
}

/* not operator */
@media not screen {
	.screen-only {
		display: none;
	}
}

/* only operator */
@media only screen and (min-width: 768px) {
	.desktop-only {
		display: block;
	}
}
```

#### 10) common breakpoints and strategies

**popular breakpoints:**

```css
/* mobile first approach */
@media (min-width: 576px) {
	/* small devices */
}
@media (min-width: 768px) {
	/* medium devices */
}
@media (min-width: 992px) {
	/* large devices */
}
@media (min-width: 1200px) {
	/* extra large devices */
}

/* content-based breakpoints */
@media (min-width: 640px) {
	/* tablet portrait */
}
@media (min-width: 768px) {
	/* tablet landscape */
}
@media (min-width: 1024px) {
	/* desktop */
}
@media (min-width: 1280px) {
	/* large desktop */
}
```

**mobile-first strategy:**

```css
/* base styles for mobile */
.container {
	width: 100%;
	padding: 1rem;
}

/* tablet styles */
@media (min-width: 768px) {
	.container {
		max-width: 750px;
		margin: 0 auto;
	}
}

/* desktop styles */
@media (min-width: 1024px) {
	.container {
		max-width: 1200px;
		padding: 2rem;
	}
}
```

#### 11) modern media query features

**range syntax (newer browsers):**

```css
/* old syntax */
@media (min-width: 768px) and (max-width: 1024px) {
	.tablet-styles {
		display: block;
	}
}

/* new range syntax */
@media (768px <= width <= 1024px) {
	.tablet-styles {
		display: block;
	}
}
```

**container queries (modern browsers):**

```css
/* container query setup */
.card-container {
	container-type: inline-size;
}

/* container-based responsive design */
@container (min-width: 300px) {
	.card {
		display: flex;
		flex-direction: row;
	}
}
```

#### 12) practical media query patterns

**responsive typography:**

```css
/* fluid typography with media queries */
html {
	font-size: 16px;
}

@media (min-width: 768px) {
	html {
		font-size: 18px;
	}
}

@media (min-width: 1024px) {
	html {
		font-size: 20px;
	}
}

/* clamp for fluid typography */
.heading {
	font-size: clamp(1.5rem, 4vw, 3rem);
}
```

**responsive grid systems:**

```css
/* responsive grid */
.grid {
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
}

@media (min-width: 768px) {
	.grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.grid {
		grid-template-columns: repeat(3, 1fr);
	}
}
```

**responsive navigation:**

```css
/* mobile navigation */
.nav {
	display: none;
}

.nav-toggle {
	display: block;
}

/* desktop navigation */
@media (min-width: 768px) {
	.nav {
		display: flex;
	}

	.nav-toggle {
		display: none;
	}
}
```

#### 13) accessibility considerations

-   **prefers-reduced-motion**: respects user's motion preferences
-   **prefers-color-scheme**: adapts to dark/light mode preferences
-   **prefers-contrast**: respects high contrast preferences
-   **forced-colors**: adapts to forced color mode

```css
/* reduced motion */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}

/* dark mode support */
@media (prefers-color-scheme: dark) {
	body {
		background-color: #1a1a1a;
		color: #ffffff;
	}
}

/* high contrast mode */
@media (prefers-contrast: high) {
	.button {
		border: 2px solid currentColor;
	}
}
```

#### 14) performance considerations

-   **specificity**: more specific queries load faster
-   **order**: place mobile-first queries at the top
-   **minimize queries**: combine similar breakpoints
-   **test performance**: use browser dev tools to measure impact

```css
/* efficient query ordering */
/* mobile first - most specific */
@media (max-width: 767px) {
	.mobile-only {
		display: block;
	}
}

/* tablet */
@media (min-width: 768px) and (max-width: 1023px) {
	.tablet-only {
		display: block;
	}
}

/* desktop */
@media (min-width: 1024px) {
	.desktop-only {
		display: block;
	}
}
```

#### 15) debugging media queries

-   **browser dev tools**: use responsive design mode
-   **media query debugging**: add temporary borders/backgrounds
-   **breakpoint testing**: test at exact breakpoint values
-   **device testing**: test on actual devices when possible

```css
/* debugging styles */
@media (max-width: 768px) {
	* {
		outline: 1px solid red !important;
	}
}

/* breakpoint indicators */
body::before {
	content: "mobile";
	position: fixed;
	top: 0;
	left: 0;
	background: red;
	color: white;
	padding: 0.5rem;
	z-index: 9999;
}

@media (min-width: 768px) {
	body::before {
		content: "tablet";
		background: blue;
	}
}

@media (min-width: 1024px) {
	body::before {
		content: "desktop";
		background: green;
	}
}
```

#### 16) common media query mistakes

**avoid these pitfalls:**

-   using px instead of rem for typography breakpoints
-   not testing on actual devices
-   creating too many breakpoints
-   ignoring accessibility preferences
-   not considering touch vs mouse interactions

**best practices:**

-   use mobile-first approach
-   test at exact breakpoint values
-   consider content, not just device sizes
-   use semantic breakpoint names
-   document your breakpoint strategy

```css
/* good practice: semantic breakpoints */
:root {
	--breakpoint-sm: 576px;
	--breakpoint-md: 768px;
	--breakpoint-lg: 992px;
	--breakpoint-xl: 1200px;
}

@media (min-width: var(--breakpoint-md)) {
	.container {
		max-width: 750px;
	}
}
```

#### 17) modern alternatives and enhancements

**CSS custom properties with media queries:**

```css
:root {
	--container-padding: 1rem;
	--grid-columns: 1;
}

@media (min-width: 768px) {
	:root {
		--container-padding: 2rem;
		--grid-columns: 2;
	}
}

.container {
	padding: var(--container-padding);
	display: grid;
	grid-template-columns: repeat(var(--grid-columns), 1fr);
}
```

**container queries vs media queries:**

```css
/* media query approach */
@media (min-width: 768px) {
	.card {
		flex-direction: row;
	}
}

/* container query approach */
.card-container {
	container-type: inline-size;
}

@container (min-width: 300px) {
	.card {
		flex-direction: row;
	}
}
```

#### 19) further reading

-   **mdn media queries**: `https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries`
-   **mdn media features**: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Media_Queries/Using_media_queries`
-   **css container queries**: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries`
-   **responsive design patterns**: `https://web.dev/responsive-web-design-basics/`
