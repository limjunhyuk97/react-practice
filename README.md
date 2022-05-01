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
- In other words, **update moves from parent to Component**
- And **React Fiber Algorithm choose what components to be changed**





## Starting React

- Manually setting up / configuring a project bundler
  - rollup.js
- boilerplate (Using Project template)
  - CRA (for big one : create-react-app)
  - NRA (for small one : nano-react-app)
  - VITE
  - Snowpack
- using React Framework
  - Gatsby
  - NextJS





## 01. Tic Tac Toe

<img width="496" alt="image" src="https://user-images.githubusercontent.com/59442344/161982706-8a93f2ca-c172-4f42-a9df-c1e147b96990.png">





## Tips

### State Hook

- **useState**
  - 초기 랜더링 시에 state 값 초기화
  - __ : state 정보를 담아둔다.
  - set__ : state 정보를 변경하기 위해 사용

### Effect Hook

- **side effect란**
  - react 컴포넌트에서 데이터를 가져오거나, 구독하는 작업
  - DOM을 조작하는 작업

- **useEffect**
  - side effect로 발생하는 작업을 수행한다.
  - 컴포넌트의 랜더링 이후 매번 수행된다.