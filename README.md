

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`
i) **getElementById** → Returns a single element by its unique `id`. 
ii) **getElementsByClassName** → Returns a live HTMLCollection of elements by class.
iii) **querySelector** → Returns the **first matching element** using CSS selectors 
iv) **querySelectorAll** → Returns a **static NodeList** of all matches.

---

## 2. How to create and insert a new element into the DOM
1. Create: `const el = document.createElement("div");`    
2. Insert: `document.body.appendChild(el);`  

---

## 3. What is Event Bubbling and how does it work?
- Event bubbling means when an event (like `click`) happens on a child element, it **bubbles up** to its parent, then to higher ancestors, until reaching `document`.  

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation uses **event bubbling** to handle events at a parent element instead of adding listeners to each child.    
- **Useful because**:  
  - Better performance .  
  - don't need to use event Bubbling to all the parent so get fresh code.

---

## 5. Difference between `preventDefault()` and `stopPropagation()`
- **preventDefault()** → Stops the browser’s default action . Stop automatically reload of a form.
- **stopPropagation()** → Stops the event from bubbling up . it is uses at event bubbling  

---
