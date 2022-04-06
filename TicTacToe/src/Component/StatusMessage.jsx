import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // .every() : 배열 안의 모든 요소가 callback 판별함수 통과하는지 확인
  // 현재 board가 가득찼다면?
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    // winner가 있으면 winner를 출력
    // winner가 없으면 NextPlayer를 출력
    <h2>
      {/* 좀 까리한 코드인듯? */}
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `Tie game`}
    </h2>
  );
};

export default StatusMessage;
