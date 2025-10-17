# Day 08 Pseudo classes and Transitions
**Date:** October 17, 2025

---

## 1. Pseudo-Classes

Pseudo-classes are used to define the **special state of an element**.

### 1.1 `:hover`
- Triggered when the mouse pointer is over an element.

```css
button:hover {
    background-color: blue;
    color: white;
}
```

### 1.2 `:focus`
- Applied when an input element is **focused** (clicked or active).

```css
input:focus {
    border-color: green;
    outline: none;
}
```

---

## 2. Pseudo-Elements

Pseudo-elements allow styling **specific parts** of an element.

### 2.1 `::before`
- Adds content **before** the element’s content.

```css
li::before {
    content: "👉 ";
}
```

### 2.2 `::after`
- Adds content **after** the element’s content.

```css
li::after {
    content: " ✅";
}
```

---

## 3. CSS Transitions

Transitions make CSS property changes **smooth over time**.

### 3.1 Syntax
```css
transition: property duration timing-function delay;
```

Example:
```css
button {
    background-color: skyblue;
    transition: background-color 0.5s ease-in-out;
}

button:hover {
    background-color: blue;
}
```

### 3.2 Transition Properties

- **transition-property** → Which property to animate (e.g., `background-color`)
- **transition-duration** → Time of the transition (e.g., `0.5s`)
- **transition-timing-function** → Speed curve
- **transition-delay** → When the transition should start

### 3.3 Timing Functions
- `linear` → Constant speed
- `ease` → Slow start and end
- `ease-in` → Slow start
- `ease-out` → Slow end
- `ease-in-out` → Slow start and slow end
- `cubic-bezier(x1, y1, x2, y2)` → Custom speed curve

Example:
```css
div {
    transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

---

## 4. CSS Transforms

The **transform** property allows changing the **shape, size, and position** of elements.

### 4.1 Translate
Moves an element from its current position.

```css
div {
    transform: translate(50px, 100px);
}
```

### 4.2 Rotate
Rotates an element clockwise or counterclockwise.

```css
div {
    transform: rotate(45deg);
}
```

### 4.3 Scale
Resizes an element (increases or decreases its size).

```css
div {
    transform: scale(1.5);
}
```

### 4.4 Skew
Tilts an element along the X or Y axis.

```css
div {
    transform: skew(20deg, 10deg);
}
```

### 4.5 Combining Transforms
Multiple transforms can be applied together.

```css
div {
    transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}
```

---

## 5. CSS Animations

Animations allow elements to **change styles over time** using keyframes.

### 5.1 Keyframes
Defines what the animation does at specific moments.

```css
@keyframes moveBox {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(100px); }
    100% { transform: translateX(0); }
}
```

### 5.2 Applying the Animation
Use animation-related properties on an element.

```css
div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: moveBox;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
}
```
---
