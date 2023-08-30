# Ref : DOM에 이름 달기

- 컴포넌트 JSX 내의 HTML 태그에 직접 id 값을 붙이는 것은 위험하다. (중복된 id 값이 존재할 수 있기 때문)
- ref는 **react Element 를 참조할 때 사용**할 수 있다.
  - 참조 가능한 element 종류로는 **DOM / 컴포넌트**가 있다.
  - 단, **컴포넌트 ref 참조를 통한 메서드 호출이나, state 참조는 지양**하는 것이 좋다.
  - 컴포넌트 간의 데이터 교류는 부모->자식 으로 이어지게 설계하는 것이 React를 사용한 설계에서 중요함

## 언제 DOM을 직접 건드릴 수 밖에 없는가?

- 특정 input에 focus 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 
- 등 ...

## 클래스 컴포넌트 - DOM에 ref 사용

### 콜백 함수 전달

- jsx 내의 React element의 ref props에 콜백함수를 전달한다.
- 콜백함수에서 클래스의 멤버변수에 해당 React element를 할당한다.

```jsx
class RefExample extends Component {

  // 사용
  handler = e => {this.input.focus();}

  // 선언 및 초기화
  render() {
    return <input ref={ref=>this.input=ref} />
  }
}
```

### React.createRef() 사용

- React.createRef()로 생성된 인스턴스를 클래스 멤버 변수에 할당한다
- React element의 ref props에 멤버변수를 전달한다
- React element가 할당된 해당 멤버변수를 사용하기 위해서는 this.멤버변수.current로 접근해야 한다

```jsx
class RefExample extends Component {

  // 선언
  this.input = React.createRef();

  // 사용 (current 필드 사용)
  handler = e => {this.input.current.focus();}

  // 초기화
  render() {
    return <input ref={this.input}/>
  }

}

```

## 클래스 컴포넌트 - 컴포넌트에 ref 사용

- 컴포넌트를 ref 참조하여 컴포넌트 내의 메서드나 멤버 변수를 참조할 수 있다.
- 지양하는 것이 좋다.

```jsx
// App.js
class App extends Component {
 render() {
    return (
      <div>
        {/* ScrollBox 컴포넌트를 ref로 참조 */}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
        <button
          onClick={() => {
            this.scrollBox.navigateToBottom();
          }}
        >
          바닥으로
        </button>
      </div>
    );
  }
}

// ScrollBox.js
class ScrollBox extends Componenent {

  // outerBox에 대한 참조를 바탕으로 바닥으로 스크롤하는 이벤트 생성
  navigateToBottom = e => {
    const {clientHeight, scrollHeight} = this.outerBox;
    this.outerBox.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    return (
      <div ref={ref=>this.outerBox = ref}>
        <div />
      </div>
    )
  }
}

```