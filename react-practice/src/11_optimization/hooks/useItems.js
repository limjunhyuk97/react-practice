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

  //** 기존 상태 변경을 위한 정보를 action에 담아 dispatch로 보내는 방식이 강제됨
  //** 따라서 기존 상태에 대한 직접적 의존을 피할 수 있음
  const onInsert = useCallback((value) => {
    itemCounter.current += 1;
    dispatcher({
      type: 'INSERT_ITEM',
      target: { id: itemCounter.current, value, isdone: false },
    });
  }, []);

  //** 기존 상태 변경을 위한 정보를 action에 담아 dispatch로 보내는 방식이 강제됨
  //** 따라서 기존 상태에 대한 직접적 의존을 피할 수 있음
  const onDelete = useCallback((target) => {
    dispatcher({ type: 'DELETE_ITEM', target });
  }, []);

  //** 기존 상태 변경을 위한 정보를 action에 담아 dispatch로 보내는 방식이 강제됨
  //** 따라서 기존 상태에 대한 직접적 의존을 피할 수 있음
  const onClicked = useCallback((target) => {
    dispatcher({ type: 'CHANGE_CLICKED_ITEM_STATE', target });
  }, []);

  return [state, onInsert, onDelete, onClicked];
};

export default useItems;
