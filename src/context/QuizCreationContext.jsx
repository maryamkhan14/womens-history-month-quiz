import { createContext, useReducer } from "react";
export const QuizCreationContext = createContext();
export const quizCreationReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ_CATEGORY":
      return { ...state, quizCategory: action.payload };
    case "SET_QUIZ_SIZE":
      return { ...state, quizSize: action.payload };
    case "RESET_QUIZ_OPTIONS":
      return {
        quizCategory: "",
        quizSize: 5,
      };
    default:
      return state;
  }
};

export const QuizCreationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizCreationReducer, {
    quizCategory: "",
    quizSize: 5,
  });
  return (
    <QuizCreationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizCreationContext.Provider>
  );
};
