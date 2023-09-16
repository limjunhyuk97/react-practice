// init을 활용하여 reducer 사용시 초기 state 결정
import { useReducer } from 'react';

const Counter3 = () => {
  const init = (value) => {
    return { value };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, value: state.value + 1 };
      case 'DECREMENT':
        return { ...state, value: state.value - 1 };
      case 'RESET':
        return { ...state, ...init(action.payload) };
    }
  };

  const [state, dispatch] = useReducer(reducer, { value: 12 });

  return (
    <div>
      {state.value}{' '}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET', payload: 0 })}>
        reset
      </button>
    </div>
  );
};

export default Counter3;
