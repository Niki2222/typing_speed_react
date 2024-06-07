import React, { useState, useEffect } from 'react';

export default function StartGame({ paragraph, resetGame }) {
  const [timer, setTimer] = useState(30);
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

  function handleInputChange(e) {
    if (!isTimerStarted) {
      setIsTimerStarted(true);
    }
    setInputText(e.target.value);
    calculateCorrectWords(e.target.value);
  }

  function calculateCorrectWords(text) {
    const words = text.split(' ');
    const paragraphWords = paragraph.split(' ');
    let correctCount = 0;

    words.forEach((word, index) => {
      if (word === paragraphWords[index]) {
        ++correctCount;
      }
    });

    setCorrectWords(correctCount);
  }

  function renderParagraph() {
    return paragraph.split(' ').map((word, wordIndex) => {
      return (
        <span key={wordIndex}>
          {word.split('').map((char, charIndex) => {
            let charColor = 'black';
            if (wordIndex < inputText.split(' ').length) {
              const inputWord = inputText.split(' ')[wordIndex];
              if (charIndex < inputWord.length) {
                charColor = char === inputWord[charIndex] ? 'green' : 'red';
              }
            }
            return (
              <span key={charIndex} style={{ color: charColor }}>{char}</span>
            )
          })}
          <span> </span>
        </span>
      );
    });
  }

  return (
    <div id='testing'>
      <h2>Timer: {timer} seconds</h2>
      <h2>Words per minute: {correctWords}</h2>
      <p id='text'>{renderParagraph()}</p>
      <textarea 
        cols="60" 
        rows="10" 
        value={inputText}
        onChange={handleInputChange}
        disabled={timer === 0}
        autoFocus
      ></textarea>
      <div>
        {timer === 0 && <button onClick={resetGame}>Restart</button>}
      </div>
    </div>
  )
}