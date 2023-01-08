import React from 'react';

interface Props {
    answer: string
}

const FlashcardBack: React.FunctionComponent<Props> = React.memo(function FlashcardBack(props) {

    const {answer} = props;

    return (<div className="card back">
    <div className="card settings" style={{ display: 'none' }}>
      <div className="flip-on-click">
        <div className="settings-text">flip on click</div>
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
    <div className="card-body card-back">
      <h5 className="card-title">Answer</h5>
      <p className="card-text">{answer}</p>
    </div>
  </div>);
});

export default FlashcardBack;

