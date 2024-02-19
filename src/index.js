import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
window.addEventListener("load", () => {
  document.getElementById("mainLoading").remove();
  document.getElementById("root").style.display = "block";
});
root.render(<App />);

reportWebVitals();
