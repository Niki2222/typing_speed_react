import React, { useEffect, useState } from 'react';
import './App.css';
import GameRunner from './components/GameRunner';

function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    fetch('https://random-word-api.vercel.app/api?words=100')
      .then((response) => response.json())
        .then((data) => {
          setParagraph(data.join(' '));
        })
  }, []);
  
  function handleBeginGame() {
    setIsGameRunning(true);
  }

  function resetGame() {
    setIsGameRunning(false);
    setParagraph("");
  }

  return (
    <div className="App">
      {(!isGameRunning) ? (
        <div>
        <h1>Check your typing skills in a minute</h1>
        <button onClick={handleBeginGame}>Start test</button>
      </div>
      ) : (
        <GameRunner paragraph={paragraph} resetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
