import { Component } from "react";

export default class RDG3_EX3 extends Component {
  state = {
    a: 1,
    b: 2,
  };

  // 이런식으로 정의하면 X
  moreClick() {
    console.log("this : ", this);
    this.setState({ a: this.state.a + 2 });
  }

  render() {
    // 순서보장 X : 1씩 a 증가
    const handlePlusClick = () => {
      this.setState({ a: this.state.a + 1 }); // 이렇게 해도 a 값만 수정 가능 (b값이 날라가지는 않음)
      this.setState({ ...this.state, a: this.state.a + 1 });
    };

    // 순서보장 O : 2씩 증가
    const handleMinusClick = () => {
      // 첫번째 실행
      this.setState(
        (prev, props) => {
          console.log("1번째로 실행한 setState");
          console.log("전달받은 props : ", props); // props 접근 가능
          return { a: prev.a + 1 }; // 이렇게 해도 a 값만 수정 가능
        },
        () => {
          console.log("실행 1 끝, state 값 : ", this.state); // 실행후 호출 (1번째 callback 모두 호출후 마지막 호출됨)
        }
      );

      // 두번째 실행
      this.setState(
        (prev, props) => {
          console.log("2번째로 실행한 setState");
          return { ...prev, a: prev.a + 1 };
        },
        () => {
          console.log("실행 2 끝, state 값 : ", this.state); // 실행후 호출 (1번째 callback 모두 호출후 마지막 호출됨)
        }
      );
    };

    // 이런식으로 정의하면 X
    function moreClick() {
      console.log("this : ", this);
      this.setState({ a: this.state.a + 2 });
    }

    return (
      <div>
        <div>a is {this.state.a}</div>
        <div>b is {this.state.b}</div>
        <button onClick={handlePlusClick}>제대로 안동작하는 a+2</button>
        <button onClick={handleMinusClick}>제대로 동작하는 a+2</button>
        <button onClick={moreClick}>동작 X</button>
        <button onClick={moreClick.bind(this)}>동작 O</button>
        <button onClick={this.moreClick}>동작 X</button>
        <button onClick={this.moreClick.bind(this)}>동작 O</button>
      </div>
    );
  }
}

/*
 ** setState에 의한 state 값 업데이트

  - setState 는 비동기적으로 수행

  - setState 첫번째 인자

    - 목표 상태 전달하는 경우 : 여러번 setState 호출 시 순서 보장 불가능

    - callback으로 전달하는 경우 : 여러번 setState 호출 시 순서 보장 가능 

      - callback 첫번째 인자 : 이전 state 상태

      - callback 두번째 인자 : 전달받은 props 값

  - setState 두번째 인자

    - state값 변경 후 호출 되어야할 callback 정의 가능

    - 이 callback은 한 함수 내에 정의된 setState의 첫번째 callback들이 모두 실행되고 호출되는 것 같음

 ** class 내부는 strict mode를 따르며, 참조가 명확하지 않은 일반함수 호출은 this에 undefined가 들어가게 된다

  - moreClick : this가 undefined

  - moreClick.bind(this) : render 내부 함수 moreClick에 리액트 컴포넌트 객체 this가 바인딩됨

  - this.moreClick : this가 undefined

  - this.moreClick.bind(this) : render 외부 메서드 moreClick에 리액트 컴포넌트 객체 this가 바인딩됨
 */
