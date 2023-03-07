import React from "react";
import { useEffect, useState, useContext } from "react";
import QuizCard from "./QuizCard";
import { QuizCompletionContext } from "../context/QuizCompletionContext";
import QuizInfo from "./QuizInfo";
import { QuizContext } from "../context/QuizContext";
const QuizCardsDisplay = ({ cards }) => {
  const { dispatch: quizDispatch } = useContext(QuizContext);
  const { correctAnswerCount, dispatch: quizCompletionDispatch } = useContext(
    QuizCompletionContext
  );
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
    quizDispatch({ type: "RESET_QUIZ_SCORE", payload: null });
    quizCompletionDispatch({
      type: "RESET_QUIZ",
      payload: null,
    });
  };
  useEffect(() => {
    quizCompletionDispatch({
      type: "SET_QUIZ_SCORE",
      payload: Math.round((correctAnswerCount / cards.length) * 100),
    });
  }, [correctAnswerCount]);
  return (
    <div className="quiz-form-container cards-display">
      <QuizInfo />
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
      </div>
    </div>
  );
};

export default QuizCardsDisplay;
