import './App.css';
import React, { useReducer, useState } from 'react';
import { usePrevious } from './MaxsusHooklar/usePrevious';
import { useLocalStorage } from './MaxsusHooklar/useLocalStorage';
function App() {
  const [count, setCount] = useLocalStorage(0);

  const prevCount = usePrevious(count);

  return (
    <>
      <div className="App">
        <h1>Maxsus hooklar</h1>
        <p>count:{count}</p>
        <p>count:{prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Button</button>
      </div>
    </>
  );
}

export default App;
