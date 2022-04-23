import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./store";

function App() {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const [byValue, setByValue] = useState(0);
  const add = () => {
    dispatch(increment(byValue));
  };
  const remove = () => {
    dispatch(decrement(byValue));
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <input
        value={byValue}
        name="value"
        type="number"
        placeholder="Increment/Decrement By"
        onChange={(event) => setByValue(parseInt(event.target.value))}
      />
      <button onClick={add} disabled={byValue === 0}>
        Increment +
      </button>
      <button onClick={remove} disabled={byValue === 0}>
        Decrement -
      </button>
    </div>
  );
}

export default App;
