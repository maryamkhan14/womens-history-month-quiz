import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { QuizCreationContext } from "../context/QuizCreationContext";
import { generateRandomSet } from "../utilities/generateCardSet";
import QuizCategorySelector from "./QuizCategorySelector";
import QuizSizeInput from "./QuizSizeInput";

const QuizForm = () => {
  const { dispatch } = useContext(QuizContext);
  const { quizSize, quizCategory } = useContext(QuizCreationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_CARD_SET",
      payload: generateRandomSet(quizSize, quizCategory),
    });
    dispatch({
      type: "SWITCH_QUIZ_ACTIVE",
      payload: true,
    });
  };
  return (
    <form id="quiz-form" className="quiz-form-container">
      <div className="intro">
        <h1>Happy Women's History Month!</h1>
        <p>
          How much do you know about the women that shaped the world as you know
          it? Take a quick trivia test to find out!
        </p>
      </div>
      <div className="selects">
        <QuizSizeInput />
        <QuizCategorySelector />
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Let's go!
      </button>
    </form>
  );
};

export default QuizForm;
