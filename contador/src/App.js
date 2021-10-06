import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { addNumber, subNumber } from "./store/model/contador/actions";

function App() {
  const counter = useSelector((e) => e.counter);
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(addNumber(1));
  };
  const handleClickSub = () => {
    dispatch(subNumber(1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div>
            <h1>{counter}</h1>
          </div>
          <div>
            <button onClick={handleClickAdd}>+</button>
            <button onClick={handleClickSub}>-</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
