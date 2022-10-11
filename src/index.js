import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/Styles/index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "./lang/Language";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginContext";

i18n.use(initReactI18next).init({
  resources: Language,
  lng: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "ru",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </Router>
  </React.StrictMode>
);
