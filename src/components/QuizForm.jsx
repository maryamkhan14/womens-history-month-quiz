import React from "react";
import { useEffect, useContext } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";
import {
  generateIconsSet,
  generateFirstsSet,
  generateQuotesSet,
  generateMiscSet,
} from "../utilities/generateCardSet";
import QuizCategorySelector from "./QuizCategorySelector";
import QuizSizeInput from "./QuizSizeInput";

const QuizForm = () => {
  const { quizCategory, quizSize, dispatch } = useContext(
    QuizCompletionContext
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (quizCategory) {
      case "misc":
        dispatch({
          type: "SET_CARD_SET",
          payload: generateMiscSet(quizSize),
        });
        break;
      case "firsts":
        dispatch({
          type: "SET_CARD_SET",
          payload: generateFirstsSet(quizSize),
        });
        break;
      case "icons":
        dispatch({
          type: "SET_CARD_SET",
          payload: generateIconsSet(quizSize),
        });
        break;
      case "quotes":
        dispatch({
          type: "SET_CARD_SET",
          payload: generateQuotesSet(quizSize),
        });
        break;
      default:
        dispatch({
          type: "SET_QUIZ_CATEGORY",
          payload: "firsts",
        });
        dispatch({
          type: "SET_CARD_SET",
          payload: generateFirstsSet(quizSize),
        });
    }
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
