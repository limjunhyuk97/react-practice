# React01

## React Structure

- Component Tree (Nested Component with APP Component at top)
- Virtual DOM
- DOM

### How it runs internally

- Components initially
  - compiled to Virtual DOM
  - inserted into DOM
- Components after
  - updated in Virtual DOM
  - Rerendered in DOM
  - React Fiber : If change occurs, **reconciliation** operation implemented

### Virtual DOM

- Recalculation happens in memory, so it's more light weighted.
- **reducing the update number in real DOM**

### Architecture (Flux)

- Flux : Data in the app always flow from top to bottom
- In other words, update moves from parent to Component
- And React Fiber Algorithm choose what components to be changed
