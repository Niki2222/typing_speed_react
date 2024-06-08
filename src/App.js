import React, { useEffect, useState } from 'react';
import './App.css';
import StartGame from './components/StartGame';
import ButtonStart from './components/ButtonStart';

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    fetch('https://random-word-api.vercel.app/api?words=100')
      .then((response) => response.json())
        .then((data) => {
          setParagraph(data.join(' '));
        })
  }, []);
  
  function onBeginGame() {
    setGameOn(true);
  }

  function resetGame() {
    setGameOn(false);
    setParagraph("");
  }

  return (
    <div className="App">
      {(gameOn) ? (
        <StartGame paragraph={paragraph} resetGame={resetGame} />
      ) : (
        <ButtonStart onBeginGame={onBeginGame}/>
      )}
    </div>
  );
}

export default App;
