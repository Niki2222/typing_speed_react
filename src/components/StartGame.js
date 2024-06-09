import React, { useState, useEffect } from 'react';
import RenderParagraph from './RenderParagraph';
import CalculateCorrectWords from './CalculateCorrectWords';

export default function StartGame({ paragraph, resetGame }) {
  const [timer, setTimer] = useState(20);
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

  return (
    <div id='testing'>
      <h2>Timer: {timer} seconds</h2>
      <h2>Words per minute: {correctWords}</h2>
      <p id='text'>
        <RenderParagraph paragraph={paragraph} inputText={inputText} />
      </p>
      <CalculateCorrectWords 
        paragraph={paragraph} 
        inputText={inputText}
        isTimerStarted={isTimerStarted}
        timer={timer}
        setInputText={setInputText}
        setCorrectWords={setCorrectWords} 
        setIsTimerStarted={setIsTimerStarted}
        />
      <div>
        {timer === 0 && <button onClick={resetGame}>Restart</button>}
      </div>
    </div>
  )
}