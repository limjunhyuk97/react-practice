import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// state 변경 -> component는 다시 생성된다 -> 함수형으로 생성한 컴포넌트는 함수 내부 코드가 다시 동작한다
// state 변경마다 함수형 컴포넌트를 다시 실행시키지 않기 위해서는 useEffect를 사용해야 한다. (api를 호출하거나 할 때)
function App() {
  const [number, setNumber] = useState(0);

  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);

  const onClick = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div>
      <span>{number}</span>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
