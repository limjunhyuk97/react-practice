# LifeCycle

- 라이프 사이클 메서드는 Class 컴포넌트들에서만 사용할 수 있다.
- 함수형 컴포넌트에서는 Hooks를 사용하여 유사한 기능을 처리할 수 있다.
- 라이프 사이클은 크게 **마운트, 업데이트, 언마운트** 카테고리로 나뉘며, 총 9개의 라이프 사이클 메서드가 존재한다.

## 상태변경이 언제 일어나는가?

### 1. state 값의 변경

### 2. props 값의 변경

### 3. 부모 컴포넌트의 리랜더링

### 4. 강제로 리랜더링 트리거

this.forceUpdate를 활용하면 강제 리랜더링의 트리거가 발생한다

## 마운트 / 업데이트 / 언마운트

![리액트_라이프사이클.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ed0c48ec-39aa-497e-9feb-ae8058946f8b/bdb27d08-149c-478d-8cb1-7a228a8974fa/%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF.png)

### 마운트

- 페이지에 컴포넌트가 나타날 때 : 관련 라이프사이클 메서드들이 호출된다.

### 업데이트

- 컴포넌트 상태가 변경되는 경우 : 관련 라이프사이클 메서드들이 호출된다.

### 언마운트

- 컴포넌트가 페이지에서 사라질 때 : 관련 라이프사이클 메서드들이 호출된다.

## 라이프사이클 메서드

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ed0c48ec-39aa-497e-9feb-ae8058946f8b/0d95c00d-674d-40f0-90fa-2924b81b010e/Untitled.png)

---

### [Mount] 1. Constructor

```jsx
constructor(props) {
	super(props)
	...
}
```

- state 값에 대한 초기화를 수행할 수 있다.
- props 값을 받아들일 수 있다.

### [Mount] 2. getDerivedStateFromProps

```jsx
static getDerivedStateFromProps(nextProps, prevState) {
	return 다음state값 | null
}
```

- static인 이유는 props 값을 통한 컴포넌트 인스턴스에 대한 부수효과를 일으키는 것을 방지하기 위함이다.
- prevProps (받아들인 props 값), prevState (이전 state 값) 을 바탕으로 새로운 state 값을 반환한다.
- 변화를 주지 않으려면, null을 반환한다.

### [Mount] 3. render

```jsx
render() {
	return ( jsx );
}
```

- 라이프사이클 메서드 중 필수 메서드이다.
- 메서드 내부에서 this.props, this.state 값에 접근할 수 있다.
- **[금지사항] DOM에 대한 직접 접근은 일어나서는 안된다**
- **[금지사항] 이벤트 핸들러 내에서 setState를 사용하는 것 이외로 setState 사용 금지**

### [Mount] 4. componentDidMount

```jsx
componentDidMount() {}
```

- mount 직후, 즉 컴포넌트가 DOM에 생성된 이후로 호출되는 메서드이다.
- 이벤트 등록, DOM에 대한 직접 접근, DOM 요소 생성, 비동기 호출 등을 내부에서 수행할 수 있다.

---

### [Update] 1. getDerivedStateFromProps

```jsx
static getDerivedStateFromProps(nextProps, prevState) {
	return 다음state값 | null
}
```

- static인 이유는 props 값을 통한 컴포넌트 인스턴스에 대한 부수효과를 일으키는 것을 방지하기 위함이다.
- prevProps (받아들인 props 값), prevState (이전 state 값) 을 바탕으로 새로운 state 값을 반환한다.
- 변화를 주지 않으려면, null을 반환한다.

### [Update] 2. shouldComponentUpdate

```jsx
shouldComponentUpdate(nextProps, nextState) {}
```

- 변경된 props, state 값을 바탕으로 리랜더링 여부를 결정하는 메서드이다.
    - true 반환 → 리랜더링 수행 (기본적으로 해당 메서드는 true 반환)
    - false 반환 → 리랜더링 수행안함
- 기존의 props, state ← this.props, this.state로 접근
- 변경 후 props, state ← nextProps, nextState로 접근

### [Update] 3. render

```jsx
render() {
	return ( jsx );
}
```

- 라이프사이클 메서드 중 필수 메서드이다.
- 메서드 내부에서 this.props, this.state 값에 접근할 수 있다.
- **[금지사항] DOM에 대한 직접 접근은 일어나서는 안된다**
- **[금지사항] 이벤트 핸들러 내에서 setState를 사용하는 것 이외로 setState 사용 금지**

### [Update] 4. getSnapshotBeforeUpdate

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
	return snapshot;
}
```

- render 결과물이 DOM에 붙기 전에 호출된다.
- prevProps, prevState를 통해서 변경 이전의 props, state 정보에 접근 가능하다
- 업데이트 하기 직전에 참고할 일이 있을 때 필요하다
- 메서드가 반환하는 snapshot 값은 componentDidUpdate 의 세번째 인자로 받을 수 있다.

### [Update] 5. componentDidUpdate

```jsx
componentDidUpdate(prevProps, prevState, snapshot) {}
```

- render 결과물이 DOM에 붙은 후에 호출된다.
- prevProps, prevState를 통해 변경 이전의 props, state 정보에 접근 가능하다
- snapshot을 통해서 getSnapshotBeforeUpdate 에서 반환한 값을 받아볼 수 있다.

---

### [onMount] 1. componentWillUnmount

```jsx
componentWillUnmount() {}
```

- 컴포넌트가 페이지에서 사라질 때 호출된다.
- 임의로 직접 생성한 DOM, 타이머 객체 등을 여기서 제거해주어야 한다. (메모리누수 방지)

---

### [Error] 1. componentDidCatch

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) return <h1>Something wrong happened</h1>;
    return this.props.children;
  }
}
```

- componentDidCatch 메서드를 통해서 에러 발생 시 컴포넌트 트리 전체가 깨지는 것을 방지할 수 있다.
- 에러가 발생한 경우, 에러가 발생한 해당 자식 컴포넌트 트리를 fallback 컴포넌트로 대체하는 것 또한 수행할 수 있는 ErrorBoundary 컴포넌트를 생성할 수 있다.

## 예시

### 실제 화면

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ed0c48ec-39aa-497e-9feb-ae8058946f8b/16c75709-24b7-4e7c-ac84-23098709332e/Untitled.png)

### LifeCycleSample

```jsx
// LifeCycleSample.js
import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  //** [mount] constructor -> ... */
  // - 초기 state를 정한다.
  // - props를 컴포넌트가 전달받는다.
  constructor(props) {
    super(props);
    console.log('LOG : constructor');
  }

  // props 값을 사용하여 인스턴스에 대한 부수효과를 일으키는 것을 방지하기 위해 static
  //** [mount] constructor -> getDerivedStateFromProps -> ... */
  //** [update] getDerivedStateFromProps -> ... */
  // - prevProps 값과 prevState 값을 바탕으로 nextState 값을 반환
  // - 값의 지정이 필요없다면 null 반환
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('LOG : getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //** [mount] constructor -> getDerivedStateFromProps -> render -> componentDidMount */
  // - component를 만들고, 해당 컴포넌트가 DOM에 붙은 이후 호출되는 메서드
  // - 이벤트 등록, setTimeout, setInterval, 비동기 호출등의 작업을 수행할 수 있음
  componentDidMount() {
    console.log('LOG : componentDidMount');
  }

  //** [update] getDerivedStateFromProps -> shouldComponentUpdate -> ... */
  // - 변경된 props와 state 값을 바탕으로 리랜더링을 수행할 지 결정하는 메서드 (true 가 default. true 반환하면 리랜더링)
  // - 기존의 props와 state : this.props, this.state로 접근
  // - 변경후 props와 state : nextProps, nextState
  shouldComponentUpdate(nextProps, nextState) {
    console.log('LOG : shouldComponentUpdate');
    return nextState.number % 10 !== 4;
  }

  //** [update] getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> ... */
  // - render 결과물이 브라우저에 랜더링되기 직전에 호출된다.
  // - prevProps, prevState를 통해 변경 이전의 props, state 정보에 접근할 수 있다.
  // - 업데이트 하기 직전의 값을 참고할 일이 있을 때 사용된다.
  // - 반환값은 componentDidUpdate의 세번째 인자로 받아쓸 수 있다.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LOG : getSnapShotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //** [update] getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate */
  // - render 가 완료되고 호출된다.
  // - componentDidMount와 마찬가지로 랜더링이 완료되었기에, DOM에 대한 직접 접근 및 비동기 호출에 대한 작성이 가능하다.
  // - prevProps : 이전 props 값
  // - prevState : 이전 state 값
  // - snapshot : getSnapshotBeforeUpdate에서 반환한 값
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('LOG : componentDidUpdate');
    if (snapshot) {
      alert(`업데이트 되기 전의 색상 : ${snapshot}`);
    }
  }

  //** [mount] constructor -> getDerivedStateFromProps -> render -> ... */
  //** [update] getDerivedStateFromProps -> shouldComponentUpdate -> render -> ... */
  // - 라이프사이클 메서드중 필수 메서드
  // - this.props, this.state 값에 접근할 수 있음
  // - 아무것도 보여주고 싶지 않으면 null, false 반환하도록
  // - 주의사항 1 : DOM에 대한 직접 접근 안됨
  // - 주의사항 2 : 이벤트 핸들러 내에서 setState 사용하는 것 이외로는 setState 사용금지
  render() {
    console.log('LOG : render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

  //** [unmount] componentWillUnmount*/
  // - 컴포넌트가 페이지에서 사라질 때 호출됨
  // - 직접 생성한 DOM이나, 생성했던 이벤트나 타이머 객체들을 여기서 제거해야 한다.
  componentWillUnmount() {
    console.log('LOG : componentWillUnmount');
  }
}

export default LifeCycleSample;
```

### ErrorBoundary

```jsx
import React, { Component } from 'react';

//** Error Boundary */
// - 컴포넌트 트리가 깨지는 대신 자식 컴포넌트 트리에서 에러를 잡아내고,
// - 에러와 로그를 남기고 Fallback UI를 보여주는 React 컴포넌트
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) return <h1>Something wrong happened</h1>;
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### App

```jsx
class App extends Component {
  state = { color: ' #e0e0e0' };

  generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    this.setState({ color: this.generateRandomColor() });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
        <button onClick={this.clickHandler}>색상 바꾸기</button>
      </div>
    );
  }
}
```