import React from 'react';

export default function RenderParagraph({ paragraph, inputText }) {
    return paragraph.split(' ').map((word, wordIndex) => {
        return (
            <span key={wordIndex}>
                {word.split('').map((char, charIndex) => {
                    let charColor = 'black';
                    if (wordIndex < inputText.split(' ').length) {
                        const inputWord = inputText.split(' ')[wordIndex];
                        if (charIndex < inputWord.length) {
                            charColor = char === inputWord[charIndex]
                                ? 'green' : 'red';
                        }
                    }
                    return (
                        <span key={charIndex} style={{ color: charColor }}>
                            {char}
                        </span>
                    )
                })}
                <span> </span>
            </span>
        );
    });
}