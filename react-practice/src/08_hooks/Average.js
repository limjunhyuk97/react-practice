import { useState, useMemo } from 'react';

const Average = () => {
  const [input, setInput] = useState(0);
  const [values, setValues] = useState([]);

  const getAverage = (values) => {
    console.log('calculate average');
    return values.length === 0
      ? 'none'
      : values.reduce((acc, val) => acc + val, 0) / values.length;
  };

  const getAverageUsingMemo = useMemo(() => getAverage(values), [values]);

  const handleInput = (e) => {
    setValues([...values, input]);
    setInput(0);
  };

  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          type="number"
        />
        <button onClick={handleInput}>숫자 추가</button>
      </div>
      <ul>
        {values.length === 0 ? (
          <li>no numbers</li>
        ) : (
          values.map((value, idx) => <li key={idx}>{value}</li>)
        )}
      </ul>
      <div>{getAverageUsingMemo}</div>
    </div>
  );
};

export default Average;
