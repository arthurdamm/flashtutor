import React, { useState } from 'react';
import FlashcardOuter from './FlashcardOuter';
import { loadDeck, DECKS } from './lib/datastore.js';

interface Props {}

const Game: React.FunctionComponent<Props> = React.memo(function Game(props) {

  const [flipped, setFlipped] = useState(false);
  
  console.log('GAME()', { deck });
  return (
    <div className="game-component">
      <button onClick={() => setFlipped(!flipped)}>Flipy: {flipped.toString()}</button>
      <FlashcardOuter deck={deck} flipped={flipped} />
    </div>
  );
});

const deck = loadDeck(DECKS.FACE.name);

export default Game;
