import PropTypes from "prop-types";
import { Component } from "react";

class App extends Component {
  static defaultProps = {
    name: "이름",
    num: "12",
  };

  static propTypes = {
    name: PropTypes.string,
    num: PropTypes.number.isRequired,
  };

  render() {
    const { name, num } = this.props;
    return (
      <div>
        <div>{name} is name</div>
        <div>{num} is num</div>
      </div>
    );
  }
}

export default App;

/*
* 클래스형 컴포넌트로 Props 받아오는 예시
  - render 함수 에서 this.props 로 props 받아옴
  - static 변수 defaultProps, propsType을 통해서 props의 타입에 대한 정의 가능
*/
