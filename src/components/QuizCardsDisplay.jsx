import React from "react";
import { useState, useContext } from "react";
import QuizCard from "./QuizCard";
import { QuizContext } from "../context/QuizContext";
import QuizInfo from "./QuizInfo";
const QuizCardsDisplay = ({ cards }) => {
  console.log("render");
  const { dispatch } = useContext(QuizContext);
  const [cardIndex, setCardIndex] = useState(0);

  const handleClickPrevious = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  const handleClickNext = () => {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };
  const handleClickRestart = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  return (
    <div className="quiz-form-container cards-display">
      <QuizCard key={cards[cardIndex].id} card={cards[cardIndex]} />
      <div className="buttons-info-panel">
        <div className="buttons">
          <button onClick={handleClickPrevious} disabled={cardIndex == 0}>
            Previous
          </button>
          <button
            onClick={handleClickNext}
            disabled={cardIndex == cards.length - 1}
          >
            Next
          </button>
          <button onClick={handleClickRestart}>Done</button>
        </div>
        <QuizInfo length={cards.length} />
      </div>
    </div>
  );
};

export default QuizCardsDisplay;
