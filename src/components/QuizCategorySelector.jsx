import React from "react";
import { useEffect, useState, useContext } from "react";
import { QuizCreationContext } from "../context/QuizCreationContext";

const QuizCategorySelector = () => {
  const { dispatch } = useContext(QuizCreationContext);
  const [category, setCategory] = useState("firsts");

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(
    () =>
      dispatch({
        type: "SET_QUIZ_CATEGORY",
        payload: category,
      }),
    [category]
  );

  return (
    <div className="category-select">
      <p>Select a category.</p>
      <select
        name="category"
        id="category"
        onChange={(e) => handleSelectChange(e)}
        value={category}
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
