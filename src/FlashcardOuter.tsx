import React, { useCallback, useState } from 'react';
import FlashcardInner from './FlashcardInner';
import { UserSettings } from './UserSettings';

interface Props {
    deck: object[];
    flipped: boolean;
    userSettings: UserSettings;
}

const FlashcardOuter: React.FunctionComponent<Props> = React.memo(function FlashcardOuter(props) {
    const {deck, userSettings} = props;
    const [showSettings, setShowSettings] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const onGearClick = useCallback(() => {
      /* this delay is related to the flip transition time so the answer side is not seen */
      setTimeout(() => setShowSettings(!showSettings), flipped ? 300 : 0);
      setFlipped(!flipped);
    }, [showSettings, flipped])
    const onCardClick = useCallback(() => setFlipped(!flipped), [flipped]);
    
    return (
    <div className="FlashcardOuter">
      <FlashcardInner id="door1" json={deck[0]} flipped={flipped} onGearClick={onGearClick} showSettings={showSettings} onCardClick={onCardClick}/>
      {/* <Card id="door2" json={deck[1]} flipped={false} /> */}
    </div>);

});

export default FlashcardOuter;