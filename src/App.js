import React, { useState } from 'react';
import './App.css';
import StartGame from './components/StartGame';
import ButtonStart from './components/ButtonStart';

function App() {
  const paragraphList = [
    "Avocados are a fruit, not a vegetable. They're technically considered a single-seeded berry, believe it or not. An avocado is a bright green fruit with a large pit and dark leathery skin. It's also known as alligator pear or butter fruit. Avocados are a favorite of the produce section. They're the go-to ingredient for guacamole dips. And they're turning up in everything from salads and wraps to smoothies and even brownies. So what exactly makes this pear-shaped berry (yes, that's right!) such a superfood?",
    "Human teeth are the only part of the body that cannot heal themselves. Teeth are coated in enamel which is not a living tissue. Dental anatomy is a field of anatomy dedicated to the study of tooth structure. The development, appearance, and classification of teeth fall within its field of study, though dental occlusion, or contact between teeth, does not. Dental anatomy is also a taxonomic science as it is concerned with the naming of teeth and their structures. This information serves a practical purpose for dentists, enabling them to easily identify and describe teeth and structures during treatment.",
    "From pineapples, coconuts, and papayas to passion fruit and cherimoyas, tropical fruits open up a new world of flavor with each taste, whether sliced into fruit salads, mixed into cocktails (hello, piña coladas), or added to savory dishes. Lesser-known and more exotic is black sapote, dubbed the 'chocolate pudding fruit' by those in the know. A fruit that draws comparisons to everyone's favorite childhood dessert (or guilty pleasure) is certainly intriguing. We reached out to tropical fruit specialists to learn more about black sapote, including what it looks like, if it really does taste like chocolate pudding, where to find it, and the best ways to enjoy it",
    "It is not physically impossible for pigs to look up at the sky. Pigs, like many animals, have the ability to look upward. They have flexible necks that allow them to tilt their heads back and look at the sky or in any direction they choose. In fact, if you observe pigs in various settings, you may notice them looking up at the sky or at objects above them. The misconception that pigs cannot look up at the sky might stem from their usual behavior of keeping their heads down while foraging for food on the ground. Additionally, the anatomy of a pig's neck may make it look less flexible compared to some other animals, but they are certainly capable of looking up and observing their surroundings.",
    "Istanbul, the largest city in Turkey and the fifth-largest city in the world by population, is considered European, yet it occupies two different continents. One part of Istanbul lies in Europe and the other part lies in Asia. Istanbul’s European part is separated from its Asian part by the Bosphorus strait, a 31-km-long waterway that connects the Black Sea with the Sea of Marmara, and forms a natural boundary between the two continents. Two suspension bridges across the Bosphorus, the Bosphorus Bridge and the Fatih Sultan Mehmet Bridge, also called Bosphorus Bridge II connect the two sides, yet many tourists prefer to visit the European side of Istanbul because of its historical significance. The European side is also the city’s commercial center with banks, stores and corporations and two-third of its population. The Asian side feels more relaxed, with wide boulevards, residential neighbourhoods and fewer hotels and tourist attractions."
  ];
  const [gameOn, setGameOn] = useState(false);
  const [paragraph, setParagraph] = useState("");

  function generateRandomText() {
    setParagraph(paragraphList[Math.floor(Math.random() 
      * paragraphList.length)]);
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
