import React from 'react';
import Board from './Component/Board';

// Component Always return one single element
const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  );
};

export default App;
