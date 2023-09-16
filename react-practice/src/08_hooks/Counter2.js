// Reducer 활용
import React, { useReducer } from 'react';

const Counter2 = () => {
  const initialInputStates = {
    input1: 'hello',
    input2: 'my name ',
    input3: 'hungry',
    input4: 'job interview',
  };

  const inputReducers = (state, action) => {
    return { ...state, [action.name]: action.value };
  };

  const [state, dispatch] = useReducer(inputReducers, initialInputStates);

  return (
    <div>
      <input
        name="input1"
        onChange={(e) => dispatch(e.target)}
        value={state.input1}
      />
      <input
        name="input2"
        onChange={(e) => dispatch(e.target)}
        value={state.input2}
      />
      <input
        name="input3"
        onChange={(e) => dispatch(e.target)}
        value={state.input3}
      />
      <input
        name="input4"
        onChange={(e) => dispatch(e.target)}
        value={state.input4}
      />
      <h2>{state.input1}</h2>
      <h2>{state.input2}</h2>
      <h2>{state.input3}</h2>
      <h2>{state.input4}</h2>
    </div>
  );
};

export default Counter2;
