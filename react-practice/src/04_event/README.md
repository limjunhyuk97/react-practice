# Event 처리

## Synthetic Event

- JSX Element에서 발생한 event를 감지하는 eventHandler가 인자로 받아들이는 것은 **SyntheticEvent**
- **네이티브 이벤트를 감싸는 객체** (순수 JS HTML event를 다룰 때와 똑같이 사용 가능)
- 이벤트가 끝나고 나면 초기화 되며, 이후로는 정보를 참조할 수 없음

## 클래스형 컴포넌트

### 이벤트리스너로 바로 정의

```jsx
<input onChange={e => this.setState({message : e.target.value})}>
```

### 프로토타입 메서드로 정의 (생성자에서 this 바인딩)

- 프로토타입 메서드로 정의할 경우 이벤트 핸들러가 HTML Element에 부착되는 순간 this 바인딩이 끊어짐
- 따라서 생성자에서 추가적인 this 바인딩이 요구됨

```jsx
class Component01 extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler(e) {}
}
```

### 프로토타입 메서드로 정의 (Property Initializer Syntax)

- 생성자에서 this 바인딩을 추가하는 것이 귀찮다면, 화살표 함수 문법을 사용한 Property Initializer Syntax 사용가능

```jsx
class Component01 extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler (e) {};

  handler2 = e => {};
}
```

### 하나의 핸들러로 여러 state 처리

- 여러 개의 input(textarea)과 그에 대한 state를 처리해야할 수도 있음
- 이와 같은 경우 name 값 속성을 적극적으로 사용하면 이점을 얻을 수 있음

```jsx
class Component01 extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  state = {
    message : "",
    title : ""
  }

  handler (e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  render() {
    return (
      <input name="message" onChange={hanlder} />
      <input name="title" onChange={handler} />
    )
  }
}
```

## 함수형 컴포넌트

- useState 라는 hook 을 활용하여 state 값 관리가 가능하다

```jsx
import { useState } from "react";

const EventPracticeFunctional = () => {
	const [form, setForm] = useState({ message: "", title: "" });

	const changeHandler = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<input
				type="text"
				name="message"
				value={form.message}
				onChange={changeHandler}
			/>
			<input
				type="text"
				name="title"
				value={form.title}
				onChange={changeHandler}
			/>
			<h2>{form.message}</h2>
			<h2>{form.title}</h2>
		</div>
	);
};

export default EventPracticeFunctional;

```