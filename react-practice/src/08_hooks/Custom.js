import { useReducer } from 'react';

// custom hooks를 밖으로 뺀다
const inputReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const useInputs = (initialForm) => {
  const [state, dispath] = useReducer(inputReducer, initialForm);

  const onChange = (e) => {
    dispath(e.target);
  };

  return [state, onChange];
};

export default useInputs;
