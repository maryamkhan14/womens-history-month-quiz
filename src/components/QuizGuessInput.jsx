import React from "react";
import { useState } from "react";
const QuizGuessInput = ({ correctAnswer, answered }) => {
  const [guess, setGuess] = useState("");
  const [guessedCorrectly, setGuessedCorrectly] = useState(null);
  const checkGuess = () => {
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setGuessedCorrectly(true);
    } else {
      setGuessedCorrectly(false);
    }
  };

  const handleGuessSubmit = () => checkGuess();
  return (
    <div className={`quiz-guess ${answered && "answered"}`}>
      <label htmlFor="guess">Feel free to enter a guess here:</label>
      <div className="input-area">
        <input
          type="text"
          id="guess"
          name="guess"
          value={guess}
          className={`${guessedCorrectly && "correct-guess"} ${
            guessedCorrectly === false && "incorrect-guess"
          }`}
          disabled={answered}
          onChange={(e) => setGuess(e.target.value)}
        ></input>
        <button type="submit" onClick={handleGuessSubmit} disabled={answered}>
          Guess
        </button>
      </div>
    </div>
  );
};

export default QuizGuessInput;
