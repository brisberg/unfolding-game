import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  let counter1 = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You find yourself in a dark room...
        </p>
      </header>
      <div>
        <p>You have clicked {counter1} times.</p>
        <button>Click Me!</button>
      </div>
    </div>
  );
}

export default App;
