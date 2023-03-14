import React from "react";
import { useEffect, useContext, useState } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";
import QuizGuessInput from "./QuizGuessInput";
const QuizCard = ({ card }) => {
  const { allAnswered, correctAnswerCount, dispatch } = useContext(
    QuizCompletionContext
  );
  const [answerGiven, setAnswerGiven] = useState(null);
  // captures result of user entry
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const answered = allAnswered.hasOwnProperty(card.id);

  const handleSelect = (option) => {
    if (option.id == card.correctOption.id) {
      setAnswerGiven(option.text);
      setIsAnswerCorrect(true);
    } else {
      setAnswerGiven(option.text);
      setIsAnswerCorrect(false);
    }
  };

  useEffect(() => {
    if (isAnswerCorrect != null) {
      dispatch({
        type: "UPDATE_ALL_ANSWERED",
        payload: {
          [card.id]: { result: isAnswerCorrect, answerGiven: answerGiven },
        },
      });
    }
    if (isAnswerCorrect == true) {
      dispatch({
        type: "SET_CORRECT_ANSWER_COUNT",
        payload: correctAnswerCount + 1,
      });
    }
  }, [isAnswerCorrect]);

  return (
    <div className={`quiz-card ${answered && "answered"}`}>
      <h1>{card.header}</h1>
      <form className="card-options">
        {card.options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={card.id}
              value={option.id}
              disabled={answered}
              onClick={() => handleSelect(option)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
      </form>

      <QuizGuessInput card={card} />
    </div>
  );
};

export default QuizCard;
