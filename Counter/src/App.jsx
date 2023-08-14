import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementCountA = () => {
    setCountA(countA + 1);
  };

  const incrementCountB = () => {
    setCountB(countB + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dishwasher Counter</h1>
        <div>
          <button onClick={incrementCountA}>Michael: {countA}</button>
          <button onClick={incrementCountB}>Brianna: {countB}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
