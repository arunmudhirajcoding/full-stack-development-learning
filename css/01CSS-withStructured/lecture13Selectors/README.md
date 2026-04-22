# CSS Selectors - Complete Guide

## What is a CSS Selector?

A **CSS Selector** is a pattern used to select and style HTML elements. It tells the browser which elements to apply CSS rules to. Selectors are the bridge between your HTML structure and your CSS styling.

**Basic Syntax:**

```css
selector {
	property: value;
}
```

## CSS Specificity

**Specificity** determines which CSS rule is applied when multiple rules target the same element. It's calculated using a point system:

### Specificity Calculation

| Selector Type                           | Points | Example                               |
| --------------------------------------- | ------ | ------------------------------------- |
| **Inline styles**                       | 1000   | `style="color: red;"`                 |
| **IDs**                                 | 100    | `#myId`                               |
| **Classes, Attributes, Pseudo-classes** | 10     | `.myClass`, `[type="text"]`, `:hover` |
| **Elements, Pseudo-elements**           | 1      | `p`, `div`, `::before`                |

### Specificity Examples

```css
/* Specificity: 1 */
p {
	color: blue;
}

/* Specificity: 10 */
.myClass {
	color: green;
}

/* Specificity: 100 */
#myId {
	color: red;
}

/* Specificity: 11 (1 + 10) */
p.myClass {
	color: purple;
}

/* Specificity: 101 (100 + 1) */
#myId p {
	color: orange;
}
```

**Higher specificity wins!** If specificity is equal, the last rule in the CSS wins.

## Types of CSS Selectors

### 1. Basic Selectors

#### Element Selector

Selects all elements of a specific type.

```css
/* Selects all <p> elements */
p {
	color: blue;
}

/* Selects all <h1> elements */
h1 {
	font-size: 2rem;
}
```

#### Class Selector

Selects elements with a specific class attribute.

```css
/* Selects elements with class="paraClass" */
.paraClass {
	background-color: aqua;
}

/* Multiple classes */
.paraClass.anotherClass {
	font-weight: bold;
}
```

#### ID Selector

Selects an element with a specific ID attribute.

```css
/* Selects element with id="article1" */
#article1 {
	background-color: green;
}
```

#### Universal Selector

Selects all elements.

```css
/* Selects every element */
* {
	margin: 0;
	padding: 0;
}
```

### 2. Attribute Selectors

Select elements based on their attributes.

```css
/* Elements with specific attribute */
[title] {
	border: 1px solid black;
}

/* Elements with specific attribute value */
[type="text"] {
	border: 2px solid blue;
}

/* Attribute contains value */
[class*="container"] {
	width: 100%;
}

/* Attribute starts with value */
[href^="https"] {
	color: green;
}

/* Attribute ends with value */
[src$=".jpg"] {
	border: 1px solid gray;
}
```

### 3. Combinator Selectors

Combinators define relationships between selectors.

#### Descendant Combinator (space)

Selects elements that are descendants of another element.

```css
/* All <p> elements inside <div> */
div p {
	color: red;
}
```

#### Child Combinator (>)

Selects direct children only.

```css
/* Direct <p> children of <div> */
div > p {
	font-weight: bold;
}
```

#### Adjacent Sibling Combinator (+)

Selects the immediately following sibling.

```css
/* <p> that immediately follows <h1> */
h1 + p {
	margin-top: 0;
}
```

#### General Sibling Combinator (~)

Selects all following siblings.

```css
/* All <p> elements that follow <h1> */
h1 ~ p {
	color: gray;
}
```

### 4. Grouping Selectors

Apply the same styles to multiple selectors.

```css
/* Groups multiple selectors */
p,
article {
	width: 500px;
}

/* More complex grouping */
h1,
h2,
.title,
#main-title {
	font-family: Arial, sans-serif;
}
```

### 5. Compound Selectors

Combine selectors without spaces to be more specific.

```css
/* <p> elements that also have class "paraClass" */
p.paraClass {
	text-align: center;
}

/* Elements with multiple classes */
.btn.primary.large {
	padding: 15px 30px;
}
```

## Pseudo-classes

Pseudo-classes select elements in a specific state.

### Link and User Action Pseudo-classes

```css
/* Unvisited links */
a:link {
	color: blue;
}

/* Visited links */
a:visited {
	color: purple;
}

/* Hover state */
a:hover {
	color: red;
	text-decoration: underline;
}

/* Active state (being clicked) */
a:active {
	color: green;
}

/* Focus state */
input:focus {
	border: 2px solid blue;
	outline: none;
}
```

### Structural Pseudo-classes

```css
/* First child */
p:first-child {
	font-weight: bold;
}

/* Last child */
p:last-child {
	margin-bottom: 0;
}

/* nth child */
p:nth-child(2) {
	color: red;
}

/* Even/odd children */
tr:nth-child(even) {
	background-color: #f2f2f2;
}

tr:nth-child(odd) {
	background-color: white;
}

/* First of type */
p:first-of-type {
	font-size: 1.2em;
}

/* Last of type */
p:last-of-type {
	margin-bottom: 0;
}
```

### Form Pseudo-classes

```css
/* Enabled elements */
input:enabled {
	border: 1px solid black;
}

/* Disabled elements */
input:disabled {
	background-color: #ccc;
	color: #666;
}

/* Checked checkboxes/radio buttons */
input:checked {
	accent-color: blue;
}

/* Required fields */
input:required {
	border: 1px solid red;
}

/* Valid input */
input:valid {
	border: 1px solid green;
}

/* Invalid input */
input:invalid {
	border: 1px solid red;
}
```

### Negation Pseudo-class

```css
/* All elements except paragraphs */
:not(p) {
	margin: 10px;
}

/* All inputs except checkboxes */
input:not([type="checkbox"]) {
	width: 200px;
}
```

## Pseudo-elements

Pseudo-elements create virtual elements that don't exist in the HTML.

### Content Pseudo-elements

```css
/* Before element */
p::before {
	content: "→ ";
	color: blue;
}

/* After element */
p::after {
	content: " ←";
	color: red;
}

/* First line */
p::first-line {
	font-weight: bold;
	color: blue;
}

/* First letter */
p::first-letter {
	font-size: 2em;
	float: left;
	margin-right: 5px;
}

/* Selection */
::selection {
	background-color: yellow;
	color: black;
}
```

### Input Pseudo-elements

```css
/* Placeholder text */
input::placeholder {
	color: #999;
	font-style: italic;
}

/* File input button */
input[type="file"]::file-selector-button {
	background-color: blue;
	color: white;
	border: none;
	padding: 5px 10px;
}
```

## Best Practices

### 1. Specificity Management

-   **Avoid inline styles** - Use classes instead
-   **Limit ID selectors** - Use classes for reusable styles
-   **Use semantic class names** - `.btn-primary` instead of `.blue-button`

### 2. Performance

-   **Use specific selectors** - Avoid overly broad selectors like `*`
-   **Minimize deep nesting** - Keep selectors shallow
-   **Use classes over complex selectors** - `.error-message` vs `div.container > p:first-child`

### 3. Maintainability

-   **Use descriptive names** - `.card-title` vs `.text`
-   **Follow naming conventions** - Use kebab-case: `.my-class-name`
-   **Group related styles** - Keep similar selectors together
-   **Use comments** - Document complex selectors

### 4. Accessibility

-   **Use semantic elements** - `<button>` instead of `<div class="button">`
-   **Avoid styling with content** - Use `::before`/`::after` for decorative elements only
-   **Test with screen readers** - Ensure pseudo-elements don't interfere



## Conclusion

CSS selectors are powerful tools that allow you to precisely target and style HTML elements. Understanding specificity, different selector types, and best practices will help you write more maintainable and efficient CSS. Always prefer classes over IDs for styling, use semantic naming conventions, and test your selectors to ensure they work as expected across different scenarios.
