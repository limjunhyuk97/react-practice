import React from 'react';

// props를 인수로 쓰지 않고 구조분해 할당을 사용하여 history를 받기
const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {/* array의 element들을 jsx element로 바꾼다. */}
      {history.map((_, move) => {
        return (
          // list 아래의 element들이 모두 unique해야 하므로 key에 값을 할당해야 한다.
          // react에서 모든 element들을 쫓고있음
          <li key={move}>
            <button
              // inline style의 적용
              style={{
                fontWeight: move === currentMove ? `bold` : `normal`,
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? `Go to game start` : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
