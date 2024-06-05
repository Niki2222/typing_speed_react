import React, { useState, useEffect } from 'react';
import './App.css';

function StartGame({ paragraph, resetGame }) {
  const [timer, setTimer] = useState(10);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);

  useEffect(() => {
    let interval;
    if (isTimerStarted) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerStarted]);

  useEffect(() => {
    if (timer === 0) {
      setWordsPerMinute(correctWords);
    }
  }, [timer, correctWords]);

  function handleInputChange(e) {
    if (!isTimerStarted) {
      setIsTimerStarted(true);
    }
    setInputText(e.target.value);
    calculateCorrectWords(e.target.value);
  }

  function calculateCorrectWords(text) {
    const words = text.trim().split(' ');
    const paragraphWords = paragraph.split(' ');
    let correctCount = 0;

    words.forEach((word, index) => {
      if (index < paragraphWords.length) {
        if (word === paragraphWords[index]) {
          correctCount++;
        }
      }
    });

    setCorrectWords(correctCount);
  }

  function renderParagraph() {
    return paragraph.split(' ').map((word, wordIndex) => {
      return (
        <span key={wordIndex}>
          {word.split('').map((char, charIndex) => {
            let color = 'black';
            if (wordIndex < inputText.split(' ').length) {
              const inputWord = inputText.split(' ')[wordIndex];
              if (charIndex < inputWord.length) {
                color = char === inputWord[charIndex] ? 'green' : 'red';
              }
            }
            return <span key={charIndex} style={{ color: color }}>{char}</span>;
          })}
          <span> </span>
        </span>
      );
    });
  }

  return (
    <div id='testing'>
      <h2>Timer: {timer} sec</h2>
      <h2>Words per minute: {timer === 0 ? wordsPerMinute : 0}</h2>
      <p id='text'>{renderParagraph()}</p>
      <textarea 
        id="textarea" 
        cols="60" 
        rows="10" 
        value={inputText}
        onChange={handleInputChange}
        disabled={timer === 0}
      ></textarea>
      <div>
        {timer === 0 && <button onClick={resetGame}>Restart</button>}
      </div>
    </div>
  )
}

function ButtonStart({ onBeginGame }) {
  return (
    <div id='buttonStart'>
      <h1>Check your typing skills in a minute</h1>
      <button onClick={onBeginGame}>Start test</button>
    </div>
  )
}

function App() {
  const paragraphList = [
    "Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not. An avocado is a bright green fruit with a large pit and dark leathery skin. It's also known as alligator pear or butter fruit. Avocados are a favorite of the produce section. They're the go-to ingredient for guacamole dips. And they're turning up in everything from salads and wraps to smoothies and even brownies. So what exactly makes this pear-shaped berry (yes, that's right!) such a superfood?",
    "Human teeth are the only part of the body that cannot heal themselves. Teeth are coated in enamel which is not a living tissue. Dental anatomy is a field of anatomy dedicated to the study of tooth structure. The development, appearance, and classification of teeth fall within its field of study, though dental occlusion, or contact between teeth, does not. Dental anatomy is also a taxonomic science as it is concerned with the naming of teeth and their structures. This information serves a practical purpose for dentists, enabling them to easily identify and describe teeth and structures during treatment.",
    "There's a fruit that tastes like chocolate pudding. Can we get in on this? Apparently, there's a fruit native to Central and South America called black sapote that tastes like chocolate and sweet custard.",
    "Pigs can't look up into the sky. The anatomy of their spine and neck muscles limits their movement and restricts their head from being able to look upwards.",
    "One part of Istanbul is in Europe and the other is in Asia. Part of it neighbours Greece and Bulgaria, therefore sitting in Europe and the other part neighbours Syria, Iran, and Iraq beyond Turkey’s borders, therefore classing as Asia. The Bosphorus Strait runs between them - a narrow body of water that connects the Black Sea to the Mediterranean Sea via the Sea of Marmara."
  ];
  const [gameOn, setGameOn] = useState(false);
  const [paragraph, setParagraph] = useState("");

  function generateRandomText() {
    setParagraph(paragraphList[Math.floor(Math.random() * paragraphList.length)]);
  }
  
  function onBeginGame() {
    generateRandomText();
    setGameOn(true);
  }

  function resetGame() {
    setGameOn(false);
    setParagraph("");
  }

  return (
    <div className="App">
      {!gameOn && <ButtonStart onBeginGame={onBeginGame}/>}
      {gameOn && <StartGame paragraph={paragraph} resetGame={resetGame} />}
    </div>
  );
}

export default App;
