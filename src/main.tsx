import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./main.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root introuvable dans le DOM");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
