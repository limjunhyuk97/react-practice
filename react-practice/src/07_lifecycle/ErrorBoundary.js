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
