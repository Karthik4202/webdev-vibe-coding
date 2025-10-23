## Day 11 - CSS FlexBox and MediaQueries  
**Date:** October 21, 2025

# 🎯 Flexbox & Media Query Notes

## 🧩 1️⃣ Flex Grow vs Flex Shrink

### 📘 What They Do

| Property        | When It Applies                   | What It Does                                 | Default |
| --------------- | --------------------------------- | -------------------------------------------- | ------- |
| **flex-grow**   | When there’s **extra space**      | Defines how much the item **expands**        | `0`     |
| **flex-shrink** | When there’s **not enough space** | Defines how much the item **shrinks**        | `1`     |
| **flex-basis**  | Always                            | Sets the **initial size** before grow/shrink | `auto`  |

### 🧠 Explanation

* `flex-grow` allows an element to expand when extra space is available. Multiple items grow proportionally based on their `flex-grow` value.
* `flex-shrink` allows an element to shrink when space is limited. Multiple items shrink proportionally based on their `flex-shrink` value.
* Using `flex-shrink: 0` prevents the element from shrinking.
* Slight differences in width may occur due to **subpixel rounding** and **borders**.

## 📦 Note: Border and `box-sizing`

* By default, CSS uses `box-sizing: content-box`, meaning `total width = content + padding + border`.
* Use `box-sizing: border-box` to include borders and padding inside the specified width, ensuring consistent layout.

## 📱 2️⃣ Media Queries — Responsive Design

### 🧠 What Is a Media Query?

* Media queries allow different styles to be applied based on **device screen width** or **device type**, making designs responsive.

### ⚙️ Common Breakpoints

| Device             | Screen Width   | Query                                               |
| ------------------ | -------------- | --------------------------------------------------- |
| **Mobile**         | up to 767px    | `@media (max-width: 767px)`                         |
| **Tablet (iPad)**  | 767px – 991px | `@media (min-width: 768px) and (max-width: 991px)` |
| **Laptop/Desktop** | above 991px   | `@media (min-width: 992px)`                        |

## 🧩 Summary

* Use `flex-grow` to make elements expand into free space.
* Use `flex-shrink` to make elements shrink when space is tight.
* `flex-shrink: 0` prevents shrinking.
* Always use `box-sizing: border-box` for consistent width calculations.
* Media queries make your design responsive for mobile, tablet, and desktop.
