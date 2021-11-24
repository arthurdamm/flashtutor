import React from 'react';
import Card from './Card';
import './styles/card.css';

interface Props {}

const Game: React.FunctionComponent<Props> = React.memo(function Game(props) {
  return (
    <div className="game-component">
      <p>Hello Game!</p>
      <div className="deck">
        <Card id="door1" json={{}} />
        <Card id="door2" json={{}} />
      </div>
    </div>
  );
});

export default Game;
