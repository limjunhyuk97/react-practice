import { Component } from "react";

export default class RDG3_EX3 extends Component {
  state = {
    a: 1,
    b: 2,
  };

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
        <button onClick={handleMinusClick}>제대로 안동작하는 a+2</button>
        <button onClick={moreClick}>함수 선언식 핸들러</button>
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

 ** 이벤트 핸들러는 화살표 함수로 선언되어야 함

  - 위 예시의 moreClick 방식으로 선언할 경우,,,

  - class 정의, ES 모듈 내부는 strict mode로 동작함

  - strict mode에서 참조(수신자;receiver) 없는 일반함수 호출은 bare call로 처리되며, 이때 함수 내 this는 undefined 처리된다.

  - 위 예시의 moreClick은 bareCall로 처리되었으며, 이때 this는 undefined 처리 되기에 에러 발생
 */
