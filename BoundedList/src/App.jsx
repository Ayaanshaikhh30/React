import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      alert("Count is out of range");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter is out of range");
    }
  };

  const clearValue = () => {
    setCounter(0); 
  };

  return (
    <>
      <h1>REACT + VITE</h1>
      <h2>COUNTER VALUE: {counter}</h2>
      <button onClick={addValue}>ADD VALUE</button>
      <br />
      <button onClick={removeValue}>REMOVE VALUE</button>
      <br />
      <button onClick={clearValue}>CLEAR VALUE</button>
    </>
  );
}

export default App;
