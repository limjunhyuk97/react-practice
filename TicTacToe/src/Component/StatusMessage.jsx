import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // .every() : 배열 안의 모든 요소가 callback 판별함수 통과하는지 확인
  // 현재 board가 가득찼다면?
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    // winner가 있으면 winner를 출력
    // winner가 없으면 NextPlayer를 출력
    <div className="status-message">
      {/* 좀 까리한 코드인듯? */}
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is {/* Dynamic className allocation */}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          {/* and 뒤로 띄어쓰기 하려면 {' '} 들어가야 함 */}
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
