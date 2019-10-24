import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [count1, setCount1] = useState(
    parseInt(localStorage.getItem('count1') || '0') || 0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    localStorage.setItem('count1', "" + count1)
  }, [count1]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You find yourself in a dark room...
        </p>
      </header>
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
    </div>
  );
}

export default App;
