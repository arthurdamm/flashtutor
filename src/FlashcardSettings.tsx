import React from 'react';

interface Props {
    
};

const FlashcardSettings: React.FunctionComponent<Props> = React.memo(function FlashcardSettings(props) {
    return (
    <div className="settings" style={{ display: 'none' }}>
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
    </div>);
});

export default FlashcardSettings;