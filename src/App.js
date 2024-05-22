import { useState } from 'react';
import './App.css';

function StartGame({paragraph, generateRandomText}) {
  // document.getElementById('textarea').focus();
  generateRandomText();
  return (
    <div id='testing'>
      <h2>Timer: 60 sec</h2>
      <h2>Words per minute: 0</h2>
      <p id='text'>{paragraph}</p>
      <textarea id="textarea" cols="60" rows="10"></textarea>
    </div>
  )
}

function ButtonStart({onBeginGame}) {
  function handleClick() {
    onBeginGame();
    document.getElementById('buttonStart').style.display = 'none';
  }

  return (
    <div id='buttonStart'>
      <h1>Check your typing skills in a minute</h1>
      <button onClick={handleClick}>Start test</button>
    </div>
  )
}

function App() {
  const paragraphList = [
    "Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not.",
    "Human teeth are the only part of the body that cannot heal themselves. Teeth are coated in enamel which is not a living tissue.",
    "There's a fruit that tastes like chocolate pudding. Can we get in on this? Apparently, there's a fruit native to Central and South America called black sapote that tastes like chocolate and sweet custard.",
    "Pigs can't look up into the sky. The anatomy of their spine and neck muscles limits their movement and restricts their head from being able to look upwards.",
    "One part of Istanbul is in Europe and the other is in Asia. Part of it neighbours Greece and Bulgaria, therefore sitting in Europe and the other part neighbours Syria, Iran, and Iraq beyond Turkey’s borders, therefore classing as Asia. The Bosphorus Strait runs between them - a narrow body of water that connects the Black Sea to the Mediterranean Sea via the Sea of Marmara."
];
  const [gameOn, setGameOn] = useState(false);
  const [paragraph, setParagraph] = useState([]);
  const [countSec, setCountSec] = useState(60);

  function generateRandomText() {
    setParagraph(paragraphList[Math.floor(Math.random() * paragraphList.length)].toLocaleLowerCase())

    // coloredCharacters = [];
    // textElement.innerHTML = randomText.split('').map(char => '<span>' + char + '</span>').join('');
}
  
  function onBeginGame() {
    setGameOn(true);
  }

  return (
    <div className="App">
      <ButtonStart onBeginGame={onBeginGame}/>
      {gameOn && <StartGame paragraph={paragraph} generateRandomText={generateRandomText}/>}
    </div>
  );
}

export default App;
