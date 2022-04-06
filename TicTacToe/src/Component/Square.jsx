import React from 'react';
import '../styles/root.scss';

const Square = props => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      style={{ fontWeight: props.isWinningSquare ? `bold` : `normal` }}
      className={`square ${props.isWinningSquare ? 'winning' : ''} ${
        props.value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {props.value}
    </button>
  );
};

export default Square;
