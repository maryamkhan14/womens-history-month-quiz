import React from "react";
import { useContext } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";

const QuizCategorySelector = () => {
  const { dispatch } = useContext(QuizCompletionContext);
  const handleSelectChange = (e) => {
    dispatch({
      type: "SET_QUIZ_CATEGORY",
      payload: e.target.value,
    });
  };
  return (
    <div className="category-select">
      <p>Select a category.</p>
      <select
        name="category"
        id="category"
        onChange={(e) => handleSelectChange(e)}
      >
        <option value="firsts">Recognize the trailblazer.</option>
        <option value="icons">Identify the icon.</option>
        <option value="quotes">Know who said it.</option>
        <option value="misc">Randomize!</option>
      </select>
    </div>
  );
};

export default QuizCategorySelector;
