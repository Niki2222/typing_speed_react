import { useState } from 'react';
import './App.css';

function StartGame() {
  return (
    <div>
      <h2>Timer: 60 sec</h2>
      <h2>Words per minute: 0</h2>
      <p></p>
      <textarea id="textarea" cols="30" rows="10"></textarea>
    </div>
  )
}

function App() {
  const [gameOn, setGameOn] = useState(false);
  function handleClick(event) {
    return (
      setGameOn(true)
    )
  }
  return (
    <div className="App">
      <h1>Check your typing skills in a minute</h1>
      <button onClick={handleClick}>Start test</button>
      {gameOn && <StartGame />}
    </div>
  );
}

export default App;
