import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuizCompletionContextProvider } from "./context/QuizCompletionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizCompletionContextProvider>
      <App />
    </QuizCompletionContextProvider>
  </React.StrictMode>
);
