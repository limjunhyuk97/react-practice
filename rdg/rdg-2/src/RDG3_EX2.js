import { Component } from "react";

export default class App extends Component {
  // state 정의 (1)
  state = { num: 0 };

  constructor(props) {
    // 호출하지 않으면 Must call super constructor in derived class 에러 발생
    // props 정의
    super(props);

    // state 정의 (2)
    this.state = { num: 1 };
  }

  render() {
    return (
      <div>
        <div>number : {this.state.num}</div> <div>a : {this.props.a}</div>
      </div>
    );
  }
}

/*
* 클래스형 컴포넌트로 state 받아오기
  - constructor 내 super 실행 -> class 내부 영역에 정의된 state 필드 평가 -> constructor 내에 정의된 state 평가 
*/
