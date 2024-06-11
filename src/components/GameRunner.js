import React, { useState } from 'react';
import RenderParagraph from './RenderParagraph';
import WordsPerMinuteInput from './WordsPerMinuteInput';
import Timer from './Timer';

export default function GameRunner({ paragraph, resetGame }) {
    const [timer, setTimer] = useState(60);
    const [inputText, setInputText] = useState("");
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [correctWords, setCorrectWords] = useState(0);

    return (
        <div id='testing'>
            <Timer timer={timer} setTimer={setTimer}
                isTimerStarted={isTimerStarted} />
            <h2>Words per minute: {correctWords}</h2>
            <p>
                <RenderParagraph paragraph={paragraph} inputText={inputText} />
            </p>
            <WordsPerMinuteInput
                paragraph={paragraph} inputText={inputText}
                isTimerStarted={isTimerStarted} timer={timer}
                setInputText={setInputText} setCorrectWords={setCorrectWords}
                setIsTimerStarted={setIsTimerStarted} />
            <div>
                {timer === 0 && <button onClick={resetGame}>Restart</button>}
            </div>
        </div>
    )
}