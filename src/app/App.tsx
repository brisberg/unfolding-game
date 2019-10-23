import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You find yourself in a dark room...
        </p>
      </header>
      <div>
        <button>Click Me!</button>
      </div>
    </div>
  );
}

export default App;
