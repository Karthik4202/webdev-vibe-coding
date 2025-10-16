## Day 08 - Flex Concepts  
**Date:** October 16, 2025  

---

### 🧩 What is Flex?  
- **Flex**→ A CSS property used on items inside a flex container to control how much they grow, shrink, and their initial size.

---

### 📦 Flex Container & Flex Items  
- **Flex Container** → The parent element with `display: flex;`.  
- **Flex Items** → All direct children of the flex container.

```css
.container {
  display: flex;
}
```

---

### 🧭 Main Axis & Cross Axis  
- **Main Axis** → Direction of the flex container (`flex-direction`).  
  - `row` → left to right  
  - `row-reverse` → right to left  
  - `column` → top to bottom  
  - `column-reverse` → bottom to top  
- **Cross Axis** → Perpendicular to the main axis.  

---

### ⚙️ Flex Properties  

#### 1. **flex-direction**  
Defines the **direction** of flex items in the container.

```css
.container {
  flex-direction: row; /* default, horizontal left to right */
  flex-direction: row-reverse;
  flex-direction: column;
  flex-direction: column-reverse;
}
```

#### 2. **justify-content**  
Aligns items **along the main axis** (horizontal for `row`, vertical for `column`).

```css
.container {
  justify-content: flex-start;   /* start of main axis */
  justify-content: flex-end;     /* end of main axis */
  justify-content: center;       /* center items */
  justify-content: space-between;/* equal space between items */
  justify-content: space-around; /* equal space around items */
  justify-content: space-evenly; /* equal space between and around */
}
```

#### 3. **align-items**  
Aligns items **along the cross axis** (perpendicular to main axis).

```css
.container {
  align-items: stretch;   /* default, items stretch to fill cross axis */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;
}
```

#### 4. **flex-wrap**  
Controls whether flex items **wrap to a new line** if space is limited.

```css
.container {
  flex-wrap: nowrap;       /* default, all items in one line */
  flex-wrap: wrap;         /* wrap to next line */
  flex-wrap: wrap-reverse; /* wrap in reverse order */
}
```

---

### 💡 Flex Shrinking  

- When flex items **exceed container space**, they shrink.  
- Controlled by `flex-shrink` property.

```css
.item {
  flex-shrink: 1; /* can shrink */
  flex-shrink: 0; /* will not shrink */
}
```

#### ✅ Ways to avoid shrinking:  
1. Set `flex-shrink: 0;` on the item.  
2. Use `flex: none;` shorthand (equivalent to `flex: 0 0 auto;`).

---

### 🧠 Quick Summary Table  

| Property | Axis | Description |
|----------|------|-------------|
| `flex-direction` | Main axis | Defines direction of items |
| `justify-content` | Main axis | Align items along main axis |
| `align-items` | Cross axis | Align items along cross axis |
| `flex-wrap` | — | Control wrapping of items |
| `flex-shrink` | — | Determines if items shrink |
| Ways to avoid shrinking | — | `flex-shrink: 0` or `flex: none` |

---
