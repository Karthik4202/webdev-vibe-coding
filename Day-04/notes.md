# Day 04 - Introduction to CSS

**Date:** 10-10-2025  

---

## 📘 Topics Learned

### 1. What is CSS?

- **CSS (Cascading Style Sheets)** is used to style and design the layout of web pages.  
- It controls the appearance of HTML elements such as colors, fonts, spacing, and positioning.  
- CSS helps in separating **content (HTML)** from **presentation (design)**.

---

### 2. Types of CSS

There are **three types of CSS** based on how they are applied:

1. **Inline CSS**
   - Written directly inside an HTML tag using the `style` attribute.
   - Affects only that specific element.
   - **Highest priority** among all types.

2. **Internal CSS**
   - Defined within a `<style>` tag inside the `<head>` section of an HTML file.
   - Styles apply only to that specific HTML page.

3. **External CSS**
   - Written in a separate `.css` file and linked to the HTML file using the `<link>` tag.
   - Makes styling reusable across multiple web pages.

---

### 3. CSS Priority Order (from highest to lowest)

1. **Inline CSS**
2. **Internal CSS**
3. **External CSS**
4. **Browser default styles**

> If multiple styles are applied to the same element, the one with **higher priority** or **specificity** is used.

---

### 4. Types of CSS Selectors

1. **Element Selector**
   - Selects HTML tags directly (e.g., `p`, `h1`, `div`).
   - Applies styles to all instances of that element.

2. **Class Selector**
   - Uses a dot (`.`) before the name (e.g., `.example`).
   - Can be applied to multiple elements.

3. **ID Selector**
   - Uses a hash (`#`) before the name (e.g., `#unique`).
   - Used for a single, unique element on the page.

4. **Universal Selector**
   - Represented by an asterisk (`*`).
   - Applies styles to **all elements** on the page.

---

### 5. Selector Priority (from highest to lowest)

1. **Inline Styles**  
2. **ID Selector (#id)**  
3. **Class Selector (.class)**  
4. **Element Selector (tag name)**  
5. **Universal Selector (*)**

> If two rules have the same specificity, the **latest one defined** in the CSS file is applied.

---

✅ **Summary:**
- CSS styles web pages and controls their layout.  
- Three main types: Inline, Internal, and External.  
- Inline styles have the highest priority.  
- Four main selectors: Element, Class, ID, and Universal.  
- ID selectors have the highest specificity among selectors.

---
