import React, { useState } from 'react';
import Board from './Component/Board';
import History from './Component/History';
import StatusMessage from './Component/StatusMessage';
import { calculateWinner } from './helpers';

// Component Always return one single element
const App = () => {
  // history를 거슬러 올라가기 위한 설정
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  // curret는 현재 board가 어떤지와, 현재 X인지 O인지에 대한 정보가 들어있다.
  const current = history[currentMove];

  // winner에 대한 연산
  const winner = calculateWinner(current.board);

  // Click에 rerender를 적용하기 위한 function
  // 순서에 따라서 O, X 중 무엇을 도시할 지 결정
  // 또한 이전 history를 반영하여 history에 생성되는 새로운 history들을 뒤에 붙여주면서 수행
  const handleSquareClick = position => {
    // 이미 box에 무언가 들어가 있으면 더 이상 click에 따른 변경을 수행하지 않는다.
    if (current.board[position] || winner) {
      return;
    }

    // History를 set하기 위한 function
    setHistory(prev => {
      const last = prev[prev.length - 1];

      // Board를 last 기준에서 갱신한다.
      const newBoard = last.board.map((square, pos) => {
        // pos와 position이 같은 경우(찍은 위치의 경우에 대해)는 X차례라면 들어있는 값을 X로 바꾼다
        if (pos === position) return last.isXNext ? 'X' : 'O';
        // pos와 position이 다른 경우(찍은 위치가 아닌 경우)는 원래 있던 값을 반환한다.
        return square;
      });

      // 이전 history를 반영하여 state를 갱신한다.
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    // currentMove의 state를 갱신한다.
    setCurrentMove(prev => prev + 1);
  };

  // button을 눌렀을 때 특정 state로 이동하기 위한 function을 정의
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} history={history} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
