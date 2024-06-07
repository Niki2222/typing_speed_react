import React from 'react';

export default function ButtonStart({ onBeginGame }) {
    return (
      <div id='buttonStart'>
        <h1>Check your typing skills in a minute</h1>
        <button onClick={onBeginGame}>Start test</button>
      </div>
    )
  }