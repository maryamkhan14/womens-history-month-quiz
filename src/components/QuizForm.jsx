import React from "react";
import {
  generateIconsSet,
  generateFirstsSet,
  generateQuotesSet,
  generateMiscSet,
} from "../utilities/generateCardSet";
import QuizCategorySelector from "./QuizCategorySelector";
import QuizSizeInput from "./QuizSizeInput";
const QuizForm = () => {
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
        <QuizCategorySelector />
        <QuizSizeInput />
      </div>
    </form>
  );
};

export default QuizForm;
