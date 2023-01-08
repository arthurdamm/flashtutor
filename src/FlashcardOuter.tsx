import React from 'react';
import FlashcardInner from './FlashcardInner';

interface Props {
    deck: object[];
    flipped: boolean;
}

const FlashcardOuter: React.FunctionComponent<Props> = React.memo(function FlashcardOuter(props) {
    const {deck, flipped} = props;
    return (<div className="FlashcardOuter">
    <FlashcardInner id="door1" json={deck[0]} flipped={flipped}/>
    {/* <Card id="door2" json={deck[1]} flipped={false} /> */}
  </div>);

});

export default FlashcardOuter;