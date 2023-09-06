import React, { Component } from 'react';

// 04_event
import EventPractice from './04_event/EventPractice';
import EventPracticeFunctional from './04_event/EventPracticeFunctional';
// 05_ref
import Validation from './05_ref/Validation';
import ScrollBox from './05_ref/ScrollBox';
// 06_repitition
import IterationIdx from './06_repetition/IterationIdx';
import IterationKey from './06_repetition/IterationKey';
// 07_lifecycle
import LifeCycleSample from './07_lifecycle/LifeCycleSample';
import ErrorBoundary from './07_lifecycle/ErrorBoundary';

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

export default App;
