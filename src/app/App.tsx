import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const loadSaveData = (): number[] => {
  return [
    parseInt(localStorage.getItem('count1') || '') || 0,
    parseInt(localStorage.getItem('count2') || '') || 0,
  ]
}

const App: React.FC = () => {
  const initialState = loadSaveData();

  const [count1, setCount1] = useState(initialState[0]);
  const [count2, setCount2] = useState(initialState[1]);

  useEffect(() => {
    localStorage.setItem('count1', String(count1))
  }, [count1]);

  useEffect(() => {
    localStorage.setItem('count2', String(count2))
  }, [count2]);

  const resetData = () => {
    localStorage.clear();
    const appState = loadSaveData();
    setCount1(appState[0]);
    setCount2(appState[1]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You find yourself in a dark room...
        </p>
      </header>
      <div className="App-body">
        <div>
          <p>You have performed action one {count1} times.</p>
          <button onClick={() => setCount1(count1 + 1)}>Action One</button>
        </div>
        {count1 >= 5 &&
          <div>
            <p>A new event has occured!</p>
            <p>You have performed action two {count2} times.</p>
            <button onClick={() => setCount2(count2 + 1)}>Action Two</button>
          </div>
        }
        {count2 >= 5 &&
          <div>
            <p>That's all for now folks!</p>
          </div>
        }
      </div>
      <div className="App-footer">
        <button onClick={resetData}>reset</button>
      </div>
    </div>
  );
}

export default App;
