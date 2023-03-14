import React, { useState } from 'react';
import FlashcardOuter from './FlashcardOuter';
import { loadDeck, DECKS } from './lib/datastore.js';
import {UserSettings} from './UserSettings';

interface Props {}

const Game: React.FunctionComponent<Props> = React.memo(function Game(props) {

  const [flipped, setFlipped] = useState(false);

  const userSettings:UserSettings = {
    flipOnClick: true,
    algoType: "leitner",
  }
  
  console.log('GAME()', { deck });
  return (
    <div className="game-component">
      <button onClick={() => setFlipped(!flipped)}>Flipy: {flipped.toString()}</button>
      <FlashcardOuter deck={deck} flipped={flipped} userSettings={userSettings}/>
    </div>
  );
});

const deck = loadDeck(DECKS.FACE.name);

export default Game;
