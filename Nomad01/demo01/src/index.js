import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM에 실제 DOM의 root 엘리먼트와 같은 엘리먼트를 생성하고, 거기에 App 컴포넌트를 붙여라
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
