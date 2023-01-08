import React from 'react';

interface Props {
    color: string;
    image: string;
    question: string;

}

const FlashcardFront: React.FunctionComponent<Props> = React.memo(function FlashcardFront(props) {
    const {color, image, question} = props;

    return (
    <div className="card front" style={{ backgroundColor: color }}>
        {image ? (
        <img className="card-img-top" src={image} alt="card image cap" />
        ) : null}

        <div className="card-body">
            <div className="settings-icon"></div>
            <h5 className="card-title">Question</h5>
            <p className="card-text">{question}</p>
        </div>
    </div>);
});

export default FlashcardFront;