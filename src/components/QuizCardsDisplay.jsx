import React from "react";
import { useEffect, useState, useContext } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";
import { QuizContext } from "../context/QuizContext";
import QuizCard from "./QuizCard";
import QuizInfo from "./QuizInfo";
import QuizResult from "./QuizResult";

const QuizCardsDisplay = ({ cards }) => {
  const { dispatch: quizDispatch } = useContext(QuizContext);
  const [side, setSide] = useState("front");
  const {
    allAnswered,
    correctAnswerCount,
    dispatch: quizCompletionDispatch,
  } = useContext(QuizCompletionContext);

  const [cardIndex, setCardIndex] = useState(0);
  const handleCardClick = () => {
    if (allAnswered.hasOwnProperty(cards[cardIndex].id)) {
      if (side == "front") {
        setSide("back");
      } else {
        setSide("front");
      }
    }
  };

  useEffect(() => {
    if (allAnswered.hasOwnProperty(cards[cardIndex].id)) {
      setSide("back");
    }
  }, [allAnswered]);

  const handleClickPrevious = () => {
    setSide("front");
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  const handleClickNext = () => {
    setSide("front");
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  const handleClickRestart = () => {
    quizDispatch({ type: "RESET_QUIZ", payload: null });
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
    <div className="quiz-form-container">
      <QuizInfo />
      <div className="cards-display" onClick={handleCardClick}>
        {side == "front" && <QuizCard card={cards[cardIndex]} />}
        {side == "back" && (
          <QuizResult
            result={allAnswered[cards[cardIndex].id].result}
            card={cards[cardIndex]}
            answerGiven={allAnswered[cards[cardIndex].id].answerGiven}
          />
        )}
      </div>

      <p>
        Tip: After answering, simply click anywhere in the question area to
        switch between the question and its answer!
      </p>
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
