import React from 'react';

interface Props {
  id: string;
  json: any;
}

const Card: React.FunctionComponent<Props> = React.memo(function Card(props) {
  const { id, json } = props;

  return (
    <div
      className="flippable door"
      id={id}
      //   ontouchstart="this.classNameList.toggle('hover');"
    >
      <div className="card front" style={{ backgroundColor: json.color }}>
        {json.image ? (
          <img className="card-img-top" src={json.image} alt="card image cap" />
        ) : null}

        <div className="card-body">
          <div className="settings-icon"></div>
          <h5 className="card-title">Question</h5>
          <p className="card-text">{json.question}</p>
        </div>

        <div className="card back">
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
          <div className="card-body card-back" style={{ display: 'none' }}>
            <h5 className="card-title">Answer</h5>
            <p className="card-text">{json.answer}</p>
          </div>
        </div>
        <div className="card fail"></div>
      </div>
    </div>
  );
});

export default Card;
