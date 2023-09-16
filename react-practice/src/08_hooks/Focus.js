import { useRef, useState } from 'react';

const Focus = () => {
  const [values, setValues] = useState(0);
  const valueInRef = useRef(0);
  let valueInVariable = 0;

  return (
    <div>
      <div>
        {values}
        <button onClick={(e) => setValues(values + 1)}>+</button>
        <button onClick={(e) => setValues(values - 1)}>-</button>
      </div>
      <div>
        {valueInRef.current}
        <button
          onClick={(e) => {
            valueInRef.current += 1;
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            valueInRef.current -= 1;
          }}
        >
          -
        </button>
      </div>
      <div>
        {valueInVariable}
        <button
          onClick={(e) => {
            valueInVariable += 1;
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            valueInVariable -= 1;
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Focus;
