import React from "react";
import { useEffect, useState, useContext } from "react";
import QuizCard from "./QuizCard";
import { QuizContext } from "../context/QuizContext";
import QuizInfo from "./QuizInfo";
const QuizCardsDisplay = ({ cards }) => {
  const { answeredCorrectly, dispatch } = useContext(QuizContext);
  const [score, setScore] = useState(0);
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
    dispatch({
      type: "RESET_QUIZ",
      payload: false,
    });
  };
  useEffect(() => {
    console.log("changed");
    dispatch({
      type: "SET_QUIZ_SCORE",
      payload: Math.round((answeredCorrectly / cards.length) * 100),
    });
  }, [answeredCorrectly]);
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
          <button onClick={handleClickRestart}>Create New Quiz</button>
        </div>
        <QuizInfo />
      </div>
    </div>
  );
};

export default QuizCardsDisplay;
