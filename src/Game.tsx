import React from 'react';
import Card from './Card';
import { loadDeck, DECKS } from './lib/datastore.js';

import './styles/card.css';

interface Props {}

const Game: React.FunctionComponent<Props> = React.memo(function Game(props) {
  console.log('GAME()', { deck });
  return (
    <div className="game-component">
      <p>Hello Game!</p>
      <div className="deck">
        <Card id="door1" json={deck[0]} />
        <Card id="door2" json={deck[1]} />
      </div>
    </div>
  );
});

const deck = loadDeck(DECKS.FACE.name);

export default Game;
