import { createContext, useReducer } from "react";
export const QuizCompletionContext = createContext();
export const quizCompletionReducer = (state, action) => {
  switch (action.type) {
    case "SET_CORRECT_ANSWER_COUNT":
      return { ...state, correctAnswerCount: action.payload };
    case "SET_QUIZ_SCORE":
      return { ...state, quizScore: action.payload };
    case "RESET_QUIZ_SCORE":
      return {
        correctAnswerCount: 0,
        quizScore: 0,
        allAnswered: {},
      };
    case "UPDATE_ALL_ANSWERED":
      return {
        ...state,
        allAnswered: { ...state.allAnswered, ...action.payload },
      };
    default:
      return state;
  }
};

export const QuizCompletionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizCompletionReducer, {
    correctAnswerCount: 0,
    quizScore: 0,
    allAnswered: {},
  });
  return (
    <QuizCompletionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizCompletionContext.Provider>
  );
};
