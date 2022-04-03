import React from 'react';
import '../styles/root.scss';

const Square = props => {
  console.log(props.children);
  return (
    <button type="button" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
