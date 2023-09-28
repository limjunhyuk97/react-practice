import { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return state.reduce(
        (acc, item) =>
          item.id === action.target.id ? [...acc] : [...acc, item],
        [],
      );
    case 'INSERT_ITEM':
      return [...state, action.target];
    case 'CHANGE_CLICKED_ITEM_STATE':
      return state.reduce(
        (acc, item) =>
          item.id === action.target.id
            ? [...acc, { ...action.target, isdone: !action.target.isdone }]
            : [...acc, item],
        [],
      );
  }
};

const useItems = (initialState) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  const itemCounter = useRef(initialState.length);

  const onInsert = (value) => {
    itemCounter.current += 1;
    dispatcher({
      type: 'INSERT_ITEM',
      target: { id: itemCounter.current, value, isdone: false },
    });
  };

  const onDelete = (target) => {
    dispatcher({ type: 'DELETE_ITEM', target });
  };

  const onClicked = (target) => {
    dispatcher({ type: 'CHANGE_CLICKED_ITEM_STATE', target });
  };

  return [state, onInsert, onDelete, onClicked];
};

export default useItems;
