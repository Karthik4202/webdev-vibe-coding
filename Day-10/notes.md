## Day 10 - CSS Units  
**Date:** October 18, 2025  

---

### 🎯 What are CSS Units?
CSS units define **the measurement of size** in a webpage — for example, width, height, padding, font-size, margin, etc.  

There are two main types of CSS units:
1. **Absolute Units** — fixed and do not change with screen size.  
2. **Relative Units** — change depending on the parent or viewport.

---
✅ **Notes:**  
- `px` does not change when screen size changes.  
- Best for borders, small icons, or exact spacing.
---

### 🧠 Key Points
- `px` → Fixed size, not responsive.  
- `%` → Depends on the parent element.  
- `em` → Based on parent’s font-size (can stack if nested).  
- `rem` → Based on root font-size (doesn’t depend on parent).  
- `vw` / `vh` → Based on browser window size, great for fullscreen layouts.  

---

### 💡 Example:
```css
html {
  font-size: 16px;
}

.container {
  width: 80%;
  height: 50vh;
  font-size: 2em;    
}

.text {
  font-size: 1rem;  
}
