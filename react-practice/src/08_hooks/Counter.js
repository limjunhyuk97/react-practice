// Counter.js
import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      {number}
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
};

export default Counter;
