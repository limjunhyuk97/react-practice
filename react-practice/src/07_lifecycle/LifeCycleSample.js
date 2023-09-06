/* eslint-disable react/prop-types */
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
