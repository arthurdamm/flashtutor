import React, { useState } from 'react';
import Card from './Card';
import { loadDeck, DECKS } from './lib/datastore.js';

interface Props {}

const Game: React.FunctionComponent<Props> = React.memo(function Game(props) {

  const [flipped, setFlipped] = useState(false);
  
  console.log('GAME()', { deck });
  return (
    <div className="game-component">
      <button onClick={() => setFlipped(!flipped)}>Flip: {flipped.toString()}</button>
      <div className="deck">
        <Card id="door1" json={deck[0]} flipped={flipped}/>
        {/* <Card id="door2" json={deck[1]} flipped={false} /> */}
      </div>
    </div>
  );
});

const deck = loadDeck(DECKS.FACE.name);

export default Game;
