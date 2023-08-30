# React 컴포넌트 반복

- map 메서드를 활용 : 배열 내 데이터 -> 컴포넌트

## map 메서드 활용

- map 메서드 활용
- 기존 배열을 (DOM / 컴포넌트 element) 을 요소로 갖는 배열로 변경한 뒤 랜더링시킨다.
- 하지만 아래와 같이 랜더링할 경우 **key prop이 없다는 경고**가 발생한다.

```jsx
import { Component } from "react";

class Iteration extends Component {
 render() {
  const fruits = ["사과", "배", "참외", "토마토", "귤"];

  return (
   <ul>
    {fruits.map((fruit) => (
     <li>{fruit}</li>
    ))}
   </ul>
  );
 }
}
```

## key

- key 값은 VDOM에서의 변화를 비교하기 위해 사용된다.
  - key 값 X : 컴포넌트 리스트를 순차적으로 비교
  - key 값 O : key 값으로 컴포넌트를 매치시켜서 더 빠르게 비교
- key 값은 고유한 값이어야 한다.
  - 고유한 값을 할당할 수 있으면 할당
  - 고유한 값으로 할당된 것이 없으면, 리스트의 인덱스 값으로 할당
- **인덱스 값을 key 값으로 사용하면 배열 변경 시 효율적인 리랜더링이 불가능할 수 있다.**

```jsx
class Iteration extends Component {
 render() {
  const fruits = ["사과", "배", "참외", "토마토", "귤"];

  return (
   <ul>
    {/* index 값을 key 값으로 전달 */}
    {fruits.map((fruit, idx) => (
     <li key={idx}>{fruit}</li>
    ))}
   </ul>
  );
 }
}
```

## key를 인덱스를 사용하면 안좋은 이류

- **결론 : 성능저하 / 어플리케이션 오류의 원인이 된다**
- react는 key값을 바탕으로 VDOM의 변화 발생 시, 특정 element가 같은 element인지 다른 element인지를 판단한다.
- 이때, index를 key로 사용할 경우, 요소에 대한 추가 / 삭제가 발생할 때 각 element가 갖고 있는 key 값이 달라진다.
- 이는 **오류의 원인**이 되거나, **react가 특정 리스트 element들을 다시 그리게 만드는 성능저하의 원인**이 된다.

### 인덱스를 사용할 경우

- 아래의 예시의 경우 element가 삭제될 때마다 react가 요소들을 다시 그려준다.
- 때문에 비효율성을 야기시키며, 오류를 일으킬 수도 있다.
- console 창에서 확인해본 결과 delete 시마다 요소 수 만큼의 initialHook 호출이 있음을 확인했다.

```jsx
class Iteration extends Component {
	state = {
		fruits: ["사과", "배", "참외", "토마토", "귤"],
	};

	deleteHandler = (idx) => {
		console.log(idx);
		return (e) => {
			this.setState({
				...this.state,
				fruits: this.state.fruits.filter((fruit, i) => i !== idx),
			});
		};
	};

	render() {
		return (
			<ul>
				{this.state.fruits.map((fruit, idx) => (
					<li key={idx} onClick={this.deleteHandler(idx)}>
						{fruit}
					</li>
				))}
			</ul>
		);
	}
}
```

### 고유한 id를 key로 사용할 경우

- react가 요소들을 정확히 비교하여 제거한다.

```jsx
class Iteration extends Component {
	state = {
		fruits: [
			{ key: 0, name: "사과" },
			{ key: 1, name: "배" },
			{ key: 2, name: "참외" },
			{ key: 3, name: "토마토" },
			{ key: 4, name: "귤" },
		],
		id: 5,
	};

	deleteHandler = (id) => {
		return (e) => {
			console.log("clicked");
			this.setState({
				...this.state,
				fruits: this.state.fruits.filter((fruit) => fruit.key !== id),
			});
		};
	};

	render() {
		return (
			<ul>
				{this.state.fruits.map((fruit, idx) => (
					<li key={fruit.key} onClick={this.deleteHandler(fruit.key)}>
						{fruit.name}
					</li>
				))}
			</ul>
		);
	}
}
```