import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Coin from "./routes/Coin";
import Detail from "./routes/Detail";

// App 컴포넌트에서는 라우팅만 진행한다. (react-router-dom)
// Router : 라우팅을 도와주는 컴포넌트
// Switch : 한번에 하나의 Route만 랜더링 하기 위해 사용 (Switch 사용하지 않으면 한번에 여러 Route 랜더링 가능)
// Route : path에 따라서 랜더링할 컴포넌트 지정
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/currency">
          <Coin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
