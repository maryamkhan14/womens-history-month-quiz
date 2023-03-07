import { createContext, useReducer } from "react";
export const QuizContext = createContext();
export const quizReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_QUIZ_ACTIVE":
      return { ...state, quizActive: action.payload };
    case "SET_ANSWERED_CORRECTLY":
      return { ...state, answeredCorrectly: action.payload };
    case "SET_CARD_SET":
      return { ...state, cardSet: action.payload };
    case "SET_QUIZ_CATEGORY":
      return { ...state, quizCategory: action.payload };
    case "SET_QUIZ_SIZE":
      return { ...state, quizSize: action.payload };
    case "RESET_QUIZ":
      return {
        cardSet: {},
        quizActive: false,
        quizScore: 0,
        quizCategory: "",
        quizSize: 5,
      };
    default:
      return state;
  }
};

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, {
    cardSet: {},
    quizActive: false,
    answeredCorrectly: 0,
    quizCategory: "",
    quizSize: 5,
  });
  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
