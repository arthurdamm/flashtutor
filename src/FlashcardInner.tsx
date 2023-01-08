import React from 'react';
import FlashcardFront from './FlashcardFront';
import FlashcardBack from './FlashcardBack';

interface Props {
  id: string;
  json: any;
  flipped: boolean;
}

const FlashcardInner: React.FunctionComponent<Props> = React.memo(function FlashcardInner(props) {
  const { id, json, flipped } = props;
  const {answer, color, image, question} = json;


  console.log({ json });

  return (
    <div
      className={`flippable FlashcardInner${flipped ? " flip" : ""}`}
      id={id}
      //   ontouchstart="this.classNameList.toggle('hover');"
    >
      <FlashcardFront image={image} color={color} question={question} />
      <FlashcardBack answer={answer} />


        <div className="card fail"></div>
        
    </div>
  );
});

export default FlashcardInner;
