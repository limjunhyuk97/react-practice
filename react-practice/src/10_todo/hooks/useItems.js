import { useCallback, useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.target.id, []);
    case 'INSERT_ITEM':
      return [...state, action.target];
    case 'CHANGE_CLICKED_ITEM_STATE':
      return state.map(
        (item) =>
          item.id === action.target.id
            ? { ...action.target, isdone: !action.target.isdone }
            : item,
        [],
      );
  }
};

const useItems = (initialState) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  // item count(갯수) 값의 변경은 리랜더링을 일으켜서는 안된다
  // 따라서 useRef로 지정한다
  const itemCounter = useRef(initialState.length);

  const onInsert = (value) => {
    itemCounter.current += 1;
    dispatcher({
      type: 'INSERT_ITEM',
      target: { id: itemCounter.current, value, isdone: false },
    });
  };

  const onDelete = useCallback(
    (target) => {
      dispatcher({ type: 'DELETE_ITEM', target });
    },
    [state],
  );

  const onClicked = useCallback(
    (target) => {
      dispatcher({ type: 'CHANGE_CLICKED_ITEM_STATE', target });
    },
    [state],
  );

  return [state, onInsert, onDelete, onClicked];
};

export default useItems;
