# Day 07 External Fonts And CSS Positions

**Date:** October 15, 2025

---

## 1. Applying External Fonts

There are **two main ways** to apply external fonts in a webpage:

### 1.1 Using Downloaded Fonts

- Download the font file (usually `.ttf` or `.otf`) from a trusted source.
- Include it in your project directory (e.g., `fonts/` folder).
- Use `@font-face` in CSS:

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("fonts/MyCustomFont.ttf") format("truetype");
}
body {
  font-family: "MyCustomFont", sans-serif;
}
```

### 1.2 Using Embedded Code (e.g., Google Fonts)

- Go to Google Fonts, select a font, and copy the `<link>` code.
- Paste the `<link>` in the `<head>` section of HTML:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

- Use the font in CSS:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

## 2. CSS Positions

The `position` property defines how an element is placed in the document.

### 2.1 Relative Position

- `position: relative;` positions the element **relative to its normal position**.
- Can use `top`, `bottom`, `left`, `right` to adjust location **without removing it from the normal flow**.

```css
div {
  position: relative;
  top: 10px; /* Moves element 10px down from its normal position */
  left: 20px; /* Moves element 20px right from its normal position */
}
```

### 2.2 Absolute Position

- `position: absolute;` positions the element **relative to its nearest positioned ancestor**.
- **Removed from the normal flow** and can overlap other elements.

```css
div {
  position: absolute;
  top: 50px; /* Distance from the top of the nearest positioned ancestor */
  left: 100px; /* Distance from the left of the nearest positioned ancestor */
}
```

---

## 3. Position Properties

### 3.1 Top

- Moves the element **down** from the top edge of its containing block.

### 3.2 Bottom

- Moves the element **up** from the bottom edge of its containing block.

### 3.3 Left

- Moves the element **right** from the left edge of its containing block.

### 3.4 Right

- Moves the element **left** from the right edge of its containing block.

### 3.5 Z-index

- Controls the **stacking order** of elements.
- Higher `z-index` → element appears **on top** of elements with lower `z-index`.

```css
div1 {
  position: absolute;
  top: 50px;
  left: 100px;
  z-index: 2;
}
div2 {
  position: absolute;
  top: 70px;
  left: 120px;
  z-index: 1;
}
/* div1 will appear above div2 because of higher z-index */
```
