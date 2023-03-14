import React from 'react';
import FlashcardFaceBase from './FlashcardFaceBase';

interface Props {
    answer: string
    showSettings: boolean
    onGearClick: () => void;
}

const FlashcardFaceBack: React.FunctionComponent<Props> = React.memo(function FlashcardFaceBack(props) {

    const {answer, showSettings, onGearClick} = props; 

    return (
  <FlashcardFaceBase className="FlashcardFaceBack">
    <div className="FlashcardSettings" style={{ display: showSettings ? 'inline' : 'none' }}>
      <div className="settings-icon" onClick={onGearClick}></div>
      <div className="flip-on-click">
        <div className="">flip on click</div>
        <input className="toggle-flip" type="checkbox" />
      </div>
      <div className="algo-select">
        algorithm type
        <select>
          <option value="leitner">leitner</option>
          <option value="linear">linear</option>
        </select>
      </div>
      <button className="bttn remove-card">remove card</button>
      <button className="bttn save-settings">save settings</button>
    </div>
    <div className="card-icon success">&#9989</div>
    <div className="card-icon fail">&#10060</div>
    <div className="FlashcardFaceBack__answer card-body" style={{ display: !showSettings ? 'inline' : 'none' }}>
      <h5 className="card-title">Answer</h5>
      <p className="card-text">{answer}</p>
    </div>
  </FlashcardFaceBase>);
});

export default FlashcardFaceBack;

