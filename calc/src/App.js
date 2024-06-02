import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result + e.target.value);
  }
  function clearDisplay() {
    setResult("");
  }
  function calculate() {
    setResult(eval(result).toString);
  }

  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input type="button" value="9" className="button" onClick={handleClick} />
      <input type="button" value="8" className="button" onClick={handleClick} />
      <input type="button" value="7" className="button" onClick={handleClick} />
      <input type="button" value="6" className="button" onClick={handleClick} />
      <input type="button" value="5" className="button" onClick={handleClick} />
      <input type="button" value="4" className="button" onClick={handleClick} />
      <input type="button" value="3" className="button" onClick={handleClick} />
      <input type="button" value="2" className="button" onClick={handleClick} />
      <input type="button" value="1" className="button" onClick={handleClick} />
      <input type="button" value="0" className="button" onClick={handleClick} />

      <input
        type="button"
        value="+"
        className=" button button2"
        onClick={handleClick}
      />
      <input
        type="button"
        value="-"
        className="button button2"
        onClick={handleClick}
      />
      <input
        type="button"
        value="*"
        className="button button2"
        onClick={handleClick}
      />
      <input
        type="button"
        value="%"
        className="button button2"
        onClick={handleClick}
      />
      <input
        type="button"
        value="/"
        className="button button2"
        onClick={handleClick}
      />
      <input
        type="button"
        value="."
        className="button button2"
        onClick={handleClick}
      />

      <input
        type="button"
        value="Clear"
        className=" button button1"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={calculate}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <ul>
        <li>Home</li>
        <li>Counter</li>
        <li>About</li>
      </ul>
    </div>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);
  function handleIncrement() {
    setNumber(number + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <button onClick={handleIncrement}>{number}</button>
    </div>
  );
}
