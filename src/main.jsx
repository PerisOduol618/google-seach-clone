import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import {ResultsContextProvider} from './context/ResultsContextProvider'
ReactDOM.createRoot(document.getElementById("root")).render(
  <ResultsContextProvider>
  <Router>
    <App />
  </Router>
  </ResultsContextProvider>
);
