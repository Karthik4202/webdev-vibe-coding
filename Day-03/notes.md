# Day 03 - Tables (Rowspan & Colspan), Forms, Media, and Div Tag  
**Date:** 09-10-2025  

## Topics Learned  

### 1. Rowspan and Colspan  
- **Rowspan**: Used to merge cells **vertically** (across rows).  
- **Colspan**: Used to merge cells **horizontally** (across columns).  
- Both are attributes used inside the `<td>` or `<th>` tag in tables.  

### 2. Form Tag and Input Types  
- The `<form>` tag is used to collect user input.  
- Common attributes:  
  - `action` – URL where the form data is sent.  
  - `method` – HTTP method used to send data (`GET` or `POST`).  

#### Common Input Types:  
- `text` – Single-line text input.  
- `password` – Hides entered text.  
- `email` – For email input (validates format).  
- `radio` – Allows selection of one option from a group.  
- `checkbox` – Allows multiple selections.  
- `submit` – Submits the form.  
- `reset` – Resets the form data.  

### 3. Label Tag  
- The `<label>` tag defines a label for an input element.  
- Improves accessibility and usability.  
- The `for` attribute in `<label>` must match the `id` of the input field.  
  - Example relation:  
    - `<label for="email">Email:</label>`  
    - `<input type="email" id="email" />`  

### 4. Audio Tag  
- The `<audio>` tag is used to embed sound content in a webpage.  
- Common attributes:  
  - `controls` – Adds play/pause buttons.  
  - `autoplay` – Starts playing automatically.  
  - `loop` – Plays the audio repeatedly.  

### 5. Video Tag  
- The `<video>` tag is used to embed video files.  
- Common attributes:  
  - `controls` – Adds video controls.  
  - `autoplay` – Plays automatically.  
  - `loop` – Repeats the video.  

### 6. Div Tag  
- The `<div>` tag is a **block-level container** used to group elements.  
- Helps in organizing layout and applying styles with CSS.  
- Commonly used for sections, containers, or layouts.  

---

✅ **Summary:**  
Learned about table merging (`rowspan`, `colspan`), form structure with input types, label–input relationship, and how to embed audio/video content. Also understood the purpose of `<div>` for structuring web layouts.
