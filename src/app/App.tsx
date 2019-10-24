import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

interface Action {
  type: string;
}

interface AppState {
  count1: number;
  count2: number;
}

const initialState: AppState = {
  count1: 0,
  count2: 0,
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'INCREMENT_ACTION_ONE':
      return {
        ...state,
        count1: state.count1 + 1,
      }
    case 'INCREMENT_ACTION_TWO':
      return {
        ...state,
        count2: state.count2 + 1,
      }
    case 'RESET':
      return { ...initialState }
    default:
      return state;
  }
}

const App: React.FC = () => {
  const loadedData = localStorage.getItem('gameState');

  const [state, dispatch] = useReducer(reducer, loadedData ? JSON.parse(loadedData) : initialState);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(state))
  }, [state]);

  const resetData = () => {
    localStorage.clear();
    dispatch({ type: 'RESET' });
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
          <p>You have performed action one {state.count1} times.</p>
          <button onClick={() => dispatch({ type: 'INCREMENT_ACTION_ONE' })}>Action One</button>
        </div>
        {state.count1 >= 5 &&
          <div>
            <p>A new event has occured!</p>
            <p>You have performed action two {state.count2} times.</p>
            <button onClick={() => dispatch({ type: 'INCREMENT_ACTION_TWO' })}>Action Two</button>
          </div>
        }
        {state.count2 >= 5 &&
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
