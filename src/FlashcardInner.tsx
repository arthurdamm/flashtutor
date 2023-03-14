import React from "react";
import FlashcardFaceFront from "./FlashcardFaceFront";
import FlashcardFaceBack from "./FlashcardFaceBack";

interface Props {
  id: string;
  json: any;
  flipped: boolean;
  onGearClick: () => void;
  onCardClick: () => void;
  showSettings: boolean;
}

const FlashcardInner: React.FunctionComponent<Props> = React.memo(
  function FlashcardInner(props) {
    const { id, json, flipped, onGearClick, showSettings, onCardClick } = props;
    const { answer, color, image, question } = json;

    // console.log({ json, onGearClick });

    return (
      <div
        className={`flippable FlashcardInner${flipped ? " flip" : ""}`}
        id={id}
        //   ontouchstart="this.classNameList.toggle('hover');"
      >
        <FlashcardFaceFront
          image={image}
          color={color}
          question={question}
          onGearClick={onGearClick}
        />
        <FlashcardFaceBack
          answer={answer}
          showSettings={showSettings}
          onGearClick={onGearClick}
        />

        <div className="card fail"></div>
      </div>
    );
  }
);

export default FlashcardInner;
