## Day 12 - CSS Grid Layout  
**Date:** October 22, 2025

## What is CSS Grid?

CSS Grid is a two-dimensional layout system for the web. It allows you to create **complex layouts** easily by dividing a container into rows and columns. Unlike Flexbox, which is mostly one-dimensional (row or column), Grid works for both **rows and columns simultaneously**.

---

## Why use CSS Grid?

* Easily create **complex layouts** without using floats or positioning.
* Align items both **horizontally and vertically**.
* Define **precise placements** of elements using grid lines and areas.
* Makes **responsive design** easier with fewer media queries.

---

## Basic Terminology

* **Grid Container:** The parent element that has `display: grid;`.
* **Grid Item:** The direct children of the grid container.
* **Grid Line:** The dividing lines that separate rows and columns.
* **Grid Track:** The space between two grid lines (row or column).
* **Grid Cell:** The smallest unit in a grid, formed by the intersection of a row and column.
* **Grid Area:** The space occupied by one or more grid cells.

---

## Basic Properties

### For Grid Container:

* `display: grid;` → Enables grid layout.
* `grid-template-columns` → Defines the number and width of columns.

```css
grid-template-columns: 100px 200px 1fr;
```

* `grid-template-rows` → Defines the number and height of rows.
* `grid-gap` or `gap` → Adds spacing between rows and columns.
* `grid-template-areas` → Names grid areas for easier placement.
* `justify-items` → Aligns items horizontally inside their cell (`start`, `center`, `end`, `stretch`).
* `align-items` → Aligns items vertically inside their cell (`start`, `center`, `end`, `stretch`).

### For Grid Items:

* `grid-column-start / grid-column-end` → Defines the column position.
* `grid-row-start / grid-row-end` → Defines the row position.
* `grid-area` → Assigns the item to a named grid area.
* `justify-self` → Aligns the item horizontally inside its cell.
* `align-self` → Aligns the item vertically inside its cell.
---

## Advantages of Grid

* Precise placement of items.
* Simplifies **responsive layouts**.
* Reduces the need for **extra wrappers or floats**.
* Works well with **named areas** for readability.

---

## References

* [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
