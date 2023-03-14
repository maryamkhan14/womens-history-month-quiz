import React from "react";
import { useContext } from "react";

const QuizGuessInput = (card) => {
  return (
    <div className="quiz-guess">
      <label htmlFor="guess">Feel free to enter a guess here:</label>
      <div className="quiz-guess-input input-area">
        <input type="text" id="guess" name="guess"></input>
        <button type="submit">Guess</button>
      </div>
    </div>
  );
};

export default QuizGuessInput;
