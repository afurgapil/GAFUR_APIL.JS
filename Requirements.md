# Requirements

This document outlines all the technical, functional, and visual requirements for the product carousel project built for the homepage.

---

## Technical Requirements

- The entire project must be written in **vanilla JavaScript** (optionally jQuery).
- The project must consist of a **single `.js` file**.
- The code should be **self-contained** and **executable in the browser console** (DevTools).
- All **HTML and CSS** structures must be created via JavaScript (DOM manipulation).
- **No external libraries or frameworks** are allowed (e.g., Swiper, Bootstrap).
- The script should run **only on the homepage** (check current URL).

---

## Functional Requirements

- Fetch product data from:
  [products.json](https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json)
- On first run, save product list to localStorage.
- On subsequent runs, read from localStorage.
- Insert the carousel **after the “stories” section** on the homepage.
- Each product card must include:

  - Image
  - Product title
  - Price (and original price if different)
  - Discount amount if applicable
  - Heart icon for favoriting

- Clicking a product must open the product link in a **new tab**.
- Clicking the heart icon should toggle orange fill and update localStorage.
- Previously favorited products must be rendered with filled heart icon on reload.

---

## UI Requirements

- The design must match the one visible on the **ebebek homepage** (**pixel-perfect**).
- The carousel must be fully **responsive** across all screen sizes.
- All styling (margins, font sizes, colors) should mimic the real site exactly.

---
