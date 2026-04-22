# CSS Typography - Complete Guide

## What is Typography in CSS?

**Typography**  In CSS, typography involves styling text elements including fonts, sizes, spacing, colors, and text effects to create visually appealing and readable content.

## table-of-contents-accordion

<details>
<summary>what-is-typography-in-css</summary>
<ul>
  <li><a href="#what-is-typography-in-css">what-is-typography-in-css</a></li>
</ul>
</details>

<details>
<summary>font-properties</summary>
<ul>
  <li><a href="#1-font-family">font-family</a></li>
  <li><a href="#2-font-size">font-size</a></li>
  <li><a href="#3-font-weight">font-weight</a></li>
  <li><a href="#4-font-style">font-style</a></li>
  <li><a href="#5-font-variant">font-variant</a></li>
  <li><a href="#6-font-shorthand">font-shorthand</a></li>
</ul>
</details>

<details>
<summary>text-properties</summary>
<ul>
  <li><a href="#1-text-align">text-align</a></li>
  <li><a href="#2-text-decoration">text-decoration</a></li>
  <li><a href="#3-text-transform">text-transform</a></li>
  <li><a href="#4-text-indent">text-indent</a></li>
  <li><a href="#5-letter-spacing">letter-spacing</a></li>
  <li><a href="#6-word-spacing">word-spacing</a></li>
  <li><a href="#7-line-height">line-height</a></li>
  <li><a href="#8-direction">direction</a></li>
</ul>
</details>

<details>
<summary>common-typography-patterns</summary>
<ul>
  <li><a href="#article-typography">article-typography</a></li>
  <li><a href="#navigation-typography">navigation-typography</a></li>
  <li><a href="#button-typography">button-typography</a></li>
  <li><a href="#code-typography">code-typography</a></li>
</ul>
</details>

<details>
<summary>advanced-typography-techniques</summary>
<ul>
  <li><a href="#vertical-rhythm">vertical-rhythm</a></li>
  <li><a href="#text-effects">text-effects</a></li>
</ul>
</details>

<details>
<summary>conclusion</summary>
<ul>
  <li><a href="#conclusion">conclusion</a></li>
</ul>
</details>

## Font Properties

### 1. font-family

Specifies the font family for text. Always provide fallback fonts.

```css
/* Single font family */
p {
	font-family: "Oswald", sans-serif;
}

/* Multiple font families with fallbacks */
h1 {
	font-family: "Roboto", "Arial", "Helvetica", sans-serif;
}

/* Generic font families */
body {
	font-family: serif; /* Times, Times New Roman */
	font-family: sans-serif; /* Arial, Helvetica */
	font-family: monospace; /* Courier, Monaco */
	font-family: cursive; /* Comic Sans, Brush Script */
	font-family: fantasy; /* Impact, Papyrus */
}
```

### 2. font-size

Controls the size of the font.

```css
/* Absolute units */
p {
	font-size: 20px; /* Pixels */
	font-size: 1.5rem; /* Relative to root element */
	font-size: 16pt; /* Points */
	font-size: 1cm; /* Centimeters */
}

/* Relative units */
h1 {
	font-size: 2em; /* 2x parent element */
	font-size: 150%; /* 1.5x parent element */
	font-size: 2vw; /* 2% of viewport width */
}

/* Keywords */
.small {
	font-size: small;
}
```

### 3. font-weight

Controls the thickness/boldness of the font.

```css
/* Numeric values */
p {
	font-weight: 100; /* Thin */
	font-weight: 300; /* Light */
	font-weight: 400; /* Normal (default) */
	font-weight: 700; /* Bold */
	font-weight: 900; /* Black */
}

/* Keyword values */
.normal {
	font-weight: normal;
}
.bold {
	font-weight: bold;
}
```

### 4. font-style

Controls the style of the font.

```css
/* Normal text */
p {
	font-style: normal;
}

/* Italic text */
.italic {
	font-style: italic;
}

/* Oblique text */
.oblique {
	font-style: oblique;
}
```

### 5. font-variant

Controls the variant of the font.

```css
/* Small caps */
.small-caps {
	font-variant: small-caps;
}

/* Normal */
.normal {
	font-variant: normal;
}

/* All small caps */
.all-small-caps {
	font-variant: all-small-caps;
}
```

## Line Height and Spacing

### line-height

Controls the height of a line of text.

```css
/* Numeric value */
p {
	line-height: 30px; /* Fixed height */
	line-height: 1.5; /* 1.5x font size */
	line-height: 150%; /* 150% of font size */
}

/* Keywords */
.normal {
	line-height: normal;
}
```

### letter-spacing

Controls the space between characters.

```css
/* Positive values increase spacing */
.wide {
	letter-spacing: 2px;
}

/* Negative values decrease spacing */
.tight {
	letter-spacing: -1px;
}

/* Normal spacing */
.normal {
	letter-spacing: normal;
}
```

### word-spacing

Controls the space between words.

```css
/* Increase word spacing */
.spaced {
	word-spacing: 10px;
}

/* Decrease word spacing */
.compact {
	word-spacing: -2px;
}

/* Normal word spacing */
.normal {
	word-spacing: normal;
}
```

## Text Properties

### text-align

Controls horizontal alignment of text.

```css
.left {
	text-align: left;
}
.center {
	text-align: center;
}
.right {
	text-align: right;
}
.justify {
	text-align: justify;
}
```

### text-decoration

Controls text decoration lines.

```css
/* Underline */
.underline {
	text-decoration: underline;
}

/* Overline */
.overline {
	text-decoration: overline;
}

/* Line through */
.line-through {
	text-decoration: line-through;
}

/* No decoration */
.none {
	text-decoration: none;
}

/* Multiple decorations */
.multiple {
	text-decoration: underline overline wavy red;
}
```

### text-transform

Controls text capitalization.

```css
.uppercase {
	text-transform: uppercase;
}
.lowercase {
	text-transform: lowercase;
}
.capitalize {
	text-transform: capitalize;
}
.none {
	text-transform: none;
}
```

### text-indent

Controls indentation of the first line.

```css
/* Positive indentation */
.indent {
	text-indent: 20px;
}

/* Negative indentation (hanging indent) */
.hanging {
	text-indent: -20px;
	padding-left: 20px;
}
```

### text-shadow

Adds shadow effects to text.

```css
/* Basic shadow */
.shadow {
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Multiple shadows */
.multiple-shadow {
	text-shadow: 1px 1px 2px red, 2px 2px 4px blue;
}

/* Glow effect */
.glow {
	text-shadow: 0 0 10px #fff;
}
```

## Font Loading and Web Fonts

### Google Fonts Integration

```html
<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Import specific font -->
<link
	href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"
	rel="stylesheet"
/>
```

```css
/* Use the imported font */
p {
	font-family: "Oswald", sans-serif;
	font-weight: 200;
}
```

### @font-face Rule

```css
@font-face {
	font-family: "MyCustomFont";
	src: url("path/to/font.woff2") format("woff2"), url("path/to/font.woff")
			format("woff");
	font-weight: normal;
	font-style: normal;
	font-display: swap; /* Improves loading performance */
}

/* Use custom font */
.custom {
	font-family: "MyCustomFont", sans-serif;
}
```

## Typography Best Practices

### 1. Font Stack Strategy

```css
/* Always provide fallbacks */
body {
	font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

### 2. Responsive Typography

```css
/* Fluid typography using clamp() */
h1 {
	font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Media query approach */
@media (max-width: 768px) {
	h1 {
		font-size: 2rem;
	}
	p {
		font-size: 1rem;
	}
}

@media (min-width: 769px) {
	h1 {
		font-size: 3rem;
	}
	p {
		font-size: 1.2rem;
	}
}
```

### 3. Readability Optimization

```css
/* Optimal line height for readability */
p {
	line-height: 1.6; /* 1.5-1.7 is ideal for body text */
	max-width: 65ch; /* Optimal line length */
}

/* Proper contrast ratios */
.good-contrast {
	color: #333; /* Dark text */
	background-color: #fff; /* Light background */
}
```

### 4. Font Loading Performance

```css
/* Font display optimization */
@font-face {
	font-family: "MyFont";
	src: url("font.woff2") format("woff2");
	font-display: swap; /* Shows fallback immediately */
}
```

## Typography Scale

### Modular Scale

```css
/* Define a typography scale */
:root {
	--font-size-xs: 0.75rem; /* 12px */
	--font-size-sm: 0.875rem; /* 14px */
	--font-size-base: 1rem; /* 16px */
	--font-size-lg: 1.125rem; /* 18px */
	--font-size-xl: 1.25rem; /* 20px */
	--font-size-2xl: 1.5rem; /* 24px */
	--font-size-3xl: 1.875rem; /* 30px */
	--font-size-4xl: 2.25rem; /* 36px */
}

/* Apply scale */
.small {
	font-size: var(--font-size-sm);
}
.large {
	font-size: var(--font-size-lg);
}
.heading {
	font-size: var(--font-size-3xl);
}
```

## Examples from This Project

Looking at the `index.html` file, we can see typography properties in action:

```css
p {
	font-size: 20px; /* Font size */
	font-family: "Oswald", sans-serif; /* Font family */
	font-weight: 100; /* Font weight */
	line-height: 30px; /* Line height */
}
```

## Common Typography Patterns

### Article Typography

```css
article {
	font-family: "Georgia", serif;
	line-height: 1.7;
	max-width: 65ch;
	margin: 0 auto;
}

article h1 {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
	line-height: 1.2;
}

article p {
	font-size: 1.1rem;
	margin-bottom: 1.5rem;
	text-align: justify;
}
```

### Navigation Typography

```css
.nav {
	font-family: "Arial", sans-serif;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 1px;
}

.nav a {
	text-decoration: none;
	color: #333;
	transition: color 0.3s ease;
}

.nav a:hover {
	color: #007bff;
}
```

### Button Typography

```css
.btn {
	font-family: inherit;
	font-size: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	text-decoration: none;
	text-align: center;
}
```

### Code Typography

```css
code {
	font-family: "Monaco", "Consolas", monospace;
	font-size: 0.9em;
	background-color: #f4f4f4;
	padding: 0.2em 0.4em;
	border-radius: 3px;
}

pre {
	font-family: "Monaco", "Consolas", monospace;
	font-size: 0.9em;
	line-height: 1.4;
	background-color: #f4f4f4;
	padding: 1rem;
	border-radius: 5px;
	overflow-x: auto;
}
```

## Advanced Typography Techniques

### Vertical Rhythm

```css
/* Establish vertical rhythm */
:root {
	--base-font-size: 16px;
	--base-line-height: 24px;
}

body {
	font-size: var(--base-font-size);
	line-height: var(--base-line-height);
}

h1 {
	font-size: 2.25rem; /* 36px */
	line-height: 2.25rem; /* 36px - 1.5x base line height */
	margin-bottom: 1.5rem; /* 36px */
}
```

### Text Effects

```css
/* Gradient text */
.gradient-text {
	background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* Outline text */
.outline-text {
	color: transparent;
	-webkit-text-stroke: 2px #333;
}
```

## Conclusion

Typography is crucial for creating readable, accessible, and visually appealing web content. By mastering font properties, text styling, and typography best practices, you can create engaging user experiences. Remember to:

-   Choose appropriate font families with good fallbacks
-   Use proper font sizes and line heights for readability
-   Implement responsive typography
-   Optimize font loading for performance
-   Maintain consistent typography scales across your design
-   Test readability across different devices and screen sizes

Good typography enhances user experience and makes your content more professional and accessible.
