import { useState, useContext } from "react";
import { QuizContext } from "./context/QuizContext";
import QuizForm from "./components/QuizForm";
import "./App.css";

function App() {
  const { quizActive } = useContext(QuizContext);
  return <div className="App">{!quizActive && <QuizForm />}</div>;
}

export default App;
