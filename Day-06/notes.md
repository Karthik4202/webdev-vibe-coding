## Day 06 - CSS Box Model, Border & Backgrounds
**Date:** October 14, 2025

---

### 🧱 CSS Box Model

The **Box Model** describes how every HTML element is represented as a rectangular box that consists of the following parts:

1. **Content** → The actual content inside the element (like text or images).
2. **Padding** → Space between the content and the border.
3. **Border** → A line surrounding the padding (optional).
4. **Margin** → Space outside the border that separates the element from others.

**Total element size = content + padding + border + margin**

---

### 📏 Height & Width

- **height:** Defines the vertical size of an element’s content area.  
- **width:** Defines the horizontal size of an element’s content area.

> Note: Padding and border add extra space outside the height and width when using the default box sizing (`content-box`). When `box-sizing: border-box` is used, padding and border are included inside the specified width/height.

---

### 🎨 Border Properties

- **border-width:** Sets the thickness of the border.  
- **border-style:** Defines the pattern of the border (`none`, `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`).  
- **border-color:** Changes the color of the border.  
- **border-radius:** Rounds the corners of the border.
---

### 🖼️ Background Properties (expanded)

Background properties control what appears behind an element’s content and padding.

#### Basic properties
- **background-color:** Sets the background color.
- **background-image:** Adds one or more background images.
  ```css
  background-image: url("image.jpg");
  /* multiple images (first is top-most): */
  background-image: url("top.png"), url("back.png");
  ```
- **background-repeat:** Controls repetition of the image. Values: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`, `space`, `round`.
- **background-position:** Sets the position of the background image. Examples: `center`, `top right`, `10px 20px`.
- **background-size:** Controls how background image is scaled. Common values:
  - `cover` — Scales the image to completely cover the element. Parts may be cropped.
  - `contain` — Scales the image so the entire image fits inside the element. May leave gaps.
  - `auto`, `100% 50%`, `cover`, `contain`.

---

### 🌈 CSS Gradients

Gradients create smooth color transitions and behave like images — you can use them in `background-image`.

#### Linear Gradient
```css
background-image: linear-gradient(to right, red, yellow);
```

#### Radial Gradient
```css
background-image: radial-gradient(circle, red, yellow, blue);
```

---

### 📦 Box Sizing

**`box-sizing`** defines how the browser calculates the width and height of an element.

- **content-box (default):** `width` and `height` apply to the content box only. Padding and borders are added outside that size.
- **border-box:** `width` and `height` include content, padding, and border.

#### Why use `border-box`?
Using `border-box` avoids surprises where adding padding increases the total element size. It is common to apply it globally.
---

**End of Day 06 Notes**
