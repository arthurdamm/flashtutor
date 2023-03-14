import React from 'react';
import FlashcardFaceBase from './FlashcardFaceBase';

interface Props {
    color: string;
    image: string;
    question: string;
    onGearClick: () => void;

}

const FlashcardFaceFront: React.FunctionComponent<Props> = React.memo(function FlashcardFaceFront(props) {
    const {color, image, question, onGearClick} = props;
    // console.log("FOO", {onGearClick});
    return (
    <FlashcardFaceBase className="FlashcardFaceFront" color={color}>
        {image ? (
        <img className="card-img-top" src={image} alt="card image cap" />
        ) : null}

        <div className="card-body">
            <div className="settings-icon" onClick={onGearClick}></div>
            <h5 className="card-title">Question</h5>
            <p className="card-text">{question}</p>
        </div>
        </FlashcardFaceBase>);
});

export default FlashcardFaceFront;