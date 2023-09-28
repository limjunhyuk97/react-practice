import React, { Component, useCallback, useEffect, useState } from 'react';

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
// 08_hooks
import Counter from './08_hooks/Counter';
import Average from './08_hooks/Average';
import Focus from './08_hooks/Focus';
import Counter2 from './08_hooks/Counter2';
import Counter3 from './08_hooks/Counter3';
import Info from './08_hooks/Info';
import InfoUseEffect from './08_hooks/InfoUseEffect';
import CustomInfo from './08_hooks/CustomInfo';
// 09_styling
import SassComponent from './09_styling/SassComponent';
import CssModuleComponent from './09_styling/CssModuleComponent';
import ClassNameComponent from './09_styling/ClassNameComponent';
import BindClassNameComponent from './09_styling/BindClassNameComponent';
import ScssModuleComponent from './09_styling/ScssModuleComponent';
import StyledComponent from './09_styling/styledComponents/StyledComponent';

const App = ({ id }) => {
  return (
    <div>
      <StyledComponent />
    </div>
  );
};

export default App;
