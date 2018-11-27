import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ClockComponent from "./ClockComponent";



function App() {
  return (
    <div className="App">
      <ClockComponent formatType="mins" />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
