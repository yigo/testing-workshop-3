import { useState } from "react";
import './App.css';
import { sum } from "./sum";


function App({ name = "new user" }) {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");

  const handleSum = () => {
    setResult(sum(Number(valueA),Number(valueB)));
  }

  return (
    <div className="App">
      <div>Hello {name}</div>
      <input name="valueA" placeholder="value a" value={valueA} onChange={(e) => setValueA(e.target.value)} />
      <input name="valueB" placeholder="value b" value={valueB} onChange={(e) => setValueB(e.target.value)} />
      <button name="sum" onClick={handleSum}>sum</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
