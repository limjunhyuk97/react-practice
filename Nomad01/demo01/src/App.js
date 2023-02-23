import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(true);

  const Hello = () => {
    // 컴포넌트가 랜더링된 뒤 어떤 일을 수행해야 하는지 알려준다. 즉, DOM 업데이트 수행 이후 전달한 함수를 실행시킨다.
    // 각각의 effect는 특정한 랜더링에 속하게 된다.
    useEffect(() => {
      console.log("I'm Here! Created!");

      // React가 컴포넌트의 마운트가 해제되는 때에 clean-up을 실행시킨다.
      // 각각의 effect는 특정한 랜더링에 속하게 된다. 그러므로 다음 차례의 랜더링을 실행하기 전에 이전의 랜더링에서 파생된 effect를 정리하기 위해 useEffect가 return 하는 clean-up 함수를 사용할 수 있다.
      return () => {
        console.log("I'm Out! Destroyed!");
      };
    }, []);
    return <h1>Hello</h1>;
  };

  // 컴포넌트가 사라지면, 컴포넌트는 destroy되어 DOM에서도 실제로 사라진다.
  return (
    <div
      onClick={() => {
        setShowing((prev) => !prev);
      }}
    >
      <button>{!showing ? "show it" : "hide it"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
