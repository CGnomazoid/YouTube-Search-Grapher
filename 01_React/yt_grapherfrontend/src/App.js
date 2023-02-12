import './App.css';
import React, { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayValue(value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Update</button>
      <p>{displayValue}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const upClick = () => {
    setCount(count + 1);
  };
  const downClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <div className="calculatorInput">
        <button onClick={downClick} className="calculatorButtons">-</button>
        <button onClick={upClick} className="calculatorButtons">+</button>
        <button onClick={() => setCount(0)} className="calculatorButtons">Reset</button>
        <button onClick={() => setCount(count * count)} className="calculatorButtons">Squared</button>
        <button onClick={() => setCount(count * 2)} className="calculatorButtons">Double</button>
        <button onClick={() => setCount(count / 2)} className="calculatorButtons">Half</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {MyComponent()}
        {Counter()}
      </header>
    </div>
  );
}

export default App;
